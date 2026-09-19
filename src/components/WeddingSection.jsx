import React, { useState } from 'react';
import { galleryItems } from '../data/galleryData';
import { Heart, Sparkles, MapPin, Camera, Eye, Gem } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';

export default function WeddingSection({ onSelectPhoto, onOpenBooking }) {
  const [selectedCeremony, setSelectedCeremony] = useState('all');

  const weddingItems = galleryItems.filter((item) => item.category === 'wedding');

  const filteredItems = selectedCeremony === 'all'
    ? weddingItems
    : weddingItems.filter((item) => item.subCategory.toLowerCase() === selectedCeremony.toLowerCase());

  const ceremonies = [
    { id: 'all', title: 'All Wedding Ceremonies', icon: Gem },
    { id: 'Mehndi', title: 'Mehndi & Mayun', icon: Sparkles },
    { id: 'Baraat', title: 'Royal Baraat & Nikkah', icon: Heart },
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
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectPhoto(item)}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-amber-400 transition-all duration-500 hover:-translate-y-2 shadow-md hover:shadow-2xl hover:shadow-amber-500/10 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />

                {/* Subcategory Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-white/90 backdrop-blur-md text-slate-900 border border-slate-200 shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-amber-600" />
                    {item.subCategory}
                  </span>
                </div>

                {/* Hover Action */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="px-4 py-2 rounded-full bg-amber-500 text-white font-bold shadow-xl flex items-center gap-2 text-xs">
                    <Eye className="w-4 h-4" />
                    <span>View Wedding Story</span>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                      {item.subCategory}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {item.client}
                    </span>
                  </div>

                  <h3 className="font-royal text-xl font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-600" />
                    <span className="truncate max-w-[170px] font-medium">{item.location}</span>
                  </div>

                  <div className="text-[11px] font-mono text-slate-500">
                    {item.camera}
                  </div>
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
