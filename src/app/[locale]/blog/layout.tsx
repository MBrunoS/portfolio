import { dictionaries, getTranslation } from "../i18n";

type LayoutProps = {
  children: React.ReactNode;
  params: {
    locale: keyof typeof dictionaries;
  };
};

export default async function BlogLayout({ children, params }: LayoutProps) {
  const t = await getTranslation(params.locale);

  return (
    <main className="min-h-screen pb-12 pt-16 md:pt-36 bg-[url('/assets/backgrounds/bg-subtle-dark-800w.jpg')] bg-[position:center_right] bg-no-repeat">
      {children}
    </main>
  );
}
