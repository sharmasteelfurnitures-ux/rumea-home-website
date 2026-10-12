'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  MessageCircle 
} from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';

interface Slide {
  id: string;
  categoryTag: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  specPill: string;
  image: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  tabLabel: string;
}

const slides: Slide[] = [
  {
    id: 'shoe-storage',
    categoryTag: 'Space-Saving Entryway',
    titleLine1: 'Make room where',
    titleLine2: 'you enter.',
    subtitle: 'Wall-mounted shoe storage with an ultra-slim 5.9″ profile — clears floor clutter from narrow apartment corridors without obstructing walkways.',
    specPill: 'Slim 5.9″ Depth • Zero Floor Footprint',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=2400&q=85',
    primaryCtaText: 'Explore Shoe Storage',
    primaryCtaHref: '/products?category=shoe-rack',
    tabLabel: '01. Shoe Storage',
  },
  {
    id: 'folding-tables',
    categoryTag: 'Multipurpose Tables',
    titleLine1: 'Work by day,',
    titleLine2: 'dinner by night.',
    subtitle: 'High-density engineered wood tops with heavy-gauge folding mechanisms that support 40 kg daily, then collapse completely flat in seconds.',
    specPill: 'Folds Flat • 40 kg Load-Tested',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=2400&q=85',
    primaryCtaText: 'Explore Folding Tables',
    primaryCtaHref: '/products?category=folding-table',
    tabLabel: '02. Folding Tables',
  },
  {
    id: 'compact-seating',
    categoryTag: 'Everyday Seating & Living',
    titleLine1: 'Furniture built for',
    titleLine2: 'real routines.',
    subtitle: 'Sturdy metal folding chairs and space-saving coat stands designed to fit compact 2BHK & 3BHK living spaces with enduring craftsmanship.',
    specPill: 'No Carpenter Needed • 10-Min Setup',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=2400&q=85',
    primaryCtaText: 'Shop All Furniture',
    primaryCtaHref: '/products',
    tabLabel: '03. Seating & Stands',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const whatsappUrl = buildWhatsAppUrl(
    "Hi Rumea Home! I'd like help choosing the right practical furniture for my apartment space."
  );

  const goToSlide = useCallback((index: number, newDirection: number = 1) => {
    setDirection(newDirection);
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    if (distance > 45) {
      nextSlide();
    } else if (distance < -45) {
      prevSlide();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  // Auto-advance slides every 6.5s when not paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const slide = slides[currentSlide];

  return (
    <section 
      className="relative w-full bg-primary text-white overflow-hidden select-none font-sans"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      
      {/* 1. Main Hero Carousel Frame */}
      <div className="relative w-full min-h-[74vh] md:min-h-[660px] lg:min-h-[720px] flex flex-col justify-end px-6 sm:px-12 lg:px-20 pb-20 sm:pb-24 pt-16 overflow-hidden">
        
        {/* Background Images with Animated Fade & Slow Zoom */}
        <div className="absolute inset-0 z-0 bg-primary overflow-hidden pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={slide.image}
                alt={`${slide.categoryTag} by Rumea Home`}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
              {/* Warm Scrim Overlay (Espresso-tinted gradient preserves room warmth, protects text) */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/65 to-primary/35 md:bg-gradient-to-r md:from-primary/95 md:via-primary/60 md:to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Content with Directional Slide Transition */}
        <div className="relative z-10 max-w-2xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={slide.id}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -30 : 30 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              
              {/* Eyebrow: Slide Category Pill */}
              <div className="mb-5">
                <span className="inline-block px-3.5 py-1 rounded-full text-[10px] font-sans font-semibold uppercase tracking-[0.14em] bg-white/15 text-white backdrop-blur-md border border-white/20">
                  {slide.categoryTag}
                </span>
              </div>

              {/* Headline: Clean Architectural Bold Typography (Plus Jakarta Sans) */}
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.06] tracking-tight text-white mb-4 sm:mb-5">
                <span className="block">{slide.titleLine1}</span>
                <span className="block text-sand">{slide.titleLine2}</span>
              </h1>

              {/* Subheading */}
              <p className="text-sm sm:text-base text-white/85 font-sans leading-relaxed max-w-xl mb-6 sm:mb-7 font-normal">
                {slide.subtitle}
              </p>

              {/* Spec Pill */}
              <div className="mb-8">
                <span className="inline-flex items-center gap-2 text-xs font-sans text-white/80 bg-primary/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>{slide.specPill}</span>
                </span>
              </div>

              {/* Action Buttons: Ivory Pill + Brand Muted Olive WhatsApp */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                {/* Primary Button: Warm Ivory Pill Button with Espresso Text */}
                <Link
                  href={slide.primaryCtaHref}
                  className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-surface-page hover:bg-surface text-primary text-xs font-semibold uppercase tracking-[0.1em] rounded-full transition-all duration-200 shadow-md hover:-translate-y-0.5"
                >
                  <span>{slide.primaryCtaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>

                {/* Secondary Button: Brand Olive WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick({ source: 'homepage', product_name: slide.categoryTag })}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent-hover text-accent-text text-xs font-semibold uppercase tracking-[0.1em] rounded-full transition-all duration-200 shadow-xs hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4 text-accent-text" />
                  <span>WhatsApp Sizing Help</span>
                </a>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Arrow Controls (Desktop & Tablet) */}
        <div className="hidden sm:flex items-center gap-2 absolute right-12 bottom-24 z-20">
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-150 cursor-pointer hover:scale-105 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-150 cursor-pointer hover:scale-105 active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Interactive Bottom Slide Tabs with Auto-Progress Bars */}
        <div className="absolute bottom-5 inset-x-6 sm:inset-x-12 lg:inset-x-20 z-20 flex items-center justify-between gap-3 border-t border-white/15 pt-3">
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar w-full sm:w-auto">
            {slides.map((s, idx) => {
              const isActive = currentSlide === idx;
              return (
                <button
                  key={s.id}
                  onClick={() => goToSlide(idx, idx > currentSlide ? 1 : -1)}
                  className={`text-left group transition-all cursor-pointer whitespace-nowrap py-1 ${
                    isActive ? 'opacity-100' : 'opacity-50 hover:opacity-80'
                  }`}
                >
                  <span className="block text-[11px] sm:text-xs font-sans font-medium text-white tracking-wide">
                    {s.tabLabel}
                  </span>
                  {/* Subtle active underline progress bar */}
                  <div className="h-[2px] w-full bg-white/20 mt-1.5 rounded-full overflow-hidden">
                    {isActive && (
                      <motion.div
                        layoutId="activeSlideProgress"
                        className="h-full bg-sand"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 6.5, ease: 'linear' }}
                      />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-white/50 hidden md:inline-block">
            Sized for Indian Living
          </span>
        </div>

      </div>

    </section>
  );
}
