import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import openingVideo from '../assets/abertura.mp4';

interface OpeningScreenProps {
  onEnter?: () => void;
}

const SESSION_STORAGE_KEY = 'franca_retificada_2027_abertura_vista';

export const OpeningScreen: React.FC<OpeningScreenProps> = ({ onEnter }) => {
  const [isVisible, setIsVisible] = useState<boolean>(() => {
    // Check if user already completed opening in current session
    try {
      return sessionStorage.getItem(SESSION_STORAGE_KEY) !== 'true';
    } catch {
      return true;
    }
  });

  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [autoplayBlockedAudio, setAutoplayBlockedAudio] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isVisible) return;

    const video = videoRef.current;
    if (!video) return;

    // Prevent scrolling while intro is visible
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Attempt autoplay with sound
    video.muted = false;
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Autoplay with audio succeeded
          setIsMuted(false);
          setAutoplayBlockedAudio(false);
        })
        .catch(() => {
          // Browser blocked unmuted autoplay: fall back to muted autoplay
          video.muted = true;
          setIsMuted(true);
          setAutoplayBlockedAudio(true);
          video.play().catch((err) => {
            console.warn('Autoplay fallback failed:', err);
          });
        });
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isVisible]);

  const handleToggleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.muted) {
      video.muted = false;
      setIsMuted(false);
      setAutoplayBlockedAudio(false);
      video.play().catch(() => {});
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  const handleEnter = () => {
    if (isFadingOut) return;

    setIsFadingOut(true);

    // Save session flag so opening is only shown once per session
    try {
      sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
    } catch (e) {
      console.warn('Session storage write error:', e);
    }

    // Smoothly fade out audio if active
    const video = videoRef.current;
    if (video && !video.muted && video.volume > 0) {
      const fadeInterval = setInterval(() => {
        if (video.volume > 0.05) {
          video.volume = Math.max(0, video.volume - 0.1);
        } else {
          video.volume = 0;
          video.pause();
          clearInterval(fadeInterval);
        }
      }, 50);
    }

    // Call onEnter callback if provided
    if (onEnter) {
      onEnter();
    }

    // After fade-out animation completes (800ms), unmount completely and release video
    setTimeout(() => {
      if (video) {
        video.pause();
        video.currentTime = 0;
        video.src = '';
      }
      setIsVisible(false);
      document.body.style.overflow = '';
    }, 800);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#050708] flex items-center justify-center overflow-hidden transition-all duration-800 ease-in-out ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      aria-label="Tela de Abertura Cinematográfica - França Retificada 2027"
    >
      {/* Background Fullscreen Video */}
      <video
        ref={videoRef}
        playsInline
        autoPlay
        loop
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
      >
        <source src={openingVideo} type="video/mp4" />
        <source src="/abertura.mp4" type="video/mp4" />
      </video>

      {/* Subtle Vignette & Exposure Gradients for Elegance */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#050708]/90 via-transparent to-[#050708]/60" />
      <div className="absolute inset-0 pointer-events-none bg-radial-vignette opacity-40" />

      {/* Discreet Audio Control (Top Right) */}
      <div className="absolute top-6 right-6 md:top-8 md:right-8 z-30">
        <button
          type="button"
          onClick={handleToggleAudio}
          className={`flex items-center gap-2.5 px-3.5 py-2 rounded-full border transition-all duration-300 text-xs tracking-widest uppercase font-serif backdrop-blur-md ${
            isMuted
              ? 'border-[#C49A45]/40 bg-black/60 text-[#DFC07D] hover:border-[#DFC07D] hover:bg-black/80'
              : 'border-[#C49A45]/70 bg-[#C49A45]/20 text-[#DFC07D] hover:bg-[#C49A45]/30'
          }`}
          title={isMuted ? 'Ativar som da abertura' : 'Silenciar áudio'}
          aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
        >
          {isMuted ? (
            <>
              <VolumeX className="w-4 h-4 text-[#C49A45]" />
              <span className="hidden sm:inline text-[11px] text-[#F0E9DC]/80">
                {autoplayBlockedAudio ? 'Ativar Áudio' : 'Mudo'}
              </span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4 text-[#DFC07D] animate-pulse" />
              <span className="hidden sm:inline text-[11px] text-[#DFC07D]">Áudio Ativo</span>
            </>
          )}
        </button>
      </div>

      {/* Main Centered "ENTRAR" Action Bar at Bottom Center */}
      <div className="absolute bottom-10 sm:bottom-14 md:bottom-16 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <button
          type="button"
          onClick={handleEnter}
          className="group relative px-12 sm:px-16 md:px-20 py-3.5 sm:py-4 md:py-4.5 bg-black/50 hover:bg-[#C49A45]/15 active:scale-95 border border-[#C49A45]/75 hover:border-[#DFC07D] rounded-none backdrop-blur-md transition-all duration-500 ease-out shadow-[0_4px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_0_35px_rgba(196,154,69,0.35)] cursor-pointer"
        >
          {/* Subtle Corner Accents for Refined French Masonic / Classical Geometry */}
          <span className="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 border-t border-l border-[#DFC07D] transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
          <span className="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 border-t border-r border-[#DFC07D] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          <span className="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 border-b border-l border-[#DFC07D] transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:translate-y-0.5" />
          <span className="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 border-b border-r border-[#DFC07D] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />

          {/* Golden Interior Light Sheen */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#DFC07D]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

          {/* Button Text */}
          <span className="relative z-10 font-serif text-sm sm:text-base md:text-lg tracking-[0.35em] uppercase text-[#F0E9DC] group-hover:text-[#DFC07D] font-normal transition-colors duration-300 select-none">
            ENTRAR
          </span>
        </button>

        {/* Subtle Hint */}
        <p className="mt-3.5 text-[10px] md:text-[11px] font-serif uppercase tracking-[0.25em] text-[#C49A45]/70 opacity-80 select-none pointer-events-none">
          França Retificada · 2027
        </p>
      </div>
    </div>
  );
};
