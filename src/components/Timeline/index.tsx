import { Fragment } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { ExperienceCard } from "../Cards/Experience";

type TimelineProps = HTMLAttributes<HTMLDivElement> & {
  experiences: {
    company: string;
    role: string;
    period: string;
    description: string;
  }[];
};

export function Timeline({
  experiences,
  className,
  ...props
}: TimelineProps) {
  const elements: ReactNode[] = [];

  for (let i = 0; i < experiences.length; i += 2) {
    const leftExp = experiences[i];
    const rightExp = experiences[i + 1] ?? null;

    elements.push(
      <Fragment key={`timeline-row-${i}`}>
        <ExperienceCard {...leftExp} />
        {rightExp && (
          <ExperienceCard {...rightExp} direction="right" />
        )}
      </Fragment>
    );
  }

  return (
    <div className={twMerge("container", className)} {...props}>
      <div className="flex flex-col grid-cols-9 mx-auto md:grid">
        {elements}
      </div>
    </div>
  );
}
