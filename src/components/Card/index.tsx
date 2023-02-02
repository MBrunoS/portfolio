import React from "react";

interface CardProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="p-3 lg:p-5 bg-card-gradient border border-solid border-highlight-color rounded-2xl border-1 text-secondary-color">
      {children}
    </div>
  );
};
