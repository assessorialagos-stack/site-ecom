import { Clock, Gift, MapPin, Store } from "lucide-react";
import { cn } from "@/app/lib/cn";
import { PROMO } from "@/app/lib/site";
import { Snowfall } from "./ui/Snowfall";
import { CtaButton } from "./ui/CtaButton";
import { Eyebrow } from "./ui/Eyebrow";
import { FounderPhoto } from "./ui/FounderPhoto";
import { Reveal } from "./ui/Reveal";
import { container } from "./ui/Section";
import { PixIcon } from "./ui/Waves";

const floatCard =
  "absolute z-[4] animate-bob rounded-2xl border border-border bg-white px-4 py-3.5 text-[13px] leading-snug shadow-float max-sm:rounded-[13px] max-sm:px-3 max-sm:py-2.5";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-[clamp(64px,8vw,110px)] pt-[clamp(40px,6vw,84px)]">
      <div aria-hidden className="bg-hero-grid pointer-events-none absolute inset-0 opacity-50" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[220px] -top-[160px] h-[780px] w-[780px] bg-[radial-gradient(circle,rgba(59,107,255,0.22),rgba(59,107,255,0)_62%)]"
      />
      <Snowfall />

      <div className={cn(container, "z-[1] grid items-center gap-[clamp(40px,5vw,72px)] lg:grid-cols-[1.08fr_0.92fr]")}>
        {/* Texto */}
        <div>
          <Reveal>
            {PROMO.active ? (
              <Eyebrow tone="promo" className="mb-5">
                {PROMO.label} · Assessoria para e-commerce
              </Eyebrow>
            ) : (
              <Eyebrow className="mb-5">Assessoria de marketing para e-commerce</Eyebrow>
            )}
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-[clamp(2.3rem,4.7vw,3.75rem)] font-extrabold leading-[1.02] tracking-[-0.04em]">
              Acelere as vendas do seu e-commerce com{" "}
              <span className="relative whitespace-nowrap text-accent">
                lucro de verdade
                <svg
                  viewBox="0 0 300 20"
                  preserveAspectRatio="none"
                  aria-hidden
                  className="absolute -bottom-[0.12em] left-0 h-[0.28em] w-full text-accent-light"
                >
                  <path d="M2 14C60 4 140 2 298 10" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
              .
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[560px] text-[clamp(1.05rem,1.5vw,1.22rem)] leading-relaxed">
              Tráfego, oferta, conversão e recompra operando como um só time dentro da sua loja. Para o dono de
              e-commerce que já vende e quer crescer sem queimar margem.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-[34px] flex flex-wrap gap-3">
            <CtaButton form="hero" arrow>
              Quero meu diagnóstico gratuito
            </CtaButton>
            <CtaButton href="#resultados" variant="ghost">
              Ver resultados
            </CtaButton>
          </Reveal>
          {PROMO.active && (
            <Reveal delay={0.18}>
              <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-xmas">
                <Gift size={16} /> {PROMO.note}
              </p>
            </Reveal>
          )}
          <Reveal delay={0.2}>
            <div className="mt-[34px] flex flex-wrap gap-x-[26px] gap-y-2.5 border-t border-border pt-[26px] text-[14.5px]">
              <span className="inline-flex items-center gap-2">
                <Store size={18} className="text-accent" />
                <b className="text-foreground">+120 lojas</b> escaladas
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock size={18} className="text-accent" />
                Resposta em <b className="text-foreground">menos de 5h</b>
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin size={18} className="text-accent" />
                Atendimento em <b className="text-foreground">todo o Brasil</b>
              </span>
            </div>
          </Reveal>
        </div>

        {/* Rosto + provas flutuando */}
        <Reveal delay={0.1} direction="left" className="mx-auto w-full max-w-[440px] lg:max-w-none">
          <div className="relative aspect-[4/5] w-full">
            <FounderPhoto showTag />

            {PROMO.active && (
              <div className="absolute -right-3 top-6 z-[5] flex rotate-[4deg] items-center gap-1.5 rounded-xl bg-xmas px-3.5 py-2 text-[13px] font-bold text-white shadow-[0_14px_30px_-12px_rgba(217,45,58,0.8)] ring-2 ring-gold/80 max-sm:-right-1.5 max-sm:top-4 max-sm:px-2.5 max-sm:text-xs">
                <Gift size={15} className="text-gold" /> {PROMO.label}
              </div>
            )}

            <div className={cn(floatCard, "left-[-34px] top-[9%] w-[178px] max-xl:left-[-14px] max-sm:left-[-6px] max-sm:top-[6%] max-sm:w-[146px]")}>
              <div className="text-xs font-medium text-muted">Roupas de grife · 30 dias</div>
              <div className="mt-0.5 font-heading text-[26px] font-extrabold leading-tight tracking-[-0.03em] text-foreground max-sm:text-xl">
                14,2x<small className="ml-1 text-[13px] font-semibold tracking-normal text-body">ROAS</small>
              </div>
              <svg viewBox="0 0 140 32" preserveAspectRatio="none" aria-hidden className="mt-1.5 h-8 w-full text-accent max-sm:h-6">
                <path d="M2 28 L20 24 L36 26 L52 18 L70 20 L88 11 L104 13 L122 6 L138 3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className={cn(floatCard, "right-[-30px] top-[44%] w-[190px] [animation-delay:-2s] max-xl:right-[-12px] max-sm:right-[-6px] max-sm:top-[57%] max-sm:w-[150px]")}>
              <div className="text-xs font-medium text-muted">Informática · 1 semana</div>
              <div className="mt-0.5 font-heading text-[26px] font-extrabold leading-tight tracking-[-0.03em] text-foreground max-sm:text-xl">
                R$ 35 mil
              </div>
              <div className="mt-2 flex justify-between gap-2 whitespace-nowrap border-t border-border pt-2 text-body max-sm:text-[11.5px]">
                <span>Ticket médio</span>
                <b className="text-foreground">R$ 1.524</b>
              </div>
            </div>

            <div className={cn(floatCard, "bottom-[13%] left-[-26px] flex items-center gap-3 py-3 pl-3 [animation-delay:-4s] max-xl:left-[-10px] max-sm:left-[-6px] max-sm:bottom-[3%]")}>
              <span className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-[11px] bg-success-soft text-success">
                <PixIcon size={20} />
              </span>
              <span>
                <b className="block text-[13.5px] text-foreground">Pagamento confirmado</b>
                <span className="text-xs text-muted">Só venda paga entra no painel</span>
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
