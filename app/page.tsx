import { ComparisonSection } from "./components/ComparisonSection";
import { DataSection } from "./components/DataSection";
import { DiagnosticBand } from "./components/DiagnosticBand";
import { FAQSection } from "./components/FAQSection";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { FounderSection } from "./components/FounderSection";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { MethodSection } from "./components/MethodSection";
import { PainSection } from "./components/PainSection";
import { PlatformStrip } from "./components/PlatformStrip";
import { PositioningSection } from "./components/PositioningSection";
import { PromoBar } from "./components/PromoBar";
import { ResultsSection } from "./components/ResultsSection";
import { ServicesSection } from "./components/ServicesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";

// Página 100% voltada ao dono de e-commerce.
// Estrutura com bluefy.com.br como referência principal: hero com rosto, faixa de
// plataformas, posicionamento, faixa de diagnóstico, serviços em zigue-zague,
// resultados com contexto, depoimentos, FAQ e fechamento. Das outras referências:
// o comparativo "com e sem" (Mamba) e o formulário que qualifica o lead.
// Todos os botões abrem o mesmo formulário (LeadModal), que leva ao WhatsApp.
export default function Home() {
  return (
    <>
      {/* Âncora do "Voltar ao topo" (o header é sticky, então não serve de alvo). */}
      <div id="top" aria-hidden />
      <PromoBar />
      <Header />
      <main>
        <HeroSection />
        <PlatformStrip />
        <PainSection />
        <PositioningSection />
        <DiagnosticBand />
        <ServicesSection />
        <DataSection />
        <MethodSection />
        <ComparisonSection />
        <ResultsSection />
        <TestimonialsSection />
        <FounderSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
