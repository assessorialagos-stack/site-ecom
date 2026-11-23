/* eslint-disable @next/next/no-img-element */
import { CtaButton } from "./ui/CtaButton";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { ZoomImage } from "./ui/ZoomImage";

// Prints neutros do site principal. O ideal é trocar por conversas de clientes de e-commerce.
const prints = [
  { src: "/depoimentos/conversa-3.jpg", alt: "Cliente no WhatsApp: fomos surpreendidos positivamente, o trabalho começou com o pé direito" },
  { src: "/depoimentos/conversa-1.jpg", alt: "Cliente no WhatsApp comemorando conversão de quase 50% no funil" },
  { src: "/depoimentos/conversa-2.jpg", alt: "Cliente no WhatsApp: os resultados estão aparecendo" },
];

export function TestimonialsSection() {
  return (
    <Section id="depoimentos">
      <SectionHeading
        eyebrow="Prova social"
        title="Conversas reais com clientes"
        subtitle="Prints dos grupos de atendimento, do jeito que chegam. Toque para ampliar."
      />

      <div className="-mx-5 flex snap-x snap-mandatory gap-3.5 overflow-x-auto px-5 pb-6 pt-2.5 md:mx-auto md:grid md:max-w-[980px] md:grid-cols-3 md:gap-[22px] md:overflow-visible md:p-0">
        {prints.map((p, i) => (
          <Reveal key={p.src} delay={i * 0.08} className="w-[78%] shrink-0 snap-center md:w-auto">
            <ZoomImage
              src={p.src}
              alt={p.alt}
              label="Ampliar conversa com cliente"
              className="relative block w-full rounded-[34px] bg-ink p-[9px] shadow-float transition duration-300 before:absolute before:left-1/2 before:top-4 before:z-[2] before:h-1.5 before:w-[70px] before:-translate-x-1/2 before:rounded-full before:bg-[#1E2130] hover:-translate-y-1.5 hover:-rotate-[0.5deg]"
            >
              <span className="block aspect-[9/16] overflow-hidden rounded-[26px] bg-[#111]">
                <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover object-top" />
              </span>
            </ZoomImage>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 text-center">
        <CtaButton form="depoimentos" arrow>
          Quero resultados assim na minha loja
        </CtaButton>
      </Reveal>
    </Section>
  );
}
