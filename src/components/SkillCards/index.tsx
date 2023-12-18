"use client";
import { Carousel } from "arc-carousel";
import React from "react";

export const SkillCards: React.FC = () => {
  const slides = [
    [
      { title: "HTML", icon: "html" },
      { title: "CSS", icon: "css" },
      { title: "JavaScript", icon: "javascript" },
      { title: "TypeScript", icon: "typescript" },
      { title: "React", icon: "react" },
      { title: "Next.js", icon: "next" },
    ],
    [
      { title: "TailwindCSS", icon: "tailwind" },
      { title: "GraphQL", icon: "graphql" },
      { title: "Jest", icon: "jest" },
      { title: "Redux", icon: "redux" },
      { title: "Figma", icon: "figma" },
      { title: "Git", icon: "git" },
    ],
    [
      { title: "Node.js", icon: "node" },
      { title: "Express", icon: "express" },
      { title: "Nest", icon: "nest" },
      { title: "MongoDB", icon: "mongo" },
      { title: "PostgreSQL", icon: "pg" },
      { title: "Prisma", icon: "prisma" },
    ],
    [
      { title: "Firebase", icon: "firebase" },
      { title: "Docker", icon: "docker" },
      { title: "Electron", icon: "electron" },
      { title: "Bootstrap", icon: "bootstrap" },
      { title: "jQuery", icon: "jquery" },
      { title: "Linux", icon: "linux" },
    ],
  ];

  return (
    <Carousel.Root hasLoop autoplay className="relative flex lg:ml-10">
      <Carousel.PrevButton className="text-secondary-color hover:text-secondary-color/50" />

      <Carousel.Wrapper>
        {slides.map((slide, i) => (
          <Carousel.Slide key={i} className="grid grid-cols-3">
            {slide.map((skill) => (
              <div
                key={skill.title}
                className="flex flex-col items-center justify-center py-4 md:py-6"
              >
                <img
                  src={`/assets/icons/${skill.icon}.svg`}
                  alt={skill.title}
                  className="w-10 h-10 mb-2 md:w-20 md:h-20"
                />
                <p className="text-sm font-bold md:text-lg lg:text-xl text-secondary-color">
                  {skill.title}
                </p>
              </div>
            ))}
          </Carousel.Slide>
        ))}
      </Carousel.Wrapper>

      <Carousel.NextButton className="text-secondary-color hover:text-secondary-color/50" />
    </Carousel.Root>
  );
};
