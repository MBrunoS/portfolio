import Head from "next/head";
import Image from "next/image";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { Navbar } from "../components/Navbar";
import { SocialLinks } from "../components/SocialLinks";
import { ProfilePic } from "../components/ProfilePic";
import { DownArrow } from "../components/DownArrow";
import { Heading } from "../components/Heading";
import { Card } from "../components/Card";
import { useRef } from "react";
import webDevAnimation from "../assets/web_dev.json";
import nlw from "../../public/nlw.png";

export default function Home() {
  const webDevAnimRef = useRef<LottieRefCurrentProps>(null);
  webDevAnimRef.current?.setSpeed(0.75);

  const year = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>Maurício Bruno - Desenvolvedor Front-end</title>
        <meta
          name="description"
          content="Maurício Bruno - Desenvolvedor Front-end"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <section className="flex flex-col items-center justify-center h-screen relative">
        <ProfilePic />
        <div className="mt-10 mb-4 text-center">
          <Heading>Maurício Bruno</Heading>
          <p className="text-secondary-color uppercase text-lg">
            Desenvolvedor Front-end
          </p>
        </div>
        <SocialLinks />

        <DownArrow />
      </section>

      <section className="text-center py-16 px-4 sm:px-6 md:px-20 bg-card-gradient border-y border-solid border-highlight-color backdrop-blur-xl">
        <Heading as="h2">Quem sou eu</Heading>
        <div className="flex flex-col lg:flex-row basis-1/2 gap-4 md:gap-12 lg:gap-36 items-center justify-around mt-8 lg:mt-2">
          <p className="text-left text-secondary-color md:text-lg">
            Entusiasta do universo front-end desde 2013 e fascinado por tudo que
            é possível criar com essas tecnologias.
            <br />
            <br />
            Procuro sempre estar atualizado às tecnologias e conceitos mais
            modernos para poder entregar uma experiência incrível em cada
            projeto.
            <br />
            <br />
            Meus pontos fortes são: Javascript, Typescript, React, HTML/CSS e
            algoritmos.
            <br />
            <br />
            Ferramentas favoritas: Vite, Next.js, Prisma e TailwindCSS.
          </p>
          <Lottie animationData={webDevAnimation} lottieRef={webDevAnimRef} />
        </div>
      </section>

      <section className="text-center py-16 px-4 sm:px-6 md:px-20">
        <Heading as="h2">Projetos</Heading>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-around mt-8">
          <div className="flex flex-col items-center md:w-1/2 lg:w-1/3">
            <Image
              src={nlw}
              alt="NLW eSports"
              placeholder="blur"
              className="w-4/5 rounded-2xl border border-solid border-highlight-color -mb-8 z-10"
            />

            <Card>
              <h3 className="font-bold text-2xl mt-5 mb-2 text-white">
                NLW eSports
              </h3>
              <p>
                Plataforma para jogadores encontrarem parceiros de gameplay.
                Criado com base no evento NLW eSports da Rocketseat.
              </p>
              <a
                className="inline-block bg-primary-color rounded px-4 py-2 mt-4 mr-2 text-white hover:brightness-75"
                href="https://nlw-esports-mbrunos.vercel.app/"
                target="_blank"
              >
                Demo
              </a>
              <a
                className="inline-block bg-secondary-color rounded px-4 py-2 mt-4 ml-2 text-highlight-color hover:brightness-75"
                href="https://github.com/MBrunoS/nlw-esports-next"
                target="_blank"
              >
                Código
              </a>
            </Card>
          </div>
        </div>
      </section>
      <footer className="bg-card-gradient py-4 border-t border-solid border-highlight-color text-secondary-color text-center sm:px-6 md:px-20 backdrop-blur-xl">
        Maurício Bruno @ {year}
      </footer>
    </>
  );
}
