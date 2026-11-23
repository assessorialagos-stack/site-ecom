import { Check } from "lucide-react";
import { CtaButton } from "./ui/CtaButton";
import { Eyebrow } from "./ui/Eyebrow";
import { LagosMark } from "./ui/LagosMark";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";

const checks = [
  "Escala pelo que dá lucro, não pelo que é fácil de anunciar",
  "Um time só para tráfego, criativo, conversão e recompra",
  "Venda medida pelo dinheiro que entrou, com painel ao vivo",
  "Um responsável com nome para a sua conta, não um ticket de suporte",
];

// As 7 frentes ao redor da loja (posições em % num círculo de raio 36).
const nodes = [
  { label: "Estratégia e growth", x: 50, y: 14 },
  { label: "Tráfego pago", x: 78.1, y: 27.6 },
  { label: "Criativos", x: 85.1, y: 58 },
  { label: "Vídeo", x: 65.6, y: 82.4 },
  { label: "Recompra e CRM", x: 34.4, y: 82.4 },
  { label: "Social media", x: 14.9, y: 58 },
  { label: "Dados e painel", x: 21.9, y: 27.6 },
];

function Ecosystem() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[540px]" aria-label="Sete frentes integradas ao redor da sua loja">
      <div className="absolute inset-[14%] animate-orbit rounded-full border-[1.5px] border-dashed border-accent-line" />
      <svg viewBox="0 0 100 100" aria-hidden className="absolute inset-0 h-full w-full overflow-visible">
        <g stroke="#DCE6FF" strokeWidth=".4" strokeDasharray="1 1">
          {nodes.map((n) => (
            <line key={n.label} x1="50" y1="50" x2={n.x} y2={n.y} />
          ))}
        </g>
      </svg>
      <div className="absolute left-1/2 top-1/2 flex aspect-square w-[36%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_25%,#5B84FF,#3B6BFF_45%,#2340B8)] p-2.5 text-center text-white shadow-[0_30px_60px_-20px_rgba(59,107,255,0.7),inset_0_2px_0_rgba(255,255,255,0.25)] before:absolute before:-inset-3.5 before:rounded-full before:border before:border-accent/25">
        <LagosMark className="mb-1.5 w-[44%]" />
        <b className="font-heading text-[clamp(14px,1.6vw,18px)] leading-tight tracking-[-0.01em]">Sua loja</b>
        <span className="mt-0.5 text-[clamp(10.5px,1.1vw,12.5px)] opacity-80">um time, uma conta</span>
      </div>
      {nodes.map((n) => (
        <div
          key={n.label}
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
          className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-border bg-white px-3.5 py-2 text-[13.5px] font-semibold text-foreground shadow-card max-sm:gap-1.5 max-sm:px-2.5 max-sm:py-1.5 max-sm:text-[11px]"
        >
          <i className="h-2 w-2 shrink-0 rounded-full bg-accent max-sm:h-1.5 max-sm:w-1.5" />
          {n.label}
        </div>
      ))}
    </div>
  );
}

export function PositioningSection() {
  return (
    <Section id="assessoria" innerClassName="grid items-center gap-[clamp(40px,6vw,96px)] lg:grid-cols-2">
      <div>
        <Reveal>
          <Eyebrow className="mb-5">A solução</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-[clamp(1.85rem,3.7vw,3.05rem)] font-bold leading-[1.08]">O parceiro certo para o seu e-commerce</h2>
          <h4 className="mt-2.5 text-[clamp(1.1rem,1.6vw,1.3rem)] font-semibold tracking-[-0.01em] text-accent-hover">
            Uma assessoria, não um fornecedor de anúncio.
          </h4>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-[18px] text-[clamp(1rem,1.35vw,1.1rem)] leading-relaxed">
            A gente olha para a empresa, não só para a campanha. A estratégia considera margem, estoque, ticket médio,
            frete e a capacidade da sua operação de entregar. E assume o crescimento da loja de ponta a ponta, junto
            com você.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <ul className="mb-8 mt-[26px] grid gap-3.5">
            {checks.map((c) => (
              <li key={c} className="flex items-start gap-3 font-medium text-foreground">
                <span className="mt-px grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent text-white">
                  <Check size={14} strokeWidth={3} />
                </span>
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.2}>
          <CtaButton form="posicionamento" arrow>
            Falar com especialista
          </CtaButton>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <Ecosystem />
        <p className="mt-[18px] text-center text-sm text-muted">7 frentes integradas, operando como um só ecossistema</p>
      </Reveal>
    </Section>
  );
}
