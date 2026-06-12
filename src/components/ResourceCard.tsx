import Link from "next/link";

type ResourceCardProps = {
  title: string;
  description: string;
  href: string;
  icon: string;
  action: string;
};

export function ResourceCard({ title, description, href, icon, action }: ResourceCardProps) {
  return (
    <article className="group flex h-full flex-col items-center border border-bir-navy/10 bg-white p-8 text-center shadow-card transition duration-300 hover:-translate-y-1 hover:border-bir-blue/40">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-bir-blue font-display text-xl font-bold text-white">
        {icon}
      </div>
      <h3 className="mb-3 font-display text-2xl font-bold text-bir-navy">{title}</h3>
      <p className="mb-7 flex-1 leading-7 text-bir-charcoal/70">{description}</p>
      <Link href={href} className="button button-dark">
        {action}
      </Link>
    </article>
  );
}
