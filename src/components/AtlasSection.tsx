import React, { useState, useEffect, useCallback } from 'react';
import { MapPin, Compass, Eye, Maximize2, X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw, Sparkles } from 'lucide-react';
import parisImage from '../assets/images/paris_historic_dusk_1792019500631.jpg';
import versaillesImage from '../assets/images/chateau_versailles_facade_cour_royale.jpg';
import chartresImage from '../assets/images/chartres_cathedral_golden_1792019499361.jpg';
import lyonImage from '../assets/images/hero_lyon_dusk_1792019498545.jpg';

interface AtlasSectionProps {
  onProceedToExperience?: () => void;
}

type CityKey = 'paris' | 'versalhes' | 'chartres' | 'lyon';

interface CityInfo {
  key: CityKey;
  name: string;
  coords: string;
  stageNum: string;
  subtitle: string;
  description: string;
  historicalSites: string[];
  xPercent: number;
  yPercent: number;
  image: string;
  imageCaption: string;
}

const CITIES: Record<CityKey, CityInfo> = {
  paris: {
    key: 'paris',
    name: 'Paris',
    coords: "48°51'N · 02°21'E",
    stageNum: 'I',
    subtitle: 'O Iluminismo & O Debate das Luzes',
    description:
      'O contexto intelectual e histórico da Maçonaria francesa setecentista. O ambiente cultural no qual diferentes correntes filosóficas e sistemas maçônicos se desenvolveram às vésperas da Revolução.',
    historicalSites: [
      'Musée de la Franc-Maçonnerie',
      'Rue Cadet & Grandes Orientes',
      'Bibliothèque nationale de France (BnF)',
      'Panthéon & Quartier Latin',
    ],
    xPercent: 56.4,
    yPercent: 26.5,
    image: parisImage,
    imageCaption: 'Paris histórica ao entardecer — Rue Cadet e a memória documental do Século das Luzes',
  },
  versalhes: {
    key: 'versalhes',
    name: 'Versalhes',
    coords: "48°48'N · 02°07'E",
    stageNum: 'I-A',
    subtitle: 'A Corte e o Século das Luzes',
    description:
      'O ambiente da monarquia francesa, a sociabilidade aristocrática e as relações entre poder, cultura, filosofia e Maçonaria no século XVIII.',
    historicalSites: [
      'Château de Versailles',
      'Galerie des Glaces',
      'Jardins de Versailles',
      'Grand Trianon e Petit Trianon',
      'Hameau de la Reine',
      'Personagens e sociabilidade maçônica',
    ],
    xPercent: 54.5,
    yPercent: 28.5,
    image: versaillesImage,
    imageCaption: 'Château de Versailles — A monumentalidade da corte e o ambiente intelectual setecentista',
  },
  chartres: {
    key: 'chartres',
    name: 'Chartres',
    coords: "48°27'N · 01°29'E",
    stageNum: 'II',
    subtitle: 'A Pedra, a Luz & o Sagrado',
    description:
      'Arquitetura gótica monumental, patrimônio religioso e simbolismo medieval. A geometria sagrada, a orientação solar da nave e a teologia da luz expressa nos vitrais azuis do século XIII.',
    historicalSites: [
      'Cathédrale Notre-Dame de Chartres',
      'Cripta Românica & Labirinto Gótico',
      'Vitrais de Saint-Denis e Chartres',
      'Oficinas Medievais de Mestres de Obra',
    ],
    xPercent: 48.0,
    yPercent: 41.5,
    image: chartresImage,
    imageCaption: 'Fachada monumental da Catedral de Chartres banhada pela luz dourada vespertina',
  },
  lyon: {
    key: 'lyon',
    name: 'Lyon',
    coords: "45°45'N · 04°50'E",
    stageNum: 'III',
    subtitle: 'O Berço da Reforma Retificada',
    description:
      'Jean-Baptiste Willermoz, o Convento das Gálias de 1778 e a formação histórica do Regime Escocês Retificado. A preservação dos manuscritos e rituais originais na confluência do Ródano e Saône.',
    historicalSites: [
      'Convento das Gálias (1778)',
      'Acervos Willermoz (Bibliothèque municipale)',
      'Vieux Lyon & Colina de Fourvière',
      'Cais do Saône e Memória Martinista',
    ],
    xPercent: 64.0,
    yPercent: 69.5,
    image: lyonImage,
    imageCaption: 'Lyon ao entardecer com o rio Saône e a Basílica de Fourvière no alto da colina',
  },
};

const CITY_KEYS: CityKey[] = ['paris', 'versalhes', 'chartres', 'lyon'];

export const AtlasSection: React.FC<AtlasSectionProps> = ({ onProceedToExperience }) => {
  const [selectedCity, setSelectedCity] = useState<CityKey>('lyon');
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [mapZoom, setMapZoom] = useState(1);

  const city = CITIES[selectedCity];

  const handleNextCity = useCallback(() => {
    const currentIndex = CITY_KEYS.indexOf(selectedCity);
    const nextIndex = (currentIndex + 1) % CITY_KEYS.length;
    setSelectedCity(CITY_KEYS[nextIndex]);
  }, [selectedCity]);

  const handlePrevCity = useCallback(() => {
    const currentIndex = CITY_KEYS.indexOf(selectedCity);
    const prevIndex = (currentIndex - 1 + CITY_KEYS.length) % CITY_KEYS.length;
    setSelectedCity(CITY_KEYS[prevIndex]);
  }, [selectedCity]);

  // Keyboard navigation for modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsPhotoModalOpen(false);
        setIsMapModalOpen(false);
      } else if (isPhotoModalOpen && e.key === 'ArrowRight') {
        handleNextCity();
      } else if (isPhotoModalOpen && e.key === 'ArrowLeft') {
        handlePrevCity();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPhotoModalOpen, handleNextCity, handlePrevCity]);

  const handleOpenCityModal = (k: CityKey) => {
    setSelectedCity(k);
    setIsPhotoModalOpen(true);
  };

  return (
    <section
      id="atlas"
      className="relative w-full bg-[#050708] text-[#F0E9DC] selection:bg-[#C49A45]/30 selection:text-[#F0E9DC] overflow-hidden border-b border-[#A7A29A]/15"
      aria-label="Atlas da França Retificada"
    >
      {/* Background Atmosphere: Rich dark velvet slate with subtle historical paper grain */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,_var(--tw-gradient-stops))] from-[#18232c] via-[#091016] to-[#040608]" />
        {/* Subtle antique cross-hatch paper texture simulation */}
        <div
          className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
          style={{
            backgroundImage: `radial-gradient(#C49A45 0.75px, transparent 0.75px), radial-gradient(#C49A45 0.75px, #071118 0.75px)`,
            backgroundSize: '24px 24px',
            backgroundPosition: '0 0, 12px 12px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050708]/40 to-[#050708]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full pt-[220px] sm:pt-[320px] md:pt-[380px] lg:pt-[430px] pb-20">
        
        {/* 01. EDITORIAL HEADER — Art Publication Standard */}
        <header className="pb-10 md:pb-14 border-b border-[#A7A29A]/15">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-3 text-xs tracking-[0.35em] text-[#C49A45] uppercase font-medium">
                <Compass className="w-3.5 h-3.5 text-[#C49A45]" />
                <span>França Retificada · Cartografia Histórica · 1778–1782</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F0E9DC] font-light tracking-tight leading-[1.05]">
                Atlas da <span className="font-normal text-[#C49A45] italic">França Retificada</span>
              </h1>
              <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#DFC07D]/90 font-light italic">
                Nas pegadas de Jean-Baptiste Willermoz — Paris · Chartres · Lyon
              </p>
              <p className="text-sm sm:text-base text-[#A7A29A] font-light leading-relaxed max-w-2xl pt-1">
                Uma imersão histórica, filosófica e documental nas origens do Regime Escocês Retificado.
                Explore a rota geográfica setecentista que moldou a reforma dos ritos cavalheirescos e cristãos na Europa.
              </p>
            </div>

            <div className="lg:text-right shrink-0 space-y-1.5 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#A7A29A]/15">
              <div className="text-xs uppercase tracking-[0.25em] text-[#C49A45] font-medium">
                FRANÇA · 16–25 OUTUBRO 2027
              </div>
              <div className="text-[11px] text-[#A7A29A] uppercase tracking-wider font-light">
                10 Dias de Imersão e Pesquisa Documental
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsMapModalOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#C49A45]/15 hover:bg-[#C49A45] text-[#DFC07D] hover:text-[#050708] border border-[#C49A45]/50 hover:border-[#C49A45] text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-300 cursor-pointer shadow-sm"
                  title="Abrir mapa em alta definição e tela cheia"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Ampliar Mapa em Alta Resolução</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* 02. O MAPA HISTÓRICO MONUMENTAL (O Protagonista Visual do Atlas) */}
        <section aria-label="Mapa do Atlas Histórico" className="pt-10 md:pt-14 pb-14">
          <div className="relative group/mapFrame">
            {/* Museum Matting & Frame Presentation */}
            <div className="relative bg-[#080d12] border border-[#C49A45]/40 p-2 sm:p-3 md:p-4 shadow-[0_30px_90px_rgba(0,0,0,0.9)] transition-all duration-500 hover:border-[#C49A45]/70">
              
              {/* Top Subtitle Bar inside Map Matting */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 px-2 pb-3 mb-2 border-b border-[#A7A29A]/15 text-[11px]">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#C49A45] animate-pulse" />
                  <span className="uppercase tracking-[0.22em] text-[#DFC07D] font-medium">
                    Pergaminho Cartográfico Monumental · Paris · Chartres · Lyon
                  </span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#A7A29A] flex items-center gap-2">
                  <Sparkles className="w-3 h-3 text-[#C49A45]" />
                  <span>Interativo: Clique nos marcadores das cidades ou na imagem para ampliar</span>
                </div>
              </div>

              {/* Grand Map Canvas */}
              <div
                className="relative w-full overflow-hidden bg-[#040608] cursor-pointer"
                onClick={() => setIsMapModalOpen(true)}
              >
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-10-26_at_23.45.42_1141ab41.jpeg"
                  alt="Atlas da França Retificada - Nas Pegadas de Jean-Baptiste Willermoz: Rota Paris, Chartres e Lyon"
                  className="w-full h-auto object-contain filter contrast-[1.02] brightness-[0.98] transition-transform duration-1000 ease-out group-hover/mapFrame:scale-[1.01]"
                  loading="eager"
                />

                {/* Subtle Cinematic Vignette Overlay */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#050708]/50 via-transparent to-[#050708]/20 mix-blend-multiply" />

                {/* ============================================================ */}
                {/* INTERACTIVE CITY HOTSPOT: PARIS (56.4% X, 26.5% Y)            */}
                {/* ============================================================ */}
                <div
                  style={{ left: `${CITIES.paris.xPercent}%`, top: `${CITIES.paris.yPercent}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-30 group/parisMarker"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenCityModal('paris');
                  }}
                  title="Ver detalhes de Paris"
                >
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-8 h-8 rounded-full bg-[#C49A45]/40 animate-ping pointer-events-none" />
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 shadow-2xl ${
                        selectedCity === 'paris'
                          ? 'border-[#DFC07D] bg-[#C49A45] text-[#050708] scale-125'
                          : 'border-[#C49A45] bg-[#071118]/95 text-[#DFC07D] hover:scale-115 hover:border-[#DFC07D]'
                      }`}
                    >
                      <MapPin className="w-4 h-4" />
                    </div>

                    {/* Floating Editorial Badge Tooltip */}
                    <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#071118]/95 border border-[#C49A45] px-3.5 py-1.5 text-center shadow-2xl pointer-events-none opacity-0 group-hover/parisMarker:opacity-100 transition-opacity duration-200 z-40">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[#C49A45] font-semibold">
                        Etapa I · Paris
                      </div>
                      <div className="text-[10px] text-[#F0E9DC]/90 italic font-serif">
                        O Iluminismo & O Debate das Luzes
                      </div>
                      <div className="text-[9px] text-[#A7A29A] mt-0.5 font-sans uppercase tracking-wider">
                        Toque para abrir fotografia e detalhes
                      </div>
                    </div>
                  </div>
                </div>

                {/* ============================================================ */}
                {/* INTERACTIVE CITY HOTSPOT: VERSALHES (54.5% X, 28.5% Y)       */}
                {/* ============================================================ */}
                <div
                  style={{ left: `${CITIES.versalhes.xPercent}%`, top: `${CITIES.versalhes.yPercent}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-30 group/versalhesMarker"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenCityModal('versalhes');
                  }}
                  title="Ver detalhes de Versalhes"
                >
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-8 h-8 rounded-full bg-[#C49A45]/40 animate-ping pointer-events-none" />
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 shadow-2xl ${
                        selectedCity === 'versalhes'
                          ? 'border-[#DFC07D] bg-[#C49A45] text-[#050708] scale-125'
                          : 'border-[#C49A45] bg-[#071118]/95 text-[#DFC07D] hover:scale-115 hover:border-[#DFC07D]'
                      }`}
                    >
                      <MapPin className="w-4 h-4" />
                    </div>

                    {/* Floating Editorial Badge Tooltip */}
                    <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#071118]/95 border border-[#C49A45] px-3.5 py-1.5 text-center shadow-2xl pointer-events-none opacity-0 group-hover/versalhesMarker:opacity-100 transition-opacity duration-200 z-40">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[#C49A45] font-semibold">
                        Etapa I-A · Versalhes
                      </div>
                      <div className="text-[10px] text-[#F0E9DC]/90 italic font-serif">
                        A Corte e o Século das Luzes
                      </div>
                      <div className="text-[9px] text-[#A7A29A] mt-0.5 font-sans uppercase tracking-wider">
                        Toque para abrir fotografia e detalhes
                      </div>
                    </div>
                  </div>
                </div>

                {/* ============================================================ */}
                {/* INTERACTIVE CITY HOTSPOT: CHARTRES (48.0% X, 41.5% Y)         */}
                {/* ============================================================ */}
                <div
                  style={{ left: `${CITIES.chartres.xPercent}%`, top: `${CITIES.chartres.yPercent}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-30 group/chartresMarker"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenCityModal('chartres');
                  }}
                  title="Ver detalhes de Chartres"
                >
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-8 h-8 rounded-full bg-[#C49A45]/40 animate-ping pointer-events-none" />
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 shadow-2xl ${
                        selectedCity === 'chartres'
                          ? 'border-[#DFC07D] bg-[#C49A45] text-[#050708] scale-125'
                          : 'border-[#C49A45] bg-[#071118]/95 text-[#DFC07D] hover:scale-115 hover:border-[#DFC07D]'
                      }`}
                    >
                      <MapPin className="w-4 h-4" />
                    </div>

                    {/* Floating Editorial Badge Tooltip */}
                    <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#071118]/95 border border-[#C49A45] px-3.5 py-1.5 text-center shadow-2xl pointer-events-none opacity-0 group-hover/chartresMarker:opacity-100 transition-opacity duration-200 z-40">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[#C49A45] font-semibold">
                        Etapa II · Chartres
                      </div>
                      <div className="text-[10px] text-[#F0E9DC]/90 italic font-serif">
                        A Pedra, a Luz & o Sagrado
                      </div>
                      <div className="text-[9px] text-[#A7A29A] mt-0.5 font-sans uppercase tracking-wider">
                        Toque para abrir fotografia e detalhes
                      </div>
                    </div>
                  </div>
                </div>

                {/* ============================================================ */}
                {/* INTERACTIVE CITY HOTSPOT: LYON (64.0% X, 69.5% Y)             */}
                {/* ============================================================ */}
                <div
                  style={{ left: `${CITIES.lyon.xPercent}%`, top: `${CITIES.lyon.yPercent}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-30 group/lyonMarker"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenCityModal('lyon');
                  }}
                  title="Ver detalhes de Lyon"
                >
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-8 h-8 rounded-full bg-[#C49A45]/40 animate-ping pointer-events-none" />
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 shadow-2xl ${
                        selectedCity === 'lyon'
                          ? 'border-[#DFC07D] bg-[#C49A45] text-[#050708] scale-125'
                          : 'border-[#C49A45] bg-[#071118]/95 text-[#DFC07D] hover:scale-115 hover:border-[#DFC07D]'
                      }`}
                    >
                      <MapPin className="w-4 h-4" />
                    </div>

                    {/* Floating Editorial Badge Tooltip */}
                    <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#071118]/95 border border-[#C49A45] px-3.5 py-1.5 text-center shadow-2xl pointer-events-none opacity-0 group-hover/lyonMarker:opacity-100 transition-opacity duration-200 z-40">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[#C49A45] font-semibold">
                        Etapa III · Lyon
                      </div>
                      <div className="text-[10px] text-[#F0E9DC]/90 italic font-serif">
                        O Berço da Reforma Retificada
                      </div>
                      <div className="text-[9px] text-[#A7A29A] mt-0.5 font-sans uppercase tracking-wider">
                        Toque para abrir fotografia e detalhes
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Bottom Badge */}
                <div className="absolute bottom-3 right-3 hidden sm:flex items-center gap-2 bg-[#050708]/85 border border-[#C49A45]/40 px-3.5 py-1.5 backdrop-blur-sm pointer-events-none">
                  <Eye className="w-3.5 h-3.5 text-[#C49A45]" />
                  <span className="text-[10px] uppercase tracking-widest text-[#DFC07D]">
                    Toque no mapa para ampliar em tela cheia com zoom
                  </span>
                </div>
              </div>

              {/* Bottom Quick Bar */}
              <div className="mt-3 pt-3 border-t border-[#A7A29A]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C49A45] font-semibold">
                    Etapas do Itinerário:
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {CITY_KEYS.map((k) => {
                      const c = CITIES[k];
                      const isActive = selectedCity === k;
                      return (
                        <button
                          key={k}
                          type="button"
                          onClick={() => {
                            setSelectedCity(k);
                            const el = document.getElementById(`cidade-card-${k}`);
                            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                          }}
                          className={`px-3 py-1 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] border transition-all duration-300 cursor-pointer ${
                            isActive
                              ? 'border-[#C49A45] bg-[#C49A45]/25 text-[#DFC07D] font-semibold'
                              : 'border-[#A7A29A]/20 bg-[#050708]/50 text-[#A7A29A] hover:border-[#C49A45]/50 hover:text-[#F0E9DC]'
                          }`}
                        >
                          <span className="text-[#C49A45] mr-1">{c.stageNum}.</span>
                          <span>{c.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="text-[10px] text-[#A7A29A] tracking-wider uppercase font-light">
                  Paris → Versalhes → Chartres → Lyon · 16 a 25 de Outubro de 2027
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03. TRIPTYQUE EDITORIAL: AS TRÊS CIDADES DA EXPEDIÇÃO (Sem Caixas Rígidas de PowerPoint) */}
        <section aria-label="Dossiê das Três Cidades da Expedição" className="pt-4 pb-12">
          <div className="mb-8">
            <div className="text-xs uppercase tracking-[0.3em] text-[#C49A45] font-medium mb-2">
              Dossiê Documental da Expedição
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F0E9DC] font-light tracking-tight">
              O Tríptico da <span className="text-[#C49A45] italic">Tradição Francesa</span>
            </h2>
            <p className="text-sm sm:text-base text-[#A7A29A] font-light max-w-3xl mt-1">
              Quatro destinos fundamentais, cada qual representando um vértice indispensável para compreender a arquitetura espiritual, intelectual e ritualística do Regime Escocês Retificado.
            </p>
          </div>

          {/* 4-Column Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 items-stretch">
            {CITY_KEYS.map((k) => {
              const c = CITIES[k];
              const isSelected = selectedCity === k;

              return (
                <article
                  key={k}
                  id={`cidade-card-${k}`}
                  onClick={() => setSelectedCity(k)}
                  className={`relative flex flex-col justify-between border transition-all duration-500 bg-[#071118]/80 p-6 sm:p-7 backdrop-blur-sm group cursor-pointer ${
                    isSelected
                      ? 'border-[#C49A45] shadow-[0_15px_40px_rgba(196,154,69,0.15)] ring-1 ring-[#C49A45]/30'
                      : 'border-[#A7A29A]/20 hover:border-[#C49A45]/60 hover:bg-[#071118]'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Stage Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-[#A7A29A]/15 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-[#C49A45] text-sm font-semibold">
                          ETAPA {c.stageNum}
                        </span>
                        <span className="text-[#A7A29A]/40">·</span>
                        <span className="font-mono text-[10px] tracking-wider text-[#A7A29A]">
                          {c.coords}
                        </span>
                      </div>
                      <span
                        className={`text-[9px] uppercase tracking-widest px-2 py-0.5 border ${
                          isSelected
                            ? 'border-[#C49A45] text-[#DFC07D] bg-[#C49A45]/15'
                            : 'border-transparent text-[#A7A29A]/60'
                        }`}
                      >
                        {isSelected ? 'Em Destaque' : 'Selecionar'}
                      </span>
                    </div>

                    {/* City Title & Subtitle */}
                    <div>
                      <h3 className="font-serif text-3xl sm:text-4xl text-[#F0E9DC] font-normal tracking-tight group-hover:text-[#DFC07D] transition-colors">
                        {c.name}
                      </h3>
                      <p className="font-serif text-sm sm:text-base text-[#DFC07D] italic mt-1">
                        {c.subtitle}
                      </p>
                    </div>

                    {/* Descriptive Narrative */}
                    <p className="text-xs sm:text-sm text-[#F0E9DC]/80 font-light leading-relaxed">
                      {c.description}
                    </p>

                    {/* Photographic Aperture Window */}
                    <div
                      className="relative h-44 sm:h-48 w-full overflow-hidden border border-[#C49A45]/30 bg-[#050708] mt-4 shadow-inner"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenCityModal(k);
                      }}
                      role="button"
                      tabIndex={0}
                      aria-label={`Abrir fotografia de ${c.name} em alta resolução`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          handleOpenCityModal(k);
                        }
                      }}
                    >
                      <img
                        src={c.image}
                        alt={c.imageCaption}
                        className="w-full h-full object-cover object-center filter brightness-[0.80] contrast-[1.08] group-hover:scale-105 group-hover:brightness-95 transition-all duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050708]/90 via-transparent to-transparent pointer-events-none" />
                      
                      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#F0E9DC] pointer-events-none">
                        <span className="flex items-center gap-1.5 text-[#DFC07D] font-medium">
                          <Eye className="w-3.5 h-3.5 text-[#C49A45]" />
                          <span>Fotografia Histórica</span>
                        </span>
                        <span className="text-[#A7A29A] group-hover:text-[#F0E9DC] flex items-center gap-1 transition-colors">
                          <span>Ampliar</span>
                          <Maximize2 className="w-3 h-3" />
                        </span>
                      </div>
                    </div>

                    {/* Sites of investigation */}
                    <div className="pt-2">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[#C49A45] font-medium mb-1.5">
                        Pontos de Investigação
                      </div>
                      <ul className="space-y-1">
                        {c.historicalSites.map((site, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-[#A7A29A] font-light flex items-center gap-2"
                          >
                            <span className="w-1 h-1 rounded-full bg-[#C49A45]" />
                            <span>{site}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="pt-6 mt-6 border-t border-[#A7A29A]/15">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenCityModal(k);
                      }}
                      className="w-full py-2.5 bg-[#C49A45]/15 hover:bg-[#C49A45] text-[#DFC07D] hover:text-[#050708] border border-[#C49A45]/50 hover:border-[#C49A45] text-[11px] uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Ver Registro Visual de {c.name}</span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* 04. TRANSIÇÃO CINEMATOGRÁFICA PARA A PRÓXIMA SEÇÃO */}
        <footer className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#A7A29A]/15 text-xs text-[#A7A29A]">
          <div className="flex items-center gap-3 tracking-[0.25em] uppercase text-[11px]">
            <MapPin className="w-3.5 h-3.5 text-[#C49A45]" />
            <span>Itinerário Completo: Paris → Versalhes → Chartres → Lyon</span>
          </div>

          <div className="text-[11px] tracking-[0.2em] uppercase font-light text-[#A7A29A]/80">
            Edição Outubro de 2027 · França Retificada
          </div>
        </footer>
      </div>

      {/* ==================================================================== */}
      {/* MODAL 1: HIGH-RESOLUTION FULLSCREEN MAP WITH PAN & ZOOM CONTROLS    */}
      {/* ==================================================================== */}
      {isMapModalOpen && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center p-3 md:p-6 bg-[#050708]/98 backdrop-blur-xl transition-all duration-300"
          role="dialog"
          aria-modal="true"
          aria-label="Atlas da França Retificada em Alta Definição"
          onClick={() => {
            setIsMapModalOpen(false);
            setMapZoom(1);
          }}
        >
          <div
            className="relative max-w-7xl w-full h-[92vh] bg-[#071118] border border-[#C49A45]/60 shadow-[0_25px_80px_rgba(0,0,0,0.95)] flex flex-col overflow-hidden text-[#F0E9DC]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 border-b border-[#A7A29A]/20 px-3 sm:px-6 py-2.5 sm:py-3 bg-[#050708]/90 shrink-0">
              <div className="flex items-center gap-3">
                <Compass className="w-4 h-4 text-[#C49A45] shrink-0" />
                <div>
                  <h3 className="font-serif text-sm sm:text-lg text-[#F0E9DC] font-normal leading-tight">
                    Atlas da França Retificada <span className="text-[#C49A45] italic font-normal">· Projeção Histórica</span>
                  </h3>
                  <p className="text-[9px] sm:text-[10px] text-[#A7A29A] tracking-wider uppercase">
                    Expedição 2027 · Nas pegadas de Jean-Baptiste Willermoz
                  </p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between w-full sm:w-auto gap-2 sm:gap-3">
                <div className="flex items-center gap-1 bg-[#050708] border border-[#C49A45]/30 px-2 py-1">
                  <button
                    type="button"
                    onClick={() => setMapZoom((prev) => Math.max(1, prev - 0.25))}
                    className="p-1 hover:text-[#C49A45] text-[#A7A29A] transition-colors cursor-pointer"
                    title="Diminuir Zoom"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="text-[10px] font-mono px-2 text-[#DFC07D] min-w-[45px] text-center">
                    {Math.round(mapZoom * 100)}%
                  </span>
                  <button
                    type="button"
                    onClick={() => setMapZoom((prev) => Math.min(2.5, prev + 0.25))}
                    className="p-1 hover:text-[#C49A45] text-[#A7A29A] transition-colors cursor-pointer"
                    title="Aumentar Zoom"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setMapZoom(1)}
                    className="p-1 hover:text-[#C49A45] text-[#A7A29A] transition-colors cursor-pointer ml-1 border-l border-[#A7A29A]/20 pl-2"
                    title="Redefinir Zoom"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setIsMapModalOpen(false);
                    setMapZoom(1);
                  }}
                  className="p-2 text-[#A7A29A] hover:text-[#C49A45] hover:bg-white/5 transition-colors cursor-pointer"
                  aria-label="Fechar mapa"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Map Canvas with Scroll/Zoom */}
            <div className="relative flex-1 w-full overflow-auto bg-[#040608] flex items-center justify-center p-2 sm:p-4">
              <div
                className="transition-transform duration-200 ease-out flex items-center justify-center min-w-full min-h-full"
                style={{ transform: `scale(${mapZoom})`, transformOrigin: 'center center' }}
              >
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-10-26_at_23.45.42_1141ab41.jpeg"
                  alt="Pergaminho Monumental do Atlas da França Retificada"
                  className="max-h-[82vh] w-auto object-contain filter contrast-[1.03]"
                />
              </div>
            </div>

            {/* Modal Footer with Quick Navigation to the 4 Cities */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 px-3 sm:px-6 py-2 sm:py-2.5 bg-[#050708]/90 border-t border-[#A7A29A]/15 text-xs shrink-0">
              <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-[#A7A29A]">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C49A45]" />
                  <span className="hidden sm:inline">Explorar Fotografias:</span>
                </span>
                {CITY_KEYS.map((k) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => {
                      setSelectedCity(k);
                      setIsMapModalOpen(false);
                      setIsPhotoModalOpen(true);
                    }}
                    className="px-2 sm:px-2.5 py-0.5 border border-[#C49A45]/40 hover:border-[#C49A45] text-[#DFC07D] hover:bg-[#C49A45]/20 text-[9px] sm:text-[10px] uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    {CITIES[k].name}
                  </button>
                ))}
              </div>

              <div className="text-[10px] text-[#C49A45] uppercase tracking-[0.2em] font-medium">
                16 a 25 de Outubro de 2027 · França Retificada
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* MODAL 2: HIGH-RESOLUTION DOCUMENTARY PHOTOGRAPHY LIGHTBOX           */}
      {/* ==================================================================== */}
      {isPhotoModalOpen && (
        <div
          className="fixed inset-0 z-[130] flex items-center justify-center p-4 md:p-8 bg-[#050708]/95 backdrop-blur-md transition-all duration-300"
          role="dialog"
          aria-modal="true"
          aria-label={`Fotografia histórica de ${city.name}`}
          onClick={() => setIsPhotoModalOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#071118] border border-[#C49A45]/50 shadow-2xl p-4 md:p-6 flex flex-col gap-4 text-[#F0E9DC]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#A7A29A]/20 pb-3">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-[0.25em] text-[#C49A45] font-semibold">
                  Etapa {city.stageNum}
                </span>
                <span className="text-[#A7A29A]/40">·</span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#F0E9DC] font-normal">
                  {city.name}
                </h3>
                <span className="hidden sm:inline font-mono text-[11px] tracking-wider text-[#A7A29A]">
                  ({city.coords})
                </span>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsPhotoModalOpen(false)}
                className="p-1.5 text-[#A7A29A] hover:text-[#C49A45] hover:bg-white/5 rounded transition-colors cursor-pointer"
                aria-label="Fechar fotografia"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Photographic Canvas with Left/Right arrows */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#040608] overflow-hidden border border-[#C49A45]/30">
              <img
                src={city.image}
                alt={city.imageCaption}
                className="w-full h-full object-cover object-center filter contrast-[1.05]"
              />

              {/* Prev/Next buttons */}
              <button
                type="button"
                onClick={handlePrevCity}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-[#050708]/75 hover:bg-[#C49A45] text-[#F0E9DC] hover:text-[#050708] border border-[#C49A45]/40 transition-colors cursor-pointer"
                aria-label="Cidade anterior"
                title="Cidade anterior (Seta esquerda)"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={handleNextCity}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-[#050708]/75 hover:bg-[#C49A45] text-[#F0E9DC] hover:text-[#050708] border border-[#C49A45]/40 transition-colors cursor-pointer"
                aria-label="Próxima cidade"
                title="Próxima cidade (Seta direita)"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Narrative & Caption Footer */}
            <div className="space-y-2 pt-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <p className="font-serif text-sm sm:text-base text-[#DFC07D] italic">
                  {city.subtitle}
                </p>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#A7A29A]">
                  Acervo Fotográfico Documental
                </div>
              </div>
              <p className="text-xs text-[#F0E9DC]/80 font-light leading-relaxed">
                {city.imageCaption}
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t border-[#A7A29A]/15 text-[11px] text-[#A7A29A]">
                <span className="hidden sm:inline">Navegue com as setas do teclado (← / →) ou ESC para fechar</span>
                <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto justify-between sm:justify-end">
                  {CITY_KEYS.map((k) => (
                    <button
                      key={k}
                      type="button"
                      onClick={() => setSelectedCity(k)}
                      className={`px-2 sm:px-2.5 py-0.5 text-[10px] uppercase tracking-wider border transition-colors cursor-pointer ${
                        selectedCity === k
                          ? 'border-[#C49A45] bg-[#C49A45]/20 text-[#DFC07D]'
                          : 'border-[#A7A29A]/20 text-[#A7A29A] hover:text-[#F0E9DC]'
                      }`}
                    >
                      {CITIES[k].name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
