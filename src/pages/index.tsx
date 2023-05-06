import Head from "next/head";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useRef } from "react";
import { Navbar } from "../components/Navbar";
import { DownArrow } from "../components/DownArrow";
import { Heading } from "../components/Heading";
import { Projects } from "../components/Projects";
import { Section } from "../components/Section";
import { CoverCard } from "../components/Card/Cover";
import { Jobs } from "../components/Jobs";
import webDevAnimation from "../assets/web_dev.json";
import { Hero } from "../components/Hero";
import { SocialLinks } from "../components/SocialLinks";
import CTA from "../components/CTA";

export default function Home() {
  const webDevAnimRef = useRef<LottieRefCurrentProps>(null);
  webDevAnimRef.current?.setSpeed(0.75);

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
        <Heading as="h2">Quem sou eu</Heading>
        <div className="flex flex-col lg:flex-row basis-1/2 gap-4 md:gap-12 lg:gap-36 items-center justify-around mt-8 lg:mt-2">
          <div className="text-left text-secondary-color md:text-lg">
            <p>
              Entusiasta do universo front-end desde 2013 e fascinado por tudo
              que é possível criar com essas tecnologias.
              <br />
              <br />
              Procuro sempre estar atualizado às tecnologias e conceitos mais
              modernos para poder entregar uma experiência incrível em cada
              projeto.
              <br />
              <br />
              Algumas das tecnologias que tenho experiência:
            </p>

            <ul className="grid grid-cols-2 lg:grid-cols-3 list-disc marker:text-primary-color mt-6">
              <li className="ml-6">Javascript (ES6+)</li>
              <li className="ml-6">Typescript</li>
              <li className="ml-6">React</li>
              <li className="ml-6">Next.js</li>
              <li className="ml-6">Node.js</li>
              <li className="ml-6">WordPress</li>
            </ul>
          </div>

          <Lottie animationData={webDevAnimation} lottieRef={webDevAnimRef} />
        </div>
      </Section>

      <Section id="jobs">
        <Heading as="h2">Trabalhos</Heading>
        <p className="text-secondary-color mt-2">Meus últimos trabalhos</p>
        <Jobs />
      </Section>

      <Section id="projects" variant="featured">
        <Heading as="h2">Projetos</Heading>
        <p className="text-secondary-color mt-2">
          Projetos desenvolvidos para aprimorar minhas habilidades
        </p>
        <Projects />
      </Section>

      <Section id="articles">
        <Heading as="h2">Artigos</Heading>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-around mt-8">
          <CoverCard
            imgUrl="https://community.revelo.com/content/images/size/w600/2022/11/BLOG-BR---Criando-um-plugin-no-WordPress-com-React.png"
            title="Criando um plugin no WordPress com React"
            link="https://community.revelo.com/como-criar-um-plugin-wordpress-com-react/"
          >
            Este artigo mostra que criar seus primeiros plugins e blocos do
            WordPress é relativamente fácil.
          </CoverCard>
        </div>
      </Section>

      <footer className="bg-card-gradient pt-10 border-t border-solid border-highlight-color text-secondary-color text-center sm:px-6 md:px-20 backdrop-blur-xl">
        <CTA headline="Vamos trabalhar juntos?" text="Envie uma mensagem" />
        <p className="py-8">Maurício Bruno &copy; {year}</p>
      </footer>
    </>
  );
}
