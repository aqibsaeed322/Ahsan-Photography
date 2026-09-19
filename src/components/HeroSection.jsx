import React, { useState, useEffect } from 'react';
import { photographerInfo } from '../data/photographerInfo';
import { Sparkles, Calendar, ChevronRight } from 'lucide-react';

export default function HeroSection({ onOpenBooking, heroItems = [] }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      image: "/assets/images/wedding_baraat.jpg",
      badge: "Royal Pakistani Wedding",
      title: "The Grandeur of Shahi Baraat",
      subtitle: "Timeless Bridal Elegance & Heritage Traditions",
      location: "Haveli Barood Khana, Lahore",
      category: "Baraat Couture"
    },
    {
      image: "/assets/images/qawwali_mehfil.jpg",
      badge: "Spiritual Sufi Gathering",
      title: "Ecstasy of Mehfil-e-Samaa",
      subtitle: "Mystical Harmonium Beats & Devotional Music",
      location: "Historic Walled City Courtyard",
      category: "Sufi Qawwali"
    },
    {
      image: "/assets/images/mehndi_event.jpg",
      badge: "Vibrant Celebration",
      title: "Jashn-e-Mehndi & Dholak Beats",
      subtitle: "Festive Colors, Henna Night & Joyous Moments",
      location: "Royal Palm Lawns, Lahore",
      category: "Mehndi Night"
    },
    {
      image: "/assets/images/live_concert.jpg",
      badge: "Live Arena Stage",
      title: "Electrifying Concert Energy",
      subtitle: "Stadium Rock, Strobe Lasers & Passionate Crowd",
      location: "Stadium Arena, Pakistan",
      category: "Live Concert"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden mughal-arch-bg bg-white">
      
      {/* Background Slideshow with Crossfade & Clean Light Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.02]"
            />
          </div>
        ))}

        {/* Crisp Light Gradient Overlays for High Legibility & Seamless White Blending */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        <div className="absolute inset-0 jali-pattern opacity-50"></div>
      </div>

      {/* Hero Core Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Royal Tag Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold tracking-wider uppercase shadow-sm animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-amber-600 animate-ping"></span>
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>{heroSlides[activeSlide].badge}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <div className="text-amber-800 text-xs sm:text-sm font-bold uppercase tracking-widest">
                {photographerInfo.subTagline}
              </div>
              <h1 className="font-royal text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 leading-[1.1]">
                Capturing <span className="gold-gradient-text">Timeless Moments</span> & Cultural Grandeur
              </h1>
            </div>

            {/* Description */}
            <p className="text-slate-700 text-sm sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Official portfolio of <strong className="text-slate-950 font-bold">{photographerInfo.name}</strong> — Master Pakistani photographer documenting Royal Weddings, Soulful Qawwali Mehfils, Naat Gatherings, and Live Media Coverage across Pakistan & Worldwide.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm sm:text-base text-white bg-slate-900 hover:bg-slate-800 border border-amber-500/40 shadow-xl shadow-slate-900/15 hover:shadow-slate-900/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <Calendar className="w-5 h-5 text-amber-400" />
                <span>Reserve Your Event Date</span>
              </button>

              <a
                href="#portfolio"
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm sm:text-base text-slate-800 bg-white/95 hover:bg-white border border-slate-300 hover:border-amber-400 transition-all shadow-md shadow-slate-900/5 flex items-center justify-center gap-2 group"
              >
                <span>View Master Portfolio</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-amber-700" />
              </a>

            </div>

            {/* Live Stats Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200/90 max-w-3xl mx-auto lg:mx-0">
              {photographerInfo.stats.map((stat, i) => (
                <div key={i} className="bg-white/90 backdrop-blur-md p-3.5 rounded-2xl text-center border border-amber-200/70 shadow-sm hover:shadow-md transition-all">
                  <div className="font-royal text-2xl sm:text-3xl font-extrabold text-amber-800">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-900 font-bold mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-amber-700 mt-0.5 font-semibold">
                    {stat.subtitle}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Featured Slide Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative bg-white/95 backdrop-blur-md p-4 rounded-3xl border border-amber-200/80 shadow-2xl shadow-slate-900/10 space-y-4">
              
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-slate-200 shadow-inner group">
                <img
                  src={heroSlides[activeSlide].image}
                  alt={heroSlides[activeSlide].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-5">
                  <span className="text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
                    {heroSlides[activeSlide].subtitle}
                  </span>
                  <h4 className="font-royal text-lg font-bold text-white">{heroSlides[activeSlide].title}</h4>
                  <p className="text-slate-200 text-xs mt-1 font-medium">{heroSlides[activeSlide].location}</p>
                </div>
              </div>

              {/* Slide Dots Controls */}
              <div className="flex items-center justify-between px-2 pt-1">
                <div className="flex items-center gap-2">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === activeSlide ? 'w-8 bg-amber-600 shadow-md shadow-amber-600/30' : 'w-2 bg-slate-300 hover:bg-slate-400'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="text-xs text-slate-700 font-mono font-bold">
                  0{activeSlide + 1} / 0{heroSlides.length}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
