'use client';

import React from 'react';
import { MessageCircle, Clock, ShieldCheck, Ruler } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';

export default function WhatsAppConcierge() {
  const whatsappUrl = buildWhatsAppUrl(
    "Hi Rumea Home! I'd like help choosing the right solid Sheesham furniture for my floor plan."
  );

  return (
    <section className="relative w-full bg-white text-[#2C2926] py-10 md:py-12 border-y border-[#D8C9B5] overflow-hidden">
      
      <div className="w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10">
          
          {/* Left: Headline & Content */}
          <div className="flex-1 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#48563A]/8 text-[#48563A] text-xs font-semibold uppercase tracking-[0.12em] rounded-full mb-2 border border-[#48563A]/15">
              <Ruler className="w-3.5 h-3.5 text-[#48563A]" />
              <span>FREE ROOM SIZING &amp; FINISH CONSULTATION</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#2C2926] font-medium tracking-tight">
              Not Sure What Fits Your Space?
            </h2>
            <p className="text-[#6E645A] text-sm sm:text-base mt-1.5 leading-relaxed">
              Share your room dimensions, floor plans, or photos on WhatsApp. Our woodcraft designers provide honest sizing advice, custom finish previews, and direct delivery estimates.
            </p>

            {/* Inline Trust Notes */}
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#6E645A] font-medium">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#48563A]" />
                <span>Average reply &lt; 15 mins</span>
              </div>
              <span className="text-[#D8C9B5]">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#48563A]" />
                <span>Zero Pressure, Honest Advice</span>
              </div>
              <span className="text-[#D8C9B5]">•</span>
              <span>Experience Store Hours: 10AM–9PM</span>
              <span className="text-[#D8C9B5]">•</span>
              <span>Free PAN India Delivery</span>
            </div>
          </div>

          {/* Right: Olive Green WhatsApp CTA Button */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick({ source: 'homepage' })}
              className="relative group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#48563A] hover:bg-[#3B4730] text-[#F7F4EE] font-sans font-semibold text-sm sm:text-base rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden cursor-pointer border border-[#3B4730] whitespace-nowrap"
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
          </div>

        </div>

      </div>
    </section>
  );
}
