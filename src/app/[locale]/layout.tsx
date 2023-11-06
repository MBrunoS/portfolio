import { Public_Sans, Rubik } from "next/font/google";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${rubik.variable} ${publicSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
