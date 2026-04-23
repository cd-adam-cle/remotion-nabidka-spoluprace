"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

export function CTA() {
  return (
    <section id="kontakt" className="scroll-reveal py-24 px-5">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="glass-strong rounded-[32px] p-8 md:p-14 relative overflow-hidden text-center"
        >
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#81d2c7]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#6366f1]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

          <div className="relative">
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] mb-5"
            >
              Dáme si <span className="gradient-text">hovor</span>.
            </h2>
            <p className="text-[var(--muted)] leading-relaxed max-w-lg mx-auto mb-8">
              Cenu i detaily doladíme vokálně. Ozvěte se kdykoli — stačí
              napsat.
            </p>

            <a
              href="mailto:zikmundi@pm.me?subject=Remotion%20workflow%20%E2%80%94%20zaj%C3%ADm%C3%A1%20m%C4%9B%20spolupr%C3%A1ce"
              className="inline-flex items-center gap-2 bg-white text-[#0a0a0f] px-6 py-3.5 rounded-2xl font-semibold hover:bg-[#81d2c7] transition-all hover:scale-[1.02]"
            >
              <Mail className="w-4 h-4" />
              zikmundi@pm.me
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
