'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageCircle, ShieldCheck, Truck, RotateCcw, Award, Check } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';

export default function Hero() {
  const whatsappUrl = buildWhatsAppUrl(
    "Hi Rumea Home! I'm interested in exploring solid Sheesham furniture for my home."
  );

  return (
    <>
      <section className="relative bg-warm-offwhite overflow-hidden border-b border-border-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column (7 cols): Editorial Typography & Core Promises */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 z-10">
              
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 self-start px-3 py-1 bg-warm-alabaster border border-border-sand rounded-btn">
                <span className="w-2 h-2 rounded-full bg-terracotta" />
                <span className="text-[11px] font-sans font-bold tracking-wider uppercase text-charcoal">
                  100% Solid Sheesham Hardwood
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] text-charcoal tracking-tight leading-[1.12]">
                Solid Sheesham Furniture for Modern Indian Homes
              </h1>

              {/* Subtitle */}
              <p className="font-sans text-base sm:text-lg text-mid-gray max-w-xl leading-relaxed">
                Kiln-dried hardwood, honest workshop pricing, and zero MDF shortcuts. Handcrafted with generational joinery and delivered across India.
              </p>

              {/* Primary & WhatsApp CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-terracotta text-white font-sans font-bold text-sm sm:text-base rounded-btn shadow-warm hover:bg-[#b54a34] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 group"
                >
                  <span>Shop Bestsellers</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick({ source: 'homepage' })}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-charcoal border border-border-sand hover:border-charcoal/40 font-sans font-semibold text-sm rounded-btn hover:bg-warm-alabaster transition-all duration-200 shadow-subtle"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* 4 Icon Bullets Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 border-t border-border-sand/60">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-emerald-700" />
                  </div>
                  <span className="text-xs font-semibold text-charcoal">5-Yr Warranty</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-emerald-700" />
                  </div>
                  <span className="text-xs font-semibold text-charcoal">Free Delivery</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-emerald-700" />
                  </div>
                  <span className="text-xs font-semibold text-charcoal">30-Day Returns</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-emerald-700" />
                  </div>
                  <span className="text-xs font-semibold text-charcoal">Zero MDF / Veneer</span>
                </div>
              </div>

            </div>

            {/* Right Column (5 cols): Large Lifestyle Image Viewport */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-card overflow-hidden shadow-elevated border border-border-sand bg-warm-alabaster">
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85"
                  alt="Rumea Home Solid Sheesham Living Room Setting"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 text-[11px] text-white font-medium bg-charcoal/80 px-2.5 py-1 rounded-btn backdrop-blur-xs">
                  Oslo Living Suite in Solid Sheesham
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Strip Bar */}
      <div className="bg-charcoal text-white py-3.5 px-4 border-y border-border-sand/20">
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
    </>
  );
}
