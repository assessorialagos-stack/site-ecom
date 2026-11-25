import { cn } from "@/app/lib/cn";
import { PROMO } from "@/app/lib/site";

// Posições fixas (não aleatórias) para o HTML do servidor e do navegador serem iguais.
const flakes = Array.from({ length: 26 }, (_, i) => ({
  left: (i * 37 + 11) % 100,
  size: 3 + ((i * 7) % 5),
  duration: 9 + ((i * 13) % 9),
  delay: -((i * 5) % 17),
  drift: ((i % 5) - 2) * 18,
  opacity: 0.35 + ((i * 3) % 5) / 10,
}));

/** Neve leve e decorativa da Promo de Natal. Some com "reduzir animações" e com PROMO.active = false. */
export function Snowfall({ className, tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  if (!PROMO.active) return null;
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {flakes.map((f, i) => (
        <span
          key={i}
          className={cn(
            "snowflake absolute -top-4 rounded-full",
            tone === "dark" ? "bg-white" : "bg-accent-light shadow-[0_0_6px_rgba(143,180,255,0.8)]",
          )}
          style={
            {
              left: `${f.left}%`,
              width: f.size,
              height: f.size,
              opacity: f.opacity,
              "--drift": `${f.drift}px`,
              animation: `snow ${f.duration}s linear ${f.delay}s infinite`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
