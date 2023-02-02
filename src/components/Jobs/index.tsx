import React from "react";
import { CoverCard } from "../Card/Cover";
import ia from "../../assets/ia.webp";
import sorriso from "../../assets/sorriso.webp";
import wood from "../../assets/wood.webp";

const Jobs: React.FC = () => {
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
    <div className="flex flex-col md:flex-row gap-4 items-center justify-around mt-8">
      {jobList.map((job, i) => (
        <CoverCard
          title={job.title}
          link={job.link}
          imgUrl={job.imgUrl}
          key={i}
        >
          {job.description}
        </CoverCard>
      ))}
    </div>
  );
};

export default Jobs;
