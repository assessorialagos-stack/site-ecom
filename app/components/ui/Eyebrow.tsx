import { cn } from "@/app/lib/cn";

const tones = {
  light: "border-accent-line bg-accent-soft text-accent-hover",
  dark: "border-accent-light/20 bg-accent/10 text-accent-light",
  // Promo de Natal: vermelho com ponto dourado.
  promo: "border-xmas/20 bg-xmas-soft text-xmas-dark",
};

const dots = {
  light: "bg-accent shadow-[0_0_0_4px_rgba(59,107,255,0.15)]",
  dark: "bg-accent shadow-[0_0_0_4px_rgba(59,107,255,0.15)]",
  promo: "bg-xmas shadow-[0_0_0_4px_rgba(242,193,78,0.45)]",
};

/**
 * Pílula com ponto, usada acima dos títulos de seção.
 * `tone="dark"` para as seções escuras; `tone="promo"` para a Promo de Natal.
 */
export function Eyebrow({
  children,
  className,
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: keyof typeof tones;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border py-1.5 pl-2.5 pr-3 text-[13.5px] font-semibold leading-none",
        tones[tone],
        className,
      )}
    >
      <span className={cn("h-[7px] w-[7px] rounded-full", dots[tone])} />
      {children}
    </span>
  );
}
