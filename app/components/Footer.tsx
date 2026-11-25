import { WHATSAPP_DISPLAY, whatsappLink } from "@/app/lib/contact";
import { LagosLogo } from "./ui/LagosMark";
import { container } from "./ui/Section";
import { WhatsAppIcon } from "./ui/SocialIcons";

const nav = [
  { href: "#assessoria", label: "A assessoria" },
  { href: "#servicos", label: "Serviços" },
  { href: "#metodo", label: "Método Maré" },
  { href: "#resultados", label: "Resultados" },
  { href: "#faq", label: "Perguntas frequentes" },
];

export function Footer() {
  return (
    <footer className="bg-[#05060A] pb-8 pt-16 text-[15px] text-dark-muted max-md:pb-[110px]">
      <div className={container}>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#top">
              <LagosLogo tone="dark" />
            </a>
            <p className="mt-4 max-w-[340px]">A assessoria de marketing feita por quem entende de loja de verdade.</p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.06em] text-white">Navegação</h4>
            <ul className="grid gap-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="transition-colors hover:text-white">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.06em] text-white">Contato</h4>
            <ul className="grid gap-2.5">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <WhatsAppIcon size={16} className="text-whatsapp" /> {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>Atendimento para todo o Brasil</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-white/[0.07] pt-6 text-[13.5px]">
          <span>© {new Date().getFullYear()} Lagos Assessoria. Todos os direitos reservados.</span>
          <a href="#top" className="transition-colors hover:text-white">
            Voltar ao topo ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
