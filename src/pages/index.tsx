import Head from "next/head";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useRef } from "react";
import { Fade } from "react-awesome-reveal";
import { Navbar } from "../components/Navbar";
import { SocialLinks } from "../components/SocialLinks";
import { ProfilePic } from "../components/ProfilePic";
import { DownArrow } from "../components/DownArrow";
import { Heading } from "../components/Heading";
import webDevAnimation from "../assets/web_dev.json";
import { Projects } from "../components/Projects";

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

      <section
        id="about"
        className="text-center py-16 px-4 sm:px-6 md:px-20 bg-card-gradient border-y border-solid border-highlight-color backdrop-blur-xl"
      >
        <Fade triggerOnce fraction={0.25} duration={500} cascade>
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
                Algumas tecnologias que tenho trabalhado recentemente:
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
        </Fade>
      </section>

      <Projects />

      <footer className="bg-card-gradient py-4 border-t border-solid border-highlight-color text-secondary-color text-center sm:px-6 md:px-20 backdrop-blur-xl">
        Maurício Bruno &copy; {year}
      </footer>
    </>
  );
}
