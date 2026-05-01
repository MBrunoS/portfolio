import { WideCard } from "@/components/Cards/Wide";
import { createClient } from "@/prismicio";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslation } from "../i18n";
import Link from "next/link";
import { Heading } from "@/components/Heading";
import { asText } from "@prismicio/client/richtext";
import { getEstimatedReadingTimeInMinutes } from "@/utils/reading-time";
import { PrismicNextImage } from "@prismicio/next";

type Params = { params: Promise<{ locale: string }> };

export default async function Blog({ params }: Params) {
  const { locale } = await params;
  const client = createClient();
  const page = await client
    .getByType("post", {
      lang: locale,
      orderings: [
        {
          field: "document.first_publication_date",
          direction: "desc",
        },
      ],
      fetchOptions: {
        cache: "no-store",
        next: { tags: ["prismic", "posts"] },
      },
    })
    .catch(() => notFound());

  const readingTimes: Record<string, number> = {};

  for (const post of page.results) {
    const postText = asText(post.data.content);
    const estimatedReadingTime = getEstimatedReadingTimeInMinutes(postText);
    readingTimes[post.uid] = estimatedReadingTime;
  }

  return (
    <section className="flex flex-col items-center max-w-5xl px-5 pt-10 mx-auto gap-y-4 md:gap-y-6 lg:gap-y-8">
      <Heading className="mb-4">Blog</Heading>

      {page.results.map((post) => (
        <WideCard
          renderComponent={(props) => (
            <PrismicNextImage field={post.data.cover} {...props} />
          )}
          img={{
            src: post.data.cover.url!,
            alt: post.data.cover.alt!,
          }}
          key={post.uid}
        >
          <>
            <h2 className="mb-2 text-2xl font-bold md:text-3xl text-primary-color hover:underline">
              <Link href={`/blog/${post.uid}`}>{post.data.title}</Link>
            </h2>

            <p className="text-sm text-gray-400 md:text-base">
              <time dateTime={post.first_publication_date}>
                {new Date(post.first_publication_date).toLocaleDateString(
                  locale,
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </time>
              {" • "}
              {readingTimes[post.uid]} min
            </p>

            <p className="mt-2 text-sm line-clamp-2">{post.data.summary}</p>
          </>
        </WideCard>
      ))}
    </section>
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslation(locale);

  return {
    title: t.blog.meta_title,
    description: t.blog.meta_description,
  };
}

export async function generateStaticParams() {
  return [{ locale: "en-US" }, { locale: "pt-BR" }];
}
