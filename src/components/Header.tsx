/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { navItems } from "@/data/site";
import { siteImages } from "@/config/images";
import { MobileNav } from "@/components/MobileNav";

export function Header() {
  return (
    <header className="relative z-50 bg-bir-navy text-white">
      <div className="site-container flex h-28 items-center justify-between gap-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Blue Iron Revival home">
          <span className="flex h-24 w-36 items-center overflow-hidden rounded-[50%] border-2 border-white/70 bg-white shadow-lg">
            <img src={siteImages.logo} alt="Blue Iron Revival" className="h-full w-full object-cover" />
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
