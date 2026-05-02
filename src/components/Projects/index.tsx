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
    <div className="mt-10 flex flex-col items-center justify-around gap-6 md:mt-14 md:gap-10">
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
                  className="rounded-full border border-primary-color/75 px-2.5 py-1 text-xs font-medium text-secondary-color last:mr-0"
                >
                  {badge}
                </p>
              ))}
            </div>
          </div>

          <p className="mt-3 mb-5 px-2 text-base md:px-0">
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
