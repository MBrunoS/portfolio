import React from "react";
import { Button } from "../Button";
import { PaperPlaneTilt } from "@phosphor-icons/react";
import Link from "next/link";

type CTAProps = {
  headline: string;
  text: string;
};

const CTA: React.FC<CTAProps> = ({ headline, text }) => {
  return (
    <aside className="flex flex-col items-center md:flex-row md:justify-between gap-y-4 lg:px-16">
      <h2 className="font-bold text-2xl lg:text-4xl">{headline}</h2>

      <Link href="mailto:contact@mbrunos.dev" target="_blank">
        <Button
          variant="block"
          icon={<PaperPlaneTilt size={24} />}
          className="px-6 lg:py-4 lg:px-8 text-lg lg:text-2xl gap-2"
        >
          {text}
        </Button>
      </Link>
    </aside>
  );
};

export default CTA;
