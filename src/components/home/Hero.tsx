'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const smoothEase = [0.22, 1, 0.36, 1];

  return (
    <section className="relative w-full bg-[#F7F5F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Editorial Hero Copy (7 cols on lg) */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: smoothEase }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Eyebrow */}
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8A684A] mb-3 sm:mb-4">
              FURNITURE FOR REAL INDIAN HOMES
            </span>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-normal text-[#1E1E1B] tracking-tight leading-[1.08] mb-5 sm:mb-6">
              Make more room for living.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#6B6962] font-sans leading-relaxed max-w-xl mb-8 sm:mb-10">
              Practical, well-built furniture for Indian apartments — designed to fit your space, your routine, and your budget.
            </p>

            {/* Two Primary / Secondary CTAs Only */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1E1E1B] hover:bg-[#2E2E2A] text-[#F7F5F0] text-sm font-semibold rounded-full transition-all duration-200 shadow-xs hover:shadow-sm"
              >
                <span>Shop all furniture</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="#fit-assistance"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-white border border-[#DEDAD1] hover:border-[#1E1E1B] text-[#1E1E1B] text-sm font-medium rounded-full transition-all duration-200"
              >
                <span>Find the right fit</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Single Strong Lifestyle Visual (5 cols on lg) */}
          <div className="lg:col-span-5 relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] rounded-2xl overflow-hidden border border-[#DEDAD1] shadow-card bg-[#EBE7DF]">
            <motion.div
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: smoothEase }}
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
