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
    hero: "relative mx-auto flex w-full max-w-[1200px] flex-col-reverse items-center justify-center gap-10 px-6 pb-20 pt-32 sm:gap-12 md:flex-row md:px-10 md:pb-24 md:pt-40 lg:gap-20 lg:px-16",
    featured:
      "mx-auto w-full border-y border-solid border-highlight-color bg-card-gradient px-4 py-16 sm:px-6 md:px-10 md:py-20 lg:px-16",
    simple:
      "mx-auto w-full max-w-[1200px] px-4 pt-20 text-center sm:px-6 md:px-10 md:pt-24 lg:px-16 lg:pt-28",
  };

  return (
    <section className={twMerge(classNames[variant], className)} {...props} />
  );
}
