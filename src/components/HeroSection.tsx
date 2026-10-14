import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import heroLyonImg from '../assets/images/hero_lyon_dusk_1792019498545.jpg';

interface HeroSectionProps {
  onDiscover: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onDiscover }) => {
  // Staged documentary reveal
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Stage 0: pure landscape
    const t1 = setTimeout(() => setStage(1), 500); // Title fade
    const t2 = setTimeout(() => setStage(2), 1400); // Subtitle & kicker fade
    const t3 = setTimeout(() => setStage(3), 2000); // Discovery cue fade
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <section
      id="top"
      className="relative w-full h-[100svh] min-h-[640px] flex flex-col justify-between overflow-hidden bg-[#050708]"
    >
      {/* Background full-bleed photography with gentle cinematic slow motion */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroLyonImg}
          alt="Tomada cinematográfica de Lyon ao entardecer às margens do Saône com a Basílica de Fourvière ao fundo"
          className="w-full h-full object-cover object-center transform transition-transform duration-[12000ms] ease-out scale-100 hover:scale-105"
          style={{
            animation: 'slowPush 24s ease-in-out infinite alternate',
          }}
          loading="eager"
          referrerPolicy="no-referrer"
        />

        {/* Cinematic exposure gradient - darkens only bottom and edges for supreme text readability while keeping Lyon radiant */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050708] via-[#050708]/30 to-[#050708]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050708]/80 via-transparent to-[#050708]/30" />
      </div>

      {/* Top spacing */}
      <div className="h-20" />

      {/* Monumental Documentary Title Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full my-auto">
        <div className="max-w-4xl">
          {/* Identification Kicker */}
          <div
            className={`transition-all duration-1000 transform ${
              stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-center gap-3 text-xs md:text-sm tracking-[0.35em] uppercase text-[#C49A45] font-medium mb-4">
              <span>França</span>
              <span aria-hidden="true" className="text-[#A7A29A]/50">·</span>
              <span>Julho de 2027</span>
            </div>
          </div>

          {/* Monumental Title */}
          <h1
            className={`font-serif text-[#F0E9DC] tracking-tight leading-[0.92] text-balance mb-6 transition-all duration-1000 delay-150 transform ${
              stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.12em] text-[#F0E9DC]/85 uppercase">
              Nas pegadas de
            </span>
            <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal tracking-[-0.02em] text-[#F0E9DC] uppercase mt-2 drop-shadow-2xl">
              Jean-Baptiste Willermoz
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`font-serif text-lg sm:text-xl md:text-2xl text-[#F0E9DC]/90 font-light italic max-w-2xl leading-relaxed text-balance transition-all duration-1000 delay-300 transform ${
              stage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Uma imersão histórica, filosófica e espiritual nas origens do Regime Escocês Retificado.
          </p>
        </div>
      </div>

      {/* Discreet Discovery Indicator: "Explore a França." */}
      <div
        className={`relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pb-8 flex items-center justify-between text-xs tracking-[0.28em] text-[#A7A29A] uppercase font-light transition-all duration-1000 ${
          stage >= 3 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="text-[11px] text-[#A7A29A]/70">Paris · Chartres · Lyon</span>

        <button
          onClick={onDiscover}
          className="flex items-center gap-3 text-[#F0E9DC]/90 hover:text-[#C49A45] transition-colors focus:outline-none cursor-pointer py-2 group"
          aria-label="Rolar e explorar a França"
        >
          <span className="text-xs tracking-[0.3em] uppercase">Explore a França</span>
          <ChevronDown className="w-4 h-4 transform group-hover:translate-y-1 transition-transform" />
        </button>

        <span className="hidden sm:inline text-[11px] text-[#A7A29A]/70">Colégio Iniciático</span>
      </div>

      <style>{`
        @keyframes slowPush {
          0% { transform: scale(1.0); }
          100% { transform: scale(1.08); }
        }
      `}</style>
    </section>
  );
};
