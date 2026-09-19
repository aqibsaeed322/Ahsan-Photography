import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ConcertQawwaliSection from './components/ConcertQawwaliSection';
import WeddingSection from './components/WeddingSection';
import PortfolioGallery from './components/PortfolioGallery';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';
import BookingModal from './components/BookingModal';
import AudioPlayer from './components/AudioPlayer';
import { galleryItems } from './data/galleryData';

export default function App() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Lightbox Navigation helpers
  const handleSelectPhoto = (item) => {
    setSelectedPhoto(item);
  };

  
  const handleCloseLightbox = () => {
    setSelectedPhoto(null);
  };

  const handlePrevPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = galleryItems.findIndex((item) => item.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedPhoto(galleryItems[prevIndex]);
  };

  const handleNextPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = galleryItems.findIndex((item) => item.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setSelectedPhoto(galleryItems[nextIndex]);
  };

  const toggleAudio = () => {
    setIsPlayingAudio((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-amber-500/20 selection:text-amber-900">
      
      {/* Background Synthesized Ambient Sitar / Rubab / Tanpura Player */}
      <AudioPlayer isPlaying={isPlayingAudio} />

      {/* Navigation Header */}
      <Navbar 
        onOpenBooking={() => setIsBookingOpen(true)}
        isPlayingAudio={isPlayingAudio}
        toggleAudio={toggleAudio}
      />

      {/* Main Page Sections */}
      <main>
        {/* 1. Home / Hero */}
        <HeroSection 
          onOpenBooking={() => setIsBookingOpen(true)}
          onOpenLightbox={handleSelectPhoto}
          heroItems={galleryItems.slice(0, 4)}
        />

        {/* 2. Concert, Naat & Qawwali Photography */}
        <ConcertQawwaliSection 
          onSelectPhoto={handleSelectPhoto}
        />

        {/* 3. Wedding Photography (Mehndi, Baraat, Walima, Portraits) */}
        <WeddingSection 
          onSelectPhoto={handleSelectPhoto}
          onOpenBooking={() => setIsBookingOpen(true)}
        />


        {/* 5. Master Portfolio / His Work */}
        <PortfolioGallery 
          onSelectPhoto={handleSelectPhoto}
        />

        {/* 6. About the Photographer */}
        <AboutSection 
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Client Praise & Testimonials */}
        <TestimonialsSection />

        {/* 7. Contact Details, Calculator & FAQs */}
        <ContactSection 
          onOpenBooking={() => setIsBookingOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Modals */}
      {selectedPhoto && (
        <LightboxModal
          item={selectedPhoto}
          onClose={handleCloseLightbox}
          onPrev={handlePrevPhoto}
          onNext={handleNextPhoto}
        />
      )}

      {isBookingOpen && (
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
        />
      )}

    </div>
  );
}
