import { cn } from "@/app/lib/cn";

/**
 * Pílula azul com ponto, usada acima dos títulos de seção.
 * `tone="dark"` para as seções escuras.
 */
export function Eyebrow({
  children,
  className,
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border py-1.5 pl-2.5 pr-3 text-[13.5px] font-semibold leading-none",
        tone === "dark"
          ? "border-accent-light/20 bg-accent/10 text-accent-light"
          : "border-accent-line bg-accent-soft text-accent-hover",
        className,
      )}
    >
      <span className="h-[7px] w-[7px] rounded-full bg-accent shadow-[0_0_0_4px_rgba(59,107,255,0.15)]" />
      {children}
    </span>
  );
}
