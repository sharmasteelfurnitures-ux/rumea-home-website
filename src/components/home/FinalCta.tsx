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
    <section className="py-20 sm:py-24 md:py-28 bg-[#2C2926] text-[#F7F4EE] overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease: smoothEase }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-[#D8C9B5] text-xs font-semibold uppercase tracking-[0.14em] mb-4">
          Thoughtful Living
        </span>
        
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F7F4EE] mb-4">
          Make your space work better.
        </h2>

        <p className="text-sm sm:text-base text-[#D8C9B5]/90 font-sans leading-relaxed max-w-lg mx-auto mb-8 sm:mb-10">
          Explore practical, well-built furniture designed for modern Indian apartments.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
          <Link
            href="/products"
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#F7F4EE] hover:bg-white text-[#2C2926] text-sm font-semibold rounded-full transition-all duration-200 shadow-warm hover:shadow-hover hover:-translate-y-0.5"
          >
            <span>Shop all furniture</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick({ source: 'final_cta' })}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#78806A] hover:bg-[#68705B] text-white border border-[#78806A] text-sm font-semibold rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-warm"
          >
            <MessageCircle className="w-4 h-4 text-[#D8C9B5]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </motion.div>
    </section>
  );
}

