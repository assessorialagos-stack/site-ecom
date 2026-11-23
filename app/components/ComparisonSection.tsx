import { Check, X } from "lucide-react";
import { LagosMark } from "./ui/LagosMark";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";

const generic = [
  "Fala de alcance, clique e curtida",
  "Acha que todo problema se resolve com mais verba",
  "Conta pedido gerado como venda",
  "Não sabe o que é markup, margem ou DRE",
  "Promete resultado sem olhar a sua operação",
  "Relatório mensal difícil de entender",
];

const lagos = [
  "Fala de receita paga, margem e recompra",
  "Encontra o elo que trava a conta antes de aumentar verba",
  "Só conta venda paga",
  "Vivência real de loja: estoque, margem e operação",
  "Se a sua verba não paga o custo por venda do seu nicho, avisa antes de assinar",
  "Painel ao vivo e reunião semanal com pauta",
];

export function ComparisonSection() {
  return (
    <Section id="diferenca">
      <SectionHeading eyebrow="Comparativo" title="Por que a Lagos é diferente" />
      <div className="grid gap-5 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-[26px] border border-border bg-section p-[clamp(26px,3vw,38px)]">
            <h3 className="mb-[22px] flex items-center gap-3 text-[22px] font-bold">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#E6E8F0] text-lg text-muted">?</span>
              Agência genérica
            </h3>
            <ul className="grid gap-4">
              {generic.map((g) => (
                <li key={g} className="flex items-start gap-3 text-base">
                  <span className="mt-px grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full bg-[#FFE9E9] text-danger">
                    <X size={13} strokeWidth={3} />
                  </span>
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="relative h-full rounded-[26px] border-2 border-accent bg-white p-[clamp(26px,3vw,38px)] shadow-[0_30px_60px_-30px_rgba(59,107,255,0.45)]">
            <span className="absolute -top-3.5 right-6 rounded-full bg-accent px-3 py-1.5 text-xs font-bold tracking-[0.02em] text-white">
              Lagos Assessoria
            </span>
            <h3 className="mb-[22px] flex items-center gap-3 text-[22px] font-bold">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-white">
                <LagosMark className="h-[18px] w-[26px]" />
              </span>
              Lagos
            </h3>
            <ul className="grid gap-4">
              {lagos.map((l) => (
                <li key={l} className="flex items-start gap-3 text-base font-medium text-foreground">
                  <span className="mt-px grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full bg-accent text-white">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
