import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Public_Sans, Rubik } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { getTranslation } from "./i18n";
import { AOSInit } from "@/components/AOSInit";
import type { ReactNode } from "react";

import "@/styles/globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-rubik",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-public-sans",
});

type LayoutProps = {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  const t = await getTranslation(locale);

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${rubik.variable} ${publicSans.variable} bg-[url("/assets/backgrounds/noise.png")] bg-[#090b11]`}
      >
        <AOSInit />
        <Navbar
          links={[
            { name: t.navbar.about, href: "/#about" },
            { name: t.navbar.impact, href: "/#impact" },
            { name: t.navbar.projects, href: "/#projects" },
            { name: t.navbar.experience, href: "/#experience" },
            { name: t.navbar.talks, href: "/#talks" },
          ]}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
