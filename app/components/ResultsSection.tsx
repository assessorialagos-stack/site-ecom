/* eslint-disable @next/next/no-img-element */
import { MonitorCheck } from "lucide-react";
import { cn } from "@/app/lib/cn";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { ZoomImage } from "./ui/ZoomImage";

const stats = [
  { n: "+120", t: "lojas escaladas com o Método Maré" },
  { n: "7+", t: "frentes integradas em um só time" },
  { n: "< 5h", t: "para a primeira resposta" },
  { n: "Brasil", t: "atendimento online e presencial" },
];

// Regra do método Lagos: todo número com investimento, período e fonte.
// `todo: true` marca o que ainda falta preencher (aparece com borda tracejada).
const cases = [
  {
    img: "/cases/case-3.png",
    alt: "Painel do Gerenciador de Anúncios da Meta: 97 vendas no site, ROAS 14,2x, R$ 2.542,03 investidos",
    seg: "Moda · Roupas de grife",
    num: "14,2x",
    label: "de ROAS em 30 dias",
    metrics: [{ t: "R$ 2.542 investidos" }, { t: "97 vendas no site" }, { t: "≈ R$ 36 mil atribuídos" }],
    text: "Loja de moda com venda direto no site. Cada R$ 1 investido em anúncio voltou R$ 14,20 em vendas no período.",
    src: "Gerenciador de Anúncios da Meta",
  },
  {
    img: "/cases/case-2.png",
    alt: "Painel da loja: 8.381 visitas únicas, 23 vendas, faturamento de R$ 35.067,22 e ticket médio de R$ 1.524,66 na semana",
    seg: "Tecnologia · Loja de informática",
    num: "R$ 35 mil",
    label: "em vendas numa única semana",
    metrics: [{ t: "23 pedidos" }, { t: "Ticket médio R$ 1.524" }, { t: "8.381 visitas" }, { t: "Investimento: preencher", todo: true }],
    text: "Loja de computadores com ticket alto, onde cada venda pede confiança. Faturamento de R$ 35.067 em uma semana de operação.",
    src: "painel da plataforma da loja",
    position: "object-top",
  },
  {
    img: "/cases/case-1.png",
    alt: "Painel da Meta: 345 conversas iniciadas a R$ 0,97 cada, R$ 333,44 investidos, custo 71% menor que anúncios semelhantes",
    seg: "Acessórios · Semijoias",
    num: "R$ 0,97",
    label: "por conversa no WhatsApp",
    metrics: [{ t: "R$ 333 investidos" }, { t: "345 conversas" }, { t: "71% abaixo do mercado" }],
    text: "Primeiro mês de teste de uma loja de semijoias que vende pelo WhatsApp. Custo por conversa 71% menor que o de anúncios semelhantes, segundo a própria Meta.",
    src: "Gerenciador de Anúncios da Meta",
  },
];

export function ResultsSection() {
  return (
    <Section id="resultados" bg="dark">
      <SectionHeading
        tone="dark"
        eyebrow="Resultados"
        title="Operações reais, com contexto"
        subtitle="Números tirados dos painéis dos próprios clientes, com investimento, período e fonte. Número solto não diz nada sobre o seu negócio."
      />

      <Reveal>
        <div className="mb-[clamp(40px,5vw,64px)] grid grid-cols-2 gap-px overflow-hidden rounded-[22px] border border-white/[0.09] bg-white/[0.09] md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.n} className="bg-dark px-6 py-[26px]">
              <b className="block font-heading text-[clamp(1.8rem,3.2vw,2.6rem)] font-extrabold leading-none tracking-[-0.04em] text-white">{s.n}</b>
              <span className="mt-2.5 block text-[14.5px]">{s.t}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="mx-auto grid max-w-[560px] gap-[18px] lg:max-w-none lg:grid-cols-3">
        {cases.map((c, i) => (
          <Reveal key={c.seg} delay={i * 0.08}>
            <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.09] bg-dark-2 transition duration-300 hover:-translate-y-1 hover:border-accent-light/30">
              <ZoomImage src={c.img} alt={c.alt} label={`Ampliar painel do case: ${c.seg}`} className="relative block aspect-video w-full overflow-hidden bg-white">
                <img src={c.img} alt={c.alt} loading="lazy" className={cn("h-full w-full object-cover", c.position ?? "object-left-top")} />
                <span className="absolute bottom-2.5 right-2.5 rounded-lg bg-dark/75 px-2.5 py-1 text-[11.5px] font-semibold text-white">Ver painel</span>
              </ZoomImage>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-[12.5px] font-bold uppercase tracking-[0.04em] text-accent-light">{c.seg}</span>
                <div className="mt-3 font-heading text-[clamp(2.4rem,4vw,3.2rem)] font-extrabold leading-none tracking-[-0.045em] text-white">{c.num}</div>
                <div className="mt-1.5 font-medium text-white">{c.label}</div>
                <div className="mt-[18px] flex flex-wrap gap-1.5">
                  {c.metrics.map((m) => (
                    <span
                      key={m.t}
                      className={cn(
                        "rounded-full border px-2.5 py-[5px] text-[12.5px] font-semibold",
                        "todo" in m && m.todo
                          ? "border-dashed border-warning/60 bg-warning/[0.06] text-[#F5C46A]"
                          : "border-white/[0.09] bg-dark-3 text-[#C9CCDA]",
                      )}
                    >
                      {m.t}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-[14.5px] leading-relaxed">{c.text}</p>
                <span className="mt-auto flex items-center gap-1.5 pt-[18px] text-xs text-[#6F7489]">
                  <MonitorCheck size={14} /> Fonte: {c.src}
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mx-auto mt-7 max-w-[760px] text-center text-sm text-dark-muted">
          Resultado depende de oferta, margem, verba e execução dos dois lados. Por isso o diagnóstico vem antes de
          qualquer promessa.
        </p>
      </Reveal>
    </Section>
  );
}
