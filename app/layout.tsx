import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "./components/GoogleTagManager";
import { LeadModalProvider } from "./components/LeadModal";
import { MobileCtaBar } from "./components/MobileCtaBar";
import { MotionProvider } from "./components/MotionProvider";
import { SmoothScroll } from "./components/SmoothScroll";
import { WhatsAppFloat } from "./components/WhatsAppFloat";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Assessoria de E-commerce | Lagos Assessoria",
  description:
    "Assessoria de marketing para donos de e-commerce. Tráfego, oferta, conversão e recompra operando como um só time, com foco em venda paga e lucro no caixa.",
  openGraph: {
    title: "Assessoria de E-commerce | Lagos Assessoria",
    description: "Acelere as vendas do seu e-commerce com lucro de verdade. Diagnóstico gratuito com um especialista.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${interTight.variable} h-full antialiased`}>
      <head>
        {/* Meta Pixel Code (mesmo pixel do site principal) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2236261557301574');
fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://www.facebook.com/tr?id=2236261557301574&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
        {/* Meta Pixel: evento Contact nos cliques em links de WhatsApp */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.addEventListener('click', function (e) {
  var link = e.target.closest('a[href*="wa.me"], a[href*="api.whatsapp.com"], a[href*="whatsapp.com/send"]');
  if (!link || typeof fbq !== 'function') return;
  fbq('track', 'Contact');
  // se o link abre na mesma aba, segura 300ms para o evento sair antes do WhatsApp abrir
  if (link.target !== '_blank') {
    e.preventDefault();
    setTimeout(function () { window.location.href = link.href; }, 300);
  }
}, true);`,
          }}
        />
        {/* Microsoft Clarity */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "z80dxjrvhc");`,
          }}
        />
        {/* End Microsoft Clarity */}
      </head>
      <body className="flex min-h-full flex-col overflow-x-hidden bg-background font-sans text-body selection:bg-accent/25">
        <GoogleTagManager />
        <SmoothScroll />
        <MotionProvider>
          <LeadModalProvider>
            {children}
            <WhatsAppFloat />
            <MobileCtaBar />
          </LeadModalProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
