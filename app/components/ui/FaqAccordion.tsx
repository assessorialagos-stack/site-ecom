"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/app/lib/cn";

export type FaqItem = { q: string; a: React.ReactNode };

/** Acordeão do FAQ: um aberto por vez, abre e fecha com transição de altura. */
export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-border">
      {items.map((item, i) => {
        const isOpen = open === i;
        const id = `faq-${i}`;
        return (
          <div key={item.q} className="border-b border-border">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={id}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-5 px-0.5 py-[22px] text-left font-heading text-[clamp(1.02rem,1.4vw,1.14rem)] font-semibold tracking-[-0.01em] text-foreground"
            >
              {item.q}
              <span
                className={cn(
                  "grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border transition duration-300",
                  isOpen && "rotate-45 border-accent bg-accent text-white",
                )}
              >
                <Plus size={14} strokeWidth={2.6} />
              </span>
            </button>
            <div
              id={id}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div className="space-y-2.5 pb-6 pl-0.5 pr-12 text-base leading-relaxed">{item.a}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
