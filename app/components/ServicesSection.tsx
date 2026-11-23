import { cn } from "@/app/lib/cn";
import { CampaignMock } from "./mockups/CampaignMock";
import { RetentionMock } from "./mockups/RetentionMock";
import { SprintMock } from "./mockups/SprintMock";
import { CtaButton } from "./ui/CtaButton";
import { Reveal } from "./ui/Reveal";
import { container } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";

// Serviços em zigue-zague (texto + mockup), como os blocos da Bluefy.
const services = [
  {
    key: "assessoria",
    tagline: "Programa de Assessoria",
    title: "Estratégia e execução no mesmo time, toda semana",
    text: "Acompanhamento contínuo de quem entende de loja online: planejamento comercial, calendário de campanhas, oferta e kits, criativos e otimização semanal. Cada frente conversa com a outra, e cada tarefa tem dono, do nosso lado e do seu.",
    chips: ["Estratégia e growth", "Calendário promocional", "Oferta e kits", "Criativos e vídeo", "Social media", "Reunião semanal"],
    mock: <SprintMock />,
  },
  {
    key: "trafego",
    tagline: "Tráfego pago para e-commerce",
    title: "Anúncio que traz comprador, não curioso",
    text: "Meta Ads, Google Ads e TikTok Ads estruturados para loja online: catálogo, Shopping, remarketing e campanhas de escala. A verba vai para o produto que dá lucro, e a otimização olha custo por venda e margem, não só clique.",
    chips: ["Meta Ads", "Google Shopping", "Performance Max", "TikTok Ads", "Catálogo", "Remarketing"],
    mock: <CampaignMock />,
  },
  {
    key: "recompra",
    tagline: "Conversão e recompra",
    title: "O cliente mais barato é o que já comprou de você",
    text: "Ajustamos página de produto, oferta, frete e checkout para a visita virar pedido pago. Depois, fluxos de reativação no WhatsApp e na sua base de clientes trazem quem já comprou de volta. É assim que o custo de aquisição se paga e o valor de cada cliente cresce.",
    chips: ["Página de produto", "Oferta e frete", "Checkout", "Reativação no WhatsApp", "Base de clientes", "LTV"],
    mock: <RetentionMock />,
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="relative">
      <div className={container}>
        <SectionHeading
          eyebrow="O que entregamos"
          title="Um time completo cuidando do crescimento da sua loja"
          subtitle="Você não contrata um serviço isolado. Você coloca especialistas de e-commerce dentro da operação, sem o custo de montar uma equipe interna."
        />

        {services.map((s, i) => {
          const reverse = i % 2 === 1;
          return (
            <div key={s.key} className={cn("py-[clamp(40px,5vw,64px)]", i > 0 && "border-t border-border")}>
              <div className="grid items-center gap-[clamp(40px,6vw,96px)] lg:grid-cols-2">
                <div className={cn(reverse && "lg:order-2")}>
                  <Reveal>
                    <span className="mb-3.5 block text-sm font-bold uppercase tracking-[0.02em] text-accent">{s.tagline}</span>
                    <h3 className="text-[clamp(1.35rem,2.2vw,1.85rem)] font-bold leading-[1.12]">{s.title}</h3>
                  </Reveal>
                  <Reveal delay={0.08}>
                    <p className="mt-[18px] text-[clamp(1rem,1.35vw,1.1rem)] leading-relaxed">{s.text}</p>
                  </Reveal>
                  <Reveal delay={0.14}>
                    <div className="mb-[30px] mt-6 flex flex-wrap gap-2">
                      {s.chips.map((c) => (
                        <span key={c} className="rounded-full border border-border bg-section px-3 py-[7px] text-[13.5px] font-semibold text-body">
                          {c}
                        </span>
                      ))}
                    </div>
                    <CtaButton form={`servico-${s.key}`} arrow>
                      Falar com especialista
                    </CtaButton>
                  </Reveal>
                </div>
                <Reveal delay={0.1} className={cn(reverse && "lg:order-1")}>
                  {s.mock}
                </Reveal>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
