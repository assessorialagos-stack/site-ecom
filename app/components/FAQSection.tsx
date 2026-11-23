import { whatsappLink } from "@/app/lib/contact";
import { WA_MESSAGE } from "@/app/lib/site";
import { CtaButton } from "./ui/CtaButton";
import { Eyebrow } from "./ui/Eyebrow";
import { FaqAccordion, type FaqItem } from "./ui/FaqAccordion";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";
import { WhatsAppIcon } from "./ui/SocialIcons";

// Respostas marcadas com CONFERIR são suposições: validar antes de publicar.
const items: FaqItem[] = [
  {
    q: "Qual o investimento para ser cliente?",
    a: (
      <p>
        Os planos de assessoria começam em R$ 1.500 por mês. A verba de anúncios é separada, vai direto para as
        plataformas e é definida junto com você no diagnóstico, de acordo com a sua meta e a sua margem.
      </p>
    ),
  },
  {
    q: "Minha loja é em Shopify, Nuvemshop, Tray... vocês atendem?",
    a: (
      <p>
        Sim. Atendemos lojas nas principais plataformas do mercado, como Shopify, Nuvemshop, Tray, VTEX, Loja Integrada
        e WooCommerce. A plataforma pesa menos que a oferta, a margem e a operação, e isso a gente avalia no
        diagnóstico.
      </p>
    ),
  },
  {
    // CONFERIR: prazo real de resultado.
    q: "Em quanto tempo começo a ver resultado?",
    a: (
      <p>
        O primeiro mês é de estrutura e validação: rastreamento, oferta, catálogo e primeiras campanhas. A partir daí
        entram os ciclos de otimização e escala. O ritmo depende da sua margem, da sua verba e da velocidade de execução
        dos dois lados, e isso fica combinado no diagnóstico.
      </p>
    ),
  },
  {
    q: "Vocês dão garantia de resultado?",
    a: (
      <p>
        Não prometemos número sem conhecer a operação. O que garantimos é método, execução e transparência total. E se
        a sua verba ou a sua margem não sustentarem a meta, a gente fala isso antes de assinar, não depois.
      </p>
    ),
  },
  {
    q: "O que fica com a Lagos e o que fica comigo?",
    a: (
      <>
        <p>
          A Lagos assume estratégia, tráfego, criativos, conversão, rastreamento e relatórios. Do seu lado ficam
          estoque, atendimento, logística e a aprovação das campanhas.
        </p>
        <p>
          Tudo isso fica escrito no início do trabalho, com nome e responsável para cada frente. Sem essa linha clara,
          ninguém consegue cobrar ninguém.
        </p>
      </>
    ),
  },
  {
    q: "Já tenho equipe interna de marketing. Funciona?",
    a: (
      <p>
        Funciona. A Lagos pode assumir as frentes que faltam ou liderar a estratégia junto com o seu time, com divisão
        clara de quem faz o quê.
      </p>
    ),
  },
  {
    q: "Como funcionam o acompanhamento e os relatórios?",
    a: (
      <p>
        Você tem um painel ao vivo com investimento, receita paga, ROAS e custo por venda, e uma rotina semanal de
        acompanhamento com pauta: o que funcionou, o que muda e quem faz.
      </p>
    ),
  },
  {
    // CONFERIR: regra real de fidelidade.
    q: "Tem contrato de fidelidade?",
    a: <p>As condições de contrato são apresentadas no diagnóstico, de forma transparente, antes de qualquer assinatura.</p>,
  },
  {
    q: "Como faço para começar?",
    a: (
      <p>
        Clique em qualquer botão da página e preencha o diagnóstico. Ao enviar, você fala na hora com o nosso time no
        WhatsApp.
      </p>
    ),
  },
];

export function FAQSection() {
  return (
    <Section id="faq" innerClassName="grid items-start gap-[clamp(32px,5vw,80px)] lg:grid-cols-[0.8fr_1.2fr]">
      <div className="lg:sticky lg:top-[110px]">
        <Reveal>
          <Eyebrow className="mb-5">Dúvidas</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-[clamp(1.85rem,3.7vw,3.05rem)] font-bold leading-[1.08]">Perguntas frequentes</h2>
          <p className="mt-4">Sem meias palavras. Respostas diretas sobre como a gente trabalha.</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-7 rounded-[22px] border border-border bg-section p-6">
            <b className="block font-heading text-lg tracking-[-0.01em] text-foreground">Ficou alguma dúvida?</b>
            <p className="mb-[18px] mt-1.5 text-[15px]">Chama no WhatsApp e fale direto com o nosso time.</p>
            <CtaButton href={whatsappLink(WA_MESSAGE)} variant="whatsapp" size="sm">
              <WhatsAppIcon size={18} /> Falar no WhatsApp
            </CtaButton>
          </div>
        </Reveal>
      </div>
      <Reveal delay={0.05}>
        <FaqAccordion items={items} />
      </Reveal>
    </Section>
  );
}
