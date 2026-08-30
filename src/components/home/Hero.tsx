'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Award, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Tag, 
  Check, 
  Sofa, 
  Bed, 
  UtensilsCrossed, 
  Laptop, 
  Package 
} from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      tag: 'BESTSELLER LIVING SUITE',
      discount: 'UP TO 20% OFF',
      headline: 'Furniture that fits the way Indians actually live.',
      subtitle: '100% Solid Kiln-Dried Sheesham. Zero MDF. Handcrafted for modern 2BHK & 3BHK living.',
      primaryCta: 'Explore Living Room',
      primaryHref: '/rooms/living-room',
      productName: 'Oslo 3-Seater Sofa in Natural Teak',
      productPrice: '₹38,999',
      productMrp: '₹45,999',
      productSlug: 'sofa-oslo-3seater',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1920&q=85',
    },
    {
      id: 2,
      tag: 'SOLID TIMBER BEDROOM',
      discount: 'FREE DELIVERY & ASSEMBLY',
      headline: 'Rock-solid platform beds. Zero squeaks, for generations.',
      subtitle: 'Seasoned hardwood with mortise & tenon interlocking joinery. Built to endure Indian monsoons.',
      primaryCta: 'Explore Bedroom',
      primaryHref: '/rooms/bedroom',
      productName: 'Kyoto King Size Platform Bed',
      productPrice: '₹42,999',
      productMrp: '₹49,999',
      productSlug: 'bed-kyoto-king',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1920&q=85',
    },
    {
      id: 3,
      tag: 'FAMILY DINING ROOM',
      discount: 'HONEST WORKSHOP PRICING',
      headline: 'Where Indian family dinners and stories happen.',
      subtitle: 'Heavy 6-seater solid wood tables with food-safe, non-toxic spill-resistant satin finishes.',
      primaryCta: 'Explore Dining',
      primaryHref: '/rooms/dining-room',
      productName: 'Artisan 6-Seater Solid Dining Set',
      productPrice: '₹48,999',
      productMrp: '₹55,999',
      productSlug: 'dining-table-artisan-6s',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1920&q=85',
    },
  ];

  // Auto slide change every 6.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const slide = heroSlides[currentSlide];

  const quickCategories = [
    { name: 'Living Room', icon: Sofa, href: '/rooms/living-room' },
    { name: 'Beds & Bedroom', icon: Bed, href: '/rooms/bedroom' },
    { name: 'Dining Sets', icon: UtensilsCrossed, href: '/rooms/dining-room' },
    { name: 'Study & Work', icon: Laptop, href: '/rooms/study-room' },
    { name: 'Storage Units', icon: Package, href: '/products?category=storage' },
  ];

  return (
    <div className="relative bg-warm-offwhite">
      
      {/* 1. Full-Width Immersive Showroom Banner with Rich Sheesham Wood Brown (#3D2212) Atmosphere */}
      <section className="relative w-full min-h-[540px] sm:min-h-[600px] lg:min-h-[660px] flex items-center overflow-hidden bg-[#2C180D]">
        
        {/* Background Image Carousel with Smooth Cross-Fade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={slide.image}
              alt={slide.headline}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center brightness-[0.80] contrast-[1.05]"
            />

            {/* 🪵 Signature Sheesham Wood Brown (#3D2212) Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#3D2212]/95 via-[#3D2212]/75 to-[#3D2212]/20 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#25130A]/95 via-[#3D2212]/30 to-transparent z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(215,161,72,0.12),transparent_70%)] z-10" />
          </motion.div>
        </AnimatePresence>

        {/* Content Container (Max Width 1280px) */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (8 Cols): Editorial Headlines & Promotional Badges */}
            <div className="lg:col-span-8 space-y-5 sm:space-y-6">
              
              {/* Badge & Promo Pill */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-terracotta text-white text-[11px] font-bold uppercase tracking-wider rounded-btn shadow-md">
                  <Tag className="w-3.5 h-3.5" /> {slide.discount}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/15 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider rounded-btn border border-white/20">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" /> {slide.tag}
                </span>
              </div>

              {/* Dynamic H1 Headline */}
              <AnimatePresence mode="wait">
                <motion.h1
                  key={slide.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12] max-w-2xl drop-shadow-sm"
                >
                  {slide.headline}
                </motion.h1>
              </AnimatePresence>

              {/* Subtitle */}
              <p className="font-sans text-sm sm:text-base lg:text-lg text-warm-offwhite/90 max-w-xl leading-relaxed drop-shadow-xs">
                {slide.subtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Link
                  href={slide.primaryHref}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-terracotta hover:bg-[#b54a34] text-white font-sans font-bold text-sm sm:text-base rounded-btn shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
                >
                  <span>{slide.primaryCta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>

                <a
                  href={buildWhatsAppUrl("Hi Rumea Home! I saw your website showcase and would like room sizing guidance.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick({ source: 'homepage' })}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-sans font-semibold text-sm rounded-btn transition-all duration-200 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* 4 Guarantees Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/15 text-xs text-warm-offwhite/90 font-medium">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>5-Year Frame Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Free Delivery on ₹15,000+</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>30-Day Doorstep Returns</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Zero MDF / Veneer</span>
                </div>
              </div>

            </div>

            {/* Right Card (4 Cols): Interactive Shoppable Product Card */}
            <div className="hidden lg:flex lg:col-span-4 justify-end">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, x: 20, scale: 0.96 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -20, scale: 0.96 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-sm bg-white/95 backdrop-blur-md rounded-card p-5 border border-white/40 shadow-2xl space-y-3.5"
                >
                  <div className="flex items-center justify-between text-[11px] font-bold">
                    <span className="text-terracotta uppercase tracking-wider flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Featured Piece
                    </span>
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-btn text-[10px]">
                      In Stock
                    </span>
                  </div>

                  <div className="relative aspect-[4/3] rounded-btn overflow-hidden bg-warm-alabaster border border-border-sand">
                    <Image
                      src={slide.image}
                      alt={slide.productName}
                      fill
                      sizes="350px"
                      className="object-cover object-center"
                    />
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-sm text-[#3D2212] leading-snug">
                      {slide.productName}
                    </h3>
                    <div className="flex items-baseline gap-2 mt-1.5">
                      <span className="font-serif font-bold text-lg text-charcoal">{slide.productPrice}</span>
                      <span className="text-xs text-mid-gray line-through">{slide.productMrp}</span>
                      <span className="text-[11px] font-bold text-terracotta">Direct Workshop Price</span>
                    </div>
                  </div>

                  <Link
                    href={`/products/${slide.productSlug}`}
                    className="w-full py-2.5 bg-[#3D2212] hover:bg-[#2A160A] text-white font-bold text-xs rounded-btn flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <span>View Product Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

        {/* Carousel Controls (Arrows & Indicators) */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-[#3D2212]/60 hover:bg-[#3D2212]/90 text-white backdrop-blur-md transition-all duration-200 border border-white/20 shadow-md"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-[#3D2212]/60 hover:bg-[#3D2212]/90 text-white backdrop-blur-md transition-all duration-200 border border-white/20 shadow-md"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slide Indicator Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 bg-[#3D2212]/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
          {heroSlides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === idx ? 'w-7 bg-terracotta' : 'w-2 bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </section>

      {/* 2. Quick Category Discovery Bar (Wooden Street / Pepperfry Style) */}
      <div className="bg-white border-b border-border-sand py-4 shadow-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 overflow-x-auto no-scrollbar py-1">
            {quickCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.name}
                  href={cat.href}
                  className="flex items-center gap-2.5 px-4 py-2.5 bg-warm-offwhite hover:bg-warm-alabaster border border-border-sand rounded-card text-xs font-bold text-[#3D2212] whitespace-nowrap transition-all duration-200 hover:border-[#3D2212]/40 shadow-xs flex-shrink-0 group"
                >
                  <div className="w-7 h-7 rounded-btn bg-[#3D2212] text-white flex items-center justify-center group-hover:bg-terracotta transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span>{cat.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. Reassurance Trust Strip */}
      <div className="bg-[#3D2212] text-white py-3.5 px-4 border-b border-[#52321D]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-around gap-4 text-xs sm:text-sm font-sans font-medium text-warm-offwhite">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-antique-gold flex-shrink-0" />
            <span>5-Year Structural Frame Warranty</span>
          </div>
          <span className="hidden sm:inline text-white/30">•</span>
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-antique-gold flex-shrink-0" />
            <span>Free Pan-India Delivery on ₹15,000+</span>
          </div>
          <span className="hidden sm:inline text-white/30">•</span>
          <div className="flex items-center gap-2">
            <RotateCcw className="w-4 h-4 text-antique-gold flex-shrink-0" />
            <span>30-Day Doorstep Returns</span>
          </div>
          <span className="hidden sm:inline text-white/30">•</span>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-antique-gold flex-shrink-0" />
            <span>Made in India Artisanship</span>
          </div>
        </div>
      </div>

    </div>
  );
}
