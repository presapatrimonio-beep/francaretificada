import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { AtlasSection } from './components/AtlasSection';
import { HeroSection } from './components/HeroSection';
import { NarrativeSection } from './components/NarrativeSection';
import { CitiesSection } from './components/CitiesSection';
import { HistoricalDocuSection } from './components/HistoricalDocuSection';
import { CulturalFormationSection } from './components/CulturalFormationSection';
import { ItinerarySection } from './components/ItinerarySection';
import { InvestmentSection } from './components/InvestmentSection';
import { ClosingSection } from './components/ClosingSection';
import { DossierModal } from './components/DossierModal';
import { ambientAudio } from './utils/ambientAudio';

export default function App() {
  const [isDossierOpen, setIsDossierOpen] = useState(false);
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

  return (
    <div className="min-h-screen bg-[#050708] text-[#F0E9DC] selection:bg-[#C49A45]/30 selection:text-[#F0E9DC] relative">
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
        onOpenDossier={() => setIsDossierOpen(true)}
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

        {/* 07. INVESTIMENTO: UMA EXPERIÊNCIA QUE VAI ALÉM DO TURISMO */}
        <InvestmentSection onOpenDossier={() => setIsDossierOpen(true)} />

        {/* 08. ENCERRAMENTO CINEMATOGRÁFICO: A FRANÇA ESPERA. A HISTÓRIA CONTINUA. */}
        <ClosingSection onOpenDossier={() => setIsDossierOpen(true)} />
      </main>

      {/* Modal do Dossiê Completo */}
      <DossierModal
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
      />
    </div>
  );
}
