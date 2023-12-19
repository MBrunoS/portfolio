import { Analytics } from "@vercel/analytics/react";
import { Public_Sans, Rubik } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { dictionaries, getTranslation } from "./i18n";
import { AOSInit } from "@/components/AOSInit";

import "arc-carousel/styles.css";
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
  children: React.ReactNode;
  params: {
    locale: keyof typeof dictionaries;
  };
};

export default async function RootLayout({ children, params }: LayoutProps) {
  const t = await getTranslation(params.locale);
  return (
    <html lang={params.locale}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <AOSInit />
      <body
        className={`${rubik.variable} ${publicSans.variable} bg-[url("/assets/backgrounds/noise.png")] bg-[#090b11]`}
      >
        <Navbar
          links={[
            { name: t.navbar.about, href: "/#about" },
            { name: t.navbar.projects, href: "/#projects" },
            { name: t.navbar.experience, href: "/#experience" },
            { name: t.navbar.talks, href: "/#talks" },
            { name: "Blog", href: "/blog" },
          ]}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
