import React from "react";
import { CoverCard } from "../Card/Cover";
import ia from "../../assets/ia.webp";
import sorriso from "../../assets/sorriso.webp";
import wood from "../../assets/wood.webp";

export const Jobs: React.FC = () => {
  const jobList = [
    {
      title: "Inglês Aplicado",
      description: "Reformulação de todo o site",
      link: "https://inglesaplicado.com.br/v2",
      imgUrl: ia,
    },
    {
      title: "Clínica Sorriso & Cia",
      description:
        "Criação de landing page e plugin para agendamento das consultas",
      link: "https://clinicasorrisoecia.com.br/",
      imgUrl: sorriso,
    },
    {
      title: "Wood Express",
      description:
        "Site e plataforma de e-commerce para venda de móveis sob medida",
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
