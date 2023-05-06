import React from "react";

type PillProps = {
  children: React.ReactNode;
};

export const Pill: React.FC<PillProps> = ({ children }) => {
  return (
    <div className="flex items-center gap-2 rounded-full bg-primary-color text-white px-4 py-2 text-lg">
      {children}
    </div>
  );
};
