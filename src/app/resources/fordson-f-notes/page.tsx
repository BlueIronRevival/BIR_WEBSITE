import type { Metadata } from "next";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { PageHero } from "@/components/PageHero";
import { siteImages } from "@/config/images";

export const metadata: Metadata = {
  title: "The Fordson F: The Tractor That Started It All",
  description:
    "Explore the history, engineering, agricultural impact, and enduring legacy of the Fordson F tractor.",
};

const articleParagraphs = [
  "The Fordson F holds a unique place in agricultural history. Long before the familiar blue and gray Ford tractors of the 1940s, 1950s, and beyond, there was the Fordson—a simple, rugged machine that helped bring mechanized farming within reach of ordinary farmers.",
  "Introduced in 1917 by Henry Ford and his son Edsel through the Ford Motor Company's tractor division, the Fordson was designed with the same philosophy that made the Model T successful: build something dependable, practical, and affordable enough that everyday people could own one.",
  "At a time when many tractors remained expensive and out of reach for smaller farms, the Fordson changed the industry. Mass production techniques allowed Ford to lower costs dramatically, putting tractor ownership within reach of thousands of farmers who had previously relied on horses. By the early 1920s, Fordson had become one of the best-selling tractors in the world.",
  "The Fordson F itself was remarkably simple. Power came from a four-cylinder gasoline engine that shared much of its design philosophy with the Model T. It featured a thermosiphon cooling system that required no water pump, splash lubrication without an oil pump, and an internal magneto ignition system housed within the flywheel assembly. These design choices reduced complexity and kept the tractor easy to maintain with basic tools and a little mechanical understanding.",
  "The transmission provided three forward gears and one reverse, allowing the tractor to handle a variety of tasks on farms of all sizes. From plowing fields and powering threshing machines to belt work and hauling loads, the Fordson proved itself as a capable workhorse.",
  "Like many early tractors, the Fordson demanded respect from its operator. Early models gained a reputation for being somewhat unforgiving if improperly operated, particularly under heavy drawbar loads. Farmers quickly learned the importance of proper hitching techniques and ballast. Those lessons, passed from one generation to the next, became part of the culture surrounding these machines.",
  "Production of the Fordson F in the United States ended in 1928, but its influence continued for decades. The engineering principles established by the Fordson laid the foundation for Ford's future agricultural equipment, eventually leading to legendary tractors such as the 9N, 2N, 8N, NAA, Hundred Series, and Thousand Series machines.",
  "Today, surviving Fordson Fs represent far more than antique iron. They are reminders of a turning point in agriculture—a period when technology transformed farming from muscle-powered labor into mechanized efficiency. Their simplicity invites curiosity, and their survival speaks to the durability of early engineering.",
  "At Blue Iron Revival, the Fordson F represents the beginning of the Ford tractor story. It is where the lineage starts. Preserving these tractors isn't simply about restoring old equipment to running condition; it's about preserving the ingenuity, determination, and practicality that shaped rural life for generations.",
  "Nearly a century after they first rolled out of Ford factories, Fordson Fs continue to attract collectors, restorers, and enthusiasts who appreciate honest machinery built to do an honest day's work. Whether sitting proudly in a collection, participating in demonstrations, or returning to the field for the occasional parade lap, these tractors remind us that some of the most important machines ever built succeeded not through complexity, but through simplicity done exceptionally well.",
];

export default function FordsonFNotesPage() {
  return (
    <>
      <PageHero
        eyebrow="Fordson F Resource Center"
        title="The Fordson F: The Tractor That Started It All"
        intro="The simple, rugged machine that brought mechanized farming within reach of ordinary farmers."
      />

      <article className="paper-texture py-16 sm:py-20">
        <div className="site-container">
          <div className="mx-auto max-w-4xl">
            <ImageWithFallback
              src={siteImages.fordsonImage}
              alt="Fordson F tractor"
              fallbackLabel="FORDSON F"
              className="mb-12 min-h-[340px] shadow-2xl sm:min-h-[500px]"
              priority
            />

            <div className="border-t-4 border-bir-blue bg-white px-7 py-10 shadow-card sm:px-12 sm:py-14">
              <p className="eyebrow text-bir-rust">History & Legacy</p>
              <div className="accent-rule bg-bir-blue" />
              <div className="mt-8 space-y-7">
                {articleParagraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="font-display text-lg leading-9 text-bir-charcoal/80 sm:text-xl"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
