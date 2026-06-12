import Link from "next/link";
import { FeatureSection } from "@/components/FeatureSection";
import { Hero } from "@/components/Hero";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { MissionSection } from "@/components/MissionSection";
import { ResourceCard } from "@/components/ResourceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { TractorCard } from "@/components/TractorCard";
import { siteImages } from "@/config/images";
import { resources, tractors } from "@/data/site";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="paper-texture py-20">
        <div className="site-container grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <p className="eyebrow text-bir-rust">Built to Work. Worth Preserving.</p>
            <h2 className="mt-3 font-display text-5xl font-bold leading-tight text-bir-navy sm:text-6xl">
              Old tractors still have plenty to teach us.
            </h2>
            <div className="accent-rule bg-bir-blue" />
            <p className="mt-7 text-lg leading-8 text-bir-charcoal/75">
              Blue Iron Revival is dedicated to preserving, understanding, and using old Ford tractors. From careful restorations to the production codes stamped into the castings, we document what keeps these machines useful and their stories honest.
            </p>
            <p className="mt-5 leading-8 text-bir-charcoal/70">
              This is a working collection and a growing resource for owners who believe history is best understood with a wrench in hand and an engine running nearby.
            </p>
            <Link href="/about" className="button button-dark mt-8">Meet Blue Iron Revival</Link>
          </div>
          <ImageWithFallback
            src={siteImages.ownerPortrait}
            alt="Blue Iron Revival owner in the tractor shop"
            fallbackLabel="OWNER / SHOP PHOTO"
            className="min-h-[470px] shadow-2xl"
          />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="site-container">
          <SectionHeading
            eyebrow="Helpful Tools & Resources"
            title="Knowledge for the Shop and the Field"
            intro="Practical references built around the questions antique Ford tractor owners actually ask."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => <ResourceCard key={resource.title} {...resource} />)}
          </div>
        </div>
      </section>

      <section className="paper-texture py-20">
        <div className="site-container">
          <SectionHeading
            eyebrow="The Collection"
            title="A Century of Blue and Gray"
            intro="Five machines trace the evolution from steel wheels to the blue three-cylinder era."
          />
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-6">
            {tractors.map((tractor, index) => (
              <div
                key={tractor.name}
                className={`lg:col-span-2 ${index === 3 ? "lg:col-start-2" : ""}`}
              >
                <TractorCard {...tractor} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeatureSection />
      <MissionSection />
    </>
  );
}
