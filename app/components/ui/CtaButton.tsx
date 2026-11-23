"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/app/lib/cn";
import { smoothScrollTo } from "@/app/lib/scroll";
import { useLeadModal } from "../LeadModal";

const variants = {
  primary: "bg-accent text-white shadow-accent hover:bg-accent-hover",
  ghost: "border border-border bg-card text-foreground shadow-soft hover:border-border-strong",
  white: "bg-white text-foreground hover:shadow-[0_12px_28px_-12px_rgba(0,0,0,0.5)]",
  whatsapp: "bg-whatsapp text-[#06301A] hover:bg-[#2BE070]",
  "outline-dark": "border border-white/20 bg-white/[0.04] text-white hover:border-white/45",
};

const sizes = {
  md: "px-[26px] py-[17px] text-base",
  sm: "px-[18px] py-3 text-[14.5px]",
};

type Common = {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  arrow?: boolean;
  className?: string;
};

type Props = Common & ({ form: string; href?: never } | { href: string; form?: never });

/**
 * Botão de chamada da página.
 * - `form="hero"` abre o formulário de diagnóstico (o valor identifica o CTA no lead).
 * - `href` vira link: âncoras (#...) rolam suave, links externos abrem em nova aba.
 */
export function CtaButton({ children, variant = "primary", size = "md", arrow, className, ...rest }: Props) {
  const { open } = useLeadModal();
  const cls = cn(
    "group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full font-semibold leading-none transition duration-200 hover:-translate-y-0.5",
    variants[variant],
    sizes[size],
    className,
  );
  const icon = arrow && <ArrowRight size={18} className="shrink-0 transition-transform group-hover:translate-x-[3px]" />;

  if (rest.form) {
    const origem = rest.form;
    return (
      <button type="button" className={cls} onClick={() => open(origem)}>
        {children}
        {icon}
      </button>
    );
  }

  const href = rest.href!;
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={cls}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onClick={(e) => {
        if (href.startsWith("#")) {
          e.preventDefault();
          smoothScrollTo(href);
        }
      }}
    >
      {children}
      {icon}
    </a>
  );
}
