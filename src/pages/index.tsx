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

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>Maurício Bruno - Desenvolvedor Full-Stack</title>
        <meta
          name="description"
          content="Maurício Bruno - Desenvolvedor Full-Stack"
        />
      </Head>

      <Navbar />

      <Hero title="Maurício Bruno" tagline="Desenvolvedor Full-Stack">
        <SocialLinks />
      </Hero>

      <Section id="about" variant="featured">
        <div className="grid lg:grid-cols-2 gap-y-8 items-center">
          <div className="text-left text-secondary-color md:text-lg">
            <Heading as="h2">Sobre Mim</Heading>
            <p className="mt-8 mb-4">
              Sou um desenvolvedor de software full-stack apaixonado por criar
              experiências digitais envolventes. Com uma sólida experiência em
              front-end e design gráfico, combino habilidades técnicas com uma
              visão estética para desenvolver soluções inovadoras.
            </p>
            <p>
              Meu objetivo é desenvolver soluções modernas e escaláveis que
              superem as expectativas. Valorizo a colaboração e o trabalho em
              equipe, além de compartilhar conhecimentos com outros
              desenvolvedores.
            </p>
          </div>

          <SkillCards />
        </div>
      </Section>

      <Section id="jobs">
        <Heading as="h2">Trabalhos</Heading>
        <p className="text-secondary-color text-lg mt-2 mb-12">
          Alguns dos meus últimos trabalhos
        </p>
        <Jobs />
      </Section>

      <Section id="projects">
        <Heading as="h2">Projetos</Heading>
        <p className="text-secondary-color text-lg mt-2">
          Projetos desenvolvidos para aprimorar minhas habilidades
        </p>
        <Projects />
      </Section>

      <Section id="articles">
        <Heading as="h2">Artigos</Heading>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 sm:px-12 lg:px-20 mt-16 justify-center">
          <CoverCard
            imgUrl="https://community.revelo.com.br/content/images/size/w2000/2022/11/BLOG-BR---Criando-um-plugin-no-WordPress-com-React.png"
            title="Criando um plugin no WordPress com React"
            link="https://community.revelo.com/como-criar-um-plugin-wordpress-com-react/"
          >
            Este artigo mostra que criar seus primeiros plugins e blocos do
            WordPress é relativamente fácil.
          </CoverCard>

          <CoverCard
            imgUrl="https://community.revelo.com.br/content/images/size/w2000/2023/05/-----BLOG-COMMUNITY-BR---Princi-pios-de-Design-para-devs-Frontend.png"
            title="Princípios de Design para devs Frontend"
            link="https://community.revelo.com.br/principios-de-design-para-devs-frontend/"
          >
            Princípios básicos de design para ajudar desenvolvedores frontend a
            criar interfaces mais bonitas e funcionais.
          </CoverCard>
        </div>
      </Section>

      <footer className="bg-card-gradient pt-10 mt-16 border-t border-solid border-highlight-color text-secondary-color text-center sm:px-6 md:px-20 backdrop-blur-xl">
        <CTA headline="Vamos trabalhar juntos?" text="Envie uma mensagem" />
        <p className="py-8">Maurício Bruno &copy; {year}</p>
      </footer>
    </>
  );
}
