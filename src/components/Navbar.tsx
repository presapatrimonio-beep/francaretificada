import React, { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';

interface NavbarProps {
  onOpenDossier: () => void;
  isAudioActive?: boolean;
  onToggleAudio?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenDossier,
  isAudioActive = false,
  onToggleAudio,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [hiddenNav, setHiddenNav] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      // Subtly dim or retreat navbar during active fast exploration to keep immersion cinematic
      if (currentScrollY > 400 && currentScrollY > lastScrollY && !mobileMenuOpen) {
        setHiddenNav(true);
      } else {
        setHiddenNav(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Atlas', href: '#atlas' },
    { label: 'A Jornada', href: '#jornada' },
    { label: 'Willermoz', href: '#willermoz' },
    { label: 'O Regime', href: '#regime' },
    { label: 'O Percurso', href: '#percurso' },
    { label: 'Custeio', href: '#investimento' },
    { label: 'Apoio Institucional', href: '#apoio-institucional' },
    { label: 'Operação Turística', href: '#operacao-turistica' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 300;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        hiddenNav ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      } bg-[#050708]/95 backdrop-blur-md border-b border-[#A7A29A]/20 shadow-2xl`}
    >
      {/* 01. NÍVEL SUPERIOR: BRASÃO E IDENTIDADE PERFEITAMENTE CENTRALIZADOS NO EIXO VERTICAL */}
      <div className="relative max-w-[1700px] mx-auto px-6 md:px-10 flex flex-col items-center justify-center pt-3 sm:pt-4 pb-2.5 sm:pb-3">
        {/* Identidade Nobre Centralizada: Brasão Acima + Título Abaixo */}
        <a
          href="#atlas"
          onClick={(e) => handleLinkClick(e, '#atlas')}
          className="group flex flex-col items-center justify-center text-center cursor-pointer"
          title="Atlas da França Retificada 2027"
        >
          {/* Brasão Oficial do Grande Priorado no Centro Exato */}
          <img
            src="/assets/aistudio/priorado_eddc943e.png"
            alt="Brasão Oficial do Grande Priorado do Rito Escocês Retificado do Brasil"
            className={`${
              scrolled ? 'h-24 sm:h-28 md:h-32' : 'h-28 sm:h-36 md:h-44 lg:h-48'
            } w-auto object-contain mx-auto drop-shadow-[0_6px_28px_rgba(0,0,0,0.95)] group-hover:scale-105 transition-all duration-300 mb-2 sm:mb-2.5`}
          />

          {/* Titulação Centralizada Abaixo do Brasão */}
          <div className="flex flex-col items-center text-center">
            <span className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.24em] text-[#F0E9DC] group-hover:text-[#DFC07D] transition-colors uppercase leading-tight">
              França Retificada
            </span>
            <span className="text-xs sm:text-sm md:text-base uppercase tracking-[0.38em] text-[#C49A45] font-sans font-medium mt-1 sm:mt-1.5">
              Expedição 2027
            </span>
          </div>
        </a>

        {/* Controles Laterais (Trilha Sonora & Menu Mobile) no Canto Superior Direito */}
        <div className="absolute right-4 sm:right-6 md:right-10 top-3 sm:top-5 flex items-center gap-3">
          {/* Trilha Sonora cinematográfica */}
          {onToggleAudio && (
            <button
              onClick={onToggleAudio}
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#A7A29A] hover:text-[#C49A45] transition-colors py-1.5 px-3 border border-white/10 hover:border-[#C49A45]/40 bg-[#050708]/80 backdrop-blur-sm cursor-pointer shadow-sm"
              title={isAudioActive ? 'Pausar trilha sonora cinematográfica' : 'Ouvir trilha sonora cinematográfica (Piano & Orquestra)'}
              aria-label="Controle de trilha sonora cinematográfica"
            >
              {isAudioActive ? <Volume2 className="w-3.5 h-3.5 text-[#C49A45]" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span className="text-[10px] hidden sm:inline">{isAudioActive ? 'Trilha Ativa' : 'Trilha Sonora'}</span>
            </button>
          )}

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#F0E9DC]/80 hover:text-[#C49A45] focus:outline-none cursor-pointer"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 02. NÍVEL INFERIOR: MENU DE NAVEGAÇÃO CENTRALIZADO ABAIXO DO LOGO */}
      <div className="hidden lg:block border-t border-[#A7A29A]/15 bg-black/25">
        <nav className="max-w-[1700px] mx-auto px-6 flex items-center justify-center gap-6 xl:gap-8 2xl:gap-10 py-2.5 text-[11px] xl:text-xs uppercase tracking-[0.2em] font-medium text-[#F0E9DC]/80">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:text-[#DFC07D] transition-colors relative py-1 whitespace-nowrap shrink-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C49A45] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Menu Gaveta Mobile com Todos os 8 Capítulos da Landing Page */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071923]/98 border-b border-[#A7A29A]/20 px-6 py-6 transition-all shadow-2xl">
          <nav className="flex flex-col gap-4 text-sm uppercase tracking-[0.2em] font-medium text-[#F0E9DC]/85">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="py-2.5 hover:text-[#C49A45] border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            {onToggleAudio && (
              <button
                onClick={onToggleAudio}
                className="flex items-center justify-between py-2.5 text-xs uppercase tracking-widest text-[#A7A29A] hover:text-[#C49A45] border-b border-white/5 cursor-pointer"
              >
                <span>Trilha Cinematográfica</span>
                <span className="text-[#C49A45]">{isAudioActive ? 'Ativada' : 'Desativada'}</span>
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};
