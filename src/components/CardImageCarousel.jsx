import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Eye } from 'lucide-react';

export default function CardImageCarousel({
  images = [],
  title = '',
  badge = null,
  aspect = 'aspect-[4/3]',
  hoverText = 'View Story',
  staggerIndex = 0,
  showHoverOverlay = true,
  onCardClick = null
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartPos, setTouchStartPos] = useState(null);

  // Normalize images array
  const imageList = Array.isArray(images) && images.length > 0 ? images : ['/assets/images/wedding_baraat.jpg'];

  useEffect(() => {
    if (imageList.length <= 1 || isPaused) return;

    // Stagger slide intervals so cards don't all flip at the exact same millisecond
    const intervalTime = 3200 + (staggerIndex % 4) * 500;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageList.length);
    }, intervalTime);

    return () => clearInterval(timer);
  }, [imageList.length, isPaused, staggerIndex]);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % imageList.length);
  };

  const handleTouchStart = (e) => {
    setTouchStartPos({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
      time: Date.now()
    });
  };

  const handleTouchEnd = (e) => {
    if (!touchStartPos) return;
    const touchEnd = e.changedTouches[0];
    const diffX = touchStartPos.x - touchEnd.clientX;
    const diffY = touchStartPos.y - touchEnd.clientY;
    const elapsed = Date.now() - touchStartPos.time;

    // Horizontal swipe detection (> 45px and mostly horizontal)
    if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        nextImage();
      } else {
        prevImage();
      }
    } else if (Math.abs(diffX) < 15 && Math.abs(diffY) < 15 && elapsed < 350) {
      // It's a clean tap on mobile -> trigger onCardClick
      if (onCardClick) {
        onCardClick();
      }
    }
    setTouchStartPos(null);
  };

  return (
    <div
      className={`relative ${aspect} overflow-hidden bg-slate-100 cursor-pointer select-none`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={(e) => {
        if (onCardClick) {
          onCardClick(e);
        }
      }}
    >
      {/* Slides with smooth crossfade */}
      {imageList.map((imgSrc, idx) => (
        <img
          key={idx}
          src={imgSrc}
          alt={`${title} photo ${idx + 1}`}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out pointer-events-none ${
            idx === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />
      ))}

      {/* Subcategory / Event Badge (Top Left) */}
      {badge && (
        <div className="absolute top-4 left-4 z-20 pointer-events-none">
          {badge}
        </div>
      )}

      {/* Image Counter Pill (Top Right, if multiple images) */}
      {imageList.length > 1 && (
        <div className="absolute top-4 right-4 z-20 pointer-events-none">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/20 shadow-md">
            0{currentIndex + 1} / 0{imageList.length}
          </span>
        </div>
      )}

      {/* Left/Right manual click arrows on hover (Desktop only, never block mobile taps) */}
      {imageList.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-all shadow-lg pointer-events-none group-hover:pointer-events-auto items-center justify-center"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-all shadow-lg pointer-events-none group-hover:pointer-events-auto items-center justify-center"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      {/* Slide Indicators / Dots (Bottom Center) */}
      {imageList.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md">
          {imageList.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(i);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'w-4 bg-amber-400' : 'w-1.5 bg-white/60 hover:bg-white'
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* Hover Action Overlay */}
      {showHoverOverlay && (
        <div className="hidden md:flex absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center pointer-events-none z-10">
          <div className="px-4 py-2 rounded-full bg-amber-500 text-white font-bold shadow-xl flex items-center gap-2 text-xs">
            <Eye className="w-4 h-4" />
            <span>{hoverText}</span>
          </div>
        </div>
      )}
    </div>
  );
}
