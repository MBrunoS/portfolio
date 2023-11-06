import React from "react";
import { ProjectCard } from "./ProjectCard";
import { StaticImageData } from "next/image";

type ProjectsProps = {
  projects: {
    title: string;
    description: string;
    imgSrc: StaticImageData;
    links: {
      demo: { label: string; value: string };
      code: { label: string; value: string };
    };
    badges: string[];
  }[];
};

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className="flex flex-col items-center justify-around gap-4 mt-16">
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
