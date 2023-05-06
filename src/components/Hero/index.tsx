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
    <section className="relative flex flex-col md:flex-row items-center justify-center px-16 pt-36 pb-20 gap-20">
      <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-start">
        <Heading as="h1">{title}</Heading>
        <p className="text-secondary-color text-xl lg:text-3xl">{tagline}</p>
        <div className="hidden md:flex md:flex-row gap-3">{children}</div>
      </div>
      <ProfilePic />
    </section>
  );
};
