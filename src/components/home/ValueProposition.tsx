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
    <section id="why-rumea" className="py-16 sm:py-20 md:py-24 bg-white border-y border-[#DEDAD1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left: Editorial Image (6 cols on lg) */}
          <motion.div 
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.9, ease: smoothEase }}
            className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-[#EBE7DF] border border-[#DEDAD1] shadow-2xs"
          >
            <Image
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"
              alt="Carefully proportioned practical furniture in a modern Indian apartment"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </motion.div>

          {/* Right: Concise Value Proposition Copy (6 cols on lg) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: smoothEase }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#7A6B5D] mb-2.5">
              THE RUMEA APPROACH
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-[#2C2926] font-normal tracking-tight leading-tight mb-4 sm:mb-5">
              Built for the home you actually live in.
            </h2>

            <p className="text-sm sm:text-base text-[#6B6962] font-sans leading-relaxed mb-6 sm:mb-8">
              Rumea Home makes practical furniture for real Indian apartments — narrow hallways, compact rooms, everyday routines, and changing needs. Each piece is designed to make your space work harder without making it feel crowded.
            </p>

            {/* Three concise supporting points */}
            <div className="space-y-3 mb-8 w-full">
              {points.map((pt, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#2C2926]/5 border border-[#2C2926]/15 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[#2C2926]" strokeWidth={2.5} />
                  </div>
                  <span className="text-xs sm:text-sm font-sans font-medium text-[#2C2926]">
                    {pt}
                  </span>
                </div>
              ))}
            </div>

            {/* Clean CTA with subtle hover animation */}
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-transparent hover:bg-[#2C2926] border border-[#DEDAD1] hover:border-[#2C2926] text-[#2C2926] hover:text-[#F7F5F0] text-xs sm:text-sm font-medium rounded-full transition-all duration-200"
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
