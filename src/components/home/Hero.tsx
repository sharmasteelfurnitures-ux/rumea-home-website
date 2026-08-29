'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Shield, Truck, Award } from 'lucide-react';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export default function Hero() {
  return (
    <section className="relative bg-warm-ivory overflow-hidden border-b border-warm-sand/30">
      {/* Main Grid: 12 Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (7 cols): Text & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 z-10">
            
            {/* Minimal Eyebrow */}
            <div className="inline-flex items-center gap-2 self-start">
              <span className="h-px w-6 bg-muted-olive" />
              <span className="text-xs font-body font-semibold tracking-widest uppercase text-muted-olive">
                Thoughtful Furniture for Modern Homes
              </span>
            </div>

            {/* Main Headline: H1 48-64px Desktop / 32-40px Mobile */}
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-espresso tracking-tight leading-[1.12]">
              Homes Build <br className="hidden sm:inline" />
              <span className="text-espresso">Brighter Days</span>
            </h1>

            {/* Subtext: 18px Desktop / 16px Mobile, 60-75 chars per line */}
            <p className="font-body text-base sm:text-lg text-soft-taupe max-w-xl leading-relaxed">
              Furniture crafted from 100% solid Sheesham wood — designed for the proportions of real Indian homes, built to last generations, and priced honestly.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-espresso text-warm-ivory font-display font-semibold text-base rounded-xl shadow-warm hover:bg-espresso/90 hover:shadow-lg active:scale-[0.98] transition-all duration-200 min-h-[48px] group"
              >
                <span>Explore Our Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              <WhatsAppButton
                variant="inline"
                message="Hi Rumea Home! I'd like help selecting the right furniture for my space."
                className="px-6 py-4 rounded-xl min-h-[48px]"
              >
                Chat on WhatsApp
              </WhatsAppButton>
            </div>

            {/* Reassurance Micro-Points */}
            <div className="pt-4 border-t border-warm-sand/40 flex flex-wrap items-center gap-6 sm:gap-8 text-xs text-soft-taupe font-medium">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-muted-olive flex-shrink-0" />
                <span>100% Solid Kiln-Dried Wood</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-muted-olive flex-shrink-0" />
                <span>5-Year Frame Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-muted-olive flex-shrink-0" />
                <span>Free Pan-India Delivery</span>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Editorial Lifestyle Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-warm border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85"
                alt="Rumea Home Living Room Furniture Setting"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
