import React from 'react';
import { clientReviews } from '../data/galleryData';
import { Star, Quote, HeartHandshake } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-24 relative bg-white overflow-hidden border-t border-slate-200/80">
      
      {/* Background Glow */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[300px] bg-amber-100/30 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider shadow-sm">
            <HeartHandshake className="w-3.5 h-3.5 text-amber-700" />
            <span>Honored Clients & Words of Praise</span>
          </div>

          <div className="text-amber-800 text-xs sm:text-sm font-bold uppercase tracking-widest">
            Client Experiences & Genuine Reviews
          </div>

          <h2 className="font-royal text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-wide">
            Testimonials of <span className="gold-gradient-text">Trust & Delight</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Read genuine reflections from couples, Sufi gathering organizers, and corporate producers across Pakistan.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clientReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FDFBF7] p-8 rounded-3xl border border-amber-200 hover:border-amber-400 transition-all duration-300 shadow-md hover:shadow-xl relative flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-amber-500/25" />
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                  "{rev.review}"
                </p>

              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center gap-4">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-12 h-12 rounded-full object-cover border border-amber-400 shadow-sm"
                />
                <div>
                  <h4 className="font-royal text-base font-bold text-slate-950">
                    {rev.name}
                  </h4>
                  <div className="text-xs text-amber-700 font-semibold">
                    {rev.event}
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
