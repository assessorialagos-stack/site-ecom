import { Check } from "lucide-react";
import { whatsappLink } from "@/app/lib/contact";
import { WA_MESSAGE } from "@/app/lib/site";
import { CtaButton } from "./ui/CtaButton";
import { Eyebrow } from "./ui/Eyebrow";
import { Reveal } from "./ui/Reveal";
import { container } from "./ui/Section";
import { WhatsAppIcon } from "./ui/SocialIcons";
import { Waves } from "./ui/Waves";

const ticks = ["Diagnóstico sem compromisso", "Resposta em menos de 5h", "Atendimento em todo o Brasil"];

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-dark py-[clamp(80px,10vw,140px)] text-center text-dark-text">
      <div aria-hidden className="pointer-events-none absolute -top-[200px] left-1/2 h-[600px] w-[900px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(59,107,255,0.35),transparent)]" />
      <Waves variant="band" className="absolute -bottom-2.5 -left-[5%] h-[120px] w-[110%] text-accent/[0.08]" />

      <div className={container}>
        <Reveal>
          <Eyebrow tone="dark" className="mb-5">
            Diagnóstico gratuito
          </Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mx-auto max-w-[860px] text-[clamp(2rem,4.4vw,3.6rem)] font-bold leading-[1.06] text-white">
            Vamos descobrir quanto a sua loja está deixando na mesa.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-[620px] text-[clamp(1.02rem,1.5vw,1.18rem)] leading-relaxed">
            Sem promessa mágica. Só método, execução e foco no que importa para o dono de e-commerce: venda paga e lucro
            no caixa.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="mt-9 flex flex-wrap justify-center gap-3">
          <CtaButton form="cta-final" arrow>
            Quero meu diagnóstico gratuito
          </CtaButton>
          <CtaButton href={whatsappLink(WA_MESSAGE)} variant="outline-dark">
            <WhatsAppIcon size={18} className="text-whatsapp" /> Prefiro o WhatsApp
          </CtaButton>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-[30px] flex flex-wrap justify-center gap-x-[26px] gap-y-2.5 text-sm">
            {ticks.map((t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <Check size={16} className="text-accent-light" /> {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
