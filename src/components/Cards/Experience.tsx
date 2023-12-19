import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ExperienceCardProps = {
  title: string;
  role: string;
  period: string;
  description: string;
  direction?: "left" | "right";
};

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  role,
  period,
  description,
  direction = "left",
}) => {
  const content = (
    <>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="mb-4 text-base text-disabled-color">
        {role} | {period}
      </p>
      <p className="text-base/loose text-secondary-color">{description}</p>
    </>
  );

  if (direction === "right") {
    return (
      <div className="flex md:contents">
        <div className="relative col-start-5 col-end-6 mr-5 md:mr-10 md:mx-auto">
          <div className="flex items-center justify-center w-6 h-full">
            <div className="w-1 h-full pointer-events-none bg-highlight-color"></div>
          </div>
          <div className="absolute w-6 h-6 -mt-3 rounded-full shadow bg-primary-color top-1/2"></div>
        </div>
        <div
          data-aos="fade-up"
          className="col-start-6 col-end-10 p-6 my-4 mr-auto text-left border shadow-md bg-card-gradient border-highlight-color rounded-xl"
        >
          {content}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-row-reverse md:contents">
      <div
        data-aos="fade-up"
        className="col-start-1 col-end-5 p-6 my-4 ml-auto text-left border shadow-md bg-card-gradient border-highlight-color rounded-xl"
      >
        {content}
      </div>
      <div className="relative col-start-5 col-end-6 mr-5 md:mr-10 md:mx-auto">
        <div className="flex items-center justify-center w-6 h-full">
          <div className="w-1 h-full pointer-events-none bg-highlight-color"></div>
        </div>
        <div className="absolute w-6 h-6 -mt-3 rounded-full shadow bg-primary-color top-1/2"></div>
      </div>
    </div>
  );
};
