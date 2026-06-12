/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { siteImages } from "@/config/images";

export function Footer() {
  return (
    <footer className="bg-bir-navy text-white">
      <div className="site-container grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <img src={siteImages.logo} alt="Blue Iron Revival" className="mb-5 h-24 w-36 rounded-[50%] bg-white object-cover" />
          <p className="max-w-sm text-sm leading-7 text-white/70">
            Preserving the machines, stories, and practical knowledge behind generations of Ford tractors.
          </p>
        </div>
        <div>
          <h2 className="mb-4 font-display text-xl font-bold">Explore</h2>
          <div className="grid grid-cols-2 gap-3 text-sm text-white/75">
            <Link href="/resources">Resources</Link>
            <Link href="/collection">Collection</Link>
            <Link href="/stories">Stories</Link>
            <Link href="/about">About BIR</Link>
          </div>
        </div>
        <div>
          <h2 className="mb-4 font-display text-xl font-bold">Follow Along</h2>
          <p className="mb-2 text-sm text-white/75">YouTube: coming soon</p>
          <p className="mb-2 text-sm text-white/75">Facebook: coming soon</p>
          <p className="text-sm text-white/75">hello@blueironrevival.com</p>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="site-container flex flex-col gap-2 py-6 text-xs text-white/55 sm:flex-row sm:justify-between">
          <p>&copy; 2026 Blue Iron Revival</p>
          <p>Keeping Ford iron alive.</p>
        </div>
      </div>
    </footer>
  );
}
