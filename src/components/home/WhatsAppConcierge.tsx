'use client';

import React from 'react';
import { MessageCircle, Clock, ShieldCheck, Sparkles, Ruler } from 'lucide-react';
import { buildWhatsAppUrl, getWhatsAppDisplayNumber } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';

export default function WhatsAppConcierge() {
  const whatsappUrl = buildWhatsAppUrl(
    "Hi Rumea Home! I'd like help choosing the right solid Sheesham furniture for my floor plan."
  );

  return (
    <section className="bg-charcoal text-white py-16 md:py-20 border-t border-border-sand/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 text-white text-[11px] font-bold uppercase tracking-widest rounded-btn mb-4">
          <Ruler className="w-3.5 h-3.5 text-amber-300" /> FREE WOODCRAFT &amp; ROOM SIZING CONSULTATION
        </div>

        {/* Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
          Not Sure What Fits Your Space?
        </h2>

        {/* Subline */}
        <p className="text-white/80 text-sm sm:text-base lg:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
          Share your room dimensions, floor plan, or photos on WhatsApp. We provide honest sizing advice, custom finish previews, and direct delivery estimates.
        </p>

        {/* CTA Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick({ source: 'homepage' })}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-sans font-bold text-sm sm:text-base rounded-btn shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Trust Ribbon */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-white/70 font-medium">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-amber-300" />
            <span>Average reply in &lt; 15 mins</span>
          </div>
          <span className="hidden sm:inline text-white/30">•</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-300" />
            <span>Zero Pressure, Honest Advice</span>
          </div>
          <span className="hidden sm:inline text-white/30">•</span>
          <span>Mon–Sat, 9AM–9PM IST</span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span>Direct Line: {getWhatsAppDisplayNumber()}</span>
        </div>

      </div>
    </section>
  );
}
