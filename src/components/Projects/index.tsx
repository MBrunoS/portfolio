import React from "react";
import { Fade } from "react-awesome-reveal";
import { Heading } from "../Heading";
import nlw from "../../assets/nlw.png";
import sorriso from "../../assets/sorriso.png";
import { ProjectCard } from "./ProjectCard";

export const Projects: React.FC = () => {
  return (
    <>
      <Heading as="h2">Projetos</Heading>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-around mt-8">
        <ProjectCard
          title="NLW eSports"
          imgSrc={nlw}
          links={{
            demo: "https://nlw-esports-mbrunos.vercel.app/",
            code: "https://github.com/MBrunoS/nlw-esports-next",
          }}
          badges={["Next.js", "Typescript", "Tailwind", "Prisma"]}
        >
          <p>
            Plataforma para jogadores encontrarem parceiros de gameplay. Criado
            com base no evento NLW eSports da Rocketseat.
          </p>
        </ProjectCard>

        <ProjectCard
          title="Clínica Sorriso e Cia"
          imgSrc={sorriso}
          links={{
            demo: "https://clinicasorrisoecia.com.br/",
            code: "https://github.com/Reach-Digital-Marketing/reach-scheduling",
          }}
          badges={["WordPress", "React", "PHP"]}
        >
          <p>
            Landing Page para apresentação de clínica odontológica, e página
            para agendamento de consultas
          </p>
        </ProjectCard>
      </div>
    </>
  );
};
