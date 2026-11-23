# Lagos Assessoria · Landing de e-commerce

Página 100% voltada ao dono de e-commerce. Mesmo stack do site principal: Next.js 16 (App Router), React 19, Tailwind 4, framer-motion e Lenis.

## Rodar

```bash
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

## Onde mexer

- Foto do fundador: salve em `public/fundador.png` (PNG recortado, fundo transparente, 4:5). Aparece no topo e na seção do fundador.
- Nome do fundador, e-mail e mensagem padrão do WhatsApp: `app/lib/site.ts`.
- Número de WhatsApp e e-mail que recebe os leads: `app/lib/contact.ts`.
- Seções: `app/components/*Section.tsx`, na ordem de `app/page.tsx`.
- Formulário (todos os botões abrem o mesmo): `app/components/LeadModal.tsx`. Envia para `app/api/lead/route.ts` (e-mail via FormSubmit + API de Conversões da Meta) e abre o WhatsApp com as respostas.

## Pendências de conteúdo

- Foto e nome do fundador.
- Carta do fundador (`FounderSection.tsx`) é rascunho: reescrever com a voz dele.
- Investimento do case da loja de informática (`ResultsSection.tsx`, etiqueta tracejada).
- FAQ: respostas de prazo e de fidelidade (`FAQSection.tsx`, marcadas com CONFERIR).
- Lista de plataformas atendidas (`PlatformStrip.tsx` e FAQ).
- Prints de depoimento de clientes de e-commerce (`public/depoimentos`).

## Antes de publicar

- `.env.local` não foi copiado do site principal de propósito. O `deploy.js` usa as credenciais de FTP dele; com as mesmas credenciais e sem `FTP_REMOTE_DIR`, este projeto subiria por cima do site principal. Defina `FTP_REMOTE_DIR` (ou outra conta/pasta) antes do primeiro `npm run deploy`.
- `META_CAPI_TOKEN` também fica no `.env.local` (só no servidor). Sem ele, o Lead vai só pelo pixel do navegador.
- Se a página for para um domínio novo, o FormSubmit pode pedir uma nova ativação por e-mail no primeiro lead.
