import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../../Button";

interface ProjectCardProps {
  title: string;
  imgSrc: StaticImageData;
  links: {
    demo?: string;
    code: string;
  };
  badges: string[];
  description: string;
  labels: {
    demo?: string;
    code: string;
  };
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  imgSrc,
  links,
  badges,
  description,
  labels,
}) => {
  return (
    <div className="flex flex-col w-full gap-6 lg:w-5/6">
      <div className="flex flex-col items-center flex-grow px-3 py-6 border border-solid md:py-3 bg-card-gradient border-highlight-color rounded-2xl border-1 text-secondary-color md:text-left gap-x-8 md:flex-row">
        <Image
          src={imgSrc}
          alt={title}
          placeholder="blur"
          className="w-4/5 max-w-xs border border-solid md:w-2/5 rounded-2xl border-highlight-color"
        />

        <div>
          <div className="flex flex-col items-center md:items-start lg:items-center gap-y-2 gap-x-4 lg:flex-row">
            <h3 className="text-2xl font-bold text-white">{title}</h3>

            <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
              {badges.map((badge, i) => (
                <p
                  key={i}
                  className="px-2 py-1 text-xs border border-solid rounded-full last:mr-0 border-primary-color"
                >
                  {badge}
                </p>
              ))}
            </div>
          </div>

          <p className="mt-1 mb-6">{description}</p>

          <div className="flex items-center justify-center gap-4 md:justify-start">
            {links.demo && (
              <Link href={links.demo} target="_blank">
                <Button>{labels.demo}</Button>
              </Link>
            )}
            {links.code && (
              <Link href={links.code} target="_blank">
                <Button variant="secondary">{labels.code}</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
