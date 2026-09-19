import React, { useState, useEffect } from 'react';
import { X, Calendar, MapPin, Sparkles, MessageCircle, CheckCircle2, User, Phone } from 'lucide-react';
import { photographerInfo } from '../data/photographerInfo';
import confetti from 'canvas-confetti';

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Lahore',
    eventType: '3-Day Wedding (Mehndi, Baraat, Walima)',
    eventDate: '',
    venue: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow || 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmitWhatsApp = (e) => {
    e.preventDefault();
    
    // Confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#F59E0B', '#10B981', '#0F172A']
      });
    } catch (err) {}

    const message = `Assalam-o-Alaikum Ahsan Visuals!
I would like to check availability and book coverage:
• Name: ${formData.name}
• Phone: ${formData.phone}
• Email: ${formData.email || 'N/A'}
• Event Type: ${formData.eventType}
• Date: ${formData.eventDate || 'To be decided'}
• City & Venue: ${formData.city} (${formData.venue || 'Venue TBD'})
• Notes: ${formData.notes || 'Looking forward to your pricing packages.'}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${photographerInfo.contact.whatsapp}?text=${encodedMessage}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      onClose();
      setSubmitted(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div 
        className="relative max-w-xl w-full bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xl max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100/80 text-amber-900 border border-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>VIP Event Reservation</span>
          </div>
          <h3 className="font-royal text-2xl sm:text-3xl font-extrabold text-slate-950">
            Reserve Your Event Date
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm">
            Check date availability across Lahore, Islamabad, Karachi & Worldwide.
          </p>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4 animate-in zoom-in">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="font-royal text-xl font-bold text-slate-950">Opening WhatsApp Chat...</h4>
            <p className="text-slate-600 text-sm">
              Connecting directly with Ahsan's priority booking management.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmitWhatsApp} className="space-y-4">
            
            {/* Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-amber-600" />
                Full Name / Bride & Groom Names *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Ali Raza & Fatima Zahra"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500 text-sm shadow-sm"
              />
            </div>

            {/* Phone & City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  WhatsApp / Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+92 300 0000000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500 text-sm shadow-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  Event City *
                </label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500 text-sm shadow-sm"
                >
                  {photographerInfo.contact.serviceCities.map((city) => (
                    <option key={city} value={city} className="bg-white text-slate-900">
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Event Type & Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  Event Type *
                </label>
                <select
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500 text-sm shadow-sm"
                >
                  <option value="3-Day Wedding (Mehndi, Baraat, Walima)">3-Day Grand Wedding (Mehndi, Baraat, Walima)</option>
                  <option value="2-Day Wedding (Baraat + Walima)">2-Day Wedding (Baraat + Walima)</option>
                  <option value="Single Day Baraat / Nikkah">Single Day Baraat / Nikkah</option>
                  <option value="Mehndi / Mayun Night">Mehndi / Mayun Night</option>
                  <option value="Sufi Qawwali Night">Sufi Qawwali Night</option>
                  <option value="Mehfil-e-Naat Gathering">Mehfil-e-Naat Gathering</option>
                  <option value="Live Music Concert">Live Music Concert</option>
                  <option value="Heritage Couple Portrait Shoot">Heritage Couple Portrait Shoot</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-600" />
                  Tentative Date
                </label>
                <input
                  type="date"
                  value={formData.eventDate}
                  onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500 text-sm shadow-sm"
                />
              </div>
            </div>

            {/* Venue & Notes */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Venue Name / Special Requests
              </label>
              <input
                type="text"
                placeholder="e.g. Haveli Barood Khana / Serena Hotel / Marquee"
                value={formData.venue}
                onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500 text-sm mb-3 shadow-sm"
              />
              <textarea
                rows="2"
                placeholder="Any special details, drone requirements, or album preferences..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500 text-sm shadow-sm"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2 shadow-xl shadow-emerald-600/20 transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              Check Availability & Chat on WhatsApp
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
