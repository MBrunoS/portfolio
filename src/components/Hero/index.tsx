import React from "react";
import { Heading } from "../Heading";
import { ProfilePic } from "../ProfilePic";

type HeroProps = {
  title: string;
  tagline: string;
  children?: React.ReactNode;
};

export const Hero: React.FC<HeroProps> = ({ title, tagline, children }) => {
  return (
    <section className="relative flex items-center justify-center px-16 pt-36 pb-20 gap-20">
      <div className="flex flex-col gap-4">
        <Heading as="h1">{title}</Heading>
        <p className="text-secondary-color text-3xl">{tagline}</p>
        <div className="flex gap-3">{children}</div>
      </div>
      <ProfilePic />
    </section>
  );
};
