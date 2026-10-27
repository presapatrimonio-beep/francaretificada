import React, { useState, useEffect, useCallback } from 'react';
import { ChevronDown, MapPin, Compass, Eye, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import parisImage from '../assets/images/paris_historic_dusk_1792019500631.jpg';
import chartresImage from '../assets/images/chartres_cathedral_golden_1792019499361.jpg';
import lyonImage from '../assets/images/hero_lyon_dusk_1792019498545.jpg';

interface AtlasSectionProps {
  onProceedToExperience: () => void;
}

type CityKey = 'paris' | 'chartres' | 'lyon';

interface CityInfo {
  key: CityKey;
  name: string;
  coords: string;
  subtitle: string;
  description: string;
  x: number;
  y: number;
  stageNum: string;
  image: string;
  imageCaption: string;
}

const CITIES: Record<CityKey, CityInfo> = {
  paris: {
    key: 'paris',
    name: 'Paris',
    coords: '48°51\'N · 02°21\'E',
    stageNum: 'I',
    subtitle: 'O Iluminismo & O Debate das Luzes',
    description: 'O contexto intelectual e histórico da Maçonaria francesa.',
    x: 535,
    y: 220,
    image: parisImage,
    imageCaption: 'Paris histórica ao entardecer — Rue Cadet e o ambiente cultural do século XVIII',
  },
  chartres: {
    key: 'chartres',
    name: 'Chartres',
    coords: '48°27\'N · 01°29\'E',
    stageNum: 'II',
    subtitle: 'A Pedra, a Luz & o Sagrado',
    description: 'Arquitetura gótica, patrimônio religioso e simbolismo medieval.',
    x: 490,
    y: 250,
    image: chartresImage,
    imageCaption: 'Fachada monumental da Catedral de Chartres sob luz dourada',
  },
  lyon: {
    key: 'lyon',
    name: 'Lyon',
    coords: '45°45\'N · 04°50\'E',
    stageNum: 'III',
    subtitle: 'O Berço da Reforma Retificada',
    description: 'Jean-Baptiste Willermoz, a Reforma de Lyon e a formação histórica do Regime Escocês Retificado.',
    x: 668,
    y: 435,
    image: lyonImage,
    imageCaption: 'Lyon ao entardecer às margens do Saône com a colina e Basílica de Fourvière',
  },
};

export const AtlasSection: React.FC<AtlasSectionProps> = ({ onProceedToExperience }) => {
  const [selectedCity, setSelectedCity] = useState<CityKey>('lyon');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const city = CITIES[selectedCity];

  const cityKeys: CityKey[] = ['paris', 'chartres', 'lyon'];

  const handleNextCity = useCallback(() => {
    const currentIndex = cityKeys.indexOf(selectedCity);
    const nextIndex = (currentIndex + 1) % cityKeys.length;
    setSelectedCity(cityKeys[nextIndex]);
  }, [selectedCity]);

  const handlePrevCity = useCallback(() => {
    const currentIndex = cityKeys.indexOf(selectedCity);
    const prevIndex = (currentIndex - 1 + cityKeys.length) % cityKeys.length;
    setSelectedCity(cityKeys[prevIndex]);
  }, [selectedCity]);

  // Handle ESC key and arrow keys to navigate/close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      } else if (isModalOpen && e.key === 'ArrowRight') {
        handleNextCity();
      } else if (isModalOpen && e.key === 'ArrowLeft') {
        handlePrevCity();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, handleNextCity, handlePrevCity]);

  const handleMarkerClick = (k: CityKey) => {
    setSelectedCity(k);
    setIsModalOpen(true);
  };

  return (
    <section
      id="atlas"
      className="relative w-full min-h-[100svh] bg-[#0c1217] text-[#F0E9DC] flex flex-col justify-between overflow-hidden select-none border-b border-[#C49A45]/20"
      aria-label="Atlas da França Retificada"
    >
      {/* Background Parchment & Cartographic Tone */}
      <div className="absolute inset-0 bg-[#071118] pointer-events-none">
        {/* Subtle aged paper gradient and vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#13232d] via-[#09151e] to-[#04080b] opacity-95" />
        
        {/* Subtle antique cross-hatch paper texture simulation */}
        <div
          className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
          style={{
            backgroundImage: `radial-gradient(#C49A45 0.75px, transparent 0.75px), radial-gradient(#C49A45 0.75px, #071118 0.75px)`,
            backgroundSize: '24px 24px',
            backgroundPosition: '0 0, 12px 12px',
          }}
        />

        {/* Ambient warm vignette for historical intimacy */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#050708]/40 to-[#040608]/90" />
      </div>

      {/* Editorial Header spanning above the two frames */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-20 md:pt-24 pb-3">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-3 border-b border-[#A7A29A]/15">
          <div className="space-y-1">
            <div className="flex items-center gap-3 text-xs tracking-[0.35em] text-[#C49A45] uppercase font-medium">
              <Compass className="w-3.5 h-3.5 text-[#C49A45]" />
              <span>Colégio Iniciático · Cartografia Histórica · 1778–1782</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F0E9DC] font-light tracking-tight leading-none">
              Atlas da <span className="font-normal text-[#C49A45] italic">França Retificada</span>
            </h1>
            <p className="font-serif text-sm sm:text-base text-[#F0E9DC]/80 font-light italic">
              Nas pegadas de Jean-Baptiste Willermoz — Paris · Chartres · Lyon
            </p>
          </div>

          <div className="lg:text-right shrink-0 space-y-0.5">
            <div className="text-xs uppercase tracking-[0.25em] text-[#C49A45] font-medium">
              FRANÇA · 16–25 OUTUBRO 2027
            </div>
            <p className="text-[11px] text-[#A7A29A] font-light max-w-xs lg:ml-auto">
              Uma imersão nas origens do Regime Escocês Retificado.
            </p>
          </div>
        </div>
      </div>

      {/* The Two Aligned Architectural Quadrões */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full py-4 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Quadrão Esquerdo: Painel Editorial da Cidade & Fotografia */}
          <div className="lg:col-span-5 relative flex flex-col justify-between bg-[#071118]/85 border border-[#C49A45]/50 p-5 sm:p-6 shadow-2xl backdrop-blur-sm lg:h-[530px]">
            {/* 4 Corner Brass Rivets */}
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 rounded-full border border-[#C49A45] bg-[#071118] flex items-center justify-center z-10">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C49A45]" />
            </div>
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full border border-[#C49A45] bg-[#071118] flex items-center justify-center z-10">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C49A45]" />
            </div>
            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 rounded-full border border-[#C49A45] bg-[#071118] flex items-center justify-center z-10">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C49A45]" />
            </div>
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 rounded-full border border-[#C49A45] bg-[#071118] flex items-center justify-center z-10">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C49A45]" />
            </div>

            {/* Top: City Selector Tabs */}
            <div className="space-y-2">
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#C49A45] font-medium flex items-center justify-between">
                <span>Selecione uma Cidade da Rota</span>
                <span className="text-[#A7A29A]/60 font-serif">Etapa {city.stageNum}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {(['paris', 'chartres', 'lyon'] as CityKey[]).map((k) => {
                  const c = CITIES[k];
                  const isActive = selectedCity === k;
                  return (
                    <button
                      key={k}
                      type="button"
                      onClick={() => setSelectedCity(k)}
                      className={`py-2 px-2 text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 text-center border cursor-pointer ${
                        isActive
                          ? 'border-[#C49A45] bg-[#C49A45]/20 text-[#DFC07D] shadow-md font-semibold'
                          : 'border-[#A7A29A]/20 bg-[#050708]/60 text-[#A7A29A] hover:border-[#C49A45]/50 hover:text-[#F0E9DC]'
                      }`}
                    >
                      <span className="font-serif text-[#C49A45] mr-1">{c.stageNum}.</span>
                      <span>{c.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Middle: City Information */}
            <div className="py-2.5 border-y border-[#A7A29A]/15 space-y-1.5">
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-serif text-2xl sm:text-3xl text-[#F0E9DC] font-normal">
                  {city.name}
                </span>
                <span className="font-mono text-[10px] tracking-wider text-[#C49A45]">
                  {city.coords}
                </span>
              </div>
              <div className="text-xs font-serif text-[#DFC07D] italic">
                {city.subtitle}
              </div>
              <p className="text-xs text-[#F0E9DC]/85 font-light leading-relaxed line-clamp-2">
                {city.description}
              </p>
            </div>

            {/* Bottom: Authentic Photography & Fullscreen Action */}
            <div className="space-y-2.5">
              <div
                onClick={() => setIsModalOpen(true)}
                className="group/img relative h-32 sm:h-36 w-full overflow-hidden border border-[#C49A45]/30 cursor-pointer bg-[#050708]"
                role="button"
                tabIndex={0}
                aria-label={`Abrir fotografia de ${city.name}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setIsModalOpen(true);
                  }
                }}
              >
                <img
                  src={city.image}
                  alt={`Fotografia de ${city.name}`}
                  className="w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.05] group-hover/img:scale-105 group-hover/img:brightness-100 transition-all duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050708]/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#F0E9DC] pointer-events-none">
                  <span className="flex items-center gap-1.5 text-[#DFC07D] font-medium">
                    <Eye className="w-3.5 h-3.5 text-[#C49A45]" />
                    <span>Fotografia Histórica</span>
                  </span>
                  <span className="text-[#A7A29A] group-hover/img:text-[#F0E9DC] flex items-center gap-1 transition-colors">
                    <span>Ampliar</span>
                    <Maximize2 className="w-3 h-3" />
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full py-2.5 bg-[#C49A45]/15 hover:bg-[#C49A45] text-[#DFC07D] hover:text-[#050708] border border-[#C49A45]/50 hover:border-[#C49A45] text-[11px] uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Abrir Imagem de {city.name}</span>
              </button>
            </div>
          </div>

          {/* Quadrão Direito: Mapa Histórico da França (Perfeitamente Alinhado) */}
          <div className="lg:col-span-7 relative flex items-center justify-center bg-[#071118]/85 border border-[#C49A45]/50 p-2 sm:p-3 shadow-2xl backdrop-blur-sm lg:h-[530px] overflow-hidden">
            {/* 4 Corner Brass Rivets */}
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 rounded-full border border-[#C49A45] bg-[#071118] flex items-center justify-center z-10">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C49A45]" />
            </div>
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full border border-[#C49A45] bg-[#071118] flex items-center justify-center z-10">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C49A45]" />
            </div>
            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 rounded-full border border-[#C49A45] bg-[#071118] flex items-center justify-center z-10">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C49A45]" />
            </div>
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 rounded-full border border-[#C49A45] bg-[#071118] flex items-center justify-center z-10">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C49A45]" />
            </div>

            <div className="w-full h-full relative flex items-center justify-center">
              <svg
                viewBox="0 0 1000 800"
                className="w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                aria-label="Mapa Histórico da França"
              >
                <defs>
                  {/* Antique parchment linear and radial filters */}
                  <linearGradient id="mapBorderGold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C49A45" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#8A6828" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#C49A45" stopOpacity="0.8" />
                  </linearGradient>

                  <radialGradient id="landGradient" cx="50%" cy="45%" r="60%">
                    <stop offset="0%" stopColor="#172b38" stopOpacity="0.95" />
                    <stop offset="65%" stopColor="#0e1d26" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#08131a" stopOpacity="0.8" />
                  </radialGradient>

                  <filter id="glowGold" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Cartographic Coordinate Outer Frame */}
                <rect
                  x="20"
                  y="20"
                  width="960"
                  height="760"
                  fill="none"
                  stroke="url(#mapBorderGold)"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
                <rect
                  x="28"
                  y="28"
                  width="944"
                  height="744"
                  fill="none"
                  stroke="#A7A29A"
                  strokeWidth="0.5"
                  opacity="0.3"
                  strokeDasharray="4 4"
                />

                {/* Corner Accents */}
                {[[20, 20], [980, 20], [20, 780], [980, 780]].map(([cx, cy], i) => (
                  <g key={i}>
                    <circle cx={cx} cy={cy} r="4" fill="#C49A45" opacity="0.8" />
                    <circle cx={cx} cy={cy} r="8" fill="none" stroke="#C49A45" strokeWidth="0.75" opacity="0.5" />
                  </g>
                ))}

                {/* Historical Rhumb Lines (Linhas de Rumo da Rosa dos Ventos) */}
                <g stroke="#C49A45" strokeWidth="0.5" opacity="0.12">
                  <line x1="230" y1="460" x2="980" y2="100" />
                  <line x1="230" y1="460" x2="980" y2="460" />
                  <line x1="230" y1="460" x2="980" y2="700" />
                  <line x1="230" y1="460" x2="535" y2="220" />
                  <line x1="230" y1="460" x2="668" y2="435" />
                  <line x1="230" y1="460" x2="490" y2="250" />
                  <line x1="230" y1="460" x2="230" y2="20" />
                  <line x1="230" y1="460" x2="230" y2="780" />
                  <line x1="230" y1="460" x2="20" y2="460" />
                  <line x1="230" y1="460" x2="50" y2="150" />
                  <line x1="230" y1="460" x2="50" y2="720" />
                  {/* Secondary rhumb from Paris */}
                  <line x1="535" y1="220" x2="20" y2="220" strokeDasharray="3 3" />
                  <line x1="535" y1="220" x2="980" y2="220" strokeDasharray="3 3" />
                  <line x1="535" y1="220" x2="535" y2="20" strokeDasharray="3 3" />
                  <line x1="535" y1="220" x2="535" y2="780" strokeDasharray="3 3" />
                </g>

                {/* France Geographic Territorial Contour (Accurate Hexagon Shape) */}
                <path
                  d="M 520,95 
                     C 550,105 600,108 625,120 
                     C 650,135 680,140 705,160 
                     C 730,175 765,195 780,225 
                     C 795,250 820,290 815,335 
                     C 810,365 790,390 785,420 
                     C 780,450 790,480 810,515 
                     C 815,530 805,550 785,570 
                     C 760,590 730,605 700,615 
                     C 670,625 635,630 600,650 
                     C 575,665 540,685 505,690 
                     C 470,695 440,680 405,670 
                     C 375,660 345,640 325,615 
                     C 305,585 300,555 310,520 
                     C 320,490 325,460 315,430 
                     C 305,400 280,380 260,355 
                     C 230,325 190,310 165,300 
                     C 145,290 145,270 170,265 
                     C 200,260 230,270 265,275 
                     C 300,280 320,250 345,230 
                     C 370,210 395,220 415,200 
                     C 435,175 450,140 480,115 
                     Z"
                  fill="url(#landGradient)"
                  stroke="#C49A45"
                  strokeWidth="1.2"
                  opacity="0.95"
                />

                {/* Inner Territorial Topography Shading */}
                <path
                  d="M 520,95 C 550,105 600,108 625,120 C 650,135 680,140 705,160 C 730,175 765,195 780,225 C 795,250 820,290 815,335 C 810,365 790,390 785,420 C 780,450 790,480 810,515 C 815,530 805,550 785,570 C 760,590 730,605 700,615 C 670,625 635,630 600,650 C 575,665 540,685 505,690 C 470,695 440,680 405,670 C 375,660 345,640 325,615 C 305,585 300,555 310,520 C 320,490 325,460 315,430 C 305,400 280,380 260,355 C 230,325 190,310 165,300 C 145,290 145,270 170,265 C 200,260 230,270 265,275 C 300,280 320,250 345,230 C 370,210 395,220 415,200 C 435,175 450,140 480,115 Z"
                  fill="none"
                  stroke="#8A6828"
                  strokeWidth="0.5"
                  strokeDasharray="2 4"
                  opacity="0.4"
                />

                {/* Major Rivers of France (Sena, Saône, Rhône, Loire) */}
                {/* Seine River (through Paris) */}
                <path
                  d="M 640,320 C 600,290 570,260 535,220 C 500,185 450,180 420,165"
                  fill="none"
                  stroke="#4a7082"
                  strokeWidth="1.5"
                  opacity="0.65"
                  strokeLinecap="round"
                />
                <text x="440" y="160" fill="#7fa0af" fontSize="10" fontStyle="italic" fontFamily="serif" opacity="0.7">
                  La Seine
                </text>

                {/* Saône & Rhône River (through Lyon) */}
                <path
                  d="M 680,300 C 670,350 672,390 668,435 C 665,490 655,540 645,615"
                  fill="none"
                  stroke="#4a7082"
                  strokeWidth="1.8"
                  opacity="0.7"
                  strokeLinecap="round"
                />
                <text x="680" y="375" fill="#7fa0af" fontSize="10" fontStyle="italic" fontFamily="serif" opacity="0.7">
                  La Saône
                </text>
                <text x="660" y="550" fill="#7fa0af" fontSize="10" fontStyle="italic" fontFamily="serif" opacity="0.7">
                  Le Rhône
                </text>

                {/* Loire River */}
                <path
                  d="M 610,480 C 580,410 560,340 520,320 C 470,310 380,320 280,315"
                  fill="none"
                  stroke="#4a7082"
                  strokeWidth="1.2"
                  opacity="0.4"
                  strokeLinecap="round"
                />
                <text x="360" y="310" fill="#7fa0af" fontSize="9" fontStyle="italic" fontFamily="serif" opacity="0.5">
                  La Loire
                </text>

                {/* Mountain Ridge Hatching (Alps & Pyrenees hints in 18th c. copperplate style) */}
                <g fill="none" stroke="#C49A45" strokeWidth="0.6" opacity="0.35">
                  {/* Alps / Jura */}
                  <path d="M 720,410 L 730,395 L 740,410 L 750,398 L 760,415" />
                  <path d="M 740,460 L 755,440 L 770,465 L 785,445 L 800,470" />
                  <path d="M 710,510 L 725,488 L 740,512 L 755,490 L 770,515" />
                  {/* Pyrenees */}
                  <path d="M 360,655 L 375,640 L 390,658 L 405,642 L 420,660" />
                  <path d="M 440,670 L 455,652 L 470,672 L 485,655 L 500,675" />
                </g>

                {/* Historical Expedition Route Line (Paris -> Chartres -> Lyon) */}
                <g>
                  {/* Outer Route Glow */}
                  <path
                    d="M 535,220 L 490,250 L 668,435"
                    fill="none"
                    stroke="#C49A45"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.4"
                    filter="url(#glowGold)"
                  />
                  {/* Dashed Cartographic March Route */}
                  <path
                    d="M 535,220 L 490,250 L 668,435"
                    fill="none"
                    stroke="#F0E9DC"
                    strokeWidth="1.6"
                    strokeDasharray="6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.85"
                  />
                </g>

                {/* Monumental Compass Rose (Rosa dos Ventos in Bay of Biscay) */}
                <g transform="translate(230, 460)">
                  {/* Outer Rings */}
                  <circle cx="0" cy="0" r="70" fill="none" stroke="#C49A45" strokeWidth="0.8" opacity="0.5" />
                  <circle cx="0" cy="0" r="62" fill="none" stroke="#A7A29A" strokeWidth="0.4" strokeDasharray="2 3" opacity="0.4" />
                  <circle cx="0" cy="0" r="54" fill="none" stroke="#C49A45" strokeWidth="1.2" opacity="0.6" />

                  {/* Degree ticks */}
                  {Array.from({ length: 16 }).map((_, idx) => {
                    const angle = (idx * 360) / 16;
                    return (
                      <line
                        key={idx}
                        x1="0"
                        y1="-62"
                        x2="0"
                        y2="-70"
                        stroke="#C49A45"
                        strokeWidth={idx % 4 === 0 ? '1.2' : '0.6'}
                        opacity="0.6"
                        transform={`rotate(${angle})`}
                      />
                    );
                  })}

                  {/* 8 Main Points */}
                  {/* North (with Fleur-de-lis) */}
                  <polygon points="0,-54 8,-12 0,0 -8,-12" fill="#C49A45" opacity="0.85" />
                  <polygon points="0,-54 -8,-12 0,0" fill="#8A6828" opacity="0.9" />
                  {/* South */}
                  <polygon points="0,54 8,12 0,0 -8,12" fill="#8A6828" opacity="0.75" />
                  <polygon points="0,54 -8,12 0,0" fill="#C49A45" opacity="0.7" />
                  {/* East */}
                  <polygon points="54,0 12,8 0,0 12,-8" fill="#C49A45" opacity="0.75" />
                  <polygon points="54,0 12,-8 0,0" fill="#8A6828" opacity="0.7" />
                  {/* West */}
                  <polygon points="-54,0 -12,8 0,0 -12,-8" fill="#8A6828" opacity="0.75" />
                  <polygon points="-54,0 -12,-8 0,0" fill="#C49A45" opacity="0.7" />

                  {/* 4 Diagonal Points */}
                  {[45, 135, 225, 315].map((angle) => (
                    <polygon
                      key={angle}
                      points="0,-42 5,-8 0,0 -5,-8"
                      fill="#C49A45"
                      opacity="0.5"
                      transform={`rotate(${angle})`}
                    />
                  ))}

                  {/* Center Brass Boss */}
                  <circle cx="0" cy="0" r="5" fill="#DFC07D" stroke="#050708" strokeWidth="1" />

                  {/* Cardinal Points Calligraphy */}
                  <text x="0" y="-76" textAnchor="middle" fill="#DFC07D" fontSize="13" fontFamily="serif" fontWeight="bold">
                    N
                  </text>
                  <text x="0" y="88" textAnchor="middle" fill="#A7A29A" fontSize="10" fontFamily="serif">
                    S
                  </text>
                  <text x="86" y="4" textAnchor="start" fill="#A7A29A" fontSize="10" fontFamily="serif">
                    E
                  </text>
                  <text x="-86" y="4" textAnchor="end" fill="#A7A29A" fontSize="10" fontFamily="serif">
                    O
                  </text>
                </g>

                {/* Ocean / Sea Historical Calligraphy */}
                <text
                  x="200"
                  y="620"
                  fill="#7d98a6"
                  fontSize="13"
                  fontStyle="italic"
                  fontFamily="serif"
                  letterSpacing="4"
                  opacity="0.45"
                >
                  OCÉAN ATLANTIQUE
                </text>
                <text
                  x="300"
                  y="120"
                  fill="#7d98a6"
                  fontSize="11"
                  fontStyle="italic"
                  fontFamily="serif"
                  letterSpacing="3"
                  opacity="0.4"
                >
                  LA MANCHE
                </text>
                <text
                  x="690"
                  y="710"
                  fill="#7d98a6"
                  fontSize="11"
                  fontStyle="italic"
                  fontFamily="serif"
                  letterSpacing="3"
                  opacity="0.4"
                >
                  MER MÉDITERRANÉE
                </text>

                {/* Historical Scale in French Leagues (Échelle de Lieues) */}
                <g transform="translate(680, 80)" opacity="0.65">
                  <text x="0" y="0" fill="#A7A29A" fontSize="9" letterSpacing="2" fontFamily="serif">
                    ÉCHELLE DE 50 LIEUES DE FRANCE
                  </text>
                  <line x1="0" y1="8" x2="160" y2="8" stroke="#C49A45" strokeWidth="1" />
                  <line x1="0" y1="4" x2="0" y2="12" stroke="#C49A45" strokeWidth="1" />
                  <line x1="80" y1="5" x2="80" y2="11" stroke="#C49A45" strokeWidth="0.8" />
                  <line x1="160" y1="4" x2="160" y2="12" stroke="#C49A45" strokeWidth="1" />
                  <text x="0" y="22" fill="#A7A29A" fontSize="8" fontFamily="serif">0</text>
                  <text x="75" y="22" fill="#A7A29A" fontSize="8" fontFamily="serif">25</text>
                  <text x="150" y="22" fill="#A7A29A" fontSize="8" fontFamily="serif">50</text>
                </g>

                {/* City Markers (Interactive & Geographically Positioned) */}
                {(['paris', 'chartres', 'lyon'] as CityKey[]).map((k) => {
                  const c = CITIES[k];
                  const isSelected = selectedCity === k;

                  return (
                    <g
                      key={k}
                      className="cursor-pointer transition-all duration-300 group/marker"
                      onClick={() => handleMarkerClick(k)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Cidade: ${c.name} - Clique para abrir imagem histórica`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          handleMarkerClick(k);
                        }
                      }}
                    >
                      {/* Pulsing ring if selected */}
                      {isSelected && (
                        <circle
                          cx={c.x}
                          cy={c.y}
                          r="18"
                          fill="none"
                          stroke="#C49A45"
                          strokeWidth="1"
                          opacity="0.6"
                          className="animate-ping"
                        />
                      )}

                      {/* Outer marker halo */}
                      <circle
                        cx={c.x}
                        cy={c.y}
                        r={isSelected ? 10 : 7}
                        fill={isSelected ? '#C49A45' : '#050708'}
                        stroke="#DFC07D"
                        strokeWidth={isSelected ? '2' : '1.2'}
                        className="transition-all duration-300"
                      />

                      {/* Inner point */}
                      <circle
                        cx={c.x}
                        cy={c.y}
                        r={isSelected ? 4 : 2.5}
                        fill={isSelected ? '#050708' : '#DFC07D'}
                      />

                      {/* City Name Calligraphy */}
                      <text
                        x={k === 'chartres' ? c.x - 14 : c.x + 14}
                        y={k === 'paris' ? c.y - 8 : k === 'chartres' ? c.y + 16 : c.y + 5}
                        textAnchor={k === 'chartres' ? 'end' : 'start'}
                        fill={isSelected ? '#DFC07D' : '#F0E9DC'}
                        fontSize={isSelected ? '16' : '13'}
                        fontFamily="serif"
                        fontWeight={isSelected ? 'bold' : 'normal'}
                        letterSpacing="1"
                        className="transition-all duration-300 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                      >
                        {c.name.toUpperCase()}
                      </text>

                      {/* Stage number roman numeral indicator */}
                      <text
                        x={k === 'chartres' ? c.x - 14 : c.x + 14}
                        y={k === 'paris' ? c.y - 20 : k === 'chartres' ? c.y + 27 : c.y + 18}
                        textAnchor={k === 'chartres' ? 'end' : 'start'}
                        fill="#C49A45"
                        fontSize="9"
                        fontFamily="serif"
                        letterSpacing="2"
                        opacity={isSelected ? '1' : '0.75'}
                      >
                        ETAPA {c.stageNum}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

        </div>
      </div>

      {/* Seamless Transition Footer into the existing Hero/Experience */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pb-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#A7A29A]/15 text-xs text-[#A7A29A]">
        <div className="flex items-center gap-3 tracking-[0.25em] uppercase text-[11px]">
          <MapPin className="w-3.5 h-3.5 text-[#C49A45]" />
          <span>Rota: Paris · Chartres · Lyon</span>
        </div>

        <button
          onClick={onProceedToExperience}
          className="flex items-center gap-3 px-6 py-2.5 bg-[#C49A45]/15 hover:bg-[#C49A45] text-[#F0E9DC] hover:text-[#050708] border border-[#C49A45]/40 hover:border-[#C49A45] text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 group cursor-pointer"
          aria-label="Prosseguir para a jornada visual de Lyon"
        >
          <span>Entrar na Jornada</span>
          <ChevronDown className="w-3.5 h-3.5 transform group-hover:translate-y-0.5 transition-transform" />
        </button>

        <div className="text-[11px] tracking-[0.2em] uppercase font-light text-[#A7A29A]/70">
          Edição Outubro 2027
        </div>
      </div>

      {/* Cinematic Image Lightbox Modal for the 3 Atlas Cities */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-[#050708]/95 backdrop-blur-md transition-all duration-300"
          role="dialog"
          aria-modal="true"
          aria-label={`Fotografia histórica de ${city.name}`}
          onClick={() => setIsModalOpen(false)}
        >
          {/* Modal Container */}
          <div
            className="relative max-w-5xl w-full bg-[#071118] border border-[#C49A45]/40 shadow-2xl p-4 md:p-6 flex flex-col gap-4 text-[#F0E9DC]"
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
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 text-[#A7A29A] hover:text-[#C49A45] hover:bg-white/5 rounded transition-colors cursor-pointer"
                aria-label="Fechar fotografia"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Large Image Frame with Navigation */}
            <div className="relative w-full max-h-[65vh] min-h-[300px] flex items-center justify-center bg-[#050708] overflow-hidden border border-[#A7A29A]/15">
              <img
                src={city.image}
                alt={`Fotografia de ${city.name}`}
                className="max-h-[65vh] w-full object-contain filter contrast-[1.05]"
              />

              {/* Prev / Next Navigation Controls */}
              <button
                type="button"
                onClick={handlePrevCity}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 bg-[#050708]/85 hover:bg-[#C49A45] text-[#F0E9DC] hover:text-[#050708] border border-[#C49A45]/40 transition-colors cursor-pointer shadow-lg"
                aria-label="Cidade anterior"
                title="Cidade anterior (Seta esquerda)"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNextCity}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-[#050708]/85 hover:bg-[#C49A45] text-[#F0E9DC] hover:text-[#050708] border border-[#C49A45]/40 transition-colors cursor-pointer shadow-lg"
                aria-label="Próxima cidade"
                title="Próxima cidade (Seta direita)"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Footer with caption and city tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 text-xs text-[#A7A29A]">
              <div>
                <p className="font-serif text-sm text-[#DFC07D] italic">
                  {city.imageCaption}
                </p>
                <p className="text-[11px] text-[#A7A29A]/80 font-light mt-0.5">
                  {city.description}
                </p>
              </div>

              {/* Direct city switch buttons in modal */}
              <div className="flex items-center gap-2 shrink-0">
                {cityKeys.map((k) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => setSelectedCity(k)}
                    className={`px-3 py-1 text-[10px] uppercase tracking-wider border transition-colors cursor-pointer ${
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
      )}
    </section>
  );
};
