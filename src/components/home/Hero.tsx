'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const smoothEase = [0.22, 1, 0.36, 1];

  return (
    <section className="relative w-full bg-[#F7F4EE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left: Editorial Hero Copy (7 cols on lg) */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: smoothEase }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#78806A]/10 border border-[#78806A]/20 text-[#78806A] text-xs font-semibold uppercase tracking-[0.14em] mb-4">
              <span>More Than Furniture</span>
              <span className="w-1 h-1 rounded-full bg-[#78806A]" />
              <span>Thoughtful Living</span>
            </div>

            {/* Main Heading in Bold Modern Sans */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-bold text-[#2C2926] tracking-tight leading-[1.08] mb-5">
              Make room for better living.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#6B6962] font-sans leading-relaxed max-w-xl mb-8 sm:mb-10">
              Thoughtful furniture engineered for real Indian apartments — ultra-slim profiles, durable rust-proof steel, and smart multi-purpose designs that fit your space and routine.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#2C2926] hover:bg-[#3D3632] text-[#F7F4EE] text-sm font-semibold rounded-full transition-all duration-200 shadow-warm hover:shadow-hover hover:-translate-y-0.5"
              >
                <span>Shop all furniture</span>
                <ArrowRight className="w-4 h-4 text-[#D8C9B5]" />
              </Link>

              <a
                href="#fit-assistance"
                className="inline-flex items-center justify-center px-7 py-4 bg-white/70 hover:bg-white border border-[#D8C9B5] hover:border-[#2C2926] text-[#2C2926] text-sm font-semibold rounded-full transition-all duration-200 shadow-xs hover:shadow-sm hover:-translate-y-0.5"
              >
                <span>Check room fit</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Architectural Lifestyle Visual with Floating Credential Badge */}
          <div className="lg:col-span-5 relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] rounded-3xl overflow-hidden border border-[#D8C9B5] shadow-card bg-[#EDE7DC]">
            <motion.div
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: smoothEase }}
              className="relative w-full h-full"
            >
              <Image
                src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1400&q=85"
                alt="Practical, uncluttered Indian apartment entryway and living space by Rumea Home"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2926]/20 via-transparent to-transparent pointer-events-none" />

              {/* Floating Architectural Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-white/95 backdrop-blur-md rounded-2xl border border-[#D8C9B5] p-3 sm:px-4 sm:py-3 shadow-warm">
                <p className="text-xs font-bold text-[#2C2926] font-heading">
                  Engineered for Indian Apartments
                </p>
                <p className="text-[11px] text-[#78806A] font-medium">
                  Ultra-slim 15cm depth • Rust-proof finish
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
