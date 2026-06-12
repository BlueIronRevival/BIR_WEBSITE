import Link from "next/link";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { siteImages } from "@/config/images";

export function FeatureSection() {
  return (
    <section className="bg-bir-navy text-white">
      <div className="grid lg:grid-cols-2">
        <ImageWithFallback
          src={siteImages.featuredTractor}
          alt="Featured Fordson F tractor"
          fallbackLabel="FORDSON F"
          className="min-h-[430px] lg:min-h-[590px]"
        />
        <div className="flex items-center px-6 py-16 sm:px-12 lg:px-20">
          <div className="max-w-xl">
            <p className="eyebrow text-bir-cream">Machine No. 01</p>
            <h2 className="mt-3 font-display text-5xl font-bold leading-tight sm:text-6xl">
              Featured Tractor: Fordson F
            </h2>
            <div className="accent-rule bg-bir-cream" />
            <p className="mt-7 font-display text-2xl italic text-bir-cream">
              The tractor that helped put the world on steel wheels.
            </p>
            <p className="mt-5 leading-8 text-white/75">
              Simple, rugged, and revolutionary, the Fordson F made powered farming accessible to a generation. Its story is where the Blue Iron Revival collection begins.
            </p>
            <Link href="/collection" className="button button-cream mt-9">
              Learn About the Fordson F
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
