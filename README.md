# Lagos Assessoria · Landing de e-commerce

Página 100% voltada ao dono de e-commerce. Mesmo stack do site principal: Next.js 16 (App Router), React 19, Tailwind 4, framer-motion e Lenis.

Publicação: GitHub (`assessorialagos-stack/site-ecom`) ligado à Vercel (projeto `site-ecom`). Todo `git push` na `main` publica sozinho.

## Rodar

```bash
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

## Onde mexer

- Foto do fundador: `public/fundador.jpg` (aparece no topo e na seção do fundador).
- Nome do fundador, mensagem padrão do WhatsApp e **Promo de Natal**: `app/lib/site.ts`.
  - `PROMO.active = false` desliga tudo de Natal de uma vez (faixa do topo, selos, neve, textos e mensagens).
- Número de WhatsApp: `app/lib/contact.ts`.
- Seções: `app/components/*Section.tsx`, na ordem de `app/page.tsx`.
- Formulário (todos os botões abrem o mesmo): `app/components/LeadModal.tsx`. Envia para `app/api/lead/route.ts` (e-mail via FormSubmit + API de Conversões da Meta) e abre o WhatsApp com as respostas.

## Variáveis de ambiente (Vercel → Settings → Environment Variables)

- `LEAD_EMAIL`: e-mail que recebe os leads. Fica fora do código porque o repositório é público.
- `META_CAPI_TOKEN`: opcional. Sem ele, o Lead vai só pelo pixel do navegador.
- `FORMSUBMIT_ID`, `LEAD_CC`, `LEAD_WEBHOOK_URL`: opcionais (ver `app/api/lead/route.ts`).

## Pendências de conteúdo

- Nome do fundador (`app/lib/site.ts`; vazio esconde a etiqueta).
- Detalhes reais da Promo de Natal (`PROMO` em `app/lib/site.ts`).
- Carta do fundador (`FounderSection.tsx`) é rascunho: reescrever com a voz dele.
- Investimento do case da loja de informática (`ResultsSection.tsx`, etiqueta tracejada).
- FAQ: respostas de prazo e de fidelidade (`FAQSection.tsx`, marcadas com CONFERIR).
- Lista de plataformas atendidas (`PlatformStrip.tsx` e FAQ).
- Prints de depoimento de clientes de e-commerce (`public/depoimentos`).

## Cuidado com o deploy por FTP

O `deploy.js` (HostGator) veio do site principal. Com as mesmas credenciais e sem `FTP_REMOTE_DIR`, este projeto subiria por cima do site principal. Só use `npm run deploy` com uma pasta própria definida.
