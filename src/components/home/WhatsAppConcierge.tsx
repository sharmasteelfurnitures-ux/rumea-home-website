'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Clock, ShieldCheck, Ruler } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';

export default function WhatsAppConcierge() {
  const whatsappUrl = buildWhatsAppUrl(
    "Hi Rumea Home! I'd like help choosing the right solid Sheesham furniture for my floor plan."
  );

  return (
    <section className="relative bg-gradient-to-b from-[#F7F4EE] via-[#F2ECE1] to-[#EBE3D5] text-[#3D2212] py-16 md:py-20 border-t border-[#E5DCce] border-b border-[#D8CDBC] overflow-hidden">
      
      {/* Subtle Warm Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-200/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white/90 text-[#3D2212] text-[11px] font-bold uppercase tracking-widest rounded-btn mb-4 shadow-xs border border-[#DFD5C6]"
        >
          <Ruler className="w-3.5 h-3.5 text-terracotta" /> FREE WOODCRAFT &amp; ROOM SIZING CONSULTATION
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#3D2212] tracking-tight leading-tight"
        >
          Not Sure What Fits Your Space?
        </motion.h2>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#644D3D] text-sm sm:text-base lg:text-lg mt-4 max-w-2xl mx-auto leading-relaxed"
        >
          Share your room dimensions, floor plan, or photos on WhatsApp. We provide honest sizing advice, custom finish previews, and direct delivery estimates.
        </motion.p>

        {/* CTA Button with Interactive Hover & Tap */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick({ source: 'homepage' })}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#78806A] hover:bg-[#68705B] text-white font-sans font-bold text-sm sm:text-base rounded-btn shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Trust Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-6 border-t border-[#DFD5C6] flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#644D3D] font-semibold"
        >
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-terracotta" />
            <span>Average reply in &lt; 15 mins</span>
          </div>
          <span className="hidden sm:inline text-[#C0B29E]">•</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-terracotta" />
            <span>Zero Pressure, Honest Advice</span>
          </div>
          <span className="hidden sm:inline text-[#C0B29E]">•</span>
          <span>Store Timing: 10AM–9PM (Mon–Sun)</span>
          <span className="hidden sm:inline text-[#C0B29E]">•</span>
          <span>Free PAN India Delivery</span>
        </motion.div>

      </div>
    </section>
  );
}
