"use client";

import { motion } from "framer-motion";

export function Iteration() {
  return (
    <section id="uprav" className="scroll-reveal py-24 px-5">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#81d2c7]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#6366f1]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-2xl">
            <div className="text-[11px] uppercase tracking-widest text-[var(--muted)] mb-4">
              Systém není fixní
            </div>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] mb-5"
            >
              Průběžně <span className="gradient-text">ladíme</span>,<br />
              ať vám to sedí.
            </h2>
            <p className="text-[var(--muted)] leading-relaxed">
              Ať si vyberete variantu A nebo B — šablony, workflow i rytmus
              se dají upravovat i po spuštění. Když něco nefunguje nebo vznikne
              nová potřeba, domluvíme se a doladíme to. Nic není vytesané do
              kamene.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
