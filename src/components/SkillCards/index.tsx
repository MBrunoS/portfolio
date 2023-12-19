"use client";
import { Carousel } from "arc-carousel";
import React from "react";
import * as Icons from "../../assets/icons";

export const SkillCards: React.FC = () => {
  const slides = [
    [
      { title: "HTML", Icon: Icons.Html },
      { title: "CSS", Icon: Icons.Css },
      { title: "JavaScript", Icon: Icons.Javascript },
      { title: "TypeScript", Icon: Icons.Typescript },
      { title: "React", Icon: Icons.React },
      { title: "Next.js", Icon: Icons.Next },
    ],
    [
      { title: "TailwindCSS", Icon: Icons.Tailwind },
      { title: "Chakra UI", Icon: Icons.ChakraUi },
      { title: "Radix UI", Icon: Icons.RadixUi },
      { title: "Zod", Icon: Icons.Zod },
      { title: "React Hook Form", Icon: Icons.ReactHookForm },
      { title: "React Query", Icon: Icons.ReactQuery },
    ],
    [
      { title: "Redux", Icon: Icons.Redux },
      { title: "React Router", Icon: Icons.ReactRouter },
      { title: "SWR", Icon: Icons.SWR },
      { title: "GraphQL", Icon: Icons.Graphql },
      { title: "Turborepo", Icon: Icons.Turborepo },
      { title: "Vite", Icon: Icons.Vite },
    ],
    [
      { title: "Jest", Icon: Icons.Jest },
      { title: "Vitest", Icon: Icons.Vitest },
      { title: "Testing Library", Icon: Icons.TestingLibrary },
      { title: "Cypress", Icon: Icons.Cypress },
      { title: "Playwright", Icon: Icons.Playwright },
      { title: "Storybook", Icon: Icons.Storybook },
    ],
    [
      { title: "Node.js", Icon: Icons.Node },
      { title: "Express", Icon: Icons.Express },
      { title: "Nest", Icon: Icons.Nest },
      { title: "Prisma", Icon: Icons.Prisma },
      { title: "PostgreSQL", Icon: Icons.Pg },
      { title: "MongoDB", Icon: Icons.Mongo },
    ],
    [
      { title: "Docker", Icon: Icons.Docker },
      { title: "Electron", Icon: Icons.Electron },
      { title: "Firebase", Icon: Icons.Firebase },
      { title: "Socket.io", Icon: Icons.SocketIo },
      { title: "WebRTC", Icon: Icons.WebRTC },
      { title: "Go", Icon: Icons.Go },
    ],
    [
      { title: "Git", Icon: Icons.Git },
      { title: "GitHub", Icon: Icons.Github },
      { title: "GitLab", Icon: Icons.Gitlab },
      { title: "Bitbucket", Icon: Icons.Bitbucket },
      { title: "Vercel", Icon: Icons.Vercel },
      { title: "Netlify", Icon: Icons.Netlify },
    ],
    [
      { title: "VS Code", Icon: Icons.VsCode },
      { title: "WSL", Icon: Icons.Linux },
      { title: "Figma", Icon: Icons.Figma },
      { title: "Miro", Icon: Icons.Miro },
      { title: "Photoshop", Icon: Icons.Photoshop },
      { title: "Illustrator", Icon: Icons.Illustrator },
    ],
  ];

  return (
    <Carousel.Root
      className="relative flex lg:ml-10"
      autoplay
      autoplayInterval={4000}
      hasLoop
    >
      <Carousel.PrevButton className="text-secondary-color hover:text-secondary-color/50" />

      <Carousel.Wrapper>
        {slides.map((slide, i) => (
          <Carousel.Slide key={i} className="grid grid-cols-3">
            {slide.map((skill) => (
              <div
                key={skill.title}
                className="flex flex-col items-center justify-center py-4 md:py-6"
              >
                {
                  <skill.Icon
                    className="h-10 mb-2 max-w-[2.5rem] md:max-w-[5rem] md:h-20"
                    aria-hidden
                  />
                }
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
