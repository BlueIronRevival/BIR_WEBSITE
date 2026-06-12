import { PageHero } from "@/components/PageHero";

export default function ModelDecoderPage() {
  return (
    <>
      <PageHero
        eyebrow="Identification Tool"
        title="Ford Tractor Model Decoder"
        intro="Translate Ford model codes into series, chassis, engine, transmission, and production details."
      />
      <section className="paper-texture py-20">
        <div className="site-container max-w-3xl">
          <div className="border-t-4 border-bir-blue bg-white p-8 shadow-card sm:p-12">
            <p className="eyebrow text-bir-rust">Tool Preview</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-bir-navy">Enter a model code</h2>
            <p className="mt-3 leading-7 text-bir-charcoal/70">The decoder interface is ready for the production logic and model database.</p>
            <label htmlFor="model" className="mt-8 block text-sm font-bold text-bir-navy">Ford model code</label>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <input id="model" type="text" placeholder="Example: CA212C" className="min-h-12 flex-1 border border-bir-navy/25 bg-bir-cream/50 px-4 outline-none focus:border-bir-blue" />
              <button type="button" className="button button-dark">Decode model</button>
            </div>
            <p className="mt-5 text-sm italic text-bir-charcoal/55">Preview only. Decoder logic will be added later.</p>
          </div>
        </div>
      </section>
    </>
  );
}
