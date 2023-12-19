import { Heading } from "@/components/Heading";
import { Projects } from "@/components/Projects";
import { Section } from "@/components/Section";
import { SocialLinks } from "@/components/SocialLinks";
import CTA from "@/components/CTA";
import { SkillCards } from "@/components/SkillCards";
import { Metadata } from "next";
import { dictionaries, getTranslation } from "./i18n";
import arcCarousel from "@/assets/arc-carousel.webp";
import repowars from "@/assets/repowars.webp";
import { CoverCard } from "@/components/Cards/Cover";
import { Timeline } from "@/components/Timeline";
import { ProfilePic } from "@/components/ProfilePic";

type Params = {
  params: {
    locale: keyof typeof dictionaries;
  };
};

export default async function Home({ params }: Params) {
  const t = await getTranslation(params.locale);

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
          <div className="flex gap-3 mt-2">
            <SocialLinks />
          </div>
        </div>
        <ProfilePic data-aos="fade-left" data-aos-duration="200" />
      </Section>

      <Section id="about" variant="featured">
        <div
          className="grid items-center lg:grid-cols-2 gap-y-8"
          data-aos="fade-up"
          data-aos-offset="200"
        >
          <div className="text-left text-secondary-color md:text-lg">
            <Heading as="h2">{t.about.title}</Heading>
            <p className="mt-8 mb-4">{t.about.firstParagraph}</p>
            <p>{t.about.secondParagraph}</p>
          </div>

          <SkillCards />
        </div>
      </Section>

      <Section
        id="projects"
        className="md:pt-28 lg:pt-36"
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
                demo: "https://arc-carousel.mbrunos.dev/",
                code: "https://github.com/MBrunoS/arc-carousel",
              },
              badges: ["React", "Typescript"],
            },
            {
              title: t.projects.repowars.title,
              description: t.projects.repowars.description,
              imgSrc: repowars,
              links: {
                demo: "https://repowars.mbrunos.dev/",
                code: "https://github.com/MBrunoS/repowars",
              },
              badges: ["React", "Typescript", "GraphQL"],
            },
          ]}
          labels={{
            demo: t.projects.demo,
            code: t.projects.code,
          }}
        />
      </Section>

      <Section id="experience" data-aos="fade-up" className="md:pt-28 lg:pt-36">
        <Heading as="h2">{t.experience.title}</Heading>
        <p className="mt-2 mb-12 text-lg text-secondary-color">
          {t.experience.subtitle}
        </p>

        <Timeline experiences={t.experience.list} />
      </Section>

      <Section
        id="talks"
        className="lg:pt-32"
        data-aos="fade-up"
        data-aos-offset="300"
      >
        <Heading as="h2">{t.talks.title}</Heading>

        <div className="grid justify-center grid-cols-1 gap-8 mt-16 sm:px-12 md:max-w-2xl md:mx-auto">
          <CoverCard
            title={t.talks.rendering_patterns.title}
            link="https://speakerdeck.com/mbrunos/desvendando-padroes-de-renderizacao-de-apps-web"
            imgUrl="https://files.speakerdeck.com/presentations/b2bc51290e624cf78cffb575176514cf/slide_0.jpg"
          >
            {t.talks.rendering_patterns.description}
          </CoverCard>
        </div>
      </Section>

      <footer className="pt-10 mt-16 text-center border-t border-solid bg-card-gradient border-highlight-color text-secondary-color sm:px-6 md:px-20 backdrop-blur-xl">
        <CTA headline={t.footer.headline} button={t.footer.button} />
        <p className="py-8">Maurício Bruno &copy; {year}</p>
      </footer>
    </div>
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const t = await getTranslation(params.locale);

  return {
    title: t.head.title,
    description: t.head.title,
  };
}

export async function generateStaticParams() {
  return [{ locale: "en-US" }, { locale: "pt-BR" }];
}
