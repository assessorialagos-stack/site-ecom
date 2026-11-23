import { cn } from "@/app/lib/cn";

/** Largura padrão do conteúdo (1200px + respiro lateral). */
export const container = "relative mx-auto w-full max-w-[1200px] px-5";

const backgrounds = {
  white: "bg-background",
  soft: "bg-section",
  dark: "bg-dark text-dark-text",
};

/**
 * Wrapper padrão de seção: espaçamento vertical e fundo (branco, cinza ou escuro).
 * O fundo escuro já vem com o brilho azul das bordas.
 */
export function Section({
  id,
  children,
  className,
  innerClassName,
  bg = "white",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  bg?: keyof typeof backgrounds;
}) {
  return (
    <section
      id={id}
      className={cn("relative overflow-hidden py-[clamp(72px,9vw,124px)]", backgrounds[bg], className)}
    >
      {bg === "dark" && <div aria-hidden className="bg-dark-glow pointer-events-none absolute inset-0" />}
      <div className={cn(container, innerClassName)}>{children}</div>
    </section>
  );
}
