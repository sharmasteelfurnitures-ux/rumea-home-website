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
    <section className="relative bg-[#F7F4EE] text-[#2C2926] py-8 sm:py-12 border-t border-[#D8C9B5] overflow-hidden">
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Sleek Compact Architectural Card */}
        <div className="relative rounded-2xl bg-white border border-[#D8C9B5] p-6 sm:p-8 shadow-xs">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            
            {/* Left: Content */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#48563A]/8 text-[#48563A] text-[10px] font-semibold uppercase tracking-[0.14em] rounded-full mb-1.5 border border-[#48563A]/15">
                <Ruler className="w-3 h-3 text-[#48563A]" />
                <span>FREE SIZING &amp; FINISH CONSULTATION</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl text-[#2C2926] font-medium tracking-tight">
                Not Sure What Fits Your Space?
              </h2>
              <p className="text-[#6E645A] text-xs sm:text-sm mt-1 max-w-xl leading-relaxed">
                Share room dimensions, floor plans, or photos on WhatsApp. Our woodcraft designers provide honest sizing advice, custom finish previews, and direct delivery estimates.
              </p>
            </div>

            {/* Right: Matching Olive Green WhatsApp CTA Button */}
            <div className="flex-shrink-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick({ source: 'homepage' })}
                className="relative group inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#48563A] hover:bg-[#3B4730] text-[#F7F4EE] font-sans font-semibold text-xs sm:text-sm rounded-full shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden cursor-pointer border border-[#3B4730] whitespace-nowrap"
              >
                {/* Shimmer Light Sweep Motion */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />

                {/* Pulsing Availability Beacon */}
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D8C9B5] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D8C9B5]" />
                </span>

                <MessageCircle className="w-4 h-4 text-[#D8C9B5] transition-transform duration-200 group-hover:scale-110" />
                <span className="tracking-wide">Chat on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Micro Trust Ribbon */}
          <div className="mt-4 pt-3.5 border-t border-[#D8C9B5]/40 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] text-[#6E645A] font-medium">
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

      </div>
    </section>
  );
}
