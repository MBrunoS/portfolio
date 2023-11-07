import React from "react";
import { ProjectCard } from "./ProjectCard";
import { StaticImageData } from "next/image";

type ProjectsProps = {
  list: {
    title: string;
    description: string;
    imgSrc: StaticImageData;
    links: {
      demo?: string;
      code: string;
    };
    badges: string[];
  }[];
  labels: {
    demo?: string;
    code: string;
  };
};

export const Projects: React.FC<ProjectsProps> = ({ list, labels }) => {
  return (
    <div className="flex flex-col items-center justify-around gap-4 mt-16">
      {list.map((project, i) => (
        <ProjectCard
          title={project.title}
          imgSrc={project.imgSrc}
          links={project.links}
          labels={labels}
          badges={project.badges}
          description={project.description}
          key={i}
        />
      ))}
    </div>
  );
};
