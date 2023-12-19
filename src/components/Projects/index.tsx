import React from "react";
import { StaticImageData } from "next/image";
import { WideCard } from "../Card/Wide";
import Link from "next/link";
import { Button } from "../Button";

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
    <div className="flex flex-col items-center justify-around gap-4 mt-8 md:mt-16">
      {list.map((project) => (
        <WideCard
          img={{ src: project.imgSrc, alt: project.title }}
          key={project.title}
          data-aos="fade-up"
        >
          <div className="flex flex-col items-center md:items-start lg:items-center gap-y-2 gap-x-4 lg:flex-row">
            <h3 className="mt-2 text-2xl font-bold text-white md:mt-0">
              {project.title}
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
              {project.badges.map((badge, i) => (
                <p
                  key={i}
                  className="px-2 py-1 text-xs border border-solid rounded-full last:mr-0 border-primary-color"
                >
                  {badge}
                </p>
              ))}
            </div>
          </div>

          <p className="px-2 mt-2 mb-6 text-base md:px-0">
            {project.description}
          </p>

          <div className="flex items-center justify-center gap-4 md:justify-start">
            {project.links.demo && (
              <Link href={project.links.demo} target="_blank">
                <Button>{labels.demo}</Button>
              </Link>
            )}
            {project.links.code && (
              <Link href={project.links.code} target="_blank">
                <Button variant="secondary">{labels.code}</Button>
              </Link>
            )}
          </div>
        </WideCard>
      ))}
    </div>
  );
};
