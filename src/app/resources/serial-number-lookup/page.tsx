import { PageHero } from "@/components/PageHero";
import { SerialNumberLookupTool } from "@/components/SerialNumberLookupTool";

export default function SerialNumberLookupPage() {
  return (
    <>
      <PageHero
        eyebrow="Identification Tool"
        title="Ford Tractor Serial Number Lookup"
        intro="A dedicated lookup experience is being prepared for the Blue Iron Revival reference library."
      />
      <section className="paper-texture py-20">
        <div className="site-container max-w-5xl">
          <SerialNumberLookupTool />
        </div>
      </section>
    </>
  );
}
