import React from "react";

export const SkillCards: React.FC = () => {
  const skills = [
    { title: "JavaScript", icon: "javascript" },
    { title: "TypeScript", icon: "typescript" },
    { title: "React", icon: "react" },
    { title: "Next.js", icon: "next" },
    { title: "Node.js", icon: "node" },
    { title: "Express", icon: "express" },
    { title: "MongoDB", icon: "mongo" },
    { title: "PostgreSQL", icon: "pg" },
    { title: "Prisma", icon: "prisma" },
  ];

  return (
    <div className="grid grid-cols-3 md:grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 lg:pl-8">
      {skills.map((skill) => (
        <div
          className="bg-primary-color/25 rounded-lg p-2 py-4 flex flex-col items-center justify-center"
          key={skill.title}
        >
          <img
            src={`/assets/icons/${skill.icon}.svg`}
            alt={skill.title}
            className="w-10 h-10 md:w-20 md:h-20 mb-2"
          />
          <p className="text-sm md:text-lg lg:text-xl text-secondary-color font-bold">
            {skill.title}
          </p>
        </div>
      ))}
    </div>
  );
};
