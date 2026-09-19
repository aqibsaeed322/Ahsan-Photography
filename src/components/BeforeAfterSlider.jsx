import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, Wand2 } from 'lucide-react';

export default function BeforeAfterSlider({
  beforeImage = "/assets/images/wedding_baraat.jpg",
  afterImage = "/assets/images/wedding_baraat.jpg",
  title = "Signature Royal Color Science & Retouching",
  subtitle = "Drag the slider to reveal raw capture vs final royal Mughal color grade"
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-12">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-100/80 text-amber-900 border border-amber-300 mb-2">
          <Wand2 className="w-3.5 h-3.5 text-amber-700" />
          Master Color Grading
        </div>
        <h3 className="font-royal text-2xl sm:text-3xl font-bold text-slate-950">{title}</h3>
        <p className="text-slate-600 text-sm mt-1">{subtitle}</p>
      </div>

      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-slate-300 shadow-2xl shadow-slate-900/10"
      >
        {/* AFTER (Edited Master) Image */}
        <div className="absolute inset-0">
          <img
            src={afterImage}
            alt="Master Retouched"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-md border border-amber-300 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Master Color Grade (Edited)</span>
          </div>
        </div>

        {/* BEFORE (Raw Tone Filtered) Image with Clip Path */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img
            src={beforeImage}
            alt="Camera Raw"
            className="w-full h-full object-cover filter saturate-75 brightness-95 contrast-90 sepia-[0.15]"
          />
          <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-slate-900/85 backdrop-blur-md border border-slate-700 text-slate-200 font-semibold text-xs shadow-lg">
            Direct Camera RAW Sensor
          </div>
        </div>

        {/* Draggable Divider Line with Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 shadow-[0_0_12px_rgba(212,175,55,0.7)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-700 p-[2px] shadow-2xl shadow-amber-500/50 flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-slate-950 font-bold text-xs">
              ‹ ›
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
