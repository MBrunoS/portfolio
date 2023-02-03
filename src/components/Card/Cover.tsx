import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

interface CoverCardProps {
  children: React.ReactNode;
  imgUrl: string | StaticImageData;
  title: string;
  link: string;
}

export const CoverCard: React.FC<CoverCardProps> = ({
  children,
  imgUrl,
  title,
  link,
}) => {
  return (
    <div className="w-full sm:w-[24rem] bg-card-gradient border border-solid border-highlight-color rounded-2xl border-1 overflow-hidden">
      <Image
        src={imgUrl}
        alt={title}
        fill
        className="object-contain !relative !h-[unset]"
      />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-4 text-primary-color">
          <Link
            href={link}
            className="hover:underline inline-flex gap-2 items-center"
            target="_blank"
          >
            {title}
            <FiExternalLink />
          </Link>
        </div>
        <p className="text-secondary-color text-base">{children}</p>
      </div>
    </div>
  );
};
