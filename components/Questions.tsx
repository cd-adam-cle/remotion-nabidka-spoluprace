"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Question = {
  id: string;
  category: string;
  question: string;
  helper?: string;
  options: { value: string; label: string; sub?: string }[];
};

const questions: Question[] = [
  {
    id: "texts",
    category: "Texty",
    question: "Texty do carouselů",
    helper:
      "Budete je posílat přímo, nebo je máme vymýšlet a psát za vás?",
    options: [
      {
        value: "own",
        label: "Posíláme přímý text",
        sub: "Máte hotový obsah, my ho jen skládáme do postu",
      },
      {
        value: "gen",
        label: "Generujte je za nás",
        sub: "Pošlete jen téma nebo cíl, text i strukturu vymyslíme",
      },
    ],
  },
  {
    id: "visuals",
    category: "Obrázky",
    question: "Obsah v carouselu",
    helper:
      "Od čistě typografického postu po AI vizuály — ovlivňuje to vzhled i rozsah práce.",
    options: [
      {
        value: "vector",
        label: "Jen designové / vektorové",
        sub: "Typografie, tvary, grafy — bez fotek",
      },
      {
        value: "photos",
        label: "Přidat vaše fotky / obrázky",
        sub: "Pošlete nám foto banku, my ji vkládáme do šablon",
      },
      {
        value: "ai",
        label: "AI-generované obrázky",
        sub: "Na míru generované vizuály podle tématu postu",
      },
    ],
  },
  {
    id: "volume",
    category: "Jen pro variantu B",
    question: "Kolik postů / jaký rytmus",
    helper:
      "Jen v případě, že byste chtěli i naši správu a generaci. Týdenní rytmus je možný místo měsíčního.",
    options: [
      { value: "4m", label: "4 měsíčně", sub: "~1× týdně" },
      { value: "9m", label: "9 měsíčně", sub: "~2× týdně" },
      { value: "13m", label: "13 měsíčně", sub: "~3× týdně" },
      { value: "weekly", label: "Raději týdenní rytmus", sub: "Domluvíme kolik postů týdně" },
    ],
  },
];

export function Questions() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  return (
    <section id="otazky" className="scroll-reveal py-24 px-5">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <div className="text-[11px] uppercase tracking-widest text-[var(--muted)] mb-4">
            K rozmyšlení
          </div>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.05]"
          >
            Pár věcí, na které se <span className="gradient-text">zeptám</span>.
          </h2>
          <p className="text-[var(--muted)] mt-5 leading-relaxed">
            Klidně si na nich klikejte jako na orientaci — neodesílá se to nikam.
            Je to jen proto, abyste věděli, co si rozmyslet před hovorem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {questions.map((q, i) => {
            const selected = answers[q.id];
            return (
              <motion.div
                key={q.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass hover-lift rounded-3xl p-6 md:p-7 flex flex-col"
              >
                <div className="text-[10px] uppercase tracking-widest text-[var(--muted)] mb-2">
                  {q.category}
                </div>
                <h3 className="text-lg font-semibold leading-tight mb-3">
                  {q.question}
                </h3>
                {q.helper && (
                  <p className="text-[13px] text-[var(--muted)] mb-5 leading-relaxed">
                    {q.helper}
                  </p>
                )}

                <div className="space-y-2 mt-auto">
                  {q.options.map((opt) => {
                    const isSelected = selected === opt.value;
                    return (
                      <button
                        key={opt.value}
                        onClick={() =>
                          setAnswers((prev) => ({
                            ...prev,
                            [q.id]: prev[q.id] === opt.value ? "" : opt.value,
                          }))
                        }
                        className={cn(
                          "w-full text-left rounded-2xl px-4 py-3 transition-all border",
                          isSelected
                            ? "bg-[#81d2c7]/10 border-[#81d2c7]/40"
                            : "bg-white/[0.015] border-white/5 hover:border-white/15 hover:bg-white/[0.03]"
                        )}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={cn(
                              "mt-1 w-4 h-4 rounded-full border-2 flex-shrink-0 transition-all flex items-center justify-center",
                              isSelected
                                ? "border-[#81d2c7] bg-[#81d2c7]"
                                : "border-white/25"
                            )}
                          >
                            {isSelected && (
                              <div className="w-1.5 h-1.5 rounded-full bg-[#0a0a0f]" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium">{opt.label}</p>
                            {opt.sub && (
                              <p className="text-[12px] text-[var(--muted)] mt-0.5 leading-relaxed">
                                {opt.sub}
                              </p>
                            )}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
