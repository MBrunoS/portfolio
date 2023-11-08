import { Navbar } from "@/components/Navbar";
import { Heading } from "@/components/Heading";
import { Projects } from "@/components/Projects";
import { Section } from "@/components/Section";
import { CoverCard } from "@/components/Card/Cover";
import { Jobs } from "@/components/Jobs";
import { Hero } from "@/components/Hero";
import { SocialLinks } from "@/components/SocialLinks";
import CTA from "@/components/CTA";
import { SkillCards } from "@/components/SkillCards";
import { Metadata } from "next";
import { dictionaries, getTranslation } from "./i18n";
import ia from "@/assets/ia.webp";
import sorriso from "@/assets/sorriso.webp";
import wood from "@/assets/wood.webp";
import devconnect from "@/assets/devconnect.webp";
import repowars from "@/assets/repowars.webp";

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
      <Hero title="Maurício Bruno" tagline={t.hero.tagline}>
        <SocialLinks />
      </Hero>

      <Section id="about" variant="featured">
        <div className="grid items-center lg:grid-cols-2 gap-y-8">
          <div className="text-left text-secondary-color md:text-lg">
            <Heading as="h2">{t.about.title}</Heading>
            <p className="mt-8 mb-4">{t.about.firstParagraph}</p>
            <p>{t.about.secondParagraph}</p>
          </div>

          <SkillCards />
        </div>
      </Section>

      <Section id="jobs">
        <Heading as="h2">{t.jobs.title}</Heading>
        <p className="mt-2 mb-12 text-lg text-secondary-color">
          {t.jobs.subtitle}
        </p>
        <Jobs
          list={[
            {
              title: t.jobs.ia.title,
              description: t.jobs.ia.description,
              link: "https://inglesaplicado.com.br/v2",
              imgUrl: ia,
            },
            {
              title: t.jobs.sorriso.title,
              description: t.jobs.sorriso.description,
              link: "https://clinicasorrisoecia.com.br/",
              imgUrl: sorriso,
            },
            {
              title: t.jobs.wood.title,
              description: t.jobs.wood.description,
              link: "https://woodexpress.ind.br/",
              imgUrl: wood,
            },
          ]}
        />
      </Section>

      <Section id="projects">
        <Heading as="h2">{t.projects.title}</Heading>
        <p className="mt-2 text-lg text-secondary-color">
          {t.projects.subtitle}
        </p>
        <Projects
          list={[
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
            {
              title: t.projects.devconnect.title,
              description: t.projects.devconnect.description,
              imgSrc: devconnect,
              links: {
                demo: "https://devconnect.mbrunos.dev/",
                code: "https://github.com/MBrunoS/devconnect",
              },
              badges: ["Next.js", "Typescript", "Prisma", "Markdoc"],
            },
          ]}
          labels={{
            demo: t.projects.demo,
            code: t.projects.code,
          }}
        />
      </Section>

      <Section id="talks">
        <Heading as="h2">{t.talks.title}</Heading>

        <div className="grid justify-center grid-cols-1 gap-8 mt-16 sm:px-12 md:max-w-2xl md:mx-auto">
          <iframe
            className="w-full h-auto border rounded-md border-highlight-color bg-card-gradient aspect-video"
            src="https://speakerdeck.com/player/b2bc51290e624cf78cffb575176514cf"
            title="Desvendando padrões de renderização de apps web"
            allowFullScreen
            data-ratio="1.7777777777777777"
          ></iframe>
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
