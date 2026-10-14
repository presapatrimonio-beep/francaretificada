import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { NarrativeSection } from './components/NarrativeSection';
import { WillermozSection } from './components/WillermozSection';
import { RegimeSection } from './components/RegimeSection';
import { CitiesSection } from './components/CitiesSection';
import { AcademicSection } from './components/AcademicSection';
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

      {/* Top Bar with 3-zone contract, subtle auto-hide on fast scroll, and optional audio */}
      <Navbar
        onOpenDossier={() => setIsDossierOpen(true)}
        isAudioActive={isAudioActive}
        onToggleAudio={handleToggleAudio}
      />

      {/* Cinematic continuous experience */}
      <main>
        {/* 04. Abertura cinematográfica */}
        <HeroSection onDiscover={handleDiscover} />

        {/* 05. A Travessia — O Chamado da História */}
        <NarrativeSection />

        {/* 06, 07, 08. Paris, Chartres, Lyon — O Percurso */}
        <CitiesSection />

        {/* 09. Jean-Baptiste Willermoz — O Personagem Central */}
        <WillermozSection />

        {/* 10. O Regime Escocês Retificado */}
        <RegimeSection />

        {/* 11. A Experiência da Viagem & Roteiro de 10 Dias */}
        <AcademicSection />
        <ItinerarySection />

        {/* 12. Investimento — Uma Experiência que vai Além do Turismo */}
        <InvestmentSection onOpenDossier={() => setIsDossierOpen(true)} />

        {/* 13. Encerramento — A França espera. A história continua. */}
        <ClosingSection onOpenDossier={() => setIsDossierOpen(true)} />
      </main>

      {/* Dossiê application modal */}
      <DossierModal
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
      />
    </div>
  );
}
