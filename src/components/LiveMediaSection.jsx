import React from 'react';
import { galleryItems } from '../data/galleryData';
import { Tv, Sparkles, Award, Video, MapPin, Radio } from 'lucide-react';

export default function LiveMediaSection({ onSelectPhoto }) {
  const mediaItems = galleryItems.filter((item) => item.category === 'media');

  return (
    <section id="live-media" className="py-24 relative bg-[#F8FAFC] overflow-hidden border-t border-slate-200/80">
      
      {/* Subtle Background Glow */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-800 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Radio className="w-3.5 h-3.5 text-red-600 animate-pulse" />
            <span>VIP Broadcast & Cultural Programs</span>
          </div>

          <div className="text-amber-800 text-xs sm:text-sm font-bold uppercase tracking-widest">
            Live Media Coverage, Cultural Programs & VIP Galas
          </div>

          <h2 className="font-royal text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-wide">
            Live Media <span className="gold-gradient-text">& Cultural Coverage</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            High-caliber photographic documentation of national cultural festivals, televised red carpets, executive corporate galas, and exclusive private VIP functions.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all text-center space-y-2">
            <div className="w-12 h-12 mx-auto rounded-xl bg-amber-100/70 border border-amber-300 flex items-center justify-center text-amber-700">
              <Tv className="w-6 h-6" />
            </div>
            <h4 className="font-royal text-base font-bold text-slate-950">Red Carpet & Galas</h4>
            <p className="text-xs text-slate-600">Award shows, celebrity arrivals, and high-fashion step-and-repeat walls.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all text-center space-y-2">
            <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-100/70 border border-emerald-300 flex items-center justify-center text-emerald-700">
              <Sparkles className="w-6 h-6" />
            </div>
            <h4 className="font-royal text-base font-bold text-slate-950">Cultural Festivals</h4>
            <p className="text-xs text-slate-600">Lok Virsa melas, heritage crafts, sufi gatherings, and folk performances.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all text-center space-y-2">
            <div className="w-12 h-12 mx-auto rounded-xl bg-blue-100/70 border border-blue-300 flex items-center justify-center text-blue-700">
              <Video className="w-6 h-6" />
            </div>
            <h4 className="font-royal text-base font-bold text-slate-950">Live Multicam Stills</h4>
            <p className="text-xs text-slate-600">High-speed wireless synchronization with live broadcast media suites.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all text-center space-y-2">
            <div className="w-12 h-12 mx-auto rounded-xl bg-purple-100/70 border border-purple-300 flex items-center justify-center text-purple-700">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="font-royal text-base font-bold text-slate-950">VIP Private Functions</h4>
            <p className="text-xs text-slate-600">Discreet, high-security presidential and diplomatic corporate banquets.</p>
          </div>

        </div>

        {/* Media Photo Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mediaItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectPhoto(item)}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-amber-400 transition-all duration-500 hover:-translate-y-1.5 shadow-md hover:shadow-xl cursor-pointer flex flex-col sm:flex-row"
            >
              <div className="sm:w-1/2 aspect-[4/3] sm:aspect-auto overflow-hidden bg-slate-100 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/90 backdrop-blur-md text-slate-900 border border-slate-200 shadow-sm">
                    {item.subCategory}
                  </span>
                </div>
              </div>

              <div className="sm:w-1/2 p-6 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                    {item.subCategory}
                  </span>
                  <h3 className="font-royal text-lg font-bold text-slate-950 group-hover:text-amber-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span className="truncate font-medium">{item.location}</span>
                  </div>
                  <div className="text-[11px] text-slate-600">
                    Client: <strong className="text-slate-900 font-semibold">{item.client}</strong>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
