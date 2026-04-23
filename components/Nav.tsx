"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "#kroky", label: "Kroky" },
  { href: "#varianty", label: "Varianty" },
  { href: "#otazky", label: "Otázky" },
  { href: "#uprav", label: "Úpravy" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5">
        <div
          className={`rounded-2xl flex items-center justify-between px-5 py-3 transition-all duration-300 border ${
            scrolled
              ? "bg-[#0a0a0f]/85 backdrop-blur-xl border-white/10 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]"
              : "bg-white/[0.03] backdrop-blur-md border-white/[0.06]"
          }`}
        >
          <a href="#top" className="flex items-center gap-2 group">
            <span className="font-semibold text-sm tracking-tight">
              Adam Zikmund <span className="text-[var(--muted)] font-normal">— Carousel Workflow</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 text-[13px] text-[var(--muted)] hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
