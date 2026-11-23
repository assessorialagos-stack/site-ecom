"use client";

import { useEffect, useState } from "react";
import { cn } from "@/app/lib/cn";
import { whatsappLink } from "@/app/lib/contact";
import { WA_MESSAGE } from "@/app/lib/site";
import { useLeadModal } from "./LeadModal";
import { WhatsAppIcon } from "./ui/SocialIcons";

/** Barra fixa no rodapé do celular: aparece depois que a pessoa passa do hero. */
export function MobileCtaBar() {
  const [show, setShow] = useState(false);
  const { open } = useLeadModal();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-[60] flex gap-2 border-t border-border bg-white/95 px-3 pb-[calc(10px+env(safe-area-inset-bottom))] pt-2.5 transition-transform duration-300 md:hidden",
        show ? "translate-y-0" : "translate-y-[110%]",
      )}
    >
      <button
        type="button"
        onClick={() => open("barra-mobile")}
        className="flex-1 rounded-full bg-accent px-4 py-[15px] text-[15px] font-semibold text-white shadow-accent"
      >
        Quero meu diagnóstico
      </button>
      <a
        href={whatsappLink(WA_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="grid w-[54px] shrink-0 place-items-center rounded-full bg-whatsapp text-white"
      >
        <WhatsAppIcon size={24} />
      </a>
    </div>
  );
}
