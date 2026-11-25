import { WA_MESSAGE } from "./site";

// ── Contato da Lagos ────────────────────────────────────────────────────────
// FONTE ÚNICA do número de WhatsApp. Troque AQUI (um lugar só) e o número muda
// no site inteiro: botão flutuante, header, footer, hero, formulário, etc.
//
// Formato internacional, SÓ DÍGITOS: 55 (Brasil) + DDD + número.
// Ex.: (14) 99123-4567  ->  "5514991234567"
//
// Número real da Lagos (DDD 41).
export const WHATSAPP_NUMBER = "5541996409408";

// Como o número aparece escrito na tela (ex.: no rodapé).
export const WHATSAPP_DISPLAY = "(41) 99640-9408";

/**
 * Monta um link wa.me com mensagem pré-preenchida.
 * Sem argumento, usa a mensagem padrão da página (tema e-commerce + Promo de Natal).
 */
export function whatsappLink(message: string = WA_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// O e-mail que recebe os leads NÃO fica no código (o repositório é público).
// Ele vem da variável de ambiente LEAD_EMAIL (ou FORMSUBMIT_ID), lida só no servidor
// em app/api/lead/route.ts.

// URL pública do site (fallback usado pelo servidor ao falar com o FormSubmit).
export const SITE_URL = "https://assessorialagos.com.br";
