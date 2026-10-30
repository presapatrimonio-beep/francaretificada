import { useState, useEffect } from 'react';
import { OpeningScreen } from './components/OpeningScreen';
import { Navbar } from './components/Navbar';
import { AtlasSection } from './components/AtlasSection';
import { HeroSection } from './components/HeroSection';
import { NarrativeSection } from './components/NarrativeSection';
import { CitiesSection } from './components/CitiesSection';
import { HistoricalDocuSection } from './components/HistoricalDocuSection';
import { CulturalFormationSection } from './components/CulturalFormationSection';
import { ItinerarySection } from './components/ItinerarySection';
import { InvestmentSection } from './components/InvestmentSection';
import { InstitutionalSection } from './components/InstitutionalSection';
import { ClosingSection } from './components/ClosingSection';
import { DossierModal, DossierModalMode } from './components/DossierModal';
import { ambientAudio } from './utils/ambientAudio';

export default function App() {
  const [isDossierOpen, setIsDossierOpen] = useState(false);
  const [dossierMode, setDossierMode] = useState<DossierModalMode>('cotacao');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAudioActive, setIsAudioActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleAudio = () => {
    const newState = ambientAudio.toggle();
    setIsAudioActive(newState);
  };

  const handleDiscover = () => {
    const el = document.getElementById('jornada');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProceedToExperience = () => {
    const el = document.getElementById('abertura-lyon');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenQuote = () => {
    setDossierMode('cotacao');
    setIsDossierOpen(true);
  };

  const handleOpenInterest = () => {
    setDossierMode('interesse');
    setIsDossierOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050708] text-[#F0E9DC] selection:bg-[#C49A45]/30 selection:text-[#F0E9DC] relative">
      {/* 00. TELA DE ABERTURA CINEMATOGRÁFICA (Vídeo abertura.mp4 em tela cheia com botão ENTRAR) */}
      <OpeningScreen />

      {/* Subtle gold line tracking scroll depth */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-[#C49A45] z-[60] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Top Bar with 3-zone contract and optional contemplative audio */}
      <Navbar
        onOpenDossier={handleOpenQuote}
        isAudioActive={isAudioActive}
        onToggleAudio={handleToggleAudio}
      />

      {/* Cinematic continuous experience */}
      <main>
        {/* 00. NOVA ABERTURA CINEMATOGRÁFICA — ATLAS DA FRANÇA RETIFICADA (Cartografia Histórica Séculos XVII-XVIII) */}
        <AtlasSection onProceedToExperience={handleProceedToExperience} />

        {/* 01. ABERTURA CINEMATOGRÁFICA (Lyon ao Pôr do Sol) */}
        <HeroSection onDiscover={handleDiscover} />

        {/* 02. A TRAVESSIA (O Chamado da História) */}
        <NarrativeSection />

        {/* 03. O PERCURSO: PARIS, CHARTRES E LYON EM TELAS PANORÂMICAS REAIS */}
        <CitiesSection />

        {/* 04. NOVA SEÇÃO HISTÓRICA: AS ORIGENS DE UMA TRADIÇÃO (6 Cenas Documentais Amplas) */}
        <HistoricalDocuSection />

        {/* 05. NOVA SEÇÃO DE FORMAÇÃO CULTURAL: O CONHECIMENTO NÃO TERMINA NO DESTINO */}
        <CulturalFormationSection />

        {/* 06. ROTEIRO DE 10 DIAS (Linha Narrativa Contínua Integrada) */}
        <ItinerarySection />

        {/* 07. PROJEÇÃO DO CUSTEIO POR PARTICIPANTE — CONDIÇÕES COMERCIAIS */}
        <InvestmentSection
          onOpenDossier={handleOpenQuote}
          onOpenQuote={handleOpenQuote}
          onOpenInterest={handleOpenInterest}
        />

        {/* 08. CAPÍTULOS INSTITUCIONAL E OPERACIONAL: APOIO INSTITUCIONAL (GPRER) & OPERAÇÃO TURÍSTICA (CVC) */}
        <InstitutionalSection />

        {/* 09. ENCERRAMENTO CINEMATOGRÁFICO: A FRANÇA ESPERA. A HISTÓRIA CONTINUA. */}
        <ClosingSection onOpenDossier={handleOpenInterest} />
      </main>

      {/* Modal do Dossiê Completo / Manifestação de Interesse */}
      <DossierModal
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
        mode={dossierMode}
        onModeChange={setDossierMode}
      />
    </div>
  );
}
