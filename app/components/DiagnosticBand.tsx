import { ChevronRight, Gift, ShieldCheck } from "lucide-react";
import { PROMO } from "@/app/lib/site";
import { Fragment } from "react";
import { cn } from "@/app/lib/cn";
import { CtaButton } from "./ui/CtaButton";
import { Reveal } from "./ui/Reveal";
import { container } from "./ui/Section";
import { Waves } from "./ui/Waves";

// A cadeia do método Lagos: o diagnóstico procura o elo mais fraco.
const chain = ["Estratégia", "Estrutura", "Processos", "Pessoas", "Gestão", "Resultado"];

/** Faixa azul de "Diagnóstico gratuito" (mesmo papel da faixa da Bluefy). */
export function DiagnosticBand() {
  return (
    <div className="pb-[clamp(72px,9vw,124px)]">
      <div className={container}>
        <Reveal>
          <div className="relative grid items-center gap-8 overflow-hidden rounded-[30px] bg-[linear-gradient(120deg,#2A52CC_0%,#3B6BFF_55%,#5A86FF_100%)] p-[clamp(36px,5vw,64px)] text-accent-line lg:grid-cols-[1.25fr_0.75fr]">
            <div aria-hidden className="absolute -right-[120px] -top-[120px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.22),transparent_65%)]" />
            <Waves variant="band" className="absolute inset-x-0 -bottom-5 w-full text-white/[0.08]" />

            <div className="relative">
              {PROMO.active && (
                <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-xmas px-3 py-1.5 text-[13px] font-bold text-white ring-2 ring-gold/70">
                  <Gift size={14} className="text-gold" /> {PROMO.label}
                </span>
              )}
              <h2 className="text-[clamp(1.8rem,3.1vw,2.55rem)] font-bold leading-[1.08] text-white">
                Diagnóstico gratuito da sua loja
              </h2>
              <p className="mt-3.5 max-w-[620px] text-[clamp(1rem,1.4vw,1.12rem)] leading-relaxed">
                Uma conversa com um especialista em e-commerce para mapear onde a sua operação está deixando venda e
                margem na mesa, e quais são os próximos passos.
              </p>
              <div className="mt-[26px] flex flex-wrap items-center gap-1.5" aria-label="O que olhamos no diagnóstico">
                <span className="mr-1.5 text-[13px] font-semibold text-white">O que olhamos:</span>
                {chain.map((c, i) => (
                  <Fragment key={c}>
                    <span className="rounded-full border border-white/20 bg-white/[0.13] px-[11px] py-1.5 text-[13px] font-semibold text-white">
                      {c}
                    </span>
                    {i < chain.length - 1 && <ChevronRight size={14} className="text-white/60" />}
                  </Fragment>
                ))}
              </div>
            </div>

            <div className={cn("relative flex flex-col items-start gap-3.5 lg:justify-self-end")}>
              <CtaButton form="faixa-diagnostico" variant="white" arrow>
                Quero meu diagnóstico
              </CtaButton>
              <small className="flex items-center gap-2 text-[13.5px]">
                <ShieldCheck size={16} /> Sem compromisso · Resposta em menos de 5h
              </small>
              {PROMO.active && (
                <small className="flex items-center gap-2 text-[13.5px] font-semibold text-white">
                  <Gift size={16} className="text-gold" /> {PROMO.note}
                </small>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
