'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageCircle, ShieldCheck, Truck, RotateCcw, Award } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';

export default function Hero() {
  const whatsappUrl = buildWhatsAppUrl(
    "Hi Rumea Home! I'm interested in exploring solid Sheesham furniture for my home."
  );

  return (
    <>
      <section className="relative bg-warm-ivory overflow-hidden border-b border-border-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column (7 cols): Editorial Typography & Direct Value Props */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 z-10">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 self-start">
                <span className="h-px w-6 bg-antique-gold" />
                <span className="text-xs font-sans font-bold tracking-widest uppercase text-antique-gold">
                  100% Solid Sheesham Wood
                </span>
              </div>

              {/* Headline (Serif) */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-espresso tracking-tight leading-[1.12]">
                Furniture that fits the way Indians actually live
              </h1>

              {/* Subtitle */}
              <p className="font-sans text-base sm:text-lg text-soft-taupe max-w-xl leading-relaxed">
                Solid Sheesham. Honest pricing. Delivered across India. Handcrafted above local carpenter shortcuts and below retail showroom markups.
              </p>

              {/* Two CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-espresso text-warm-ivory font-sans font-semibold text-sm rounded-btn shadow-warm hover:bg-espresso/90 hover:scale-[1.01] transition-all duration-200 group"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick({ source: 'homepage' })}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-espresso border border-border-sand hover:border-espresso/40 font-sans font-semibold text-sm rounded-btn hover:bg-warm-sand/20 transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4 text-antique-gold" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Price Range & Origin Tag */}
              <div className="pt-3 flex items-center gap-4 text-xs text-soft-taupe font-medium">
                <span>Direct Pricing: <strong>₹12,000 – ₹55,000</strong></span>
                <span>•</span>
                <span>Kiln-Dried Hardwood</span>
                <span>•</span>
                <span>Zero MDF/Veneer</span>
              </div>

            </div>

            {/* Right Column (5 cols): 4/3 Aspect Ratio Warm Indian Interior Shot */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-card overflow-hidden shadow-card border border-border-sand bg-ivory-dark">
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85"
                  alt="Rumea Home Solid Wood Living Setting"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 text-[11px] text-warm-ivory font-medium bg-espresso/70 px-2.5 py-1 rounded-btn backdrop-blur-xs">
                  Oslo Living Suite in Solid Sheesham
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Animated Reassurance Trust Bar */}
      <div className="bg-espresso text-warm-ivory py-4 px-4 border-y border-border-sand/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-around gap-4 text-xs sm:text-sm font-sans font-medium text-warm-sand">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-antique-gold flex-shrink-0" />
            <span>5-Year Structural Frame Warranty</span>
          </div>
          <span className="hidden sm:inline text-warm-sand/40">•</span>
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-antique-gold flex-shrink-0" />
            <span>Free Delivery on ₹15,000+</span>
          </div>
          <span className="hidden sm:inline text-warm-sand/40">•</span>
          <div className="flex items-center gap-2">
            <RotateCcw className="w-4 h-4 text-antique-gold flex-shrink-0" />
            <span>30-Day Doorstep Returns</span>
          </div>
          <span className="hidden sm:inline text-warm-sand/40">•</span>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-antique-gold flex-shrink-0" />
            <span>Made in India Artisanship</span>
          </div>
        </div>
      </div>
    </>
  );
}
