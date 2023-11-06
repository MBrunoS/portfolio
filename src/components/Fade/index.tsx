"use client";
import { RevealWrapper } from "next-reveal";

type FadeProps = {
  children: React.ReactNode;
  viewFactor: number;
  duration: number;
};

export const Fade: React.FC<FadeProps> = ({
  children,
  viewFactor,
  duration,
}) => {
  return (
    <RevealWrapper
      duration={duration}
      viewFactor={viewFactor}
      distance="0px"
      delay={0}
    >
      {children}
    </RevealWrapper>
  );
};
