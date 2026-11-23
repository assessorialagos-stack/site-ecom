import { cn } from "@/app/lib/cn";

// Confirme se a Lagos atende todas estas plataformas antes de publicar.
const platforms = [
  "Shopify",
  "Nuvemshop",
  "Tray",
  "VTEX",
  "Loja Integrada",
  "WooCommerce",
  "Meta Ads",
  "Google Ads",
  "TikTok Ads",
  "Google Analytics 4",
];

function Row({ dup = false }: { dup?: boolean }) {
  return (
    <>
      {platforms.map((p) => (
        <span
          key={p}
          aria-hidden={dup || undefined}
          className={cn(
            "inline-flex items-center gap-2.5 whitespace-nowrap font-heading text-[clamp(18px,2vw,22px)] font-bold tracking-[-0.02em] text-[#9A9FB3]",
            dup && "marquee-dup",
          )}
        >
          {p}
          <i className="h-2 w-2 rotate-45 rounded-[2px] bg-accent-line" />
        </span>
      ))}
    </>
  );
}

/** Faixa de plataformas e canais (equivalente à faixa de ferramentas da Bluefy). */
export function PlatformStrip() {
  return (
    <div className="border-y border-border bg-white pb-[38px] pt-[34px]">
      <p className="mb-[22px] text-center text-sm font-medium text-muted">
        Experiência com as plataformas e canais que a sua loja já usa
      </p>
      <div className="mask-fade-x overflow-hidden" aria-label={platforms.join(", ")}>
        <div className="marquee-track flex w-max animate-marquee gap-14 hover:[animation-play-state:paused]">
          <Row />
          <Row dup />
        </div>
      </div>
    </div>
  );
}
