import { PageHero } from "@/components/PageHero";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk Tractors With Us"
        intro="Share a Ford tractor story, ask about the collection, or follow Blue Iron Revival as new resources come online."
      />
      <section className="paper-texture py-20">
        <div className="site-container grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div className="bg-bir-navy p-8 text-white shadow-card sm:p-10">
            <p className="eyebrow text-bir-cream">Find BIR</p>
            <h2 className="mt-3 font-display text-4xl font-bold">Stay connected to the shop.</h2>
            <div className="accent-rule bg-bir-rust" />
            <div className="mt-8 space-y-6 text-white/75">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-bir-cream">Email</p>
                <a href="mailto:justin@blueironrevival.com" className="mt-1 inline-block hover:text-white">
                  justin@blueironrevival.com
                </a>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-bir-cream">YouTube</p>
                <a href="https://www.youtube.com/@BlueIronRevival" target="_blank" rel="noreferrer" className="mt-1 inline-block hover:text-white">
                  @BlueIronRevival
                </a>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-bir-cream">Facebook</p>
                <a href="https://www.facebook.com/@BlueIronRevival" target="_blank" rel="noreferrer" className="mt-1 inline-block hover:text-white">
                  Blue Iron Revival
                </a>
              </div>
            </div>
          </div>
          <form className="bg-white p-8 shadow-card sm:p-10">
            <p className="eyebrow text-bir-rust">Send a Note</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-bir-navy">What are you working on?</h2>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-bold text-bir-navy">Name<input type="text" className="mt-2 block min-h-12 w-full border border-bir-navy/20 bg-bir-cream/40 px-4 font-normal outline-none focus:border-bir-blue" /></label>
              <label className="text-sm font-bold text-bir-navy">Email<input type="email" className="mt-2 block min-h-12 w-full border border-bir-navy/20 bg-bir-cream/40 px-4 font-normal outline-none focus:border-bir-blue" /></label>
            </div>
            <label className="mt-5 block text-sm font-bold text-bir-navy">Subject<input type="text" className="mt-2 block min-h-12 w-full border border-bir-navy/20 bg-bir-cream/40 px-4 font-normal outline-none focus:border-bir-blue" /></label>
            <label className="mt-5 block text-sm font-bold text-bir-navy">Message<textarea rows={6} className="mt-2 block w-full border border-bir-navy/20 bg-bir-cream/40 p-4 font-normal outline-none focus:border-bir-blue" /></label>
            <button type="button" className="button button-dark mt-6">Send message</button>
            <p className="mt-4 text-xs italic text-bir-charcoal/50">Form interface only. Connect a Netlify form or email service before launch.</p>
          </form>
        </div>
      </section>
    </>
  );
}
