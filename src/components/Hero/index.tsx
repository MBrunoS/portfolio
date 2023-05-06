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
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-center px-6 pt-36 pb-10 md:px-16 md:pb-20 gap-10 md:gap-20">
      <div className="flex flex-col gap-3 items-center md:items-start text-center md:text-start">
        <Heading as="h1">{title}</Heading>
        <p className="text-secondary-color text-xl lg:text-3xl">{tagline}</p>
        <div className="flex gap-3 mt-2">{children}</div>
      </div>
      <ProfilePic />
    </section>
  );
};
