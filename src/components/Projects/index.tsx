import React from "react";
import devconnect from "../../assets/devconnect.webp";
import repowars from "../../assets/repowars.webp";
import { ProjectCard } from "./ProjectCard";
import { useTranslation } from "react-i18next";

export const Projects: React.FC = () => {
  const { t } = useTranslation();
  const projects = [
    {
      title: t("projects.repowars.title"),
      description: t("projects.repowars.description"),
      imgSrc: repowars,
      links: {
        demo: "https://repowars.mbrunos.dev/",
        code: "https://github.com/MBrunoS/repowars",
      },
      badges: ["React", "Typescript", "Vite", "React Icons"],
    },
    {
      title: t("projects.devconnect.title"),
      description: t("projects.devconnect.description"),
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
