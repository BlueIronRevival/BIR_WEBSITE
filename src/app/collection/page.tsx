import Link from "next/link";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { siteImages } from "@/config/images";

const timeline = [
  {
    years: "1917-1928",
    title: "Fordson F",
    summary: "Compact, affordable tractor power moved from novelty to everyday farm equipment.",
  },
  {
    years: "1939-1952",
    title: "N-Series",
    summary: "Ford and Ferguson popularized a small tractor with a three-point system that changed implement work.",
  },
  {
    years: "1953-1954",
    title: "NAA / Jubilee",
    summary: "Ford stepped beyond the N-Series with overhead-valve power and live hydraulics.",
  },
  {
    years: "1955-1964",
    title: "Hundred, x01, and Early Thousand",
    summary: "More horsepower, more transmissions, and more specialized chassis choices reshaped the utility tractor.",
  },
  {
    years: "1965-1975",
    title: "Three-Cylinder Thousand",
    summary: "The blue Ford era brought a modern platform that stayed useful for decades.",
  },
];

const tractorChapters = [
  {
    name: "Fordson F",
    years: "1917-1928",
    image: siteImages.fordsonImage,
    detail: "Steel-wheel pioneer",
    whyItMattered:
      "The Fordson F helped make tractor ownership realistic for smaller farms. It put dependable drawbar power into a compact package and pushed tractors from custom threshing crews and large operations into broader farm use.",
    whatChanged: [
      "Mass production lowered the cost of tractor power.",
      "Steel-wheel traction and belt pulley work made the tractor useful beyond field pulling.",
      "Its simple design helped farmers and mechanics service the machine without a dealer standing beside them.",
    ],
    identification: [
      "Look for the unit-frame engine/transmission construction and exposed steel-wheel-era layout.",
      "Serial number dating depends on production location, especially Dearborn, Cork, and later Model N history.",
      "Use the Fordson dating tool when you have a serial number and factory context.",
    ],
    personalPrompt:
      "Add where this Fordson came from, what condition it was in, known serial/factory details, and what the restoration plan is.",
    links: [{ label: "Date a Fordson", href: "/resources/fordson-dating-tool" }],
  },
  {
    name: "Ford 2N",
    years: "1942-1947",
    image: siteImages.twoNImage,
    detail: "Wartime workhorse",
    whyItMattered:
      "The 2N carried the N-Series through wartime material limits while keeping the Ferguson System in the field. It represents the practical middle chapter between the original 9N and the later, more refined 8N.",
    whatChanged: [
      "Wartime production shaped details and substitutions across the model run.",
      "The three-point Ferguson System made mounted implements central to the tractor's value.",
      "Many 2N tractors used a 9N serial prefix, which makes identification more nuanced.",
    ],
    identification: [
      "Serial numbers commonly begin with 9N even when the tractor is a 2N.",
      "Look at casting dates, controls, hubs, electrical details, and other physical clues alongside the serial.",
      "Confirm the serial number on the engine block before relying on a year estimate.",
    ],
    personalPrompt:
      "Add what makes your 2N identifiable, any wartime details it has, serial notes, repairs completed, and what still needs attention.",
    links: [{ label: "Look up a serial", href: "/resources/serial-number-lookup" }],
  },
  {
    name: "Ford NAA / Jubilee",
    years: "1953-1954",
    image: siteImages.jubileeImage,
    detail: "Golden anniversary",
    whyItMattered:
      "The NAA marked Ford's clean break from the N-Series platform. The Golden Jubilee year gave it the famous badge, but the bigger story was the move to a new chassis, new engine, and live hydraulic system.",
    whatChanged: [
      "Overhead-valve engine design replaced the flathead N-Series engine.",
      "Live hydraulics improved implement control compared with the earlier PTO-driven hydraulic pump arrangement.",
      "The tractor kept compact utility usefulness while feeling like a new generation.",
    ],
    identification: [
      "1953 tractors are the Golden Jubilee anniversary models; 1954 tractors continue as NAA models.",
      "NAA serial numbers use an NAA prefix.",
      "Hood medallions, engine design, and hydraulic layout help separate it from late N-Series tractors.",
    ],
    personalPrompt:
      "Add whether yours is a 1953 Jubilee or 1954 NAA, serial details, cosmetic condition, and any hydraulic or engine work planned.",
    links: [{ label: "Look up a serial", href: "/resources/serial-number-lookup" }],
  },
  {
    name: "Ford 641 Workmaster",
    years: "1957-1962",
    image: siteImages.workmasterImage,
    detail: "Hundred/x01 utility",
    whyItMattered:
      "The 641 sits in the x01 Workmaster era, when Ford offered more transmission and equipment combinations while keeping the utility tractor familiar and serviceable.",
    whatChanged: [
      "Model codes began carrying more information about chassis, transmission, PTO, and equipment.",
      "The red-and-gray Ford utility look became one of the most recognizable tractor profiles of the period.",
      "Buyers could choose tractors more closely matched to the job instead of one general configuration.",
    ],
    identification: [
      "The 641 model code points to the 601 Workmaster utility family.",
      "The middle digit identifies transmission/equipment configuration.",
      "Use the model decoder with the stamped model code before assuming features from paint or badges.",
    ],
    personalPrompt:
      "Add the stamped model and serial, engine/transmission details, known repairs, paint condition, and how this tractor fits your collection.",
    links: [
      { label: "Decode a model", href: "/resources/model-decoder" },
      { label: "Look up a serial", href: "/resources/serial-number-lookup" },
    ],
  },
  {
    name: "Ford 2000 3-Cylinder",
    years: "1965-1975",
    image: siteImages.ford2000Image,
    detail: "Blue Ford era",
    whyItMattered:
      "The three-cylinder Ford 2000 belongs to the blue Thousand Series era, a practical and durable generation that modernized Ford's utility tractors without making them intimidating to own.",
    whatChanged: [
      "Ford moved into a new styling and platform era with blue paint and three-cylinder engines.",
      "Plant-prefixed serial numbers became important for dating and identification.",
      "The platform bridged older mechanical simplicity with a more modern working tractor feel.",
    ],
    identification: [
      "Serial numbers often include a plant prefix such as C for U.S. production.",
      "The model number and production code tell a fuller story than the hood number alone.",
      "Use both the serial lookup and model decoder when stamped information is available.",
    ],
    personalPrompt:
      "Add the model code, serial prefix, production code, what work it currently does, and any repairs or improvements planned.",
    links: [
      { label: "Decode a model", href: "/resources/model-decoder" },
      { label: "Look up a serial", href: "/resources/serial-number-lookup" },
    ],
  },
];

const changes = [
  {
    title: "Steel Wheels To Rubber Tires",
    body: "Early tractors like the Fordson F were built around steel-wheel traction. Later utility tractors made rubber tires, road travel, and smoother field work normal.",
  },
  {
    title: "Drawbar Work To Mounted Implements",
    body: "The N-Series helped make the three-point hitch central to small-farm tractor work, changing how implements attached, lifted, and followed the tractor.",
  },
  {
    title: "Flathead To Overhead-Valve Power",
    body: "The NAA moved Ford utility tractors beyond the flathead N-Series engine and into a more modern overhead-valve design.",
  },
  {
    title: "One Tractor To Many Configurations",
    body: "Hundred and x01 model codes reflect a wider menu of chassis, transmissions, PTO setups, and equipment choices.",
  },
  {
    title: "Red And Gray To Blue Ford",
    body: "The three-cylinder Thousand Series changed the look and feel of Ford tractors while keeping the machines practical and repairable.",
  },
  {
    title: "Simple ID To Code Reading",
    body: "As Ford tractors evolved, accurate identification increasingly depended on stamped model codes, production codes, prefixes, and serial ranges.",
  },
];

export default function CollectionPage() {
  return (
    <>
      <PageHero
        eyebrow="Tractor History"
        title="Ford Tractor History, Told Through The Collection."
        intro="Follow the major changes in Ford tractor design through the machines preserved, studied, and brought back to work at Blue Iron Revival."
      />

      <section className="paper-texture py-16 sm:py-20">
        <div className="site-container">
          <SectionHeading
            eyebrow="Timeline"
            title="From Fordson Steel To Blue Ford Utility"
            intro="This timeline is not meant to cover every Ford tractor. It follows the eras represented by the collection and shows why each step mattered."
          />

          <div className="relative mx-auto max-w-5xl">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-bir-navy/20 md:block" aria-hidden="true" />
            <div className="space-y-5">
              {timeline.map((item) => (
                <article key={item.title} className="relative grid gap-4 bg-white p-6 shadow-card md:grid-cols-[9rem_1fr] md:pl-12">
                  <span className="absolute left-[0.8rem] top-8 hidden h-3 w-3 bg-bir-rust ring-4 ring-bir-cream md:block" aria-hidden="true" />
                  <div className="text-sm font-bold uppercase tracking-[0.12em] text-bir-rust">{item.years}</div>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-bir-navy">{item.title}</h2>
                    <p className="mt-2 leading-7 text-bir-charcoal/70">{item.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="site-container">
          <SectionHeading
            eyebrow="Chapters"
            title="The Machines In Context"
            intro="Each chapter explains the historical role of the model, the mechanical change it represents, and the identification details worth checking."
          />

          <div className="space-y-12">
            {tractorChapters.map((tractor, index) => (
              <article key={tractor.name} className="grid gap-8 border-t-4 border-bir-blue bg-bir-cream/55 p-6 shadow-card lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <ImageWithFallback
                    src={tractor.image}
                    alt={`${tractor.name} tractor`}
                    fallbackLabel={tractor.name}
                    className="aspect-[4/3] w-full"
                  />
                  <div className="mt-5 border border-bir-navy/10 bg-white/75 p-5">
                    <p className="eyebrow text-bir-rust">Personal Notes Placeholder</p>
                    <p className="mt-3 text-sm leading-7 text-bir-charcoal/70">{tractor.personalPrompt}</p>
                  </div>
                </div>

                <div>
                  <p className="eyebrow text-bir-rust">{tractor.years} / {tractor.detail}</p>
                  <h2 className="mt-3 font-display text-4xl font-bold text-bir-navy">{tractor.name}</h2>
                  <p className="mt-5 text-lg leading-8 text-bir-charcoal/75">{tractor.whyItMattered}</p>

                  <div className="mt-7 grid gap-5 md:grid-cols-2">
                    <InfoList title="What Changed" items={tractor.whatChanged} />
                    <InfoList title="Identification Notes" items={tractor.identification} />
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {tractor.links.map((link) => (
                      <Link key={link.href + link.label} href={link.href} className="button button-dark">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="paper-texture py-16 sm:py-20">
        <div className="site-container">
          <SectionHeading
            eyebrow="Evolution"
            title="The Big Changes Across The Collection"
            intro="These are the themes that connect the tractors: not just model years, but the practical changes that affected everyday farm work."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {changes.map((change) => (
              <div key={change.title} className="border-t-4 border-bir-rust bg-white p-6 shadow-card">
                <h3 className="font-display text-2xl font-bold text-bir-navy">{change.title}</h3>
                <p className="mt-3 leading-7 text-bir-charcoal/70">{change.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bir-charcoal py-16 text-white sm:py-20">
        <div className="site-container grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="eyebrow text-bir-cream">Identification Workflow</p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
              Start With The Stamps. Then Read The Tractor.
            </h2>
            <div className="accent-rule bg-bir-rust" />
            <p className="mt-6 text-lg leading-8 text-white/75">
              Ford tractors can wear replacement parts, repaints, swapped engines, and incomplete badges. The strongest identification comes from combining stamped information with physical details.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["1", "Find the serial number and model stamp."],
              ["2", "Use the lookup and decoder tools to narrow the year and configuration."],
              ["3", "Check casting dates, sheet metal, grille, hydraulics, engine, and controls."],
              ["4", "Record what matches, what conflicts, and what still needs confirmation."],
            ].map(([step, text]) => (
              <div key={step} className="border border-white/10 bg-white/5 p-5">
                <div className="flex h-10 w-10 items-center justify-center bg-bir-rust font-display text-xl font-bold">{step}</div>
                <p className="mt-4 leading-7 text-white/75">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border border-bir-navy/10 bg-white/75 p-5">
      <h3 className="font-display text-2xl font-bold text-bir-navy">{title}</h3>
      <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-bir-charcoal/70">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
