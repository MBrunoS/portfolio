import React from "react";

interface CardProps {
  children: React.ReactNode;
  textAlign?: string;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={`p-3 lg:p-6 bg-card-gradient border border-solid border-highlight-color rounded-2xl border-1 text-secondary-color ${className}`}
    >
      {children}
    </div>
  );
};
