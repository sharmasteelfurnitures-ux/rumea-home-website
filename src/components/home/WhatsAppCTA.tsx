'use client';

import React from 'react';
import { MessageCircle, Clock, ShieldCheck, HelpCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';

export default function WhatsAppCTA() {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick({ source: 'homepage' });
  };

  const whatsappUrl = buildWhatsAppUrl(
    "Hi Rumea Home! I'd like help choosing the right furniture for my home. Can you share recommendations?"
  );

  return (
    <section className="py-16 md:py-24 bg-warm-ivory border-t border-warm-sand/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-warm-sand/60 shadow-warm text-center">
          
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-muted-olive text-warm-ivory mb-6 shadow-sm">
            <MessageCircle className="w-7 h-7" />
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-muted-olive block mb-2">
            WHATSAPP ASSISTANCE
          </span>
          
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-espresso tracking-tight max-w-lg mx-auto">
            Make Room for Better Living.
          </h2>

          <p className="text-soft-taupe text-sm sm:text-base max-w-xl mx-auto mt-3 leading-relaxed">
            Unsure about dimensions, finishes, or room layouts? Share your floor plan or requirements directly with our furniture specialists on WhatsApp.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-espresso text-warm-ivory font-display font-semibold text-base rounded-xl shadow-warm hover:bg-espresso/90 hover:shadow-lg active:scale-[0.98] transition-all duration-200 min-h-[48px]"
            >
              <MessageCircle className="w-5 h-5 text-warm-sand" />
              <span>Chat With Our Experts on WhatsApp</span>
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-soft-taupe font-medium">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-muted-olive" /> Replies in &lt; 2 hours
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-muted-olive" /> Honest, Zero-Pressure Advice
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-muted-olive" /> Mon–Sat, 9AM–8PM IST
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
