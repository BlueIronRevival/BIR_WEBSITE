"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/data/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="flex h-11 w-11 items-center justify-center rounded-sm border border-white/30"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label="Toggle navigation"
      >
        <span className="space-y-1.5">
          <span className={`block h-0.5 w-6 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </span>
      </button>
      {open && (
        <nav className="absolute left-0 right-0 top-full border-t border-white/10 bg-bir-navy px-6 py-5 shadow-2xl">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block border-b border-white/10 py-4 text-lg font-bold text-white/80 hover:text-bir-cream"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
