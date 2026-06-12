import Link from "next/link";
import { ImageWithFallback } from "@/components/ImageWithFallback";

type TractorCardProps = {
  name: string;
  years: string;
  description: string;
  image: string;
  detail: string;
};

export function TractorCard({ name, years, description, image, detail }: TractorCardProps) {
  return (
    <article className="group h-full overflow-hidden bg-white shadow-card">
      <ImageWithFallback
        src={image}
        alt={`${name} tractor`}
        fallbackLabel={name}
        className="h-60 transition duration-500 group-hover:scale-[1.02]"
      />
      <div className="border-t-4 border-bir-blue p-7">
        <p className="eyebrow text-bir-rust">{years} / {detail}</p>
        <h3 className="mb-3 font-display text-3xl font-bold text-bir-navy">{name}</h3>
        <p className="mb-5 leading-7 text-bir-charcoal/70">{description}</p>
        <Link href="/collection" className="text-sm font-bold uppercase tracking-wider text-bir-blue">
          View tractor <span aria-hidden="true">-&gt;</span>
        </Link>
      </div>
    </article>
  );
}
