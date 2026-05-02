import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface HeadingProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
  className?: string;
}

export function Heading({
  as,
  children,
  className,
}: HeadingProps) {
  const Tag = as || "h1";

  if (Tag === "h1")
    return (
      <h1
        className={twMerge(
          "bg-linear-to-r from-blue-400 via-blue-500 to-violet-500 bg-clip-text text-4xl font-extrabold uppercase text-transparent lg:text-6xl",
          className
        )}
      >
        {children}
      </h1>
    );

  return (
    <Tag
      className={twMerge(
        "bg-linear-to-r from-blue-400 via-blue-500 to-violet-500 bg-clip-text text-4xl font-extrabold uppercase text-transparent lg:text-5xl",
        className
      )}
    >
      {children}
    </Tag>
  );
}
