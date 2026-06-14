import type { Metadata } from "next";
import { FordsonDatingTool } from "@/components/FordsonDatingTool";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Fordson Tractor Dating Tool",
  description:
    "Date Fordson Model F and Model N tractors by production location and serial number.",
};

export default function FordsonDatingToolPage() {
  return (
    <>
      <PageHero
        eyebrow="Identification Tool"
        title="Fordson Tractor Dating Tool"
        intro="Use the model, production location, and serial number to estimate when a Fordson F or N was built."
      />
      <section className="paper-texture py-16 sm:py-20">
        <div className="site-container max-w-4xl">
          <FordsonDatingTool />

          <aside className="mt-10 border border-bir-navy/10 bg-white/70 p-7 sm:p-9">
            <h2 className="font-display text-2xl font-bold text-bir-navy">About the dating chart</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-bir-charcoal/65">
              <p>
                Dearborn and Cork Model F results use the explicit serial ranges supplied in the
                Fordson dating chart. Some Cork serial sequences contain gaps, and the tool does not
                assign those unlisted numbers to a year.
              </p>
              <p>
                Dagenham Model N records list the first tractor produced in each shown year. The tool
                treats the next listed starting serial as the boundary for the prior year. The
                Cork-to-Dagenham transition ends at serial 779153, followed by Dagenham Model N
                production beginning with serial 779154 in 1933.
              </p>
              <p>
                Serial numbers can be affected by incomplete records, replacement parts, or
                transcription errors. Use the result as a dating guide alongside physical tractor
                details and other documentation.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
