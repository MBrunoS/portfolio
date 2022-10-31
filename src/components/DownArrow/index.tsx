import React from "react";
import styles from "./styles.module.css";
import { HiChevronDown } from "react-icons/hi";

export const DownArrow: React.FC = () => {
  return (
    <HiChevronDown
      size={36}
      className={`${styles.arrow} text-white absolute bottom-0`}
    />
  );
};
