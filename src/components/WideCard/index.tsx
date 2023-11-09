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
      "w-full md:max-w-[15rem] md:h-full max-h-[10rem] object-cover border border-solid rounded-lg border-highlight-color aspect-video",
  };

  return (
    <div className="w-full lg:w-5/6">
      <div className="flex flex-col items-center flex-grow p-3 border border-solid md:p-4 bg-card-gradient border-highlight-color rounded-2xl border-1 text-secondary-color md:text-left gap-x-6 md:flex-row">
        {typeof img.src === "string" ? (
          <Image
            {...baseImgProps}
            placeholder={`data:image/svg+xml;base64,${shimmerImagePlaceholder(
              320,
              213
            )}`}
            width={320}
            height={213}
          />
        ) : (
          <Image {...baseImgProps} placeholder="blur" />
        )}

        <div className="max-sm:mt-2">{children}</div>
      </div>
    </div>
  );
};
