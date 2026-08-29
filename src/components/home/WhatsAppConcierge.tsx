'use client';

import React from 'react';
import { MessageCircle, Clock, ShieldCheck, HelpCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';

export default function WhatsAppConcierge() {
  const whatsappUrl = buildWhatsAppUrl(
    "Hi Rumea Home! I'd like help choosing the right solid Sheesham furniture for my room layout. Can you share recommendations?"
  );

  return (
    <section className="py-20 md:py-28 bg-espresso text-warm-ivory border-t border-border-sand/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-warm-sand/20 text-antique-gold border border-warm-sand/30 shadow-md">
          <MessageCircle className="w-7 h-7 text-warm-sand" />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-warm-sand block">
          PERSONAL FURNITURE CONCIERGE
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl text-warm-ivory tracking-tight max-w-2xl mx-auto leading-tight">
          Not Sure What Fits Your Space? Talk to Our Woodcraft Designers.
        </h2>

        <p className="text-warm-sand/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Share your room dimensions, floor plan, or photos on WhatsApp. We provide honest sizing advice, custom finish previews, and direct delivery estimates.
        </p>

        <div className="pt-4 flex justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick({ source: 'homepage' })}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-sans font-bold text-sm sm:text-base rounded-btn shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Chat With Our Furniture Experts on WhatsApp</span>
          </a>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-warm-sand/70 font-medium">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-antique-gold" /> Average reply in &lt; 15 mins
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-antique-gold" /> Zero Pressure, Honest Advice
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-antique-gold" /> Mon–Sat, 9AM–9PM IST
          </span>
        </div>

      </div>
    </section>
  );
}
