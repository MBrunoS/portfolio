import { shimmerImagePlaceholder } from "@/utils/shimmer-img-placeholder";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface WideCardProps {
  img: {
    src: StaticImageData | string;
    alt: string;
  };
  children: React.ReactNode;
}

export const WideCard: React.FC<WideCardProps> = ({ img, children }) => {
  const baseImgProps = {
    src: img.src,
    alt: img.alt,
    className:
      "w-full md:max-w-xs max-h-[11.25rem] object-cover border border-solid md:w-2/5 rounded-2xl border-highlight-color",
  };

  return (
    <div className="flex flex-col w-full gap-6 lg:w-5/6">
      <div className="flex flex-col items-center flex-grow px-3 py-6 border border-solid md:py-3 bg-card-gradient border-highlight-color rounded-2xl border-1 text-secondary-color md:text-left gap-x-8 md:flex-row">
        {typeof img.src === "string" ? (
          <Image
            {...baseImgProps}
            placeholder={`data:image/svg+xml;base64,${shimmerImagePlaceholder(
              400,
              225
            )}`}
            width={400}
            height={225}
          />
        ) : (
          <Image {...baseImgProps} placeholder="blur" />
        )}

        <div>{children}</div>
      </div>
    </div>
  );
};
