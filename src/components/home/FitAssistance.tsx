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
    <section id="fit-assistance" className="py-20 sm:py-24 lg:py-28 bg-surface-page border-y border-border overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: smoothEase }}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-sand inline-block flex-shrink-0" />
            <span className="text-[10px] sm:text-[11px] font-normal uppercase tracking-[0.2em] text-content-muted">
              Apartment Fit Promise
            </span>
            <span className="w-8 h-[2px] bg-sand inline-block flex-shrink-0" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-primary font-normal tracking-tight mb-4">
            Not sure what will fit?
          </h2>

          <p className="text-sm sm:text-base text-content-muted font-sans leading-relaxed max-w-xl mx-auto mb-8">
            Share your room dimensions, doorway width, lift size, or a photo on WhatsApp. We’ll help you check whether the piece is likely to fit before you buy.
          </p>

          {/* 3 small supporting points */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mb-8 text-xs sm:text-sm text-primary font-medium">
            {points.map((pt, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-accent-subtle border border-accent/25 flex items-center justify-center flex-shrink-0">
                  <Check className="w-2.5 h-2.5 text-accent" strokeWidth={2.5} />
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
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-accent hover:bg-accent-hover text-accent-text text-sm font-semibold rounded-full transition-all duration-200 shadow-xs hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-accent-text" />
              <span>Check room fit on WhatsApp</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
