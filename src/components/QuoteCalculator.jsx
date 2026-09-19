import React, { useState } from 'react';
import { Calculator, Check, MessageCircle, MapPin } from 'lucide-react';
import { photographerInfo } from '../data/photographerInfo';
import { pricingPackages } from '../data/galleryData';

export default function QuoteCalculator() {
  const [selectedPkg, setSelectedPkg] = useState('pkg-royal');
  const [includeDrone, setIncludeDrone] = useState(true);
  const [includeHasselblad, setIncludeHasselblad] = useState(false);
  const [includeExtraAlbum, setIncludeExtraAlbum] = useState(true);
  const [city, setCity] = useState('Lahore');

  // Pricing formula
  const basePrices = {
    'pkg-gold': 185000,
    'pkg-royal': 360000,
    'pkg-imperial': 520000
  };

  const calculateTotal = () => {
    let total = basePrices[selectedPkg] || 360000;
    if (includeDrone && selectedPkg === 'pkg-gold') total += 35000;
    if (includeHasselblad) total += 50000;
    if (includeExtraAlbum) total += 30000;
    if (city !== 'Lahore' && city !== 'Islamabad / Rawalpindi') total += 45000; // Outstation travel & stay allowance
    return total;
  };

  const totalPKR = calculateTotal();
  const totalUSD = Math.round(totalPKR / 278);

  const handleInquireQuote = () => {
    const pkgName = pricingPackages.find(p => p.id === selectedPkg)?.name || 'Custom Package';
    const text = `Assalam-o-Alaikum Shahroz Khan Visuals!
I calculated an estimated quote for my event:
• Selected Package: ${pkgName}
• Event City: ${city}
• Drone 4K: ${includeDrone ? 'Yes' : 'No'}
• Medium Format Hasselblad: ${includeHasselblad ? 'Yes' : 'No'}
• Extra Velvet Albums: ${includeExtraAlbum ? 'Yes' : 'No'}
• Estimated Total: PKR ${totalPKR.toLocaleString()} (~$${totalUSD})
Please confirm availability and booking details.`;

    const url = `https://wa.me/${photographerInfo.contact.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-16 bg-white p-6 sm:p-10 rounded-3xl border border-amber-200 shadow-xl relative overflow-hidden">
      
      {/* Decorative background flare */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="text-center max-w-2xl mx-auto mb-10 space-y-2 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-100/80 text-amber-900 border border-amber-300 shadow-sm">
          <Calculator className="w-3.5 h-3.5 text-amber-700" />
          <span>Interactive Estimate Engine</span>
        </div>
        <h3 className="font-royal text-2xl sm:text-4xl font-extrabold text-slate-950">
          Instant Event <span className="gold-gradient-text">Package Calculator</span>
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm">
          Select your event parameters to receive a transparent price estimate.
        </p>
      </div>

      {/* Package Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {pricingPackages.map((pkg) => (
          <div
            key={pkg.id}
            onClick={() => setSelectedPkg(pkg.id)}
            className={`p-5 rounded-2xl border transition-all cursor-pointer relative flex flex-col justify-between ${
              selectedPkg === pkg.id
                ? 'bg-amber-50/70 border-2 border-amber-500 shadow-lg shadow-amber-500/10 scale-[1.02]'
                : 'bg-slate-50/60 border-slate-200 hover:border-amber-300'
            }`}
          >
            {pkg.popular && (
              <span className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-900 text-amber-300 border border-amber-400 shadow">
                Most Popular
              </span>
            )}

            <div>
              <h4 className="font-royal text-lg font-bold text-slate-950 mt-0.5">{pkg.name}</h4>
              <p className="text-xs text-slate-600 mt-1">{pkg.tagline}</p>
              
              <div className="my-3 font-royal text-xl font-extrabold text-amber-800">
                PKR {pkg.pricePKR} <span className="text-xs font-semibold text-slate-500">({pkg.priceUSD})</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-slate-700 mt-2 font-medium">
              <Check className="w-3.5 h-3.5 text-amber-600" />
              <span>Full color-graded gallery</span>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Options Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 mb-8">
        
        {/* City Selector */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            Event Destination / City
          </label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs font-medium focus:outline-none focus:border-amber-500 shadow-sm"
          >
            {photographerInfo.contact.serviceCities.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Add-ons Checkboxes */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Optional Bespoke Add-ons
          </label>

          <label className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer font-medium">
            <input
              type="checkbox"
              checked={includeDrone}
              onChange={(e) => setIncludeDrone(e.target.checked)}
              className="rounded accent-amber-600 w-4 h-4"
            />
            <span>4K Drone Cinema Aerials (+PKR 35,000)</span>
          </label>

          <label className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer font-medium">
            <input
              type="checkbox"
              checked={includeHasselblad}
              onChange={(e) => setIncludeHasselblad(e.target.checked)}
              className="rounded accent-amber-600 w-4 h-4"
            />
            <span>Hasselblad 100MP Bridal Session (+PKR 50,000)</span>
          </label>

          <label className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer font-medium">
            <input
              type="checkbox"
              checked={includeExtraAlbum}
              onChange={(e) => setIncludeExtraAlbum(e.target.checked)}
              className="rounded accent-amber-600 w-4 h-4"
            />
            <span>Handcrafted Royal Velvet Parent Album (+PKR 30,000)</span>
          </label>
        </div>

      </div>

      {/* Live Estimated Total & CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-slate-200">
        <div>
          <div className="text-xs text-slate-500 font-semibold">Estimated Total Investment:</div>
          <div className="font-royal text-3xl sm:text-4xl font-extrabold text-amber-800">
            PKR {totalPKR.toLocaleString()}{' '}
            <span className="text-sm font-semibold text-slate-500">(~${totalUSD} USD)</span>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={handleInquireQuote}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4" />
            Send This Quote to WhatsApp
          </button>
        </div>
      </div>

    </div>
  );
}
