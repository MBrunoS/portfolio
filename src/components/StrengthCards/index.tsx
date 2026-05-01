type StrengthCardsProps = {
  list: {
    title: string;
    description: string;
  }[];
};

export function StrengthCards({ list }: StrengthCardsProps) {
  return (
    <div className="grid gap-4 mt-10 text-left md:grid-cols-2">
      {list.map((strength) => (
        <article
          key={strength.title}
          className="p-5 border border-solid bg-card-gradient border-highlight-color rounded-xl"
        >
          <h3 className="text-xl font-bold text-white">{strength.title}</h3>
          <p className="mt-3 text-base/7 text-secondary-color">
            {strength.description}
          </p>
        </article>
      ))}
    </div>
  );
}
