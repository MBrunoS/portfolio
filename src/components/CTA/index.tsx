import React from "react";
import { Button } from "../Button";
import { PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

type CTAProps = {
  headline: string;
  button: string;
};

const CTA: React.FC<CTAProps> = ({ headline, button }) => {
  return (
    <aside className="flex flex-col items-center md:flex-row md:justify-between gap-y-4 lg:px-16">
      <h2 className="text-2xl font-bold lg:text-4xl">{headline}</h2>

      <Link href="mailto:contact@mbrunos.dev" target="_blank">
        <Button
          variant="block"
          icon={<PaperPlaneTilt size={24} />}
          className="gap-2 px-6 text-lg lg:py-4 lg:px-8 lg:text-2xl"
        >
          {button}
        </Button>
      </Link>
    </aside>
  );
};

export default CTA;
