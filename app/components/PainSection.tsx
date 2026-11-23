import { ChartLine, ChartNoAxesColumn, Clock, RefreshCwOff, Tag, Users } from "lucide-react";
import { CtaButton } from "./ui/CtaButton";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";

const pains = [
  {
    icon: ChartLine,
    title: "ROAS bonito, caixa vazio",
    text: "O painel comemora venda que nunca foi paga. Pix expirado e boleto vencido entram na conta, e a decisão de verba sai errada.",
  },
  {
    icon: ChartNoAxesColumn,
    title: "Faturamento travado no mesmo teto",
    text: "Todo mês você bate no mesmo número. Sobe a verba, sobe o custo por venda, e o faturamento não sai do lugar.",
  },
  {
    icon: RefreshCwOff,
    title: "Cliente compra uma vez e some",
    text: "Sem recompra, cada mês começa do zero e você paga de novo para vender para quem já conhece a sua marca.",
  },
  {
    icon: Users,
    title: "Quatro fornecedores, nenhum responsável",
    text: "Gestor de tráfego, designer, social media e programador. Cada um olha a sua parte e ninguém responde pelo resultado da loja.",
  },
  {
    icon: Tag,
    title: "Agência que não sabe o que é markup",
    text: "Relatório de alcance e curtida não paga estoque parado nem a folha. Quem cuida da sua loja precisa entender de margem.",
  },
  {
    icon: Clock,
    title: "Você faz tudo sozinho",
    text: "Atende cliente, compra estoque, aprova criativo e ainda apaga incêndio. A operação inteira depende de você para andar.",
  },
];

export function PainSection() {
  return (
    <Section id="diagnostico" bg="soft">
      <SectionHeading
        eyebrow="Se você é dono de e-commerce, já viveu isso"
        title="Sua loja vende. Mas o lucro não acompanha."
        subtitle="Faturamento subindo e caixa apertado é o sintoma mais comum que a gente encontra. A causa quase nunca é uma só."
      />

      <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {pains.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.08}>
            <article className="h-full rounded-[22px] border border-border bg-white px-[26px] pb-[30px] pt-7 transition duration-300 hover:-translate-y-1 hover:border-[#D5D9E8] hover:shadow-card">
              <span className="mb-5 grid h-[46px] w-[46px] place-items-center rounded-[13px] bg-[#FFF1F1] text-danger">
                <p.icon size={22} />
              </span>
              <h3 className="mb-2.5 text-xl font-bold tracking-[-0.02em]">{p.title}</h3>
              <p className="text-[15.5px] leading-relaxed">{p.text}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[22px] bg-ink px-[30px] py-[26px] text-[#C9CCDA] sm:flex-row sm:items-center">
          <p className="max-w-[760px] text-[clamp(1.02rem,1.5vw,1.2rem)] leading-relaxed">
            <b className="text-white">O problema quase nunca é só o anúncio.</b> A conta trava no elo mais fraco da
            operação, não no mais visível. É por ele que a gente começa.
          </p>
          <CtaButton form="dores" variant="white" arrow>
            Encontrar o meu elo fraco
          </CtaButton>
        </div>
      </Reveal>
    </Section>
  );
}
