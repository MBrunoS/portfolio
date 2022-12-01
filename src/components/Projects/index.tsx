import React from "react";
import { Fade } from "react-awesome-reveal";
import { Heading } from "../Heading";
import nlw from "../../assets/nlw.png";
import { ProjectCard } from "./ProjectCard";

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="text-center py-16 px-4 sm:px-6 md:px-20">
      <Fade triggerOnce fraction={0.25} duration={500} cascade>
        <Heading as="h2">Projetos</Heading>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-around mt-8">
          <ProjectCard
            title="NLW eSports"
            imgSrc={nlw}
            links={{
              demo: "https://nlw-esports-mbrunos.vercel.app/",
              code: "https://github.com/MBrunoS/nlw-esports-next",
            }}
          >
            <p>
              Plataforma para jogadores encontrarem parceiros de gameplay.
              Criado com base no evento NLW eSports da Rocketseat.
            </p>
          </ProjectCard>

          <ProjectCard
            title="Clínica Sorriso e Cia"
            imgSrc={nlw}
            links={{
              demo: "https://clinicasorrisoecia.com.br/",
              code: "https://github.com/Reach-Digital-Marketing/reach-scheduling",
            }}
          >
            <p>
              Landing Page para apresentação de clínica odontológica, e página
              para agendamento de consultas
            </p>
          </ProjectCard>
        </div>
      </Fade>
    </section>
  );
};
