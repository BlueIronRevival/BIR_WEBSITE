type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
};

export function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <section className="workshop-texture bg-bir-charcoal py-20 text-white sm:py-24">
      <div className="site-container">
        <p className="eyebrow text-bir-cream">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl font-display text-5xl font-bold italic leading-tight sm:text-7xl">{title}</h1>
        <div className="accent-rule bg-bir-rust" />
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">{intro}</p>
      </div>
    </section>
  );
}
