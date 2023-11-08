import { Metadata } from "next";
import { notFound } from "next/navigation";
import { createClient } from "@/prismicio";
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { components } from "@/lib/prismic/components";

type Params = { locale: string; uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("post", params.uid, { lang: params.locale })
    .catch(() => notFound());

  const date = new Date(page.first_publication_date).toLocaleDateString(
    params.locale,
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <>
      <PrismicNextImage
        field={page.data.cover}
        className="object-cover max-h-40 md:max-h-52 lg:max-h-72"
      />
      <article className="max-w-5xl px-8 mx-auto md:px-12 lg:px-16 text-secondary-color">
        <h1 className="mt-10 mb-2 text-4xl font-bold text-center md:text-5xl lg:text-6xl text-primary-color">
          {page.data.title}
        </h1>

        <time
          className="block mb-10 text-sm text-center text-gray-400 md:text-base"
          dateTime={page.first_publication_date}
        >
          {date}
        </time>

        <PrismicRichText
          field={page.data.content}
          components={components as JSXMapSerializer}
        />
      </article>
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID("post", params.uid).catch(() => {
    notFound();
  });

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("post");

  const params = pages.map((page) => {
    return [
      { locale: "pt-BR", uid: page.uid },
      { locale: "en-US", uid: page.uid },
    ];
  });

  return params.flat();
}
