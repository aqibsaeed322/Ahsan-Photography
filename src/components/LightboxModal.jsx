import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Camera, Sparkles, MessageCircle, Calendar, ShieldCheck } from 'lucide-react';
import { photographerInfo } from '../data/photographerInfo';

export default function LightboxModal({ item, onClose, onPrev, onNext }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = Array.isArray(item?.images) && item.images.length > 0 ? item.images : (item?.image ? [item.image] : []);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [item?.id]);

  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow || 'auto';
    };
  }, [item, onClose, onPrev, onNext]);

  if (!item) return null;

  const currentImageSrc = images[activeImageIndex] || item.image;
  const whatsappInquiryUrl = `https://wa.me/${photographerInfo.contact.whatsapp}?text=Hi%20Ahsan!%20I%20am%20interested%20in%20a%20similar%20photography%20style%20as%20"${encodeURIComponent(item.title)}"%20for%20my%20event.`;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-2 sm:p-6 animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      
      {/* Close Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="fixed top-3 right-3 sm:top-5 sm:right-5 z-50 p-2.5 sm:p-3 rounded-full bg-slate-900/90 border border-amber-500/40 text-slate-200 hover:text-amber-400 hover:scale-105 transition-all shadow-2xl"
        aria-label="Close modal"
      >
        <X className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Navigation Left (Desktop) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="hidden md:flex fixed left-4 lg:left-8 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-slate-900/80 border border-slate-700 text-slate-200 hover:text-amber-400 hover:border-amber-500/40 hover:scale-110 transition-all shadow-2xl items-center justify-center"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Navigation Right (Desktop) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="hidden md:flex fixed right-4 lg:right-8 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-slate-900/80 border border-slate-700 text-slate-200 hover:text-amber-400 hover:border-amber-500/40 hover:scale-110 transition-all shadow-2xl items-center justify-center"
        aria-label="Next photo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Modal Content Window */}
      <div 
        className="max-w-5xl w-full max-h-[95vh] sm:max-h-[92vh] glass-panel rounded-2xl sm:rounded-3xl overflow-y-auto lg:overflow-hidden flex flex-col lg:flex-row border border-amber-500/30 shadow-2xl shadow-black my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Main Image View */}
        <div className="flex-1 bg-black/90 relative flex items-center justify-center overflow-hidden min-h-[260px] sm:min-h-[380px] lg:min-h-[540px]">
          <img
            key={currentImageSrc}
            src={currentImageSrc}
            alt={item.title}
            className="w-full h-full max-h-[48vh] sm:max-h-[65vh] lg:max-h-[75vh] object-contain select-none transition-opacity duration-300"
          />
          
          {/* Subtle Watermark Branding */}
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 pointer-events-none opacity-85 flex items-center gap-2 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-lg border border-amber-500/30 text-xs shadow-md">
            <img 
              src="/assets/images/logo.jpeg" 
              alt="Logo" 
              className="w-4 h-4 rounded-full object-cover border border-amber-400"
            />
            <span className="font-royal text-amber-200 tracking-wider text-[11px] font-bold">AHSAN PHOTOGRAPHY</span>
          </div>

          {/* Mobile Prev / Next floating mini buttons over image on mobile */}
          <div className="md:hidden absolute inset-x-2 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none z-30">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="p-2 rounded-full bg-black/70 text-white border border-white/20 pointer-events-auto backdrop-blur-sm shadow-md"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="p-2 rounded-full bg-black/70 text-white border border-white/20 pointer-events-auto backdrop-blur-sm shadow-md"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Sub-image Gallery Thumbnails Strip (if event has multiple photos) */}
          {images.length > 1 && (
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-30 flex items-center gap-1.5 sm:gap-2 bg-black/80 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/20 shadow-xl max-w-[75%] overflow-x-auto">
              <span className="text-[10px] font-mono text-amber-300 font-bold px-1 shrink-0">
                {activeImageIndex + 1}/{images.length}
              </span>
              {images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex(idx);
                  }}
                  className={`w-7 h-7 sm:w-8 sm:h-8 shrink-0 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    idx === activeImageIndex
                      ? 'border-amber-400 scale-110 shadow-lg shadow-amber-400/30'
                      : 'border-white/30 opacity-60 hover:opacity-100 hover:border-white'
                  }`}
                  aria-label={`View photo ${idx + 1}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar Info & Metadata */}
        <div className="w-full lg:w-96 p-5 sm:p-8 flex flex-col justify-between bg-[#0B0F19]/95 overflow-y-auto max-h-[48vh] lg:max-h-[92vh]">
          
          <div className="space-y-4">
            
            {/* Category Pill */}
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-500/10 text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-amber-400" />
                {item.subCategory || item.category}
              </span>
              <span className="text-xs text-amber-400/90 font-medium">
                {item.date}
              </span>
            </div>

            {/* Title & Description */}
            <div>
              <h3 className="font-royal text-xl sm:text-2xl font-bold text-slate-100 tracking-wide mb-2">
                {item.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Cultural & Event Details */}
            <div className="space-y-2.5 pt-3 border-t border-slate-800 text-xs">
              <div className="flex items-center gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-medium text-slate-200">{item.location}</span>
              </div>
              
              {item.date && (
                <div className="flex items-center gap-2.5 text-slate-400">
                  <Calendar className="w-4 h-4 text-amber-400/70 shrink-0" />
                  <span>{item.date}</span>
                </div>
              )}

              {item.client && (
                <div className="flex items-center gap-2.5 text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400/80 shrink-0" />
                  <span>Client / Host: <strong className="text-slate-300">{item.client}</strong></span>
                </div>
              )}
            </div>

            {/* EXIF Technical Data */}
            <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800 space-y-1.5 text-[11px] text-slate-400">
              <div className="text-slate-300 font-semibold tracking-wider uppercase text-[10px] text-amber-400 flex items-center gap-1.5 mb-1">
                <Camera className="w-3 h-3" />
                Shot Specifications
              </div>
              <div className="flex justify-between">
                <span>Camera Body:</span>
                <span className="text-slate-200 font-mono">{item.camera || 'Sony Alpha 1 Flagship'}</span>
              </div>
              <div className="flex justify-between">
                <span>Master Lens:</span>
                <span className="text-slate-200 font-mono">{item.lens || '85mm f/1.2 G-Master'}</span>
              </div>
              <div className="flex justify-between">
                <span>Color Science:</span>
                <span className="text-amber-300">Signature Pakistani Royal Tone</span>
              </div>
            </div>

          </div>

          {/* WhatsApp Inquiry CTA */}
          <div className="pt-6 mt-6 border-t border-slate-800 space-y-2">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4" />
              Inquire About This Look on WhatsApp
            </a>
            <p className="text-[10px] text-center text-slate-500">
              Instant response from Ahsan's studio management
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
