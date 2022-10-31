import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../components/Navbar";
import { SocialLinks } from "../components/SocialLinks";
import { ProfilePic } from "../components/ProfilePic";
import { DownArrow } from "../components/DownArrow";
import { Heading } from "../components/Heading";
import { Card } from "../components/Card";
import handCodingImg from "../../public/hand-coding.svg";

export default function Home() {
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

      <section className="flex flex-col items-center justify-center  h-[90vh] relative">
        <ProfilePic />
        <p className="mt-10 text-secondary-color uppercase">
          Desenvolvedor Front-end
        </p>
        <Heading>Maurício Bruno</Heading>
        <SocialLinks />

        <DownArrow />
      </section>

      <section className="text-center py-8 px-2.5 sm:px-5 md:px-20">
        <Heading>Quem sou eu</Heading>
        <div className="flex flex-col md:flex-row basis-1/2 sm:gap-4 md:gap-12 lg:gap-36 items-center justify-around mt-8">
          <Card className="text-left">
            Natural do Rio Grande do Norte, desde 2013 sou apaixonado por
            desenvolvimento web e fascinado por tudo que é possível criar.
            <br />
            <br />
            Procuro sempre estar atualizado às tecnologias mais modernas e
            eficazes, para entregar uma experiência incrível em cada projeto.
            <br />
            <br />
            Atualmente, minhas ferramentas preferidas são: React, Typescript,
            Vite, Next.js, Prisma e TailwindCSS.
          </Card>
          <Image
            src={handCodingImg}
            alt="Hand coding"
            className="md:max-w-xs"
          />
        </div>
      </section>
    </>
  );
}
