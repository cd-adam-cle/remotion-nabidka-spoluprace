"use client";

import { motion } from "framer-motion";

const steps = [
  {
    tag: "01",
    title: "Projdu značku",
    desc: "Barvy, typografie, tón. Z toho postavím pár šablon, které budou dávat carouselům konzistentní rukopis.",
  },
  {
    tag: "02",
    title: "Postavím workflow",
    desc: "Šablony jako kód, ne ručně v Canvě. Změním jednu barvu a přerendrují se všechny posty najednou.",
  },
  {
    tag: "03",
    title: "Vyrobíme posty",
    desc: "Buď vám to předám a řídíte si to sami, nebo generuju za vás a vy schvalujete. Obě varianty níže.",
  },
];

export function Process() {
  return (
    <section
      id="kroky"
      className="scroll-reveal pt-32 md:pt-40 pb-20 px-5"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <div className="text-[11px] uppercase tracking-widest text-[var(--muted)] mb-4">
            Jak to bude probíhat
          </div>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.05]"
          >
            Tři kroky — od vaší značky
            <br />
            ke <span className="gradient-text">carouselu v kódu</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass hover-lift rounded-3xl p-7 relative overflow-hidden"
            >
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#81d2c7]/8 rounded-full blur-2xl" />
              <div className="relative">
                <span
                  style={{ fontFamily: "var(--font-display)" }}
                  className="text-5xl font-bold text-white/10 block mb-4"
                >
                  {step.tag}
                </span>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
