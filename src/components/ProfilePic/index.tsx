import Image from "next/image";
import React from "react";
import profileImg from "../../../public/profile-pic.png";

import styles from "./styles.module.css";

export const ProfilePic: React.FC = () => {
  return (
    <Image
      src={profileImg}
      alt="Maurício Bruno"
      placeholder="blur"
      className={`${styles.profilePic} max-w-[180px] border-4 border-primary-color rounded-full`}
    />
  );
};
