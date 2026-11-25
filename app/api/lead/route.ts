import { NextResponse } from "next/server";
import { SITE_URL } from "@/app/lib/contact";
import { sendLeadToMeta } from "@/app/lib/metaCapi";

// ── Envio dos leads por e-mail (FormSubmit) ──────────────────────────────────
// Mesma rota do site principal, com os campos do formulário de e-commerce.
// Docs: https://formsubmit.co/documentation  •  https://formsubmit.co/ajax-documentation
//
//  1. ATIVAÇÃO: o 1º envio de uma origem nova dispara um e-mail com o botão
//     "Activate Form". Enquanto ninguém clica, o FormSubmit responde
//     {"success":"false"} e não entrega nada. A resposta é lida e logada.
//  2. _captcha=false: sem isso o reCAPTCHA barra envios feitos por AJAX/API.
//  3. _url: os navegadores não mandam mais a URL completa; vai neste campo.
//  4. _template=table: e-mail em tabela, legível.
//
// Variáveis de ambiente (Vercel → Settings → Environment Variables):
//   LEAD_EMAIL       : e-mail que recebe os leads. Fica fora do código porque o repositório é público.
//   FORMSUBMIT_ID    : opcional, a "random string" do e-mail de ativação (substitui o LEAD_EMAIL).
//   LEAD_CC          : e-mail(s) que recebem cópia (separados por vírgula).
//   LEAD_WEBHOOK_URL : encaminha o lead cru para planilha/CRM.
//   META_CAPI_TOKEN  : token da API de Conversões (ver app/lib/metaCapi.ts).

const FORMSUBMIT_ENDPOINT = process.env.FORMSUBMIT_ID?.trim() || process.env.LEAD_EMAIL?.trim() || "";
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${encodeURIComponent(FORMSUBMIT_ENDPOINT)}`;

type FormSubmitReply = { success?: string | boolean; message?: string };

type Attempt = {
  encoding: "json" | "form";
  ok: boolean;
  status: number;
  message: string;
};

/** Faz um POST no FormSubmit e interpreta a resposta. */
async function postToFormSubmit(
  fields: Record<string, string>,
  encoding: "json" | "form",
  referer: string,
): Promise<Attempt> {
  // Quem envia é o servidor, então declaramos a origem real do site.
  const headers: Record<string, string> = {
    Accept: "application/json",
    Origin: referer,
    Referer: `${referer}/`,
  };

  let body: string;
  if (encoding === "json") {
    headers["Content-Type"] = "application/json";
    body = JSON.stringify(fields);
  } else {
    // Mesmo formato de um <form> HTML comum: plano B quando o JSON falha.
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    body = new URLSearchParams(fields).toString();
  }

  try {
    const res = await fetch(FORMSUBMIT_URL, { method: "POST", headers, body, cache: "no-store" });
    const text = await res.text();

    let reply: FormSubmitReply | null = null;
    try {
      reply = JSON.parse(text) as FormSubmitReply;
    } catch {
      // Veio HTML (página de erro / desafio de captcha) em vez de JSON.
    }

    const ok = res.ok && String(reply?.success) === "true";
    const message = reply?.message ?? text.slice(0, 300);
    return { encoding, ok, status: res.status, message };
  } catch (err) {
    return { encoding, ok: false, status: 0, message: String(err) };
  }
}

function formatarDataHora(iso?: string) {
  const d = iso ? new Date(iso) : new Date();
  if (Number.isNaN(d.getTime())) return iso || "";
  return d.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
}

export async function POST(request: Request) {
  let data: Record<string, string>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "JSON inválido." }, { status: 400 });
  }

  // Honeypot (_honey): campo escondido que só robô preenche.
  if (data._honey) {
    return NextResponse.json({ success: true, emailSent: false, skipped: "honeypot" });
  }

  // Fica registrado no log do servidor mesmo que o e-mail falhe.
  console.log("Novo lead e-commerce recebido:", JSON.stringify(data));

  // Origem real do site (em dev cai para o domínio de produção).
  const reqUrl = new URL(request.url);
  const origin = request.headers.get("origin") || `${reqUrl.protocol}//${reqUrl.host}`;
  const referer = origin.includes("localhost") ? SITE_URL : origin.replace(/\/$/, "");

  const fields: Record<string, string> = {
    _subject: `Novo lead e-commerce: ${data.nome || "sem nome"}`,
    _template: "table",
    _captcha: "false",
    _url: data.pagina_url || `${referer}/`,
    ...(process.env.LEAD_CC ? { _cc: process.env.LEAD_CC } : {}),

    // Dados do lead (o que aparece na tabela do e-mail).
    Página: "Landing e-commerce",
    Nome: data.nome || "",
    WhatsApp: data.whatsapp || "",
    Loja: data.loja || "",
    Plataforma: data.plataforma || "",
    "Faturamento mensal": data.faturamento || "",
    Objetivo: data.objetivo || "",
    "Pode investir a partir de R$ 1.500/mês": data.investimento || "",
    "Botão clicado": data.cta || "",
    Promo: data.promo || "",
    "Data/hora": formatarDataHora(data.data_hora),
    Origem: data.pagina_origem || "/",
    utm_source: data.utm_source || "",
    utm_medium: data.utm_medium || "",
    utm_campaign: data.utm_campaign || "",
    utm_content: data.utm_content || "",
    utm_term: data.utm_term || "",
  };

  // Lead para a Meta pelo servidor (API de Conversões), em paralelo ao e-mail.
  // Mesmo event_id do pixel no navegador, para a Meta contar uma vez só.
  const metaPromise = data.event_id
    ? sendLeadToMeta(request, {
        eventId: data.event_id,
        nome: data.nome,
        whatsapp: data.whatsapp,
        sourceUrl: data.pagina_url,
      })
    : Promise.resolve({ sent: false, reason: "sem event_id" });

  // 1ª tentativa em JSON; se falhar, repete no formato de formulário HTML.
  const attempts: Attempt[] = [];
  if (!FORMSUBMIT_ENDPOINT) {
    console.error("LEAD_EMAIL não configurado: o lead não foi enviado por e-mail (segue pelo WhatsApp).");
  } else {
    let attempt = await postToFormSubmit(fields, "json", referer);
    attempts.push(attempt);
    if (!attempt.ok) {
      attempt = await postToFormSubmit(fields, "form", referer);
      attempts.push(attempt);
    }
  }

  const emailSent = attempts.some((a) => a.ok);
  if (!emailSent) {
    // Erro típico: "This form needs Activation..." → abrir o e-mail e clicar no botão.
    console.error("FormSubmit não aceitou o lead:", JSON.stringify(attempts));
  }

  // Webhook opcional (planilha/CRM).
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (err) {
      console.error("Falha ao encaminhar o lead para o webhook:", err);
    }
  }

  const meta = await metaPromise;

  return NextResponse.json({
    success: true,
    emailSent,
    metaSent: meta.sent,
    formsubmit: attempts[attempts.length - 1]?.message ?? "",
  });
}
