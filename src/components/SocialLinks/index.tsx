import React from "react";
import Link from "next/link";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import { Button } from "../Button";

export const SocialLinks: React.FC = () => {
  const links = [
    { url: "https://github.com/mbrunos", name: "Github", Icon: GithubLogo },
    {
      url: "https://www.linkedin.com/in/mbrunos",
      name: "Linkedin",
      Icon: LinkedinLogo,
    },
  ];

  return (
    <div className="flex justify-center gap-5">
      {links.map((link, i) => (
        <Link href={link.url} target="_blank" key={i}>
          <Button icon={<link.Icon size={20} />}>{link.name}</Button>
        </Link>
      ))}
    </div>
  );
};
