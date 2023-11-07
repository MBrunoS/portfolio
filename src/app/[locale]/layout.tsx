import { Public_Sans, Rubik } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { dictionaries, getTranslation } from "./i18n";

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
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${rubik.variable} ${publicSans.variable} bg-[url("/assets/backgrounds/noise.png")] bg-[#090b11]`}
      >
        <Navbar
          links={[
            { name: t.navbar.about, href: "/#about" },
            { name: t.navbar.jobs, href: "/#jobs" },
            { name: t.navbar.projects, href: "/#projects" },
            { name: t.navbar.articles, href: "/#articles" },
            { name: "Blog", href: "/blog" },
          ]}
        />
        {children}
      </body>
    </html>
  );
}
