import React from "react";

interface Props {
  children: React.ReactNode;
  textAlign?: string;
  className?: string;
}

export const Card: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={`bg-gradient-to-bl rounded-2xl p-3 border-1 text-white ${className}`}
    >
      {children}
    </div>
  );
};
