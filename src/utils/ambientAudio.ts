// Cinematic Orchestral Soundtrack Controller for "França Retificada 2027"
// Replaces previous synthesizer with a high-fidelity cinematic documentary soundtrack:
// - Refined piano opening, soaring orchestral strings crescendo, noble French documentary character.
// - Features smooth fade-in/fade-out, volume control, HTML5 Audio with OGG/MP3 fallbacks.
// - Respects browser autoplay policies and user interactions.

class CinematicAudioController {
  private audio: HTMLAudioElement | null = null;
  private isRunning: boolean = false;
  private currentVolume: number = 0.42; // Balanced cinematic listening volume
  private targetVolume: number = 0.42;
  private fadeInterval: number | null = null;
  private audioInitialized: boolean = false;

  // Available curated cinematic documentary tracks:
  // Primary: "The Restoration" (Atmospheric piano intro -> progressive orchestral strings & brass -> grand epic climax)
  // Alternative: Gabriel Fauré - "Pavane, Op. 50" (Authentic French orchestral masterpiece)
  private currentSource: string = '/audio/trilha-cinematografica.mp3';

  constructor() {
    // Lazy initialized on first client interaction
  }

  private initAudio(): HTMLAudioElement {
    if (this.audio) return this.audio;

    const audio = new Audio();
    audio.src = this.currentSource;
    audio.loop = true;
    audio.preload = 'metadata';
    audio.volume = 0;

    // Fallback if MP3 is not supported or fails
    audio.addEventListener('error', () => {
      if (audio.src.endsWith('.mp3')) {
        audio.src = '/audio/trilha-cinematografica.ogg';
        if (this.isRunning) {
          audio.play().catch(() => {});
        }
      }
    });

    this.audio = audio;
    this.audioInitialized = true;
    return audio;
  }

  public isPlaying(): boolean {
    return this.isRunning;
  }

  public toggle(): boolean {
    if (this.isRunning) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start(): Promise<boolean> {
    const audio = this.initAudio();
    this.clearFade();

    this.isRunning = true;
    audio.volume = 0.001;

    return audio
      .play()
      .then(() => {
        this.fadeTo(this.targetVolume, 2500); // Elegant 2.5s cinematic fade-in
        return true;
      })
      .catch((err) => {
        // Browser autoplay restriction: will play on next user gesture
        console.warn('Playback waiting for user interaction:', err);
        const onFirstInteract = () => {
          if (this.isRunning && this.audio) {
            this.audio.play().then(() => this.fadeTo(this.targetVolume, 2500)).catch(() => {});
          }
          window.removeEventListener('pointerdown', onFirstInteract);
          window.removeEventListener('keydown', onFirstInteract);
        };
        window.addEventListener('pointerdown', onFirstInteract, { once: true });
        window.addEventListener('keydown', onFirstInteract, { once: true });
        return false;
      });
  }

  public stop(): void {
    if (!this.audio) {
      this.isRunning = false;
      return;
    }

    this.isRunning = false;
    this.clearFade();

    // Smooth 1.6s fade-out before pausing
    this.fadeTo(0, 1600, () => {
      if (this.audio) {
        this.audio.pause();
      }
    });
  }

  public setVolume(vol: number): void {
    const clamped = Math.max(0, Math.min(1, vol));
    this.targetVolume = clamped;
    if (this.isRunning && this.audio) {
      this.audio.volume = clamped;
    }
  }

  public getVolume(): number {
    return this.targetVolume;
  }

  public setTrack(path: string): void {
    const wasPlaying = this.isRunning;
    if (wasPlaying) {
      this.stop();
    }
    this.currentSource = path;
    if (this.audio) {
      this.audio.src = path;
      this.audio.load();
    }
    if (wasPlaying) {
      setTimeout(() => this.start(), 300);
    }
  }

  private fadeTo(target: number, durationMs: number, onComplete?: () => void): void {
    if (!this.audio) return;
    this.clearFade();

    const startVol = this.audio.volume;
    const diff = target - startVol;
    const steps = 30;
    const stepInterval = durationMs / steps;
    let stepCount = 0;

    this.fadeInterval = window.setInterval(() => {
      stepCount++;
      if (!this.audio) {
        this.clearFade();
        return;
      }

      const progress = stepCount / steps;
      // Smooth sinusoidal / easeInOut interpolation
      const ease = 0.5 * (1 - Math.cos(Math.PI * progress));
      const newVol = Math.max(0, Math.min(1, startVol + diff * ease));
      this.audio.volume = newVol;

      if (stepCount >= steps) {
        this.clearFade();
        this.audio.volume = target;
        if (onComplete) onComplete();
      }
    }, stepInterval);
  }

  private clearFade(): void {
    if (this.fadeInterval !== null) {
      clearInterval(this.fadeInterval);
      this.fadeInterval = null;
    }
  }
}

export const ambientAudio = new CinematicAudioController();
