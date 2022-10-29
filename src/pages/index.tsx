import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../components/Navbar";
import { SocialLinks } from "../components/SocialLinks";
import profileImg from "../../public/profile-pic.png";

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

      <section className="flex flex-col items-center justify-center pt-20 h-[90vh]">
        <Image
          src={profileImg}
          alt="Maurício Bruno"
          placeholder="blur"
          className="max-w-[180px] mb-10 border-4 border-primary-color rounded-full"
        />
        <p className="text-secondary-color uppercase">
          Desenvolvedor Front-end
        </p>
        <h1 className="text-primary-color uppercase text-4xl font-black my-2">
          Maurício Bruno
        </h1>
        <SocialLinks />
      </section>
    </>
  );
}
