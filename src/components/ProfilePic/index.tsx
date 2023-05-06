import Image from "next/image";
import React from "react";
import profileImg from "../../assets/profile-pic.webp";

export const ProfilePic: React.FC = () => {
  return (
    <Image
      src={profileImg}
      alt="Maurício Bruno"
      placeholder="blur"
      className={`animate-glow max-w-[200px] md:max-w-[400px] border-4 lg:border-8 border-primary-color rounded-full`}
    />
  );
};
