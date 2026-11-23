"use client";

import { useEffect, useState } from "react";
import { cn } from "@/app/lib/cn";
import { LagosLogo } from "./ui/LagosMark";
import { CtaButton } from "./ui/CtaButton";
import { container } from "./ui/Section";

const links = [
  { href: "#assessoria", label: "Assessoria" },
  { href: "#servicos", label: "Serviços" },
  { href: "#metodo", label: "Método" },
  { href: "#resultados", label: "Resultados" },
  { href: "#faq", label: "Dúvidas" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="top"
      className={cn(
        "sticky top-0 z-50 border-b bg-white/85 backdrop-blur-[14px] backdrop-saturate-[1.8] transition-[border-color,box-shadow] duration-300",
        scrolled ? "border-border shadow-[0_6px_24px_-18px_rgba(16,24,40,0.35)]" : "border-transparent",
      )}
    >
      <div className={cn(container, "flex h-[76px] items-center justify-between gap-6")}>
        <a href="#top" aria-label="Lagos Assessoria, início">
          <LagosLogo />
        </a>
        <nav aria-label="Principal" className="hidden gap-[30px] text-[15px] font-medium text-body lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative py-1.5 transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-accent after:transition-transform hover:text-foreground hover:after:scale-x-100"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <CtaButton form="header" size="sm" className="max-[420px]:px-3.5 max-[420px]:text-[13.5px]">
          Falar com especialista
        </CtaButton>
      </div>
    </header>
  );
}
