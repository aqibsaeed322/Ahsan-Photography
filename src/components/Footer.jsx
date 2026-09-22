import React from 'react';
import { photographerInfo } from '../data/photographerInfo';
import { Camera, Phone, Mail, MessageCircle, MapPin, Heart, ArrowUp, Instagram } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const instagramLink = photographerInfo.socialLinks?.find(s => s.name.toLowerCase() === 'instagram')?.url || 'https://www.instagram.com/ahsantsp?stkn=N2swZHE2OTQ3b3dq';

  return (
    <footer className="bg-[#05070B] border-t border-amber-500/15 pt-16 pb-12 relative overflow-hidden text-slate-400 text-xs sm:text-sm">
      
      {/* Jali Pattern Overlay */}
      <div className="absolute inset-0 jali-pattern opacity-10 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Introduction */}
          <div className="lg:col-span-4 space-y-4">
            
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-white p-0.5 border border-amber-500/40 shadow-lg shadow-amber-500/10 flex items-center justify-center overflow-hidden">
                <img 
                  src="/assets/images/logo.jpeg" 
                  alt="Ahsan Photography Logo" 
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>
              <div>
                <span className="font-royal text-lg font-bold tracking-wider text-slate-100 block">
                  {photographerInfo.name}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold">
                  {photographerInfo.subBrand}
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Preserving the heritage, emotions, and grandeur of Pakistani weddings, Sufi Qawwali mehfils, and live events with cinematic excellence.
            </p>

            {/* Instagram Follow Badge */}
            <div className="pt-1">
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-amber-500/10 border border-pink-500/30 hover:border-pink-400 text-slate-200 hover:text-white transition-all duration-300 group shadow-sm hover:shadow-pink-500/20"
              >
                <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white text-xs shadow-sm group-hover:scale-110 transition-transform">
                  <Instagram className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-pink-400">Follow on Instagram</span>
                  <span className="text-xs font-semibold text-slate-200 group-hover:text-amber-300">@ahsantsp</span>
                </div>
              </a>
            </div>

            <div className="pt-2">
              <div className="text-[11px] uppercase tracking-wider text-amber-400/90 font-bold mb-1">
                Major City Coverage
              </div>
              <p className="text-slate-400 text-xs">
                Lahore • Islamabad • Karachi • Peshawar • Multan • Faisalabad • Dubai • Worldwide Destination
              </p>
            </div>

          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-royal text-sm font-bold text-slate-200 tracking-wider uppercase text-amber-400">
              Portfolio Categories
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#weddings" className="hover:text-amber-300 transition-colors">
                  Pakistani Wedding Photography (Baraat & Mehndi)
                </a>
              </li>
              <li>
                <a href="#spiritual-concerts" className="hover:text-amber-300 transition-colors">
                  Sufi Qawwali Nights & Mehfil-e-Samaa
                </a>
              </li>
              <li>
                <a href="#spiritual-concerts" className="hover:text-amber-300 transition-colors">
                  Mehfil-e-Naat Recitations
                </a>
              </li>
              <li>
                <a href="#spiritual-concerts" className="hover:text-amber-300 transition-colors">
                  Live Music Arena Concerts
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-300 transition-colors">
                  About Ahsan & Gear Vault
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-royal text-sm font-bold text-slate-200 tracking-wider uppercase text-amber-400">
              Direct Contact
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`tel:${photographerInfo.contact.phone}`} className="hover:text-amber-300">
                  {photographerInfo.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`https://wa.me/${photographerInfo.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300">
                  WhatsApp: {photographerInfo.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`mailto:${photographerInfo.contact.email}`} className="hover:text-blue-300 truncate">
                  {photographerInfo.contact.email}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                <a 
                  href="https://www.instagram.com/ahsantsp?stkn=N2swZHE2OTQ3b3dq" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-pink-300 transition-colors"
                >
                  Instagram: @ahsantsp
                </a>
              </div>

              <div className="flex items-start gap-2 pt-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Gulberg III, Main Boulevard, Lahore, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Booking CTA & Scroll Top */}
          <div className="lg:col-span-2 flex flex-col justify-between space-y-4">
            <div>
              <h4 className="font-royal text-sm font-bold text-slate-200 tracking-wider uppercase text-amber-400 mb-2">
                Book Coverage
              </h4>
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-4 rounded-xl font-bold text-xs bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-md shadow-amber-500/20 transition-all"
              >
                Check Date
              </button>
            </div>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 text-slate-300 hover:text-amber-300 transition-all flex items-center justify-center gap-2 text-xs"
            >
              <ArrowUp className="w-4 h-4 text-amber-400" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Pakistani Heritage Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-200">{photographerInfo.brandName}</strong>. All rights reserved.
          </div>

          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Crafted with pride for</span>
            <span className="text-amber-300 font-semibold">Pakistani Event Art & Heritage</span>
            <span className="text-emerald-400">🇵🇰</span>
          </div>
        </div>

      </div>

    </footer>
  );
}
