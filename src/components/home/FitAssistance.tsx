'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Check } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';

export default function FitAssistance() {
  const points = [
    'Doorway and lift checks.',
    'Exact product dimensions.',
    'Honest guidance before purchase.',
  ];

  const smoothEase = [0.16, 1, 0.3, 1];

  const whatsappUrl = buildWhatsAppUrl(
    "Hi Rumea Home! I'd like help checking whether a piece will fit my apartment space."
  );

  return (
    <section id="fit-assistance" className="py-16 sm:py-20 bg-white border-y border-[#DEDAD1] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: smoothEase }}
        >
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#48563A] block mb-2.5">
            APARTMENT FIT PROMISE
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2926] font-normal tracking-tight mb-4">
            Not sure what will fit?
          </h2>

          <p className="text-sm sm:text-base text-[#6B6962] font-sans leading-relaxed max-w-xl mx-auto mb-8">
            Share your room dimensions, doorway width, lift size, or a photo on WhatsApp. We’ll help you check whether the piece is likely to fit before you buy.
          </p>

          {/* 3 small supporting points */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mb-8 text-xs sm:text-sm text-[#2C2926] font-medium">
            {points.map((pt, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#48563A]/10 border border-[#48563A]/25 flex items-center justify-center flex-shrink-0">
                  <Check className="w-2.5 h-2.5 text-[#48563A]" strokeWidth={2.5} />
                </div>
                <span>{pt}</span>
              </div>
            ))}
          </div>

          {/* Primary Action Button with subtle hover lift */}
          <div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick({ source: 'fit_assistance' })}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#48563A] hover:bg-[#3B4730] text-white text-sm font-semibold rounded-full transition-all duration-200 shadow-xs hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#D8C9B5]" />
              <span>Check room fit on WhatsApp</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
