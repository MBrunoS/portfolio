import React from "react";
import { Fade } from "react-awesome-reveal";

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
        className="flex flex-col items-center justify-center h-screen relative"
      >
        {children}
      </section>
    );
  } else if (variant === "featured") {
    return (
      <section
        id={id}
        className="text-center py-16 px-4 sm:px-6 md:px-20 bg-card-gradient border-y border-solid border-highlight-color backdrop-blur-xl"
      >
        <Fade triggerOnce fraction={0.25} duration={500} cascade>
          {children}
        </Fade>
      </section>
    );
  }

  return (
    <section id={id} className="text-center py-16 px-4 sm:px-6 md:px-20">
      <Fade triggerOnce fraction={0.25} duration={500} cascade>
        {children}
      </Fade>
    </section>
  );
};
