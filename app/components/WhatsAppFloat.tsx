import { whatsappLink } from "@/app/lib/contact";
import { WA_MESSAGE } from "@/app/lib/site";
import { WhatsAppIcon } from "./ui/SocialIcons";

/** Botão flutuante do WhatsApp (desktop). No celular quem faz esse papel é a MobileCtaBar. */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(WA_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-[22px] right-[22px] z-[60] hidden h-[60px] w-[60px] place-items-center rounded-full bg-whatsapp text-white shadow-[0_14px_30px_-10px_rgba(37,211,102,0.7)] transition-transform hover:scale-[1.07] md:grid"
    >
      <span className="absolute inset-0 animate-ring rounded-full border-2 border-whatsapp" />
      <WhatsAppIcon size={30} className="relative" />
      <span className="pointer-events-none absolute right-[72px] whitespace-nowrap rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground opacity-0 shadow-card transition-opacity group-hover:opacity-100">
        Falar no WhatsApp
      </span>
    </a>
  );
}
