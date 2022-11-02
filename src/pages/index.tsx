import Head from "next/head";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { Navbar } from "../components/Navbar";
import { SocialLinks } from "../components/SocialLinks";
import { ProfilePic } from "../components/ProfilePic";
import { DownArrow } from "../components/DownArrow";
import { Heading } from "../components/Heading";
import { Card } from "../components/Card";
import webDevAnimation from "../assets/web_dev.json";
import { useRef } from "react";

export default function Home() {
  const webDevAnimRef = useRef<LottieRefCurrentProps>(null);
  webDevAnimRef.current?.setSpeed(0.5);

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
        <p className="mt-10 text-secondary-color uppercase">
          Desenvolvedor Front-end
        </p>
        <Heading>Maurício Bruno</Heading>
        <SocialLinks />

        <DownArrow />
      </section>

      <section className="text-center py-8 px-2.5 sm:px-5 md:px-20">
        <Heading as="h2">Quem sou eu</Heading>
        <div className="flex flex-col lg:flex-row basis-1/2 gap-4 md:gap-12 lg:gap-36 items-center justify-around mt-8 lg:mt-0">
          <Card className="text-left">
            Natural do Rio Grande do Norte, desde 2013 sou apaixonado por
            desenvolvimento web e fascinado por tudo que é possível criar com
            essas tecnologias.
            <br />
            <br />
            Procuro sempre estar atualizado às tecnologias mais modernas e
            eficazes, para entregar uma experiência incrível em cada projeto.
            <br />
            <br />
            Atualmente, minhas ferramentas preferidas são: React, Typescript,
            Vite, Next.js, Prisma e TailwindCSS.
          </Card>
          <Lottie
            animationData={webDevAnimation}
            loop={true}
            lottieRef={webDevAnimRef}
            className="shrink-0"
          />
        </div>
      </section>

      <section className="text-center py-8 px-2.5 sm:px-5 md:px-20">
        <Heading as="h2">Projetos</Heading>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-around mt-8">
          <Card className="md:w-1/2 lg:w-1/3">
            <h3 className="font-bold text-2xl">NLW eSports</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
              harum omnis delectus explicabo nesciunt tempore quo repellat
              assumenda, accusamus laborum aliquid error sit veritatis ullam
              voluptate dolore provident laboriosam neque?
            </p>
          </Card>
        </div>
      </section>
    </>
  );
}
