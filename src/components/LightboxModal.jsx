import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Camera, Sparkles, MessageCircle, Calendar, ShieldCheck } from 'lucide-react';
import { photographerInfo } from '../data/photographerInfo';

export default function LightboxModal({ item, onClose, onPrev, onNext }) {
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

  const whatsappInquiryUrl = `https://wa.me/${photographerInfo.contact.whatsapp}?text=Hi%20Ahsan!%20I%20am%20interested%20in%20a%20similar%20photography%20style%20as%20"${encodeURIComponent(item.title)}"%20for%20my%20event.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-3 sm:p-6 animate-in fade-in duration-200">
      
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-3 rounded-full bg-slate-900/80 border border-amber-500/30 text-slate-200 hover:text-amber-400 hover:scale-105 transition-all shadow-xl"
        aria-label="Close modal"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Left */}
      <button
        onClick={onPrev}
        className="absolute left-3 sm:left-6 z-40 p-3 rounded-full bg-slate-900/80 border border-slate-700 text-slate-200 hover:text-amber-400 hover:border-amber-500/40 hover:scale-110 transition-all shadow-2xl"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Navigation Right */}
      <button
        onClick={onNext}
        className="absolute right-3 sm:right-6 z-40 p-3 rounded-full bg-slate-900/80 border border-slate-700 text-slate-200 hover:text-amber-400 hover:border-amber-500/40 hover:scale-110 transition-all shadow-2xl"
        aria-label="Next photo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Modal Content Window */}
      <div 
        className="max-w-6xl w-full max-h-[92vh] glass-panel rounded-2xl overflow-hidden flex flex-col lg:flex-row border border-amber-500/20 shadow-2xl shadow-black"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Main Image View */}
        <div className="flex-1 bg-black/80 relative flex items-center justify-center overflow-hidden min-h-[350px] lg:min-h-[560px]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full max-h-[75vh] object-contain select-none"
          />
          
          {/* Subtle Watermark Branding */}
          <div className="absolute bottom-4 left-4 pointer-events-none opacity-70 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-amber-500/20 text-xs">
            <Camera className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-royal text-amber-200 tracking-wider">AHSAN VISUALS</span>
          </div>
        </div>

        {/* Sidebar Info & Metadata */}
        <div className="w-full lg:w-96 p-6 sm:p-8 flex flex-col justify-between bg-[#0B0F19]/95 overflow-y-auto max-h-[40vh] lg:max-h-[92vh]">
          
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
