import { shimmerImagePlaceholder } from "@/utils/shimmer-img-placeholder";
import Image, { StaticImageData } from "next/image";
import React, { HTMLAttributes } from "react";

type WideCardProps = HTMLAttributes<HTMLDivElement> & {
  img: {
    src: StaticImageData | string;
    alt: string;
  };
  renderComponent?: (props: {
    className: string;
    placeholder: `data:image/${string}`;
    width: number;
    height: number;
  }) => React.ReactNode;
};

export const WideCard: React.FC<WideCardProps> = ({
  img,
  children,
  renderComponent,
  ...props
}) => {
  const baseImgProps = {
    src: img.src,
    alt: img.alt,
    className:
      "w-full md:max-w-[15rem] md:h-full max-h-[10rem] object-cover border border-solid rounded-lg border-highlight-color aspect-video",
  };

  return (
    <div className="w-full lg:w-5/6" {...props}>
      <div className="flex flex-col items-center flex-grow p-3 pb-6 border border-solid md:p-4 bg-card-gradient border-highlight-color rounded-2xl border-1 text-secondary-color md:text-left gap-x-6 md:flex-row">
        {renderComponent != undefined ? (
          renderComponent({
            className: baseImgProps.className,
            placeholder: `data:image/svg+xml;base64,${shimmerImagePlaceholder(
              320,
              213
            )}`,
            width: 320,
            height: 213,
          })
        ) : (
          <Image {...baseImgProps} placeholder="blur" />
        )}

        <div className="max-sm:mt-2">{children}</div>
      </div>
    </div>
  );
};
