import { ArrowSquareOut } from "@phosphor-icons/react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface CoverCardProps {
  children: React.ReactNode;
  imgUrl: string | StaticImageData;
  title: string;
  link: string;
  className?: string;
}

export const CoverCard: React.FC<CoverCardProps> = ({
  children,
  imgUrl,
  title,
  link,
  className,
}) => {
  return (
    <div
      className={`w-full bg-card-gradient border border-solid border-highlight-color rounded-2xl border-1 overflow-hidden ${className}`}
    >
      <Image
        src={imgUrl}
        alt={title}
        fill
        className="object-contain !relative !h-[unset]"
      />

      <div className="px-6 py-10">
        <div className="font-bold text-xl mb-4 text-primary-color">
          <Link
            href={link}
            className="hover:underline inline-flex gap-2 items-center"
            target="_blank"
          >
            {title}
            <ArrowSquareOut size={24} />
          </Link>
        </div>
        <p className="text-secondary-color text-base">{children}</p>
      </div>
    </div>
  );
};
