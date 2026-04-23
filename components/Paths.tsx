"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const paths = [
  {
    id: "A",
    title: "Založení, předání, naučení",
    subtitle:
      "Postavím workflow, předám vám ho a zaškolím váš tým. Dál si to řídíte sami.",
    bullets: [
      "Projdu vaši značku a postavím sadu šablon",
      "Kód + dokumentace si zůstává u vás",
      "Úvodní školení — jak carousely generovat, měnit texty, exportovat",
      "Postupné úpravy systému, pokud později vyplyne potřeba",
    ],
    perfectFor: [
      "Máte v týmu někoho, kdo to převezme",
      "Chcete content držet interně",
    ],
  },
  {
    id: "B",
    title: "Založení a dlouhodobá spolupráce",
    subtitle:
      "Postavím workflow a provozuju ho za vás. Vy posíláte zadání a schvalujete, já exportuju a předávám.",
    featured: true,
    bullets: [
      "Stejné založení jako u A, ale klíče zůstávají u mě",
      "Pravidelná dodávka carouselů v domluveném rytmu",
      "Komunikace přes Slack / mail podle vašich zvyklostí",
      "Systém ladíme průběžně podle toho, co funguje",
    ],
    perfectFor: [
      "Nechcete řešit produkci",
      "Chcete partnera, ne jednorázového dodavatele",
    ],
  },
];

export function Paths() {
  const [active, setActive] = useState<"A" | "B">("B");

  return (
    <section id="varianty" className="scroll-reveal py-24 px-5">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl"
        >
          <div className="text-[11px] uppercase tracking-widest text-[var(--muted)] mb-4">
            Dvě varianty spolupráce
          </div>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.05]"
          >
            Vyberete si, <span className="gradient-text">jak hluboko</span>
            <br />
            chcete jít.
          </h2>
        </motion.div>

        <div className="flex mb-8">
          <div className="glass rounded-2xl p-1 inline-flex">
            {paths.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id as "A" | "B")}
                className={cn(
                  "px-4 py-2.5 rounded-xl text-sm font-medium transition-all",
                  active === p.id
                    ? "bg-white text-[#0a0a0f]"
                    : "text-[var(--muted)] hover:text-white"
                )}
              >
                {p.id} · {p.title.split(",")[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {paths.map((path, i) => {
            const isActive = active === path.id;
            return (
              <motion.div
                key={path.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={cn(
                  "relative rounded-3xl p-7 md:p-9 transition-all duration-500 overflow-hidden",
                  isActive
                    ? "glass-strong ring-accent scale-[1.015]"
                    : "glass opacity-70 hover:opacity-100"
                )}
              >
                <div
                  className={cn(
                    "absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl pointer-events-none",
                    isActive ? "opacity-40" : "opacity-20"
                  )}
                  style={{
                    background: path.id === "A" ? "#81d2c7" : "#6366f1",
                  }}
                />

                <div className="relative">
                  <div className="text-xs text-[var(--muted)] uppercase tracking-widest mb-3">
                    Varianta {path.id}
                  </div>
                  <h3
                    style={{ fontFamily: "var(--font-display)" }}
                    className="text-2xl md:text-[28px] font-bold leading-tight mb-4"
                  >
                    {path.title}
                  </h3>
                  <p className="text-[var(--muted)] mb-7 leading-relaxed">
                    {path.subtitle}
                  </p>

                  <div className="space-y-3 mb-7">
                    {path.bullets.map((b) => (
                      <div key={b} className="flex items-start gap-3">
                        <div className="mt-0.5 w-5 h-5 rounded-full bg-[#81d2c7]/15 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-[#81d2c7]" />
                        </div>
                        <p className="text-sm text-white/85 leading-relaxed">
                          {b}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/5 pt-5">
                    <div className="text-[11px] uppercase tracking-widest text-[var(--muted)] mb-3">
                      Hodí se, když…
                    </div>
                    <ul className="space-y-1.5">
                      {path.perfectFor.map((p) => (
                        <li
                          key={p}
                          className="text-[13px] text-[var(--muted)] flex items-start gap-2"
                        >
                          <span className="text-[#81d2c7] mt-0.5">·</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-xs text-[var(--muted)] mt-8 max-w-xl mx-auto leading-relaxed">
          Cenu probereme vokálně — záleží na rozsahu a pár detailech z otázek níže.
        </p>
      </div>
    </section>
  );
}
