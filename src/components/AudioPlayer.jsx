import React, { useEffect, useRef } from 'react';

// Web Audio API Synthesized Pakistani Raag / Rubab Sufi Ambient Drone & Chords
export default function AudioPlayer({ isPlaying }) {
  const audioCtxRef = useRef(null);
  const oscillatorsRef = useRef([]);
  const gainNodeRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      startAmbientMusic();
    } else {
      stopAmbientMusic();
    }

    return () => {
      stopAmbientMusic();
    };
  }, [isPlaying]);

  const startAmbientMusic = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;

      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.01, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 2.5);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Raag Bhairav / Yaman Pentatonic Frequencies (Sa, Re, Ga, Pa, Dha, Sa')
      const droneFreqs = [110, 164.81, 220, 329.63]; // A2, E3, A3, E4 Tanpura Drone
      const melodyFreqs = [220, 246.94, 277.18, 329.63, 369.99, 440, 493.88, 554.37];

      // Tanpura Continuous Drone
      droneFreqs.forEach((freq) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Subtle slow lfo detune for organic acoustic resonance
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.value = 0.25;
        lfoGain.gain.value = 1.2;
        lfo.connect(osc.frequency);
        lfo.start();

        oscGain.gain.value = 0.04;
        osc.connect(oscGain);
        oscGain.connect(masterGain);
        osc.start();
        oscillatorsRef.current.push(osc, lfo);
      });

      // Periodic Plucked Sitar / Rubab Harp Notes
      let noteIndex = 0;
      intervalRef.current = setInterval(() => {
        if (!audioCtxRef.current || audioCtxRef.current.state !== 'running') return;
        
        const noteOsc = ctx.createOscillator();
        const noteGain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        const f = melodyFreqs[noteIndex % melodyFreqs.length];
        noteIndex = (noteIndex + Math.floor(Math.random() * 3) + 1) % melodyFreqs.length;

        noteOsc.type = 'triangle';
        noteOsc.frequency.setValueAtTime(f, ctx.currentTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1800, ctx.currentTime);
        filter.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 1.8);

        noteGain.gain.setValueAtTime(0.001, ctx.currentTime);
        noteGain.gain.linearRampToValueAtTime(0.09, ctx.currentTime + 0.05);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.4);

        noteOsc.connect(filter);
        filter.connect(noteGain);
        noteGain.connect(masterGain);

        noteOsc.start();
        noteOsc.stop(ctx.currentTime + 2.5);
      }, 1600);

    } catch (e) {
      console.warn("Ambient audio error:", e);
    }
  };

  const stopAmbientMusic = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (gainNodeRef.current && audioCtxRef.current) {
      try {
        const ctx = audioCtxRef.current;
        gainNodeRef.current.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.5);
        setTimeout(() => {
          oscillatorsRef.current.forEach((osc) => {
            try {
              osc.stop();
              osc.disconnect();
            } catch (e) {}
          });
          oscillatorsRef.current = [];
        }, 600);
      } catch (e) {}
    }
  };

  return null;
}
