import { Clock, MonitorCheck } from "lucide-react";
import { PaidDashboard } from "./mockups/PaidDashboard";
import { Eyebrow } from "./ui/Eyebrow";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";
import { PixIcon } from "./ui/Waves";

const points = [
  { icon: <MonitorCheck size={20} />, title: "Painel ao vivo", text: "Sem planilha bagunçada e sem achismo. Você abre e vê." },
  { icon: <PixIcon size={20} />, title: "Origem de cada venda", text: "Rastreamento configurado para saber qual campanha trouxe qual pedido pago." },
  { icon: <Clock size={20} />, title: "Rotina com pauta", text: "Acompanhamento semanal: o que funcionou, o que muda e quem faz." },
];

export function DataSection() {
  return (
    <Section id="dados" bg="dark" innerClassName="grid items-center gap-[clamp(40px,6vw,96px)] lg:grid-cols-2">
      <div>
        <Reveal>
          <Eyebrow tone="dark" className="mb-5">
            Transparência total
          </Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-[clamp(1.85rem,3.7vw,3.05rem)] font-bold leading-[1.08] text-white">
            Seus números em tempo real. E só conta venda paga.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-[18px] text-[clamp(1rem,1.35vw,1.1rem)] leading-relaxed">
            Você acompanha investimento, receita, ROAS e custo por venda num painel ao vivo. No nosso padrão de
            rastreamento, a compra só entra na conta quando o dinheiro cai: Pix pago e boleto compensado, não pedido
            gerado. Decisão de verba em cima de número real.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-[18px]">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={0.12 + i * 0.06}>
              <div className="flex gap-3.5">
                <span className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-xl border border-accent-light/20 bg-accent/15 text-accent-light">
                  {p.icon}
                </span>
                <div>
                  <b className="block text-[16.5px] tracking-[-0.01em] text-white">{p.title}</b>
                  <p className="mt-0.5 text-[15px]">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <Reveal delay={0.1}>
        <PaidDashboard />
      </Reveal>
    </Section>
  );
}
