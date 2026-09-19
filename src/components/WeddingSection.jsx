import React, { useState } from 'react';
import { galleryItems } from '../data/galleryData';
import { Heart, Sparkles, MapPin, Camera, Eye, Gem } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';
import CardImageCarousel from './CardImageCarousel';

export default function WeddingSection({ onSelectPhoto, onOpenBooking }) {
  const [selectedCeremony, setSelectedCeremony] = useState('all');

  const weddingItems = galleryItems.filter((item) => item.category === 'wedding');

  const filteredItems = selectedCeremony === 'all'
    ? weddingItems
    : weddingItems.filter((item) => item.subCategory.toLowerCase() === selectedCeremony.toLowerCase());

  const ceremonies = [
    { id: 'all', title: 'All Wedding Ceremonies', icon: Gem },
    { id: 'Baraat', title: 'Royal Baraat', icon: Heart },
    { id: 'Nikkah', title: 'Nikkah Ceremony', icon: Gem },
    { id: 'Mehndi', title: 'Mehndi & Mayun', icon: Sparkles },
    { id: 'Walima', title: 'Walima & Reception', icon: Gem },
    { id: 'Portraits', title: 'Fine-Art Portraits', icon: Camera },
  ];

  return (
    <section id="weddings" className="py-24 relative bg-white overflow-hidden">
      
      {/* Decorative Warm Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-amber-100/30 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600/20" />
            <span>Pakistani Wedding Couture</span>
          </div>

          <div className="text-amber-800 text-xs sm:text-sm font-bold uppercase tracking-widest">
            Mehndi, Baraat, Walima & Heritage Couple Portraits
          </div>

          <h2 className="font-royal text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-wide">
            Pakistani <span className="gold-gradient-text">Wedding Photography</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From the lively yellow marigolds and rhythmic dholak beats of Mehndi nights to the imperial crimson grandeur of Baraat and the ethereal pastel romance of Walima.
          </p>

          {/* Ceremony Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-6">
            {ceremonies.map((ceremony) => {
              const Icon = ceremony.icon;
              return (
                <button
                  key={ceremony.id}
                  onClick={() => setSelectedCeremony(ceremony.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                    selectedCeremony === ceremony.id
                      ? 'bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-105 border border-amber-500/40'
                      : 'bg-white text-slate-700 hover:text-amber-800 hover:border-amber-300 border border-slate-200 shadow-sm'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 text-amber-500" />
                  <span>{ceremony.title}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Wedding Photography Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
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
              <CardImageCarousel
                images={item.images || [item.image]}
                title={item.title}
                aspect="aspect-[4/3]"
                staggerIndex={index}
                onCardClick={() => onSelectPhoto(item)}
                badge={
                  <span className="px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-white/90 backdrop-blur-md text-slate-900 border border-slate-200 shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-amber-600" />
                    {item.subCategory}
                  </span>
                }
                hoverText="View Wedding Story"
              />

              <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                      {item.subCategory}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {item.client}
                    </span>
                  </div>

                  <h3 className="font-royal text-lg sm:text-xl font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
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
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 hover:bg-amber-500 text-amber-900 hover:text-white border border-amber-300/60 text-[11px] font-bold shadow-sm transition-all duration-300"
                    aria-label={`View ${item.title} photos`}
                  >
                    <Eye className="w-3.5 h-3.5 text-amber-600 group-hover:text-white" />
                    <span>View Story</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Interactive Before & After Color Retouching Demonstration */}
        <BeforeAfterSlider
          beforeImage="/assets/images/wedding_baraat.jpg"
          afterImage="/assets/images/wedding_baraat.jpg"
          title="Fine-Art Pakistani Bridal Retouching"
          subtitle="Slide left & right to see authentic skin preservation, zardozi embroidery enhancement, and imperial royal tone grading."
        />

        {/* Wedding Booking Banner */}
        <div className="mt-12 bg-gradient-to-r from-amber-50 via-amber-100/40 to-amber-50 p-8 sm:p-12 rounded-3xl border border-amber-300 text-center relative overflow-hidden shadow-xl shadow-amber-500/5">
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h3 className="font-royal text-2xl sm:text-3xl font-bold text-slate-950">
              Planning Your Dream Pakistani Wedding?
            </h3>
            <p className="text-slate-700 text-sm sm:text-base">
              Limited wedding dates available for upcoming Lahore, Islamabad, Karachi & International seasons. Reserve with our master cinematic crew.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-8 py-3.5 rounded-full font-bold text-sm bg-slate-900 hover:bg-slate-800 text-white border border-amber-400 shadow-xl shadow-slate-900/15 transition-all transform hover:-translate-y-1"
              >
                Inquire Wedding Dates & Packages
              </button>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
