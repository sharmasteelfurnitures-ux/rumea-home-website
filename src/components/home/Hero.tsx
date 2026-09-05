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
      tag: 'LIVING ROOM SUITE',
      discount: '100% SOLID SHEESHAM',
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
      tag: 'BEDROOM SUITE',
      discount: 'MORTISE & TENON JOINERY',
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
      discount: 'DIRECT WORKSHOP PRICING',
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
              className="object-cover object-center brightness-[0.90] contrast-[1.02]"
            />

            {/* 🪵 Soft Faded Logo Brown (#3D2212) Atmosphere Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#3D2212]/75 via-[#3D2212]/45 to-[#3D2212]/10 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3D2212]/65 via-transparent to-black/10 z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(200,169,122,0.18),transparent_65%)] z-10" />
          </motion.div>
        </AnimatePresence>

        {/* Content Container (Max Width 1280px) */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (8 Cols): Editorial Headlines & Promotional Badges */}
            <div className="lg:col-span-8 space-y-5 sm:space-y-6">
              
              {/* Badge & Promo Pill */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#2C2926] text-[#D8C9B5] text-[11px] font-medium uppercase tracking-wider rounded-btn border border-[#D8C9B5]/30">
                  <Tag className="w-3.5 h-3.5 text-[#D8C9B5]" /> {slide.discount}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#2C2926]/75 backdrop-blur-md text-[#F7F4EE] text-[11px] font-medium uppercase tracking-wider rounded-btn border border-white/10">
                  <Sparkles className="w-3.5 h-3.5 text-[#A69B8C]" /> {slide.tag}
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
              <p className="font-sans text-sm sm:text-base lg:text-lg text-[#F7F4EE]/90 max-w-xl leading-relaxed drop-shadow-xs">
                {slide.subtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col min-[480px]:flex-row items-stretch min-[480px]:items-center gap-3.5 pt-2">
                <Link
                  href={slide.primaryHref}
                  className="inline-flex items-center justify-center gap-2.5 min-h-[48px] px-4 min-[480px]:px-8 py-3.5 bg-[#2C2926] hover:bg-[#3D3632] text-[#F7F4EE] font-sans font-medium text-sm sm:text-base rounded-btn shadow-md hover:scale-[1.01] active:scale-[0.98] transition-all duration-200 group text-center"
                >
                  <span className="min-[480px]:hidden">Explore Now</span>
                  <span className="hidden min-[480px]:inline">{slide.primaryCta}</span>
                  <ArrowRight className="w-4 h-4 text-[#F7F4EE] group-hover:translate-x-1.5 transition-transform" />
                </Link>

                <a
                  href={buildWhatsAppUrl("Hi Rumea Home! I saw your website showcase and would like room sizing guidance.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick({ source: 'homepage' })}
                  className="hidden min-[480px]:inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3.5 bg-transparent hover:bg-[#F7F4EE]/15 text-[#F7F4EE] border-[1.5px] border-[#F7F4EE] font-sans font-medium text-sm rounded-btn transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4 text-[#F7F4EE]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* 4 Guarantees Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/15 text-xs text-[#F7F4EE]/90 font-medium">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#D8C9B5] flex-shrink-0" />
                  <span>5-Year Frame Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#D8C9B5] flex-shrink-0" />
                  <span>Free PAN India Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#D8C9B5] flex-shrink-0" />
                  <span>30-Day Doorstep Returns</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#D8C9B5] flex-shrink-0" />
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
                  className="w-full max-w-sm bg-white rounded-xl p-5 border border-[#D8C9B5] shadow-2xl space-y-3.5"
                >
                  <div className="flex items-center justify-between text-[11px] font-medium">
                    <span className="text-[#48563A] uppercase tracking-wider flex items-center gap-1 font-semibold">
                      <Sparkles className="w-3 h-3 text-[#48563A]" /> Featured Piece
                    </span>
                    <span className="px-2 py-0.5 bg-[#48563A]/12 text-[#48563A] border border-[#48563A] rounded-btn text-[10px] font-medium">
                      In Stock
                    </span>
                  </div>

                  <div className="relative aspect-[4/3] rounded-btn overflow-hidden bg-[#F7F4EE] border border-[#D8C9B5]">
                    <Image
                      src={slide.image}
                      alt={slide.productName}
                      fill
                      sizes="350px"
                      className="object-cover object-center"
                    />
                  </div>

                  <div>
                    <h3 className="font-serif font-medium text-sm text-[#2C2926] leading-snug">
                      {slide.productName}
                    </h3>
                    <div className="flex items-baseline gap-2 mt-1.5">
                      <span className="font-serif font-semibold text-lg text-[#2C2926]">{slide.productPrice}</span>
                      <span className="text-xs text-[#A69B8C] line-through">{slide.productMrp}</span>
                      <span className="text-[11px] font-medium text-[#48563A]">Direct Workshop Price</span>
                    </div>
                  </div>

                  <Link
                    href={`/products/${slide.productSlug}`}
                    className="w-full py-2.5 bg-[#2C2926] hover:bg-[#3D3632] text-[#F7F4EE] font-medium text-xs rounded-btn flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                  >
                    <span>View Product Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F7F4EE]" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

        {/* Carousel Controls */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-[#2C2926]/70 hover:bg-[#2C2926] text-white backdrop-blur-md transition-all duration-200 border border-white/20 shadow-md"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-[#2C2926]/70 hover:bg-[#2C2926] text-white backdrop-blur-md transition-all duration-200 border border-white/20 shadow-md"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slide Indicator Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 bg-[#2C2926]/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
          {heroSlides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === idx ? 'w-7 bg-[#D8C9B5]' : 'w-2 bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </section>

      {/* 2. Quick Category Discovery Bar */}
      <div className="bg-white border-b border-[#D8C9B5] py-4 shadow-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 overflow-x-auto no-scrollbar py-1">
            {quickCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.name}
                  href={cat.href}
                  className="flex items-center gap-2.5 px-4 py-2.5 bg-[#F7F4EE] hover:bg-white border border-[#D8C9B5] rounded-card text-xs font-medium text-[#2C2926] whitespace-nowrap transition-all duration-200 hover:border-[#2C2926] shadow-xs flex-shrink-0 group"
                >
                  <div className="w-7 h-7 rounded-btn bg-[#2C2926] text-[#F7F4EE] flex items-center justify-center group-hover:bg-[#48563A] transition-colors">
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
      <div className="bg-[#2C2926] text-[#F7F4EE] py-3.5 px-4 border-b border-[#2C2926]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-around gap-4 text-xs sm:text-sm font-sans font-medium text-[#F7F4EE]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D8C9B5] flex-shrink-0" />
            <span>5-Year Structural Frame Warranty</span>
          </div>
          <span className="hidden sm:inline text-[#A69B8C]">•</span>
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-[#D8C9B5] flex-shrink-0" />
            <span>Free PAN India Delivery on All Orders</span>
          </div>
          <span className="hidden sm:inline text-[#A69B8C]">•</span>
          <div className="flex items-center gap-2">
            <RotateCcw className="w-4 h-4 text-[#D8C9B5] flex-shrink-0" />
            <span>30-Day Doorstep Returns</span>
          </div>
          <span className="hidden sm:inline text-[#A69B8C]">•</span>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#D8C9B5] flex-shrink-0" />
            <span>Made in India Artisanship</span>
          </div>
        </div>
      </div>

    </div>
  );
}
