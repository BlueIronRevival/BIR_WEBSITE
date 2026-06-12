import { PageHero } from "@/components/PageHero";

export default function SerialNumberLookupPage() {
  return (
    <>
      <PageHero
        eyebrow="Identification Tool"
        title="Ford Tractor Serial Number Lookup"
        intro="A dedicated lookup experience is being prepared for the Blue Iron Revival reference library."
      />
      <section className="paper-texture py-20">
        <div className="site-container max-w-3xl">
          <div className="border-t-4 border-bir-blue bg-white p-8 shadow-card sm:p-12">
            <p className="eyebrow text-bir-rust">Tool Preview</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-bir-navy">Enter a serial number</h2>
            <p className="mt-3 leading-7 text-bir-charcoal/70">The production database and lookup logic will connect here later.</p>
            <label htmlFor="serial" className="mt-8 block text-sm font-bold text-bir-navy">Tractor serial number</label>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <input id="serial" type="text" placeholder="Example: 9N12345" className="min-h-12 flex-1 border border-bir-navy/25 bg-bir-cream/50 px-4 outline-none focus:border-bir-blue" />
              <button type="button" className="button button-dark">Look up serial</button>
            </div>
            <p className="mt-5 text-sm italic text-bir-charcoal/55">Preview only. No lookup data is connected yet.</p>
          </div>
        </div>
      </section>
    </>
  );
}
