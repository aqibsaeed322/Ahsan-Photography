import React, { useState, useEffect } from 'react';
import { 
  Camera, 
  Menu, 
  X, 
  VolumeX, 
  Volume2
} from 'lucide-react';

export default function Navbar({ isPlayingAudio, toggleAudio }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Concert & Qawwali', href: '#spiritual-concerts' },
    { name: 'Wedding Photography', href: '#weddings' },
    { name: 'Live Media', href: '#live-media' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About Him', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-nav py-3 shadow-md shadow-slate-900/5' 
          : 'bg-white/85 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Gold Emblem (Without PAK badge) */}
          <a href="#home" className="flex items-center gap-3.5 group focus:outline-none">
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-amber-800 p-[1px] shadow-md shadow-amber-500/15 group-hover:shadow-amber-500/35 transition-all duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Camera className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="font-royal text-lg sm:text-xl font-bold tracking-wider text-slate-950 group-hover:text-amber-700 transition-colors">
                AHSAN
              </span>
              <span className="text-[11px] uppercase tracking-wider text-amber-700 font-semibold">
                Luxury Event Photography
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs xl:text-sm font-semibold text-slate-700 hover:text-amber-800 rounded-full transition-all duration-200 hover:bg-amber-50 focus:outline-none"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action: Ambient Audio Toggle */}
          <div className="flex items-center gap-3">
            
            {/* Ambient Music Toggle */}
            <button
              onClick={toggleAudio}
              title={isPlayingAudio ? "Mute Traditional Sitar/Rubab Ambiance" : "Play Traditional Sitar/Rubab Ambiance"}
              className={`p-2 sm:px-3 sm:py-1.5 rounded-full border transition-all duration-300 flex items-center gap-1.5 text-xs font-semibold ${
                isPlayingAudio 
                  ? 'bg-amber-100 border-amber-400 text-amber-900 shadow-sm shadow-amber-500/20 animate-pulse' 
                  : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-amber-800 hover:border-amber-400/50 hover:bg-amber-50/50'
              }`}
            >
              {isPlayingAudio ? (
                <>
                  <Volume2 className="w-4 h-4 text-amber-700" />
                  <span className="hidden sm:inline pr-0.5">Sufi Audio</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-slate-500" />
                  <span className="hidden sm:inline pr-0.5">Audio</span>
                </>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 hover:text-amber-700 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-slate-200 mt-3 px-6 py-5 space-y-3 shadow-2xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-slate-800 hover:text-amber-800 hover:bg-amber-50 font-semibold transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
