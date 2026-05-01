type LayoutProps = {
  children: React.ReactNode;
};

export default function BlogLayout({ children }: LayoutProps) {
  return (
    <main className="min-h-screen pb-12 pt-16 md:pt-36 bg-[url('/assets/backgrounds/bg-subtle-dark-800w.jpg')] bg-[position:center_right] bg-no-repeat">
      {children}
    </main>
  );
}
