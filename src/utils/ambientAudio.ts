// Web Audio API based contemplative ambient atmosphere
// Strictly user-initiated (never plays automatically)

class AmbientAudioController {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isRunning: boolean = false;

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

  public start(): void {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;

      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      // Smooth fade in over 2 seconds to low ambient volume
      this.masterGain.gain.exponentialRampToValueAtTime(0.12, this.ctx.currentTime + 2.5);

      // Lowpass filter to ensure deep, warm, non-intrusive sound
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(280, this.ctx.currentTime);
      filter.connect(this.masterGain);

      // Subtle atmospheric chords (harmonics of 108Hz & 144Hz)
      const freqs = [108, 162, 216, 324];
      freqs.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const oscGain = this.ctx.createGain();
        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        // Very slight detune for organic acoustic resonance
        osc.detune.setValueAtTime((idx - 1.5) * 3, this.ctx.currentTime);
        oscGain.gain.setValueAtTime(0.18 / freqs.length, this.ctx.currentTime);

        osc.connect(oscGain);
        oscGain.connect(filter);
        osc.start();
      });

      this.isRunning = true;
    } catch {
      this.isRunning = false;
    }
  }

  public stop(): void {
    if (this.masterGain && this.ctx) {
      try {
        // Smooth fade out over 1.2s
        this.masterGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.2);
        setTimeout(() => {
          this.ctx?.close();
          this.ctx = null;
          this.masterGain = null;
          this.isRunning = false;
        }, 1300);
      } catch {
        this.ctx = null;
        this.masterGain = null;
        this.isRunning = false;
      }
    } else {
      this.isRunning = false;
    }
  }
}

export const ambientAudio = new AmbientAudioController();
