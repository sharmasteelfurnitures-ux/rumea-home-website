'use client';

import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';

export default function GoodQuestions() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const whatsappUrl = buildWhatsAppUrl(
    "Hi Rumea Home! I have a question about furniture dimensions and assembly."
  );

  const faqs = [
    {
      q: 'How easy is assembly?',
      a: 'Very. Every piece is engineered for self-assembly with clear, numbered parts and step-by-step instructions. Most pieces take about 10 minutes to assemble. No carpenter or special power tools required.',
    },
    {
      q: 'Will the shoe rack fit narrow apartment hallways?',
      a: 'Yes. Our wall-mounted shoe racks are designed with an ultra-slim 5.9-inch (15 cm) depth specifically for Indian apartments. They mount securely behind doors or along narrow corridors without obstructing walkways.',
    },
    {
      q: 'What materials do you use?',
      a: 'Heavy-gauge CRCA steel with electrostatic powder coating (100% rust-resistant, tested for coastal humidity) and high-density engineered wood tops finished with scratch-proof Sheesham and Walnut coatings.',
    },
    {
      q: 'How do delivery and returns work via Amazon India?',
      a: 'All pieces ship nationwide via Amazon India with fast, reliable doorstep delivery. You receive live package tracking and Amazon’s standard return policy for complete buying peace of mind.',
    },
    {
      q: 'What weight capacity can the folding tables and shoe racks hold?',
      a: 'The folding tables are load-tested up to 40 kg for heavy daily work, monitors, and dining. Each tier of our wall-mounted shoe rack supports up to 15 kg of footwear.',
    },
    {
      q: 'How do I check if a piece will fit my exact space?',
      a: 'Send us a message on WhatsApp with your room dimensions, doorway width, or a quick photo. A real person from our team will review the measurements and guide you before purchase.',
    },
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-[#F7F4EE] border-t border-[#DEDAD1]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header: Clean accordion FAQ */}
        <div className="mb-12 sm:mb-14">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#2C2926] tracking-tight">
            Good questions.
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-3">
            <p className="text-sm text-[#6B6962] font-sans">
              Anything else? Reach out on WhatsApp and a real person will help you.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick({ source: 'faq_header' })}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#78806A] hover:underline"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp &rarr;</span>
            </a>
          </div>
        </div>

        {/* Minimalist Accordion List */}
        <div className="border-t border-[#DEDAD1] divide-y divide-[#DEDAD1]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-5 sm:py-6 transition-colors">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left gap-4 focus:outline-none cursor-pointer group"
                >
                  <span className="font-heading font-semibold text-lg sm:text-xl text-[#2C2926] group-hover:text-[#7A6B5D] transition-colors">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#6B6962] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#2C2926]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="mt-3.5 pr-8">
                    <p className="text-sm sm:text-base text-[#6B6962] font-sans leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
