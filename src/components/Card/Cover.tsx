import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
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
