import Head from "next/head";
import { Text } from "../components/Text";

export default function Home() {
  return (
    <>
      <Head>
        <title>Maurício Bruno - Desenvolvedor Front-end</title>
        <meta
          name="description"
          content="Maurício Bruno - Desenvolvedor Front-end"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Text as="h1" variant="heading">
        Maurício Bruno
      </Text>
      <Text variant="caption">Desenvolvedor Front-end</Text>
    </>
  );
}
