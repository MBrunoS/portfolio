import { Heading } from "@/components/Heading";
import { Projects } from "@/components/Projects";
import { Section } from "@/components/Section";
import { SocialLinks } from "@/components/SocialLinks";
import CTA from "@/components/CTA";
import { Metadata } from "next";
import { getTranslation } from "./i18n";
import arcCarousel from "@/assets/arc-carousel.webp";
import repowars from "@/assets/repowars.webp";
import nextCRUDGen from "@/assets/next-crud-gen.webp";
import dsa from "@/assets/dsa.webp";
import { CoverCard } from "@/components/Cards/Cover";
import { Timeline } from "@/components/Timeline";
import { ProfilePic } from "@/components/ProfilePic";
import { ImpactCards } from "@/components/ImpactCards";
import { StrengthCards } from "@/components/StrengthCards";
import Link from "next/link";
import { Button } from "@/components/Button";

type Params = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function Home({ params }: Params) {
  const { locale } = await params;
  const t = await getTranslation(locale);

  const year = new Date().getFullYear();

  return (
    <div className="backgrounds">
      <Section id="/" variant="hero">
        <div
          className="flex flex-col items-center gap-3 text-center md:items-start md:text-start"
          data-aos="fade-right"
          data-aos-duration="200"
        >
          <Heading as="h1">Maurício Bruno</Heading>
          <p className="text-xl text-secondary-color lg:text-3xl">
            {t.hero.tagline}
          </p>
          <p className="max-w-2xl text-base/7 text-secondary-color md:text-lg/8 lg:max-w-3xl">
            {t.hero.subtitle}
          </p>
          <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row">
            <Link href="/#experience">
              <Button>{t.hero.cta}</Button>
            </Link>
            <SocialLinks />
          </div>
        </div>
        <ProfilePic data-aos="fade-left" data-aos-duration="200" />
      </Section>

      <Section id="about" variant="featured">
        <div
          className="grid items-center gap-y-10 lg:grid-cols-2 lg:gap-x-14"
          data-aos="fade-up"
          data-aos-offset="200"
        >
          <div className="text-left text-secondary-color md:text-lg">
            <Heading as="h2">{t.about.title}</Heading>
            <p className="mt-6 mb-4">{t.about.firstParagraph}</p>
            <p>{t.about.secondParagraph}</p>
          </div>

          <div className="text-left">
            <h3 className="text-2xl font-bold text-white">
              {t.strengths.title}
            </h3>
            <p className="mt-3 text-secondary-color">{t.strengths.subtitle}</p>
            <StrengthCards list={t.strengths.list} />
          </div>
        </div>
      </Section>

      <Section
        id="impact"
        className="md:pt-24 lg:pt-32"
        data-aos="fade-up"
        data-aos-offset="300"
      >
        <Heading as="h2">{t.impact.title}</Heading>
        <p className="max-w-3xl mx-auto mt-2 text-lg text-secondary-color">
          {t.impact.subtitle}
        </p>
        <ImpactCards list={t.impact.list} />
      </Section>

      <Section
        id="projects"
        className="md:pt-24 lg:pt-32"
        data-aos="fade-up"
        data-aos-offset="300"
      >
        <Heading as="h2">{t.projects.title}</Heading>
        <p className="mt-2 text-lg text-secondary-color">
          {t.projects.subtitle}
        </p>
        <Projects
          list={[
            {
              title: t.projects.arc_carousel.title,
              description: t.projects.arc_carousel.description,
              imgSrc: arcCarousel,
              links: {
                site: "https://arc-carousel.mbrunos.dev/",
                code: "https://github.com/MBrunoS/arc-carousel",
              },
              badges: ["React", "Typescript", "Astro", "Vitest"],
            },
            {
              title: t.projects.next_crud_gen.title,
              description: t.projects.next_crud_gen.description,
              imgSrc: nextCRUDGen,
              links: {
                site: "https://www.npmjs.com/package/prisma-next-crud-generator",
                code: "https://github.com/MBrunoS/prisma-next-crud-generator",
              },
              badges: ["Next.js", "Prisma", "Typescript", "Jest"],
            },
            {
              title: t.projects.dsa.title,
              description: t.projects.dsa.description,
              imgSrc: dsa,
              links: {
                code: "https://github.com/MBrunoS/dsa",
              },
              badges: ["Typescript", "Vitest"],
            },
            {
              title: t.projects.repowars.title,
              description: t.projects.repowars.description,
              imgSrc: repowars,
              links: {
                site: "https://repowars.mbrunos.dev/",
                code: "https://github.com/MBrunoS/repowars",
              },
              badges: ["React", "Typescript", "GraphQL"],
            },
          ]}
          labels={{
            site: t.projects.site,
            code: t.projects.code,
          }}
        />
      </Section>

      <Section id="experience" data-aos="fade-up" className="md:pt-24 lg:pt-32">
        <Heading as="h2">{t.experience.title}</Heading>
        <p className="mt-2 mb-12 text-lg text-secondary-color">
          {t.experience.subtitle}
        </p>

        <Timeline experiences={t.experience.list} />
      </Section>

      <Section
        id="talks"
        className="md:pt-24 lg:pt-30"
        data-aos="fade-up"
        data-aos-offset="300"
      >
        <Heading as="h2">{t.talks.title}</Heading>

        <div className="mt-14 grid grid-cols-1 justify-center gap-8 sm:px-8 md:mx-auto md:max-w-2xl">
          <CoverCard
            title={t.talks.rendering_patterns.title}
            link="https://speakerdeck.com/mbrunos/desvendando-padroes-de-renderizacao-de-apps-web"
            imgUrl="https://files.speakerdeck.com/presentations/b2bc51290e624cf78cffb575176514cf/slide_0.jpg"
          >
            {t.talks.rendering_patterns.description}
          </CoverCard>
        </div>
      </Section>

      <footer className="mt-20 border-t border-solid border-highlight-color/80 bg-card-gradient pt-12 text-center text-secondary-color backdrop-blur-xl sm:px-6 md:px-12 lg:px-20">
        <CTA button={t.footer.button} />
        <p className="py-8">Maurício Bruno &copy; {year}</p>
      </footer>
    </div>
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslation(locale);

  return {
    title: t.head.title,
    description: t.hero.subtitle,
  };
}

export async function generateStaticParams() {
  return [{ locale: "en-US" }, { locale: "pt-BR" }];
}
