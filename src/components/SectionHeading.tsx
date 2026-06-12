type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  light?: boolean;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, intro, light = false, align = "center" }: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"} ${light ? "text-white" : ""}`}>
      {eyebrow && <p className={`eyebrow ${light ? "text-bir-cream" : "text-bir-rust"}`}>{eyebrow}</p>}
      <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">{title}</h2>
      <div className={`accent-rule ${align === "center" ? "mx-auto" : ""} ${light ? "bg-bir-cream" : "bg-bir-blue"}`} />
      {intro && <p className={`mt-5 text-lg leading-8 ${light ? "text-white/75" : "text-bir-charcoal/70"}`}>{intro}</p>}
    </div>
  );
}
