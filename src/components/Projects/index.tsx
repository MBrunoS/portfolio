import React from "react";
import devconnect from "../../assets/devconnect.webp";
import repowars from "../../assets/repowars.webp";
import { ProjectCard } from "./ProjectCard";

export const Projects: React.FC = () => {
  const projects = [
    {
      title: "RepoWars",
      description: "Jogo de batalha de repositórios do GitHub",
      imgSrc: repowars,
      links: {
        demo: "https://repowars.mbrunos.dev/",
        code: "https://github.com/MBrunoS/repowars",
      },
      badges: ["React", "Typescript", "Vite", "React Icons"],
    },
    {
      title: "DevConnect",
      description: "Plataforma de rede social para devs poderem se conectar",
      imgSrc: devconnect,
      links: {
        demo: "https://devconnect.mbrunos.dev/",
        code: "https://github.com/MBrunoS/devconnect",
      },
      badges: ["Next.js", "Typescript", "Prisma", "Markdoc"],
    },
  ];

  return (
    <div className="flex flex-col gap-4 items-center justify-around mt-16">
      {projects.map((project, i) => (
        <ProjectCard
          title={project.title}
          imgSrc={project.imgSrc}
          links={project.links}
          badges={project.badges}
          description={project.description}
          key={i}
        />
      ))}
    </div>
  );
};
