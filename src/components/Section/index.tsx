import React from "react";
import { Fade } from "@/components/Fade";

type SectionProps = {
  id: string;
  children: React.ReactNode;
  variant?: "simple" | "hero" | "featured";
};

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  variant = "simple",
}) => {
  if (variant === "hero") {
    return (
      <section
        id={id}
        className="relative flex flex-col items-center justify-center h-screen"
      >
        {children}
      </section>
    );
  } else if (variant === "featured") {
    return (
      <section
        id={id}
        className="px-4 py-16 border-solid sm:px-6 md:px-20 bg-card-gradient border-y border-highlight-color"
      >
        <Fade viewFactor={0.15} duration={300}>
          {children}
        </Fade>
      </section>
    );
  }

  return (
    <section
      id={id}
      className="text-center pt-16 px-4 sm:px-6 md:px-20 max-w-[1400px] mx-auto"
    >
      <Fade viewFactor={0.25} duration={500}>
        {children}
      </Fade>
    </section>
  );
};
