import Link from "next/link";

export function MissionSection() {
  return (
    <section className="workshop-texture relative overflow-hidden bg-bir-charcoal py-24 text-center text-white">
      <div className="site-container relative z-10">
        <p className="eyebrow text-bir-cream">Our Mission</p>
        <h2 className="mx-auto mt-3 max-w-4xl font-display text-5xl font-bold italic leading-tight sm:text-7xl">
          Not Lawn Art. Living History.
        </h2>
        <div className="accent-rule mx-auto bg-bir-rust" />
        <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/75">
          These tractors were built to work, teach, and tell stories. Blue Iron Revival exists to keep that history running, not rusting away.
        </p>
        <Link href="/about" className="button button-cream mt-9">Read the Story</Link>
      </div>
    </section>
  );
}
