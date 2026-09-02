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
    <section className="relative bg-[#F7F4EE] text-[#2C2926] py-16 md:py-24 border-t border-[#D8C9B5] overflow-hidden">
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Luxury Architectural Studio Card */}
        <div className="relative rounded-3xl bg-white border border-[#D8C9B5] p-8 sm:p-14 lg:p-16 text-center shadow-lg overflow-hidden">
          
          {/* Subtle Ambient Studio Glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-[#48563A]/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-[#D8C9B5]/20 blur-3xl pointer-events-none" />

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#48563A]/10 text-[#48563A] text-xs font-semibold uppercase tracking-[0.12em] rounded-full mb-4 border border-[#48563A]/20"
          >
            <Ruler className="w-3.5 h-3.5 text-[#48563A]" />
            <span>FREE WOODCRAFT &amp; ROOM SIZING CONSULTATION</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2926] tracking-tight leading-tight font-normal"
          >
            Not Sure What Fits Your Space?
          </motion.h2>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#6E645A] text-sm sm:text-base lg:text-lg mt-4 max-w-2xl mx-auto leading-relaxed"
          >
            Share your room dimensions, floor plan, or photos on WhatsApp. Our woodcraft designers provide honest sizing advice, custom finish previews, and direct delivery estimates.
          </motion.p>

          {/* Luxury Olive Green CTA Button with Shimmer Motion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick({ source: 'homepage' })}
              className="relative group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#48563A] hover:bg-[#3B4730] text-[#F7F4EE] font-sans font-semibold text-sm sm:text-base rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden cursor-pointer border border-[#3B4730]"
            >
              {/* Shimmer Light Sweep Motion */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />

              {/* Pulsing Availability Beacon */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D8C9B5] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D8C9B5]" />
              </span>

              <MessageCircle className="w-5 h-5 text-[#D8C9B5] transition-transform duration-200 group-hover:scale-110" />
              <span className="tracking-wide">Chat on WhatsApp</span>
            </a>
          </motion.div>

          {/* Trust Ribbon */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 pt-6 border-t border-[#D8C9B5]/50 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#6E645A] font-medium"
          >
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#48563A]" />
              <span>Average reply in &lt; 15 mins</span>
            </div>
            <span className="hidden sm:inline text-[#D8C9B5]">•</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#48563A]" />
              <span>Zero Pressure, Honest Advice</span>
            </div>
            <span className="hidden sm:inline text-[#D8C9B5]">•</span>
            <span>Experience Store Hours: 10AM–9PM</span>
            <span className="hidden sm:inline text-[#D8C9B5]">•</span>
            <span>Free PAN India Delivery</span>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
