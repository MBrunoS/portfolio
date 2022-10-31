import React from "react";

interface Props {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
}

export const Heading: React.FC<Props> = ({ as, children }) => {
  const Tag = as || "h1";

  return (
    <Tag className="text-primary-color uppercase text-4xl font-black my-2">
      {children}
    </Tag>
  );
};
