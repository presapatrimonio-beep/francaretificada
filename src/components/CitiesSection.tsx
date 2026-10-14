import React, { useState } from 'react';
import parisPanoramicImg from '../assets/images/paris_seine_eiffel_1792020267474.jpg';
import parisStreetImg from '../assets/images/paris_historic_dusk_1792019500631.jpg';
import chartresFacadeImg from '../assets/images/chartres_cathedral_golden_1792019499361.jpg';
import chartresRoseImg from '../assets/images/chartres_rose_window_1792020267869.jpg';
import lyonStreetImg from '../assets/images/vieux_lyon_historic_1792020268721.jpg';
import lyonRiverImg from '../assets/images/hero_lyon_dusk_1792019498545.jpg';

export const CitiesSection: React.FC = () => {
  const [parisView, setParisView] = useState<'panoramic' | 'street'>('panoramic');
  const [chartresView, setChartresView] = useState<'facade' | 'stained_glass'>('facade');
  const [lyonView, setLyonView] = useState<'streets' | 'saone'>('streets');

  return (
    <div id="percurso" className="relative bg-[#050708] text-[#F0E9DC]">
      {/* ============================================================== */}
      {/* 06. PARIS — A CIDADE DAS LUZES */}
      {/* ============================================================== */}
      <section className="relative min-h-[100vh] py-28 md:py-36 overflow-hidden border-t border-[#A7A29A]/15">
        {/* Full atmospheric panoramic backdrop */}
        <div className="absolute inset-0 z-0">
          <img
            src={parisView === 'panoramic' ? parisPanoramicImg : parisStreetImg}
            alt="Fotografia panorâmica de Paris às margens do Sena com luz natural do entardecer"
            className="w-full h-full object-cover object-center transition-all duration-1000 ease-in-out filter brightness-[0.72] contrast-[1.05]"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050708] via-[#050708]/60 to-[#050708]/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050708]/90 via-[#050708]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-between min-h-[70vh]">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.35em] text-[#C49A45] font-medium">
              <span>Etapa I</span>
              <span aria-hidden="true" className="text-[#A7A29A]/50">·</span>
              <span>A Cidade das Luzes</span>
            </div>

            <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light text-[#F0E9DC] tracking-tight leading-none">
              Paris
            </h2>

            <p className="font-serif text-xl sm:text-2xl text-[#C49A45] font-light italic leading-snug">
              O ambiente intelectual da França do século XVIII.
            </p>

            <p className="text-base sm:text-lg text-[#F0E9DC]/85 font-light leading-relaxed max-w-2xl pt-2">
              Entre bibliotecas, instituições históricas e monumentos, Paris permite investigar o desenvolvimento da Maçonaria francesa, o Iluminismo e o ambiente cultural no qual diferentes sistemas maçônicos se desenvolveram.
            </p>

            {/* Seamless perspective selector embedded naturally into documentary */}
            <div className="pt-4 flex items-center gap-6 text-xs uppercase tracking-[0.2em]">
              <span className="text-[#A7A29A]/60 text-[10px]">Perspectiva Documental:</span>
              <button
                onClick={() => setParisView('panoramic')}
                className={`py-1 transition-colors border-b ${
                  parisView === 'panoramic'
                    ? 'border-[#C49A45] text-[#F0E9DC]'
                    : 'border-transparent text-[#A7A29A] hover:text-[#F0E9DC]'
                }`}
              >
                O Sena & Panorama Urbano
              </button>
              <button
                onClick={() => setParisView('street')}
                className={`py-1 transition-colors border-b ${
                  parisView === 'street'
                    ? 'border-[#C49A45] text-[#F0E9DC]'
                    : 'border-transparent text-[#A7A29A] hover:text-[#F0E9DC]'
                }`}
              >
                Quartier Latin & Panthéon
              </button>
            </div>
          </div>

          {/* Integrated Locais de Interesse without boxes or cards */}
          <div className="pt-12 border-t border-[#A7A29A]/15 mt-12">
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#A7A29A] mb-3">
              Locais de Investigação Histórica
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm sm:text-base text-[#F0E9DC]/90 font-serif">
              <span>Musée de la Franc-Maçonnerie</span>
              <span aria-hidden="true" className="text-[#C49A45]">·</span>
              <span>Rue Cadet</span>
              <span aria-hidden="true" className="text-[#C49A45]">·</span>
              <span>Bibliothèque nationale de France</span>
              <span aria-hidden="true" className="text-[#C49A45]">·</span>
              <span>Panthéon</span>
              <span aria-hidden="true" className="text-[#C49A45]">·</span>
              <span>Quartier Latin</span>
            </div>
            <p className="text-[11px] text-[#A7A29A]/70 italic mt-3 font-sans">
              * A visita a instituições, arquivos e espaços especializados será confirmada previamente. Acesso sujeito às autorizações oficiais.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 07. CHARTRES — A PEDRA E A LUZ */}
      {/* ============================================================== */}
      <section className="relative min-h-[100vh] py-28 md:py-36 overflow-hidden border-t border-[#A7A29A]/15">
        {/* Full atmospheric Gothic architectural backdrop */}
        <div className="absolute inset-0 z-0">
          <img
            src={chartresView === 'facade' ? chartresFacadeImg : chartresRoseImg}
            alt="Catedral de Chartres sob perspectiva monumental de luz e pedra medieval"
            className="w-full h-full object-cover object-center transition-all duration-1000 ease-in-out filter brightness-[0.70] contrast-[1.08]"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050708] via-[#050708]/60 to-[#050708]/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050708]/90 via-[#050708]/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-between min-h-[70vh]">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.35em] text-[#C49A45] font-medium">
              <span>Etapa II</span>
              <span aria-hidden="true" className="text-[#A7A29A]/50">·</span>
              <span>A Pedra e a Luz</span>
            </div>

            <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light text-[#F0E9DC] tracking-tight leading-none">
              Chartres
            </h2>

            <p className="font-serif text-xl sm:text-2xl text-[#C49A45] font-light italic leading-snug">
              Pedra, luz e arquitetura sagrada.
            </p>

            <p className="text-base sm:text-lg text-[#F0E9DC]/85 font-light leading-relaxed max-w-2xl pt-2">
              A Catedral de Chartres oferece um campo extraordinário para o estudo da arquitetura gótica, da luz, dos vitrais e da relação entre espaço arquitetônico e experiência religiosa medieval.
            </p>

            <p className="text-base text-[#A7A29A] font-light leading-relaxed max-w-2xl">
              Nesta etapa, a jornada investiga o patrimônio histórico e suas possibilidades de interpretação simbólica, distinguindo os significados documentados das leituras desenvolvidas posteriormente no âmbito iniciático.
            </p>

            {/* View toggle */}
            <div className="pt-4 flex items-center gap-6 text-xs uppercase tracking-[0.2em]">
              <span className="text-[#A7A29A]/60 text-[10px]">Cenário:</span>
              <button
                onClick={() => setChartresView('facade')}
                className={`py-1 transition-colors border-b ${
                  chartresView === 'facade'
                    ? 'border-[#C49A45] text-[#F0E9DC]'
                    : 'border-transparent text-[#A7A29A] hover:text-[#F0E9DC]'
                }`}
              >
                Fachada Real & Torres Góticas
              </button>
              <button
                onClick={() => setChartresView('stained_glass')}
                className={`py-1 transition-colors border-b ${
                  chartresView === 'stained_glass'
                    ? 'border-[#C49A45] text-[#F0E9DC]'
                    : 'border-transparent text-[#A7A29A] hover:text-[#F0E9DC]'
                }`}
              >
                A Rosácea do Século XIII & Interior
              </button>
            </div>
          </div>

          <div className="pt-12 border-t border-[#A7A29A]/15 mt-12 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 text-xs text-[#A7A29A] font-light">
            <span className="tracking-widest uppercase text-[#F0E9DC]">Estudo Iconográfico & Litúrgico</span>
            <span>Distinção rigorosa entre a gênese medieval e apropriações modernas</span>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 08. LYON — O CENTRO DA NARRATIVA */}
      {/* ============================================================== */}
      <section className="relative min-h-[100vh] py-28 md:py-36 overflow-hidden border-t border-[#A7A29A]/15">
        {/* Full atmospheric backdrop of historic Lyon */}
        <div className="absolute inset-0 z-0">
          <img
            src={lyonView === 'streets' ? lyonStreetImg : lyonRiverImg}
            alt="Presença física em Lyon com ruas antigas do Vieux Lyon e vista para Fourvière"
            className="w-full h-full object-cover object-center transition-all duration-1000 ease-in-out filter brightness-[0.72] contrast-[1.05]"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050708] via-[#050708]/60 to-[#050708]/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050708]/90 via-[#050708]/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-between min-h-[70vh]">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.35em] text-[#C49A45] font-medium">
              <span>Etapa III · O Centro da Narrativa</span>
              <span aria-hidden="true" className="text-[#A7A29A]/50">·</span>
              <span>Origem da Reforma</span>
            </div>

            <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light text-[#F0E9DC] tracking-tight leading-none">
              Lyon
            </h2>

            <p className="font-serif text-xl sm:text-2xl text-[#C49A45] font-light italic leading-snug">
              A cidade de Jean-Baptiste Willermoz.
            </p>

            <p className="text-base sm:text-lg text-[#F0E9DC]/85 font-light leading-relaxed max-w-2xl pt-2">
              Lyon é indispensável para compreender a trajetória de Jean-Baptiste Willermoz e sua atuação na história da Maçonaria francesa. É nesse contexto que se desenvolveu a Reforma de Lyon, associada à formação do Regime Escocês Retificado.
            </p>

            <p className="text-base text-[#A7A29A] font-light leading-relaxed max-w-2xl">
              A cidade oferece o cenário para investigar as relações entre a vida maçônica do século XVIII, os debates filosóficos da época e a identidade histórica do Regime.
            </p>

            {/* View toggle */}
            <div className="pt-4 flex items-center gap-6 text-xs uppercase tracking-[0.2em]">
              <span className="text-[#A7A29A]/60 text-[10px]">Perspectiva:</span>
              <button
                onClick={() => setLyonView('streets')}
                className={`py-1 transition-colors border-b ${
                  lyonView === 'streets'
                    ? 'border-[#C49A45] text-[#F0E9DC]'
                    : 'border-transparent text-[#A7A29A] hover:text-[#F0E9DC]'
                }`}
              >
                Vieux Lyon & Ruas Históricas
              </button>
              <button
                onClick={() => setLyonView('saone')}
                className={`py-1 transition-colors border-b ${
                  lyonView === 'saone'
                    ? 'border-[#C49A45] text-[#F0E9DC]'
                    : 'border-transparent text-[#A7A29A] hover:text-[#F0E9DC]'
                }`}
              >
                Margens do Saône & Fourvière
              </button>
            </div>
          </div>

          <div className="pt-12 border-t border-[#A7A29A]/15 mt-12">
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#A7A29A] mb-3">
              Geografia Urbana de Willermoz
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm sm:text-base text-[#F0E9DC]/90 font-serif">
              <span>Vieux Lyon</span>
              <span aria-hidden="true" className="text-[#C49A45]">·</span>
              <span>As Margens do Saône</span>
              <span aria-hidden="true" className="text-[#C49A45]">·</span>
              <span>Presqu&apos;île</span>
              <span aria-hidden="true" className="text-[#C49A45]">·</span>
              <span>Colina de Fourvière</span>
              <span aria-hidden="true" className="text-[#C49A45]">·</span>
              <span>Círculo Intelectual Setecentista</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
