import { PageHero } from "@/components/PageHero";
import { ResourceCard } from "@/components/ResourceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { resources } from "@/data/site";

const resourceItems = [
  ...resources.slice(0, 4),
  {
    title: "Fluid and Spec Charts",
    description: "Quick-reference capacities, fluid guidance, tune-up numbers, and common specifications.",
    href: "/resources",
    icon: "FS",
    action: "View charts",
  },
  {
    title: "Restoration Articles",
    description: "Shop-tested notes on teardown, repair decisions, preservation, and putting tractors back to work.",
    href: "/stories",
    icon: "RA",
    action: "Read articles",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="BIR Knowledge Base"
        title="Tools for Understanding Your Tractor"
        intro="Start with a serial number, decode a model, or dig into practical reference material collected from the shop."
      />
      <section className="paper-texture py-20">
        <div className="site-container">
          <SectionHeading title="Resource Library" intro="Built to be useful at the workbench, in the barn, or while looking over a tractor for the first time." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resourceItems.map((resource) => <ResourceCard key={resource.title} {...resource} />)}
          </div>
        </div>
      </section>
    </>
  );
}
