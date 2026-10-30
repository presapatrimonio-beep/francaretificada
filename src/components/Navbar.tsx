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
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        hiddenNav ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      } ${
        scrolled
          ? 'bg-[#050708]/85 backdrop-blur-md border-b border-[#A7A29A]/15 py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-[#050708]/90 via-[#050708]/30 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-8">
        {/* Brand wordmark */}
        <a
          href="#atlas"
          onClick={(e) => handleLinkClick(e, '#atlas')}
          className="group flex items-center gap-3 whitespace-nowrap shrink-0 text-decoration-none cursor-pointer"
        >
          <span className="font-serif text-lg md:text-xl font-normal tracking-[0.25em] text-[#F0E9DC] group-hover:text-[#C49A45] transition-colors uppercase">
            Colégio Iniciático
          </span>
        </a>

        {/* Cinematic minimalist links */}
        <nav className="hidden lg:flex items-center gap-9 text-xs uppercase tracking-[0.22em] font-medium text-[#F0E9DC]/75">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:text-[#C49A45] transition-colors relative py-1 whitespace-nowrap shrink-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C49A45] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action zone with optional atmospheric audio toggle */}
        <div className="flex items-center gap-5 shrink-0">
          {onToggleAudio && (
            <button
              onClick={onToggleAudio}
              className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-widest text-[#A7A29A] hover:text-[#C49A45] transition-colors py-1 px-2"
              title={isAudioActive ? 'Pausar trilha sonora cinematográfica' : 'Ouvir trilha sonora cinematográfica (Piano & Orquestra)'}
              aria-label="Controle de trilha sonora cinematográfica"
            >
              {isAudioActive ? <Volume2 className="w-3.5 h-3.5 text-[#C49A45]" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span className="text-[10px] hidden md:inline">{isAudioActive ? 'Trilha Ativa' : 'Trilha Sonora'}</span>
            </button>
          )}

          <button
            onClick={onOpenDossier}
            className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold tracking-[0.18em] uppercase text-[#050708] bg-[#C49A45] hover:bg-[#DFC07D] transition-colors whitespace-nowrap active:translate-y-px"
          >
            Solicitar Informações
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#F0E9DC]/80 hover:text-[#C49A45] focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071923]/98 border-b border-[#A7A29A]/20 px-6 py-6 transition-all">
          <nav className="flex flex-col gap-5 text-sm uppercase tracking-[0.2em] font-medium text-[#F0E9DC]/85">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="py-2 hover:text-[#C49A45] border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            {onToggleAudio && (
              <button
                onClick={onToggleAudio}
                className="flex items-center justify-between py-2 text-xs uppercase tracking-widest text-[#A7A29A] hover:text-[#C49A45] border-b border-white/5"
              >
                <span>Trilha Cinematográfica</span>
                <span className="text-[#C49A45]">{isAudioActive ? 'Ativada' : 'Desativada'}</span>
              </button>
            )}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDossier();
                }}
                className="w-full py-3.5 text-center text-xs font-semibold tracking-[0.2em] uppercase text-[#050708] bg-[#C49A45] hover:bg-[#DFC07D] transition-colors"
              >
                Solicitar Informações
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
