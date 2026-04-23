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
    question: "Kolik postů týdně",
    options: [
      { value: "1", label: "1 týdně" },
      { value: "2", label: "2 týdně" },
      { value: "3", label: "3 týdně" },
      { value: "custom", label: "Jiný rytmus — domluvíme" },
    ],
  },
];

export function Questions() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  return (
    <section id="otazky" className="scroll-reveal py-8 px-5">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-10 max-w-3xl"
        >
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.05]"
          >
            Co si <span className="gradient-text">promyslet</span>.
          </h2>
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
                transition={{ duration: 0.45, delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
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
