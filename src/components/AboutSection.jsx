import React from 'react';
import { photographerInfo } from '../data/photographerInfo';
import { Sparkles, Award, Camera, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function AboutSection({ onOpenBooking }) {
  return (
    <section id="about" className="py-24 relative bg-[#FCFBF8] overflow-hidden border-t border-slate-200/80">
      
      {/* Background Decorative Element */}
      <div className="absolute inset-0 jali-pattern opacity-25 pointer-events-none"></div>
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Photographer Professional Portrait with Royal Framing */}
          <div className="lg:col-span-5 relative">
            
            <div className="relative mx-auto max-w-md">
              
              {/* Gold Ornamented Border Frame */}
              <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-br from-amber-300/30 via-amber-400/20 to-amber-700/20 blur-sm"></div>
              
              <div className="relative bg-white rounded-3xl p-3 border border-amber-300/80 shadow-2xl shadow-slate-900/10 overflow-hidden">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src={photographerInfo.portraitImage}
                    alt={photographerInfo.name}
                    className="w-full h-full object-cover object-top filter contrast-[1.03]"
                  />
                  
                  {/* Floating Experience Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-amber-200 flex items-center justify-between shadow-xl">
                    <div>
                      <div className="font-royal text-lg font-extrabold text-amber-800">
                        {photographerInfo.experienceYears}+ Years
                      </div>
                      <div className="text-[11px] text-slate-600 font-semibold">
                        Mastering Event Photography
                      </div>
                    </div>
                    
                    <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800">
                      <Award className="w-5 h-5" />
                    </div>
                  </div>

                </div>
              </div>

              {/* Verified Artist Pill */}
              <div className="absolute -top-4 right-4 px-4 py-1.5 rounded-full bg-slate-950 border border-amber-400 text-amber-300 text-xs font-bold shadow-xl flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Master Artist</span>
              </div>

            </div>

          </div>

          {/* Biography, Philosophy & Gear */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider shadow-sm">
                <Camera className="w-3.5 h-3.5 text-amber-700" />
                <span>The Visionary Behind The Lens</span>
              </div>

              <div className="text-amber-800 text-xs sm:text-sm font-bold uppercase tracking-widest">
                Artistic Journey & Master Craftsmanship
              </div>

              <h2 className="font-royal text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
                About <span className="gold-gradient-text">{photographerInfo.name}</span>
              </h2>

              <p className="text-amber-800 font-semibold text-sm sm:text-base">
                {photographerInfo.tagline}
              </p>
            </div>

            {/* Bio Paragraphs */}
            <div className="space-y-3.5 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
              {photographerInfo.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Gear Vault Grid */}
            <div className="space-y-3 pt-2">
              <h3 className="font-royal text-sm sm:text-base font-bold text-slate-900 uppercase tracking-wider flex items-center justify-center lg:justify-start gap-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>The Pro Cinema & Medium Format Gear Vault</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                {photographerInfo.gearVault.map((gear, i) => (
                  <div key={i} className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">{gear.name}</div>
                      <div className="text-[11px] text-slate-600">{gear.purpose}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gold Signature & CTA */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
              
              <div className="flex items-center gap-4 text-left">
                <div>
                  <div className="font-signature text-3xl sm:text-4xl text-amber-800 select-none">
                    Ahsan
                  </div>
                  <div className="text-[11px] font-mono tracking-widest text-slate-500 uppercase font-semibold">
                    Master Artist & Lead Cinematographer
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="px-7 py-3 rounded-full font-bold text-xs sm:text-sm bg-slate-900 hover:bg-slate-800 text-white border border-amber-400 shadow-lg shadow-slate-900/15 transition-all transform hover:-translate-y-0.5"
              >
                Work With Ahsan
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
