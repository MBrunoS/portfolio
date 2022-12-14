import React from "react";
import { HiChevronDown } from "react-icons/hi";

export const DownArrow: React.FC = () => {
  return (
    <a href="#about">
      <HiChevronDown
        size={36}
        className={`animate-bounce text-white absolute bottom-0`}
      />
    </a>
  );
};
