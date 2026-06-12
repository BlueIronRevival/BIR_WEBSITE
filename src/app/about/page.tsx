import Link from "next/link";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { PageHero } from "@/components/PageHero";
import { siteImages } from "@/config/images";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Blue Iron Revival"
        title="Preservation With Dirt Under Its Fingernails"
        intro="A personal collection, a practical reference library, and a belief that antique tractors should remain understandable and useful."
      />
      <section className="paper-texture py-20">
        <div className="site-container grid items-center gap-12 lg:grid-cols-2">
          <ImageWithFallback src={siteImages.ownerPortrait} alt="The owner of Blue Iron Revival in the shop" fallbackLabel="OWNER PORTRAIT" className="min-h-[560px] shadow-2xl" />
          <div>
            <p className="eyebrow text-bir-rust">Why BIR Exists</p>
            <h2 className="mt-3 font-display text-5xl font-bold leading-tight text-bir-navy">Keep the history running.</h2>
            <div className="accent-rule bg-bir-blue" />
            <p className="mt-7 text-lg leading-8 text-bir-charcoal/75">
              Blue Iron Revival began with a simple goal: keep antique Ford tractors out of fence rows and lawn ornament status by preserving the knowledge required to use and maintain them.
            </p>
            <p className="mt-5 leading-8 text-bir-charcoal/70">
              The collection follows Ford tractor development from the Fordson F through the classic N-Series, the Hundred Series, and into the blue three-cylinder generation. Every machine offers a different lesson in design, repair, and the people who depended on it.
            </p>
            <p className="mt-5 leading-8 text-bir-charcoal/70">
              BIR documents those lessons honestly: what worked, what did not, what the books say, and what a century of wear can teach at the workbench.
            </p>
            <Link href="/contact" className="button button-dark mt-8">Get in Touch</Link>
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="site-container grid gap-8 text-center md:grid-cols-3">
          {[
            ["Preserve", "Respect original engineering and save the useful evidence each machine carries."],
            ["Understand", "Make model, production, and mechanical information easier to find and use."],
            ["Operate", "Keep tractors working safely so their history remains tangible and alive."],
          ].map(([title, text]) => (
            <div key={title} className="border-t-4 border-bir-blue p-8 shadow-card">
              <h2 className="font-display text-3xl font-bold text-bir-navy">{title}</h2>
              <p className="mt-4 leading-7 text-bir-charcoal/70">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
