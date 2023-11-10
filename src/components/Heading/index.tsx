import React from "react";

interface HeadingProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({ as, children, className }) => {
  const Tag = as || "h1";

  if (Tag === "h1")
    return (
      <h1 className={`text-primary-color uppercase text-4xl lg:text-6xl font-bold ${className}`}>
        {children}
      </h1>
    );

  return (
    <Tag className={`text-primary-color uppercase text-4xl lg:text-5xl font-bold ${className}`}>
      {children}
    </Tag>
  );
};
