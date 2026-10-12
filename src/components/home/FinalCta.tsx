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
    <section className="w-full bg-[#F7F5F0] pt-10 sm:pt-14 pb-3 sm:pb-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto rounded-[24px] sm:rounded-[32px] bg-[#2C2926] text-[#F7F5F0] py-16 sm:py-20 lg:py-24 px-6 sm:px-12 text-center relative overflow-hidden shadow-xs">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: smoothEase }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center mb-6">
            <span className="w-10 h-[2px] bg-[#8B6F5E] inline-block" />
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#F7F5F0] mb-4">
            Make your space work better.
          </h2>

          <p className="text-sm sm:text-base text-[#D8C9B5]/90 font-sans leading-relaxed max-w-lg mx-auto mb-8 sm:mb-10">
            Explore practical furniture designed for everyday Indian homes.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
            <Link
              href="/products"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#F7F5F0] hover:bg-white text-[#2C2926] text-sm font-semibold rounded-full transition-all duration-200 shadow-xs hover:shadow-sm hover:-translate-y-0.5"
            >
              <span>Shop all furniture</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick({ source: 'final_cta' })}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#48563A] hover:bg-[#3B4730] text-white border border-[#48563A] text-sm font-medium rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-[#D8C9B5]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
