/** Ondas decorativas (referência ao símbolo da Lagos). A cor vem de `text-*`. */
export function Waves({
  className,
  variant = "card",
}: {
  className?: string;
  variant?: "card" | "band";
}) {
  if (variant === "band") {
    return (
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" fill="currentColor" className={className} aria-hidden>
        <path d="M0 50c150-50 300-50 450 0s300 50 450 0 225-40 300-20v90H0Z" />
        <path d="M0 80c150-50 300-50 450 0s300 50 450 0 225-40 300-20v60H0Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 400 160" fill="currentColor" className={className} aria-hidden>
      <path d="M0 60c60-40 120-40 200 0s140 40 200 0v100H0Z" />
      <path d="M0 100c60-40 120-40 200 0s140 40 200 0v60H0Z" />
    </svg>
  );
}

/** Ícone do Pix (losango duplo), que o lucide não tem. */
export function PixIcon({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" className={className} aria-hidden>
      <path d="m12 3 9 9-9 9-9-9 9-9Z" />
      <path d="m8 12 4 4 4-4-4-4-4 4Z" />
    </svg>
  );
}
