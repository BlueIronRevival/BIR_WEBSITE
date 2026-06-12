import Link from "next/link";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { siteImages } from "@/config/images";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[680px] items-center overflow-hidden">
      <ImageWithFallback
        src={siteImages.heroBackground}
        alt="A lineup of restored Ford tractors"
        fallbackLabel="FORD TRACTOR COLLECTION"
        className="absolute inset-0 -z-20 h-full"
        priority
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-bir-navy/65 to-black/30" />
      <div className="site-container py-24 text-white">
        <div className="max-w-4xl">
          <p className="eyebrow mb-5 text-bir-cream">Blue Iron Revival</p>
          <h1 className="max-w-3xl font-display text-6xl font-bold italic leading-[0.98] sm:text-7xl lg:text-8xl">
            Preserving the Legacy of Ford Tractors
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">
            Restoration stories, serial number tools, model decoding, and practical knowledge for Ford and Fordson tractor enthusiasts.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/resources" className="button button-cream">Explore Resources</Link>
            <Link href="/collection" className="button button-outline">View the Collection</Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-bir-rust" />
    </section>
  );
}
