import type { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type SectionProps = HTMLAttributes<HTMLDivElement> & {
  variant?: "simple" | "hero" | "featured";
};

export function Section({
  variant = "simple",
  className,
  ...props
}: SectionProps) {
  const classNames = {
    hero: "relative flex flex-col-reverse items-center justify-center gap-10 px-6 pb-20 md:flex-row pt-32 md:px-12 md:gap-16 lg:px-20 lg:pt-36",
    featured:
      "px-4 py-18 border-solid sm:px-6 md:px-12 lg:px-20 bg-card-gradient border-y border-highlight-color",
    simple:
      "text-center pt-20 px-4 sm:px-6 md:px-12 lg:px-20 max-w-[1280px] mx-auto",
  };

  return (
    <section className={twMerge(classNames[variant], className)} {...props} />
  );
}
