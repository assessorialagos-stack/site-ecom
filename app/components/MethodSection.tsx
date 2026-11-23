import { cn } from "@/app/lib/cn";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";

// Método Maré (nome do método no site principal), adaptado para e-commerce.
const steps = [
  { n: "0", k: "O alicerce", title: "Oferta", text: "Produto carro-chefe, preço, kit e frete que fazem sentido antes de qualquer anúncio." },
  { n: "1", k: "Alcance", title: "Descoberta", text: "Seu produto na frente de quem compra, testando o que realmente reage." },
  { n: "2", k: "Aquecimento", title: "Desejo", text: "Conteúdo, prova e quebra de objeção para quem já demonstrou interesse." },
  { n: "3", k: "Compra", title: "Decisão", text: "Página, oferta e checkout sem fricção para a visita virar pedido pago." },
  { n: "4", k: "Pós-venda", title: "Recompra", text: "Recorrência e expansão. O cliente mais lucrativo que a sua loja tem." },
];

export function MethodSection() {
  return (
    <Section id="metodo" bg="soft">
      <SectionHeading
        eyebrow="Método Maré"
        title="Do primeiro clique à recompra"
        subtitle="A maioria das agências traz cliente novo e para por aí. A Lagos constrói a oferta, atrai a pessoa certa, conduz a compra e faz ela voltar."
      />

      <div className="relative grid gap-3.5 pl-7 before:absolute before:bottom-5 before:left-[21px] before:top-5 before:w-0.5 before:bg-accent-line lg:grid-cols-5 lg:gap-4 lg:pl-0 lg:before:hidden">
        {/* Linha de onda ligando os passos (desktop) */}
        <svg viewBox="0 0 1200 40" preserveAspectRatio="none" aria-hidden className="absolute inset-x-0 top-5 hidden h-10 w-full text-accent-line lg:block">
          <path
            d="M0 20 C 100 0, 140 40, 240 20 S 380 0, 480 20 S 620 40, 720 20 S 860 0, 960 20 S 1100 40, 1200 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="8 8"
          />
        </svg>

        {steps.map((s, i) => {
          const base = i === 0;
          return (
            <Reveal key={s.title} delay={i * 0.08} className="relative z-[1] lg:mt-14">
              <article
                className={cn(
                  "relative ml-3 h-full rounded-[22px] border py-6 pl-11 pr-[22px] transition duration-300 hover:-translate-y-1 hover:shadow-card lg:ml-0 lg:pb-[26px] lg:pl-[22px]",
                  base ? "border-ink bg-ink" : "border-border bg-white",
                )}
              >
                <span
                  className={cn(
                    "absolute -left-[34px] top-[22px] grid h-11 w-11 place-items-center rounded-full border-2 border-accent font-heading text-[15px] font-extrabold shadow-[0_0_0_6px_var(--color-section)] lg:-top-14 lg:left-[22px]",
                    base ? "bg-accent text-white" : "bg-white text-accent",
                  )}
                >
                  {s.n}
                </span>
                <span className={cn("text-xs font-bold uppercase tracking-[0.06em]", base ? "text-accent-light" : "text-accent")}>{s.k}</span>
                <h3 className={cn("mb-2.5 mt-1.5 text-[21px] font-bold", base && "text-white")}>{s.title}</h3>
                <p className={cn("text-[15px] leading-relaxed", base && "text-dark-text")}>{s.text}</p>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal>
        <p className="mx-auto mt-10 max-w-[820px] text-center text-[clamp(1.02rem,1.5vw,1.18rem)] leading-relaxed text-foreground">
          Antes de aumentar a verba, a gente encontra o elo que trava a conta.{" "}
          <b className="text-accent-hover">Plano bonito que o seu time não consegue rodar é pior que plano simples que roda.</b>
        </p>
      </Reveal>
    </Section>
  );
}
