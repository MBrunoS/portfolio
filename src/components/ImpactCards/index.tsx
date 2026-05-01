type ImpactCardsProps = {
  list: {
    metric: string;
    title: string;
    description: string;
  }[];
};

export function ImpactCards({ list }: ImpactCardsProps) {
  return (
    <div className="grid gap-4 mt-10 text-left sm:grid-cols-2 lg:grid-cols-4">
      {list.map((impact) => (
        <article
          key={`${impact.metric}-${impact.title}`}
          className="flex flex-col h-full p-5 border border-solid bg-card-gradient border-highlight-color rounded-xl"
        >
          <p className="text-4xl font-bold text-primary-color lg:text-5xl">
            {impact.metric}
          </p>
          <h3 className="mt-4 text-xl font-bold text-white">
            {impact.title}
          </h3>
          <p className="mt-3 text-base/7 text-secondary-color">
            {impact.description}
          </p>
        </article>
      ))}
    </div>
  );
}
