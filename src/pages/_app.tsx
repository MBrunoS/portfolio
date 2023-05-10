import type { AppProps } from "next/app";
import { Rubik, Public_Sans } from "next/font/google";
import { appWithI18Next } from "ni18n";
import { ni18nConfig } from "../../ni18n.config";
import "../styles/globals.css";

const rubik = Rubik({ subsets: ["latin"], weight: ["400", "700"] });
const publicSans = Public_Sans({ subsets: ["latin"], weight: ["400", "700"] });

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          font-family: ${publicSans.style.fontFamily};
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        #home {
          font-family: ${rubik.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default appWithI18Next(App, ni18nConfig);
