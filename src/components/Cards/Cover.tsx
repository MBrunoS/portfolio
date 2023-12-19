import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

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
    <div className={className}>
      <Image
        src={imgUrl}
        alt={title}
        fill
        className="object-contain !relative !h-[unset] rounded-2xl"
      />

      <div className="py-10">
        <div className="mb-4 text-xl font-bold text-primary-color">
          <Link
            href={link}
            className="inline-flex items-center gap-2 hover:underline"
            target="_blank"
          >
            {title}
            <ArrowSquareOut size={24} />
          </Link>
        </div>
        <p className="text-base text-secondary-color">{children}</p>
      </div>
    </div>
  );
};
