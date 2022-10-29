import Head from "next/head";

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

      <nav className="fixed bg-zinc-900 w-full p-4">
        <div className="left">
          <span className="text-primary-color uppercase text-4xl font-black">
            MB
          </span>
        </div>
      </nav>

      <section className="flex flex-row items-center justify-center pt-20 h-[90vh] text-center">
        <div>
          <p className="text-secondary-color uppercase mb-2">
            Desenvolvedor Front-end
          </p>
          <h1 className="text-primary-color uppercase text-4xl font-black">
            Maurício Bruno
          </h1>
          <div className="flex"></div>
        </div>
      </section>
    </>
  );
}
