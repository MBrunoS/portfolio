import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Heading } from "../components/Heading";
import { Projects } from "../components/Projects";
import { Section } from "../components/Section";
import { CoverCard } from "../components/Card/Cover";
import { Jobs } from "../components/Jobs";
import { Hero } from "../components/Hero";
import { SocialLinks } from "../components/SocialLinks";
import CTA from "../components/CTA";
import { SkillCards } from "../components/SkillCards";
import { useTranslation } from "react-i18next";
import { GetStaticProps } from "next";
import { loadTranslations } from "ni18n";
import { ni18nConfig } from "../../ni18n.config";

export default function Home() {
  const year = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("head.title")}</title>
        <meta name="description" content={t("head.title") as string} />
      </Head>

      <Navbar />

      <Hero title="Maurício Bruno" tagline={t("hero.tagline")}>
        <SocialLinks />
      </Hero>

      <Section id="about" variant="featured">
        <div className="grid lg:grid-cols-2 gap-y-8 items-center">
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
        <p className="text-secondary-color text-lg mt-2 mb-12">
          {t("jobs.subtitle")}
        </p>
        <Jobs />
      </Section>

      <Section id="projects">
        <Heading as="h2">{t("projects.title")}</Heading>
        <p className="text-secondary-color text-lg mt-2">
          {t("projects.subtitle")}
        </p>
        <Projects />
      </Section>

      <Section id="articles">
        <Heading as="h2">{t("articles.title")}</Heading>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 sm:px-12 lg:px-20 mt-16 justify-center">
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

      <footer className="bg-card-gradient pt-10 mt-16 border-t border-solid border-highlight-color text-secondary-color text-center sm:px-6 md:px-20 backdrop-blur-xl">
        <CTA headline={t("footer.headline")} button={t("footer.button")} />
        <p className="py-8">Maurício Bruno &copy; {year}</p>
      </footer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (props) => {
  return {
    props: {
      ...(await loadTranslations(ni18nConfig, props.locale, ["translation"])),
    },
  };
};
