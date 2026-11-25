"use client";

import { ArrowRight, Gift } from "lucide-react";
import { PROMO } from "@/app/lib/site";
import { useLeadModal } from "./LeadModal";

/** Faixa da Promo de Natal acima do header. Some sozinha com PROMO.active = false. */
export function PromoBar() {
  const { open } = useLeadModal();
  if (!PROMO.active) return null;

  return (
    <div className="relative overflow-hidden bg-[linear-gradient(90deg,#9E1B27,#D92D3A_50%,#9E1B27)] text-white">
      {/* Fitas douradas discretas, como um laço de presente */}
      <span aria-hidden className="absolute inset-y-0 left-[8%] w-1.5 bg-gold/70 max-md:hidden" />
      <span aria-hidden className="absolute inset-y-0 right-[8%] w-1.5 bg-gold/70 max-md:hidden" />
      <button
        type="button"
        onClick={() => open("faixa-natal")}
        className="relative mx-auto flex w-full max-w-[1200px] items-center justify-center gap-2.5 px-5 py-2.5 text-center text-[13.5px] font-medium leading-snug"
      >
        <Gift size={17} className="shrink-0 text-gold" />
        <span>
          <b className="font-bold">{PROMO.label}:</b>{" "}
          <span className="max-sm:hidden">{PROMO.bar.replace(`${PROMO.label} Lagos: `, "")}</span>
          <span className="sm:hidden">condição especial para novos clientes.</span>
        </span>
        <span className="inline-flex shrink-0 items-center gap-1 font-bold underline decoration-gold decoration-2 underline-offset-4">
          Quero saber <ArrowRight size={14} />
        </span>
      </button>
    </div>
  );
}
