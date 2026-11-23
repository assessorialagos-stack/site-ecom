/** Símbolo da Lagos (duas ondas), redesenhado em vetor para funcionar no fundo claro. */
export function LagosMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 28" fill="currentColor" className={className} aria-hidden>
      <path d="M2 8.5c5 6.3 13 6.6 20 1.6 5-3.6 9.6-5 15.5-3.6-6-.6-10.3 2-14.4 5.8C15.4 18.9 6.6 17 2 8.5Z" />
      <path d="M2 17.5c5 6.3 13 6.6 20 1.6 5-3.6 9.6-5 15.5-3.6-6-.6-10.3 2-14.4 5.8C15.4 27.9 6.6 26 2 17.5Z" />
    </svg>
  );
}

/** Logo completo: símbolo + LAGOS + linha de apoio. */
export function LagosLogo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LagosMark className="h-[27px] w-[38px] text-accent" />
      <span className="leading-none">
        <b className={`block font-heading text-[19px] font-extrabold tracking-[0.14em] ${tone === "dark" ? "text-white" : "text-foreground"}`}>
          LAGOS
        </b>
        <small className="mt-0.5 block text-[10.5px] font-semibold uppercase tracking-[0.16em] text-muted max-[420px]:hidden">
          Assessoria e-commerce
        </small>
      </span>
    </span>
  );
}
