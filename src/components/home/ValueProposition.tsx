'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export default function ValueProposition() {
  const points = [
    'Proportioned for compact homes.',
    'Clear dimensions in cm and ft.',
    'Practical designs for everyday use.',
  ];

  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section id="why-rumea" className="py-16 sm:py-20 md:py-24 bg-[#F7F4EE] border-t border-[#D8C9B5]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left: Editorial Image (6 cols on lg) */}
          <motion.div 
            initial={{ opacity: 0, scale: 1.02 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.9, ease: smoothEase }}
            className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden bg-[#EDE7DC] border border-[#D8C9B5] shadow-card"
          >
            <Image
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"
              alt="Carefully proportioned practical furniture in a modern Indian apartment"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C2926]/30 via-transparent to-transparent pointer-events-none" />

            {/* Bottom 3-value banner from brand kit */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-[#2C2926]/90 backdrop-blur-md text-[#F7F4EE] p-3 sm:p-4 rounded-2xl border border-white/10 flex items-center justify-between text-center">
              <div className="flex-1 border-r border-white/15 px-2">
                <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#D8C9B5]">Better</span>
                <span className="text-[11px] sm:text-xs font-semibold">Materials</span>
              </div>
              <div className="flex-1 border-r border-white/15 px-2">
                <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#D8C9B5]">Greater</span>
                <span className="text-[11px] sm:text-xs font-semibold">Details</span>
              </div>
              <div className="flex-1 px-2">
                <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#D8C9B5]">Happier</span>
                <span className="text-[11px] sm:text-xs font-semibold">Homes</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Concise Value Proposition Copy (6 cols on lg) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: smoothEase }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#78806A] mb-2.5">
              THE RUMEA APPROACH
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] text-[#2C2926] font-bold tracking-tight leading-tight mb-4 sm:mb-5">
              Built for the home you actually live in.
            </h2>

            <p className="text-sm sm:text-base text-[#6B6962] font-sans leading-relaxed mb-6 sm:mb-8">
              Rumea Home designs practical furniture for real Indian apartments — narrow hallways, compact rooms, everyday routines, and changing needs. Every piece is engineered to reclaim floor space without visual clutter.
            </p>

            {/* Three concise supporting points with Muted Olive check circles */}
            <div className="space-y-3.5 mb-8 w-full">
              {points.map((pt, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#78806A]/15 border border-[#78806A]/30 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[#78806A]" strokeWidth={2.5} />
                  </div>
                  <span className="text-xs sm:text-sm font-sans font-semibold text-[#2C2926]">
                    {pt}
                  </span>
                </div>
              ))}
            </div>

            {/* Clean Pill CTA */}
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-transparent hover:bg-[#2C2926] border border-[#D8C9B5] hover:border-[#2C2926] text-[#2C2926] hover:text-[#F7F4EE] text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 shadow-xs hover:shadow-sm"
            >
              <span>Why Rumea</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
