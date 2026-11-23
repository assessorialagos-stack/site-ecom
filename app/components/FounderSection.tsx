import { FOUNDER } from "@/app/lib/site";
import { Eyebrow } from "./ui/Eyebrow";
import { FounderPhoto } from "./ui/FounderPhoto";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";

// Carta "de dono para dono". RASCUNHO: reescrever com a voz do fundador.
export function FounderSection() {
  return (
    <Section id="quem" bg="soft" innerClassName="grid items-center gap-[clamp(40px,6vw,88px)] lg:grid-cols-[0.8fr_1.2fr]">
      <Reveal>
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px]">
          <FounderPhoto className="rounded-[28px]" hint="A mesma foto do topo aparece aqui automaticamente" />
        </div>
      </Reveal>

      <div className="text-[clamp(1.02rem,1.4vw,1.14rem)] leading-relaxed">
        <Reveal>
          <Eyebrow className="mb-5">De dono para dono</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-[clamp(1.85rem,3.7vw,3.05rem)] font-bold leading-[1.08]">
            Você fala com quem decide, não com um atendente.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-[22px]">
            Montei a Lagos depois de ver muito dono de loja pagando agência que entrega relatório de curtida. Quem vende
            online sabe que o número que importa é o que sobra depois do frete, da taxa, do anúncio e do estoque.
          </p>
          <p className="my-6 border-l-[3px] border-accent pl-5 font-heading text-[clamp(1.25rem,2vw,1.6rem)] font-semibold leading-[1.3] tracking-[-0.02em] text-foreground">
            &ldquo;Aqui cada conta tem nome e responsável. E eu acompanho de perto as decisões que mexem no seu caixa.&rdquo;
          </p>
          <p>
            Se a sua verba ou a sua margem não sustentarem a meta, eu prefiro te dizer isso no diagnóstico do que depois
            de três meses de contrato.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-7 border-t border-border pt-6">
            <b className="block text-[17px] text-foreground">{FOUNDER.name}</b>
            <span className="text-sm text-muted">{FOUNDER.role}</span>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
