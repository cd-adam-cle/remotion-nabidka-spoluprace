"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

export function CTA() {
  return (
    <section id="kontakt" className="scroll-reveal py-12 pb-24 px-5">
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
              className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.05] mb-8"
            >
              Pro jakékoli dotazy <span className="gradient-text">nebo kontakt</span>.
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="mailto:zikmundi@pm.me?subject=Remotion%20workflow"
                className="inline-flex items-center gap-2 bg-white text-[#0a0a0f] px-6 py-3.5 rounded-2xl font-semibold hover:bg-[#81d2c7] transition-all hover:scale-[1.02]"
              >
                Ozvat se
              </a>
              <a
                href="mailto:zikmundi@pm.me?subject=Remotion%20workflow"
                className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                zikmundi@pm.me
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
