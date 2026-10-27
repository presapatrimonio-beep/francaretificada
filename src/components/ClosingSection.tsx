import React from 'react';
import lyonImg from '../assets/images/hero_lyon_dusk_1792019498545.jpg';

interface ClosingSectionProps {
  onOpenDossier: () => void;
}

export const ClosingSection: React.FC<ClosingSectionProps> = ({ onOpenDossier }) => {
  return (
    <section className="relative bg-[#050708] text-[#F0E9DC] overflow-hidden">
      {/* Full width nocturnal Lyon backdrop */}
      <div className="relative min-h-[90vh] flex flex-col justify-between py-24 md:py-36">
        <div className="absolute inset-0 z-0">
          <img
            src={lyonImg}
            alt="Lyon noturna com as luzes da cidade refletidas no Saône e Fourvière iluminada ao fundo"
            className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.12]"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050708] via-[#050708]/65 to-[#071923]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full my-auto">
          <div className="max-w-4xl space-y-8">
            <div className="text-xs uppercase tracking-[0.35em] text-[#C49A45] font-medium">
              Conclusão
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F0E9DC] font-light leading-[1.05] tracking-tight">
              A França espera.
              <span className="block text-[#C49A45] italic font-normal mt-2">
                A história continua.
              </span>
            </h2>

            <div className="space-y-3 pt-2">
              <p className="font-serif text-xl sm:text-2xl text-[#F0E9DC] font-light">
                Nas pegadas de Jean-Baptiste Willermoz.
              </p>
              <p className="font-serif text-base sm:text-lg text-[#F0E9DC]/80 font-light italic max-w-2xl leading-relaxed">
                Uma jornada pelas origens históricas, filosóficas e espirituais do Regime Escocês Retificado.
              </p>
            </div>

            <div className="pt-4">
              <div className="text-xs uppercase tracking-[0.28em] text-[#C49A45] font-medium mb-4">
                FRANÇA · 16–25 OUTUBRO 2027
              </div>
              <button
                onClick={onOpenDossier}
                className="inline-flex items-center justify-center px-10 py-4 bg-[#C49A45] hover:bg-[#DFC07D] text-[#050708] font-sans text-xs tracking-[0.25em] font-bold uppercase transition-all duration-300 shadow-2xl active:translate-y-px"
              >
                Quero Conhecer a Jornada
              </button>
            </div>
          </div>
        </div>

        {/* Minimalist Institutional Footer */}
        <footer className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-16 border-t border-[#A7A29A]/15 mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#A7A29A] font-light">
          <div className="flex items-center gap-3">
            <span className="font-serif text-sm tracking-[0.25em] text-[#F0E9DC] uppercase font-medium">
              Colégio Iniciático
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs tracking-wider">
            <a
              href="https://www.colegioiniciatico.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F0E9DC]/80 hover:text-[#C49A45] transition-colors"
            >
              www.colegioiniciatico.com.br
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};
