import React from "react";
import { CoverCard } from "../Card/Cover";
import ia from "../../assets/ia.webp";
import sorriso from "../../assets/sorriso.webp";
import wood from "../../assets/wood.webp";
import { useTranslation } from "react-i18next";

export const Jobs: React.FC = () => {
  const { t } = useTranslation();
  const jobList = [
    {
      title: t("jobs.ia.title"),
      description: t("jobs.ia.description"),
      link: "https://inglesaplicado.com.br/v2",
      imgUrl: ia,
    },
    {
      title: t("jobs.sorriso.title"),
      description: t("jobs.sorriso.description"),
      link: "https://clinicasorrisoecia.com.br/",
      imgUrl: sorriso,
    },
    {
      title: t("jobs.wood.title"),
      description: t("jobs.wood.description"),
      link: "https://woodexpress.ind.br/",
      imgUrl: wood,
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-10 lg:gap-20 place-items-center mt-8 sm:px-8 md:px-0">
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
