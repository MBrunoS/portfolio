import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type SectionProps = HTMLAttributes<HTMLDivElement> & {
  variant?: "simple" | "hero" | "featured";
};

export const Section: React.FC<SectionProps> = ({
  variant = "simple",
  className,
  ...props
}) => {
  const classNames = {
    hero: "relative flex flex-col-reverse items-center justify-center gap-10 px-6 pb-20 md:flex-row pt-36 md:px-16 md:gap-20",
    featured:
      "px-4 py-16 border-solid sm:px-6 md:px-20 bg-card-gradient border-y border-highlight-color",
    simple: "text-center pt-16 px-4 sm:px-6 md:px-20 max-w-[1400px] mx-auto",
  };

  return (
    <section className={twMerge(classNames[variant], className)} {...props} />
  );
};
