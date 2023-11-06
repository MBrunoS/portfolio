import React from "react";
import { CoverCard } from "../Card/Cover";
import { StaticImageData } from "next/image";

type JobsProps = {
  jobList: {
    title: string;
    description: string;
    link: string;
    imgUrl: StaticImageData;
  }[];
};

export const Jobs: React.FC<JobsProps> = ({ jobList }) => {
  return (
    <div className="grid gap-4 mt-8 md:grid-cols-2 md:gap-10 lg:gap-20 place-items-center sm:px-8 md:px-0">
      {jobList.map((job, i) => (
        <CoverCard
          title={job.title}
          link={job.link}
          imgUrl={job.imgUrl}
          className="md:even:translate-y-28"
          key={i}
        >
          {job.description}
        </CoverCard>
      ))}
    </div>
  );
};
