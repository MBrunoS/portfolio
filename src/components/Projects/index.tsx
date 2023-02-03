import React from "react";
import devconnect from "../../assets/devconnect.webp";
import { ProjectCard } from "./ProjectCard";

export const Projects: React.FC = () => {
  const projects = [
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
    <div className="flex flex-col md:flex-row gap-4 items-center justify-around mt-8">
      {projects.map((project, i) => (
        <ProjectCard
          title={project.title}
          imgSrc={project.imgSrc}
          links={project.links}
          badges={project.badges}
          key={i}
        >
          <p>{project.description}</p>
        </ProjectCard>
      ))}
    </div>
  );
};
