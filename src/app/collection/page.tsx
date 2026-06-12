import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { TractorCard } from "@/components/TractorCard";
import { tractors } from "@/data/site";

export default function CollectionPage() {
  return (
    <>
      <PageHero
        eyebrow="The Working Collection"
        title="Six Tractors. One Evolving Story."
        intro="From the Fordson F to the three-cylinder era, each machine marks a change in how Ford put power to the ground."
      />
      <section className="paper-texture py-20">
        <div className="site-container">
          <SectionHeading title="Meet the Machines" intro="Each collection entry is ready to grow into a detailed history, specification guide, and restoration record." />
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {tractors.map((tractor) => <TractorCard key={tractor.name} {...tractor} />)}
          </div>
        </div>
      </section>
    </>
  );
}
