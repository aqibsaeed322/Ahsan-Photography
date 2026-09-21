import React, { useState } from 'react';
import { photographerInfo } from '../data/photographerInfo';
import { faqList } from '../data/galleryData';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Send, 
  ChevronDown, 
  ShieldCheck,
  Share2,
  Instagram
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection({ onOpenBooking }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Royal Wedding (Baraat & Walima)',
    city: 'Lahore',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });
    } catch (e) {}

    const text = `Assalam-o-Alaikum Ahsan!
New inquiry from website:
• Name: ${formState.name}
• Phone: ${formState.phone}
• Email: ${formState.email}
• Event: ${formState.eventType} (${formState.city})
• Message: ${formState.message}`;

    const url = `https://wa.me/${photographerInfo.contact.whatsapp}?text=${encodeURIComponent(text)}`;
    setTimeout(() => {
      window.open(url, '_blank');
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#FAF9F6] overflow-hidden border-t border-slate-200/80">
      
      {/* Background Jali Pattern */}
      <div className="absolute inset-0 jali-pattern opacity-25 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider shadow-sm">
            <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
            <span>Direct Inquiries & Bookings</span>
          </div>

          <div className="text-amber-800 text-xs sm:text-sm font-bold uppercase tracking-widest">
            Priority Reservations & Client Concierge
          </div>

          <h2 className="font-royal text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-wide">
            Get in Touch with <span className="gold-gradient-text">{photographerInfo.name}</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Ready to immortalize your royal wedding, soulful Qawwali night, or live concert? Contact Ahsan directly via WhatsApp, Phone, or our studio portal.
          </p>
        </div>


        {/* Contact Info Grid + Direct Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Left: Contact Channels & Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Priority Card */}
            <a
              href={`https://wa.me/${photographerInfo.contact.whatsapp}?text=Hi%20Ahsan!%20I%20would%20like%20to%20inquire%20about%20photography%20packages.`}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30 p-6 rounded-3xl border border-emerald-300 hover:border-emerald-500 transition-all duration-300 shadow-md group hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-7 h-7 fill-emerald-600/20" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    Fastest Response (Instant)
                  </div>
                  <div className="font-royal text-xl font-bold text-slate-950 group-hover:text-emerald-700 transition-colors">
                    Chat on WhatsApp
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5 font-medium">
                    {photographerInfo.contact.phoneDisplay}
                  </div>
                </div>
              </div>
            </a>

            {/* Direct Phone Call */}
            <a
              href={`tel:${photographerInfo.contact.phone}`}
              className="block bg-white p-6 rounded-3xl border border-slate-200 hover:border-amber-400 transition-all duration-300 shadow-md group hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
                    Direct Phone Line
                  </div>
                  <div className="font-royal text-xl font-bold text-slate-950 group-hover:text-amber-800 transition-colors">
                    {photographerInfo.contact.phoneDisplay}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    11:00 AM – 9:00 PM PKT
                  </div>
                </div>
              </div>
            </a>

            {/* Official Email */}
            <a
              href={`mailto:${photographerInfo.contact.email}`}
              className="block bg-white p-6 rounded-3xl border border-slate-200 hover:border-blue-400 transition-all duration-300 shadow-md group hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 border border-blue-300 flex items-center justify-center text-blue-700 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-700">
                    Official Studio Email
                  </div>
                  <div className="font-royal text-base sm:text-lg font-bold text-slate-950 group-hover:text-blue-700 transition-colors break-all">
                    {photographerInfo.contact.email}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Proposals & Media Inquiries
                  </div>
                </div>
              </div>
            </a>

            {/* Official Instagram */}
            <a
              href={photographerInfo.socialLinks?.find(s => s.name.toLowerCase() === 'instagram')?.url || 'https://www.instagram.com/ahsantsp?stkn=N2swZHE2OTQ3b3dq'}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white p-6 rounded-3xl border border-slate-200 hover:border-pink-400 transition-all duration-300 shadow-md group hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-100 via-rose-100 to-purple-100 border border-pink-300 flex items-center justify-center text-pink-600 group-hover:scale-110 transition-transform">
                  <Instagram className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-pink-600">
                    Official Instagram Feed
                  </div>
                  <div className="font-royal text-base sm:text-lg font-bold text-slate-950 group-hover:text-pink-600 transition-colors">
                    @ahsantsp
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Daily Stories, Reels & Recent Shoots
                  </div>
                </div>
              </div>
            </a>

            {/* Studio Address Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-1" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Studio & Gallery Suite
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                    {photographerInfo.contact.studioAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-slate-100 text-xs text-slate-500">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>{photographerInfo.contact.operatingHours}</span>
              </div>
            </div>

           

          </div>
          

          {/* Right: Direct Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl relative">
            
            <div className="mb-6 space-y-1">
              <h3 className="font-royal text-2xl font-bold text-slate-950">
                Send a Direct Inquiry Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Fill out your details below. We reply within 2-4 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Usman Tariq"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500 text-sm shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 300 1234567"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500 text-sm shadow-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500 text-sm shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Event City
                  </label>
                  <select
                    value={formState.city}
                    onChange={(e) => setFormState({ ...formState, city: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500 text-sm shadow-sm"
                  >
                    {photographerInfo.contact.serviceCities.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Event Category & Details
                </label>
                <select
                  value={formState.eventType}
                  onChange={(e) => setFormState({ ...formState, eventType: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500 text-sm mb-3 shadow-sm"
                >
                  <option value="Royal Wedding (Mehndi, Baraat, Walima)">3-Day Royal Wedding (Mehndi, Baraat, Walima)</option>
                  <option value="Baraat & Nikkah Coverage">Baraat & Nikkah Ceremony</option>
                  <option value="Mehndi / Mayun Night">Mehndi / Mayun Celebration</option>
                  <option value="Walima Reception">Walima Grand Reception</option>
                  <option value="Sufi Qawwali Night">Sufi Qawwali Gathering</option>
                  <option value="Mehfil-e-Naat Recitation">Mehfil-e-Naat Gathering</option>
                  <option value="Live Music Concert & Stage">Live Music Concert & Stage</option>
                  <option value="Heritage Fine-Art Couple Shoot">Heritage Fine-Art Couple Shoot</option>
                </select>

                <textarea
                  rows="4"
                  required
                  placeholder="Tell us about your event date, venue location, estimated guests, and special visual requirements..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500 text-sm shadow-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-sm bg-slate-900 hover:bg-slate-800 text-white border border-amber-400 shadow-xl shadow-slate-900/15 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4 text-amber-400" />
                Submit & Connect on WhatsApp
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Your contact details are strictly confidential and never shared.</span>
              </div>

            </form>

          </div>

        </div>

        {/* Frequently Asked Questions (FAQ) Accordion */}
        <div className="max-w-4xl mx-auto space-y-6">
          
          <div className="text-center space-y-2 mb-8">
            <h3 className="font-royal text-2xl sm:text-3xl font-extrabold text-slate-950">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Everything you need to know regarding Pakistani event coverage, albums, and timelines.
            </p>
          </div>

          <div className="space-y-3">
            {faqList.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all duration-200"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-amber-50/50 transition-colors"
                >
                  <span className="font-royal text-sm sm:text-base font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-600 shrink-0 transition-transform duration-300 ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openFaq === i && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}
