import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <div className="backgrounds">
            <Main />
          </div>
          <NextScript />
        </body>
      </Html>
    );
  }
}
