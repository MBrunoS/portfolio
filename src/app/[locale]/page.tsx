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
import { useTranslation } from "@/hooks/useTranslation";
import { Metadata } from "next";

export default async function Home({ params }: { params: { locale: string } }) {
  const year = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <div className="backgrounds">
      <Navbar />

      <Hero title="Maurício Bruno" tagline={t("hero.tagline")}>
        <SocialLinks />
      </Hero>

      <Section id="about" variant="featured">
        <div className="grid items-center lg:grid-cols-2 gap-y-8">
          <div className="text-left text-secondary-color md:text-lg">
            <Heading as="h2">{t("about.title")}</Heading>
            <p className="mt-8 mb-4">{t("about.firstParagraph")}</p>
            <p>{t("about.secondParagraph")}</p>
          </div>

          <SkillCards />
        </div>
      </Section>

      <Section id="jobs">
        <Heading as="h2">{t("jobs.title")}</Heading>
        <p className="mt-2 mb-12 text-lg text-secondary-color">
          {t("jobs.subtitle")}
        </p>
        <Jobs />
      </Section>

      <Section id="projects">
        <Heading as="h2">{t("projects.title")}</Heading>
        <p className="mt-2 text-lg text-secondary-color">
          {t("projects.subtitle")}
        </p>
        <Projects />
      </Section>

      <Section id="articles">
        <Heading as="h2">{t("articles.title")}</Heading>

        <div className="grid justify-center grid-cols-1 gap-8 mt-16 md:grid-cols-2 sm:px-12 lg:px-20">
          <CoverCard
            imgUrl="https://community.revelo.com.br/content/images/size/w2000/2022/11/BLOG-BR---Criando-um-plugin-no-WordPress-com-React.png"
            title={t("articles.wp-plugins.title")}
            link="https://community.revelo.com/como-criar-um-plugin-wordpress-com-react/"
          >
            {t("articles.wp-plugins.description")}
          </CoverCard>

          <CoverCard
            imgUrl="https://community.revelo.com.br/content/images/size/w2000/2023/05/-----BLOG-COMMUNITY-BR---Princi-pios-de-Design-para-devs-Frontend.png"
            title={t("articles.design-principles.title")}
            link="https://community.revelo.com.br/principios-de-design-para-devs-frontend/"
          >
            {t("articles.design-principles.description")}
          </CoverCard>
        </div>
      </Section>

      <footer className="pt-10 mt-16 text-center border-t border-solid bg-card-gradient border-highlight-color text-secondary-color sm:px-6 md:px-20 backdrop-blur-xl">
        <CTA headline={t("footer.headline")} button={t("footer.button")} />
        <p className="py-8">Maurício Bruno &copy; {year}</p>
      </footer>
    </div>
  );
}

export const metadata: Metadata = {
  title: "head.title",
  description: "head.title",
};
