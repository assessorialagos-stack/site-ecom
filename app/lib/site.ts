// ── Dados fixos da página de e-commerce ─────────────────────────────────────
// Troque AQUI (um lugar só) e muda na página inteira.

export const FOUNDER = {
  // Nome que aparece na etiqueta da foto e na assinatura da carta.
  // Vazio = a etiqueta some e a assinatura mostra só o cargo.
  name: "",
  role: "Fundador da Lagos Assessoria",
  // Foto com fundo (cobre a moldura inteira).
  photo: "/fundador.jpg",
};

// ── Promo de Natal ──────────────────────────────────────────────────────────
// `active: false` desliga todos os elementos natalinos de uma vez (faixa do topo,
// selos, neve e textos), sem mexer na estrutura da página.
export const PROMO = {
  active: true,
  label: "Promo de Natal",
  // Faixa fixa no topo do site.
  bar: "Promo de Natal Lagos: condição especial para lojas que começarem com a gente neste fim de ano.",
  // Linha de apoio que aparece nos CTAs principais.
  note: "Condição especial de Natal para novos clientes",
};

// Mensagem padrão dos botões de WhatsApp (fora do formulário).
export const WA_MESSAGE = PROMO.active
  ? "Olá! Vi a página da Lagos para e-commerce e tenho interesse na Promo de Natal da assessoria. Tenho uma loja online e quero entender como funciona."
  : "Olá! Vi a página da Lagos para e-commerce e quero falar com um especialista sobre a minha loja online.";
