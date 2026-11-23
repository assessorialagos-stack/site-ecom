import { cn } from "@/app/lib/cn";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

/**
 * Cabeçalho de seção: pílula + título grande + subtítulo.
 * `tone="dark"` inverte as cores para as seções escuras.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
  className,
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
}) {
  const center = align === "center";
  const dark = tone === "dark";

  return (
    <div className={cn("mb-[clamp(40px,5vw,64px)] max-w-[760px]", center && "mx-auto text-center", className)}>
      {eyebrow && (
        <Reveal className="mb-5">
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "text-[clamp(1.85rem,3.7vw,3.05rem)] font-bold leading-[1.08] text-balance",
            dark ? "text-white" : "text-foreground",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.12}>
          <p
            className={cn(
              "mt-[18px] text-[clamp(1.02rem,1.4vw,1.15rem)] leading-relaxed",
              dark ? "text-dark-text" : "text-body",
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
