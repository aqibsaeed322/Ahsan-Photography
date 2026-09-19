import React, { useState } from 'react';
import { galleryItems } from '../data/galleryData';
import { Eye, MapPin, Layers } from 'lucide-react';
import CardImageCarousel from './CardImageCarousel';

export default function PortfolioGallery({ onSelectPhoto }) {
  const [activeFilter, setActiveFilter] = useState('all');

  // Master portfolio focusing on royal wedding & fine-art showcases (excluding duplicates from dedicated Qawwali section and removed Live Media)
  const masterWeddingItems = galleryItems.filter((item) => item.category === 'wedding');

  const filterCategories = [
    { id: 'all', name: 'Master Showcase (All)' },
    { id: 'Baraat', name: 'Royal Baraat' },
    { id: 'Nikkah', name: 'Nikkah Ceremony' },
    { id: 'Mehndi', name: 'Mehndi & Mayun' },
    { id: 'Walima', name: 'Walima Receptions' },
    { id: 'Portraits', name: 'Bridal & Couple Portraits' },
  ];

  const filteredPhotos = activeFilter === 'all'
    ? masterWeddingItems
    : masterWeddingItems.filter((item) => item.subCategory?.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section id="portfolio" className="py-24 relative bg-white overflow-hidden border-t border-slate-200/80">
      
      {/* Visual Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Layers className="w-3.5 h-3.5 text-amber-700" />
            <span>Curated Master Gallery</span>
          </div>

          <div className="text-amber-800 text-xs sm:text-sm font-bold uppercase tracking-widest">
            Selected Masterpieces & Event Archives
          </div>

          <h2 className="font-royal text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-wide">
            Portfolio & <span className="gold-gradient-text">His Master Work</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            A comprehensive visual anthology capturing royal Pakistani weddings, fine-art bridal couture, and timeless romantic moments.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === cat.id
                    ? 'bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-105 border border-amber-500/40'
                    : 'bg-white text-slate-700 hover:text-amber-800 hover:border-amber-300 border border-slate-200 shadow-sm'
                }`}
              >
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

        </div>

        {/* Masonry / Grid Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredPhotos.map((item) => (
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
              className="break-inside-avoid group relative bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-amber-400 transition-all duration-500 hover:-translate-y-2 shadow-md hover:shadow-2xl hover:shadow-amber-500/10 cursor-pointer"
            >
              {/* Photo Carousel */}
              <div className="relative overflow-hidden bg-slate-100">
                <CardImageCarousel
                  images={item.images && item.images.length > 0 ? item.images : [item.image]}
                  title={item.title}
                  aspect={item.aspect === 'portrait' ? 'aspect-[4/5]' : 'aspect-[4/3]'}
                  staggerIndex={filteredPhotos.indexOf(item)}
                  onCardClick={() => onSelectPhoto(item)}
                  badge={
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/90 backdrop-blur-md text-slate-900 border border-slate-200 shadow-md">
                      {item.subCategory}
                    </span>
                  }
                  showHoverOverlay={false}
                />

                {/* Full Overlay On Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-between z-20 pointer-events-none">
                  
                  <div className="flex justify-end">
                    <span className="p-2.5 rounded-full bg-amber-500 text-white shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-4 h-4" />
                    </span>
                  </div>

                  <div className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                      {item.subCategory}
                    </span>
                    <h3 className="font-royal text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-slate-200 text-xs line-clamp-2">
                      {item.description}
                    </p>

                    <div className="pt-2 flex items-center justify-between text-[11px] text-slate-300 border-t border-slate-700/60">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="truncate max-w-[150px]">{item.location}</span>
                      </div>
                      <div className="font-mono text-amber-300 font-medium">
                        {item.camera}
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Bottom Card Bar (Visible always on mobile, discreet on desktop) */}
              <div className="p-4 sm:hidden bg-white border-t border-slate-100 flex items-center justify-between">
                <div className="space-y-0.5">
                  <h4 className="font-royal text-sm font-bold text-slate-950">{item.title}</h4>
                  <div className="flex items-center gap-2 text-[11px] text-slate-600">
                    <span>{item.location}</span>
                    <span className="text-amber-700 font-bold">• {item.subCategory}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectPhoto(item);
                  }}
                  className="px-3.5 py-1.5 rounded-full bg-slate-900 text-amber-400 text-xs font-bold flex items-center gap-1 shadow-sm"
                  aria-label={`View ${item.title}`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
