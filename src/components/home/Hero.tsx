import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Camera } from 'lucide-react';
import { useSitePreferences } from '../../context/SitePreferences';

export function Hero() {
  const { t } = useSitePreferences();
  const slides = [
    { image: '/images/maine-coon.jpg', alt: 'Maine Coon' },
    { image: '/images/bengal.jpg', alt: 'Bengal' },
    { image: '/images/ragdoll.jpg', alt: 'Ragdoll' },
  ];
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveSlide(current => (current + 1) % slides.length), 6000);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-forest">
      <AnimatePresence mode="wait">
        <motion.img
          key={slides[activeSlide].image}
          src={slides[activeSlide].image}
          alt={slides[activeSlide].alt}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 0.48, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-forest/80 via-forest/40 to-transparent" />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl text-cream leading-tight mb-6">
          {t('heroTitle')}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-cream/90 mb-10 max-w-2xl mx-auto">
          {t('heroDescription')}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4">
          <Link to="/races" className="bg-gold text-ink px-8 py-4 rounded-full font-semibold hover:bg-gold-soft transition flex items-center gap-2">
            {t('explore')} <ArrowRight size={18} />
          </Link>
          <Link to="/galerie" className="border border-cream/50 text-cream px-8 py-4 rounded-full font-semibold hover:bg-cream/10 transition flex items-center gap-2">
            <Camera size={18} /> {t('viewGallery')}
          </Link>
        </motion.div>
      </div>
      <div className="absolute z-10 bottom-7 inset-x-0 flex items-center justify-center gap-4">
        <button aria-label="Previous slide" className="carousel-control" onClick={() => setActiveSlide(current => (current + slides.length - 1) % slides.length)}>
          <ArrowLeft size={18} />
        </button>
        <div className="flex gap-2" role="tablist" aria-label="Carousel slides">
          {slides.map((slide, index) => (
            <button key={slide.image} role="tab" aria-label={`Slide ${index + 1}`} aria-selected={activeSlide === index} onClick={() => setActiveSlide(index)} className={`carousel-dot ${activeSlide === index ? 'carousel-dot-active' : ''}`} />
          ))}
        </div>
        <button aria-label="Next slide" className="carousel-control" onClick={() => setActiveSlide(current => (current + 1) % slides.length)}>
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}