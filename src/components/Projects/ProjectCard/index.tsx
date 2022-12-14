import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { Card } from "../../Card";

interface ProjectCardProps {
  title: string;
  imgSrc: StaticImageData;
  children: React.ReactNode;
  links: { demo?: string; code?: string };
  badges: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  imgSrc,
  links,
  children,
  badges,
}) => {
  return (
    <div className="flex flex-col items-center md:w-1/2 lg:w-1/3">
      <Image
        src={imgSrc}
        alt={title}
        placeholder="blur"
        className="w-4/5 rounded-2xl border border-solid border-highlight-color -mb-8 z-10"
      />

      <Card>
        <h3 className="font-bold text-2xl mt-5 mb-2 text-white">{title}</h3>
        {children}
        {links.demo && (
          <Link
            className="inline-block bg-primary-color rounded px-4 py-2 mt-4 mr-2 text-white hover:brightness-75"
            href={links.demo}
            target="_blank"
          >
            Demo
          </Link>
        )}
        {links.code && (
          <Link
            className="inline-block bg-secondary-color rounded px-4 py-2 mt-4 ml-2 text-highlight-color hover:brightness-75"
            href={links.code}
            target="_blank"
          >
            Código
          </Link>
        )}
        <div className="flex flex-wrap mt-4 justify-center items-center gap-2">
          {badges.map((badge, i) => (
            <p
              key={i}
              className="px-3 py-1 last:mr-0 border border-primary-color border-solid rounded-full text-sm"
            >
              {badge}
            </p>
          ))}
        </div>
      </Card>
    </div>
  );
};
