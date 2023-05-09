import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../../Button";

interface ProjectCardProps {
  title: string;
  imgSrc: StaticImageData;
  links: { demo?: string; code?: string };
  badges: string[];
  description: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  imgSrc,
  links,
  badges,
  description,
}) => {
  return (
    <div className="flex flex-col gap-6 w-full lg:w-5/6">
      <div
        className="px-3 py-6 md:py-3 bg-card-gradient border border-solid border-highlight-color
                rounded-2xl border-1 text-secondary-color flex-grow md:text-left
                flex flex-col items-center gap-x-8 md:flex-row"
      >
        <Image
          src={imgSrc}
          alt={title}
          placeholder="blur"
          className="w-4/5 max-w-xs md:w-2/5 rounded-2xl border border-solid border-highlight-color"
        />

        <div>
          <div className="flex flex-col items-center md:items-start lg:items-center gap-y-2 gap-x-4 lg:flex-row">
            <h3 className="font-bold text-2xl text-white">{title}</h3>

            <div className="flex flex-wrap justify-center items-center md:justify-start gap-2">
              {badges.map((badge, i) => (
                <p
                  key={i}
                  className="px-2 py-1 last:mr-0 border border-primary-color border-solid rounded-full text-xs"
                >
                  {badge}
                </p>
              ))}
            </div>
          </div>

          <p className="mt-1 mb-6">{description}</p>

          <div className="flex justify-center md:justify-start items-center gap-4">
            {links.demo && (
              <Link href={links.demo} target="_blank">
                <Button>Demo</Button>
              </Link>
            )}
            {links.code && (
              <Link href={links.code} target="_blank">
                <Button variant="secondary">Código</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
