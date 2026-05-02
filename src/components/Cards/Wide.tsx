import { shimmerImagePlaceholder } from "@/utils/shimmer-img-placeholder";
import Image, { StaticImageData } from "next/image";
import type { HTMLAttributes, ReactNode } from "react";

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
  }) => ReactNode;
};

export function WideCard({
  img,
  children,
  renderComponent,
  ...props
}: WideCardProps) {
  const baseImgProps = {
    src: img.src,
    alt: img.alt,
    className:
      "w-full md:max-w-[15rem] md:h-full max-h-[10rem] object-cover border border-solid rounded-lg border-highlight-color aspect-video",
  };

  return (
    <div className="w-full lg:w-5/6" {...props}>
      <div className="group flex flex-col items-center gap-5 rounded-2xl border border-solid border-highlight-color bg-card-gradient p-4 pb-6 text-secondary-color transition duration-300 hover:-translate-y-0.5 hover:border-primary-color/50 hover:shadow-button md:flex-row md:items-stretch md:gap-6 md:p-5 md:text-left lg:p-6">
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
          <Image
            src={baseImgProps.src}
            alt={baseImgProps.alt}
            className={baseImgProps.className}
            placeholder="blur"
          />
        )}

        <div className="w-full max-sm:mt-2">{children}</div>
      </div>
    </div>
  );
}
