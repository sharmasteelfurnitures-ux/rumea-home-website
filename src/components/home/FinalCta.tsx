'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';

export default function FinalCta() {
  const whatsappUrl = buildWhatsAppUrl(
    "Hi Rumea Home! I'd like help choosing the right practical furniture for my apartment."
  );

  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section className="py-20 sm:py-24 md:py-28 bg-[#242421] text-[#F7F5F0] overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease: smoothEase }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#F7F5F0] mb-4">
          Make your space work better.
        </h2>

        <p className="text-sm sm:text-base text-[#DEDAD1]/85 font-sans leading-relaxed max-w-lg mx-auto mb-8 sm:mb-10">
          Explore practical furniture designed for everyday Indian homes.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
          <Link
            href="/products"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F7F5F0] hover:bg-white text-[#1E1E1B] text-sm font-semibold rounded-full transition-all duration-200 shadow-2xs hover:shadow-xs hover:-translate-y-0.5"
          >
            <span>Shop all furniture</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick({ source: 'final_cta' })}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent hover:bg-white/10 text-[#F7F5F0] border border-[#DEDAD1]/30 hover:border-[#F7F5F0] text-sm font-medium rounded-full transition-all duration-200 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 text-[#DEDAD1]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </motion.div>
    </section>
  );
}

