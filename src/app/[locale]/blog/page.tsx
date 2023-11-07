import { Navbar } from "@/components/Navbar";
import { dictionaries, getTranslation } from "../i18n";

type Params = {
  params: {
    locale: keyof typeof dictionaries;
  };
};

export default async function Blog({ params }: Params) {
  const t = await getTranslation(params.locale);

  return (
    <section className="bg-[url('/assets/backgrounds/bg-subtle-dark-800w.jpg')] bg-[position:center] bg-no-repeat">
      <div className="h-screen" />
    </section>
  );
}
