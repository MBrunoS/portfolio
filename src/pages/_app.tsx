import type { AppProps } from "next/app";
import { Catamaran, Open_Sans } from "@next/font/google";
import "../styles/globals.css";

const catamaran = Catamaran({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          font-family: ${openSans.style.fontFamily};
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${catamaran.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
