import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFileEarmarkPerson } from "react-icons/bs";
import Link from "next/link";

export const SocialLinks: React.FC = () => {
  const links = [
    { url: "https://github.com/MBrunoS", Icon: FaGithub },
    {
      url: "https://www.linkedin.com/in/mauricio-bruno-da-silva",
      Icon: FaLinkedin,
    },
    { url: "", Icon: BsFileEarmarkPerson },
  ];

  return (
    <div className="flex justify-center gap-5">
      {links.map((link, i) => (
        <Link href={link.url} target="_blank" key={i}>
          <link.Icon className="text-4xl text-tertiary-color hover:text-secondary-color transition-colors" />
        </Link>
      ))}
    </div>
  );
};
