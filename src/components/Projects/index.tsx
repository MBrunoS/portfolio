import { StaticImageData } from "next/image";
import { WideCard } from "../Cards/Wide";
import Link from "next/link";
import { Button } from "../Button";

type ProjectsProps = {
  list: {
    title: string;
    description: string;
    imgSrc: StaticImageData;
    links: {
      site?: string;
      code: string;
    };
    badges: string[];
  }[];
  labels: {
    site?: string;
    code: string;
  };
};

export function Projects({ list, labels }: ProjectsProps) {
  return (
    <div className="mt-10 flex flex-col items-center justify-around gap-6 md:mt-14 md:gap-8">
      {list.map((project) => (
        <WideCard
          img={{ src: project.imgSrc, alt: project.title }}
          key={project.title}
          data-aos="fade-up"
        >
          <div className="flex flex-col items-center gap-x-4 gap-y-3 md:items-start lg:flex-row lg:items-center">
            <h3 className="text-2xl font-bold text-white">
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

          <p className="mb-5 mt-2 text-base/7 text-secondary-color md:mb-6 md:px-0">
            {project.description}
          </p>

          <div className="flex items-center justify-center gap-4 md:justify-start">
            {project.links.site && (
              <Link href={project.links.site} target="_blank">
                <Button>{labels.site}</Button>
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
}
