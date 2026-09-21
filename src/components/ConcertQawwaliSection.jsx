import React, { useState } from 'react';
import { galleryItems } from '../data/galleryData';
import { Sparkles, Music, Mic2, Flame, MapPin, Eye, Camera, Play, Video } from 'lucide-react';

export default function ConcertQawwaliSection({ onSelectPhoto }) {
  const [activeTab, setActiveTab] = useState('all');

  const spiritualItems = galleryItems.filter(item => item.category === 'spiritual_concert');

  const filteredItems = activeTab === 'all' 
    ? spiritualItems 
    : spiritualItems.filter(item => item.subCategory?.toLowerCase() === activeTab.toLowerCase());

  const filterTabs = [
    { id: 'all', label: 'All Spiritual & Live Stages' },
    { id: 'Qawwali', label: 'Sufi Qawwali Mehfils' },
    { id: 'Naat', label: 'Mehfil-e-Naat Gatherings' },
    { id: 'Concerts', label: 'Live Arena Concerts' },
    { id: 'Client Shoots', label: 'Client Shoots & Live Videos' },
  ];

  return (
    <section id="spiritual-concerts" className="py-24 relative bg-[#FAF9F6] overflow-hidden border-t border-slate-200/80">
      
      {/* Decorative Jali Backdrop */}
      <div className="absolute inset-0 jali-pattern opacity-30 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Mic2 className="w-3.5 h-3.5 text-amber-700" />
            <span>Spiritual & Stage Mastery</span>
          </div>

          <div className="text-amber-800 text-xs sm:text-sm font-bold uppercase tracking-widest">
            Devotional Qawwali, Sacred Naat & Live Concert Stage
          </div>

          <h2 className="font-royal text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-wide">
            Concert, Naat & <span className="gold-gradient-text">Qawwali Photography</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Capturing the transcendental energy of Pakistani Sufi Mehfils, the spiritual reverence of Mehfil-e-Naat recitations, and the electrifying roar of live concert arenas.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-105 border border-amber-500/40'
                    : 'bg-white text-slate-700 hover:text-amber-800 hover:border-amber-300 border border-slate-200 shadow-sm'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

        </div>

        {/* Featured Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectPhoto(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectPhoto(item);
                }
              }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-amber-400 transition-all duration-500 hover:-translate-y-2 shadow-md hover:shadow-2xl hover:shadow-amber-500/10 cursor-pointer flex flex-col justify-between"
            >
              {/* Media Box (Video or Photo) */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 group/media">
                {item.isVideo && item.videoUrl ? (
                  <>
                    <video
                      src={item.videoUrl}
                      poster={item.image}
                      muted
                      playsInline
                      loop
                      onMouseEnter={(e) => {
                        try { e.target.play(); } catch(err) {}
                      }}
                      onMouseLeave={(e) => {
                        try { e.target.pause(); e.target.currentTime = 0; } catch(err) {}
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                    />

                    {/* 4K Video Reel Badge */}
                    <div className="absolute top-4 right-4 z-20 pointer-events-none">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-black tracking-wider uppercase bg-red-600 text-white flex items-center gap-1 shadow-lg shadow-red-600/40 animate-pulse">
                        <Play className="w-2.5 h-2.5 fill-white" />
                        <span>4K Video Reel</span>
                      </span>
                    </div>

                    {/* Central Golden Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                      <div className="w-14 h-14 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-2xl shadow-black/60 group-hover:scale-110 group-hover:bg-amber-400 transition-all duration-300">
                        <Play className="w-6 h-6 fill-slate-950 ml-0.5" />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 pointer-events-none"
                    />

                    {/* Hover Quick Overlay */}
                    <div className="hidden md:flex absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center pointer-events-none">
                      <div className="px-4 py-2 rounded-full bg-amber-500 text-white font-bold shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300 flex items-center gap-2 text-xs">
                        <Eye className="w-4 h-4" />
                        <span>View High-Res Photo</span>
                      </div>
                    </div>
                  </>
                )}

                {/* Subcategory Tag (Top Left) */}
                <div className="absolute top-4 left-4 z-20 pointer-events-none">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-white/95 backdrop-blur-md text-slate-900 border border-slate-200 flex items-center gap-1.5 shadow-md">
                    {item.subCategory === 'Qawwali' && <Flame className="w-3 h-3 text-amber-600" />}
                    {item.subCategory === 'Naat' && <Sparkles className="w-3 h-3 text-emerald-600" />}
                    {item.subCategory === 'Concerts' && <Music className="w-3 h-3 text-indigo-600" />}
                    {item.subCategory === 'Client Shoots' && (
                      item.isVideo ? <Video className="w-3 h-3 text-rose-600" /> : <Camera className="w-3 h-3 text-amber-600" />
                    )}
                    {item.badgeLabel || item.subCategory}
                  </span>
                </div>

                {/* Clicked by Ahsan Luxury Watermark Badge (Bottom Left) */}
                {item.clickedByAhsan && (
                  <div className="absolute bottom-3 left-3 z-20 pointer-events-none">
                    <span className="px-3 py-1 rounded-full text-[11px] font-black tracking-wider bg-slate-950/90 backdrop-blur-md text-amber-300 border border-amber-500/50 flex items-center gap-1.5 shadow-xl">
                      <Camera className="w-3.5 h-3.5 text-amber-400" />
                      <span>Clicked by Ahsan</span>
                    </span>
                  </div>
                )}
              </div>

              {/* Photo / Video Info Content */}
              <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                      {item.tagLabel || item.subCategory}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">
                      {item.date}
                    </span>
                  </div>

                  <h3 className="font-royal text-lg sm:text-xl font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span className="truncate max-w-[130px] sm:max-w-[170px] font-medium">{item.location}</span>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectPhoto(item);
                    }}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold shadow-sm transition-all duration-300 ${
                      item.isVideo
                        ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/20'
                        : 'bg-amber-50 hover:bg-amber-500 text-amber-900 hover:text-white border border-amber-300/60'
                    }`}
                    aria-label={`View ${item.title}`}
                  >
                    {item.isVideo ? (
                      <>
                        <Play className="w-3 h-3 fill-slate-950" />
                        <span>Watch Video Reel</span>
                      </>
                    ) : (
                      <>
                        <Eye className="w-3.5 h-3.5 text-amber-600 group-hover:text-white" />
                        <span>View Photo</span>
                      </>
                    )}
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
