import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { stories } from "@/data/site";

export default function StoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Stories from the Shop"
        title="Every Tractor Arrives With a Past"
        intro="Restoration journals, mechanical lessons, and the human stories attached to old Ford iron."
      />
      <section className="paper-texture py-20">
        <div className="site-container">
          <SectionHeading title="Field Notes & Restoration Stories" />
          <div className="grid gap-7 lg:grid-cols-3">
            {stories.map((story, index) => (
              <article key={story.title} className="flex min-h-[410px] flex-col bg-white shadow-card">
                <div className={`h-3 ${index === 1 ? "bg-bir-rust" : "bg-bir-blue"}`} />
                <div className="flex flex-1 flex-col p-8">
                  <p className="eyebrow text-bir-rust">{story.category}</p>
                  <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-bir-navy">{story.title}</h2>
                  <p className="mt-5 flex-1 leading-8 text-bir-charcoal/70">{story.excerpt}</p>
                  <p className="mt-6 border-t border-bir-navy/10 pt-5 text-xs font-bold uppercase tracking-wider text-bir-charcoal/45">{story.date}</p>
                  <Link href="/stories" className="mt-5 text-sm font-bold uppercase tracking-wider text-bir-blue">Read story -&gt;</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
