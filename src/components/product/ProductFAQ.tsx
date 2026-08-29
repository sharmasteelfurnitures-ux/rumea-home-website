'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

interface ProductFAQProps {
  productName: string;
}

export default function ProductFAQ({ productName }: ProductFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: `Is the ${productName} crafted from 100% solid wood or engineered wood?`,
      a: 'This piece is built exclusively from 100% kiln-dried solid Indian Sheesham (Rosewood). We never use MDF, particleboard, or synthetic core fillers. The wood undergoes 3-stage anti-termite treatment and moisture seasoning to prevent seasonal warping.',
    },
    {
      q: 'How does doorstep delivery and assembly work across India?',
      a: 'We provide Free Pan-India delivery in heavy-duty reinforced 5-ply corrugated packaging with corner edge guards. For items requiring assembly, all necessary Allen keys, hardware bolts, and step-by-step visual guides are included. Professional doorstep assembly is available across 50+ metro and tier-2 cities.',
    },
    {
      q: 'What is covered under the 5-Year Structural Frame Warranty?',
      a: 'Our 5-Year Warranty covers any manufacturing defect, structural frame joint failure, termite/borer infestation, or timber warping. If an issue occurs, our support team on WhatsApp will arrange doorstep inspection and free replacement or repair.',
    },
    {
      q: 'What is the return policy if the product does not match my expectations?',
      a: 'We offer a 30-day hassle-free return and replacement policy. In the rare event of transit damage or manufacturing discrepancy, contact us immediately on WhatsApp or Amazon for an instant doorstep replacement.',
    },
    {
      q: 'How should I care for and maintain the solid wood finish?',
      a: 'Dust regularly with a dry, soft microfiber cloth. Clean spills immediately. Avoid placing hot pans directly without trivets, and keep away from prolonged direct exposure to outdoor monsoon rain for indoor pieces.',
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-sand/70 shadow-card my-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-muted-olive flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" /> HAVE QUESTIONS?
          </span>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-espresso mt-1">
            Frequently Asked Questions & Answers
          </h3>
        </div>

        <a
          href={buildWhatsAppUrl(`Hi! I have a question about ${productName}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-warm-ivory text-espresso text-xs font-semibold rounded-xl border border-warm-sand hover:bg-warm-sand/30 transition-colors self-start sm:self-auto"
        >
          <MessageCircle className="w-4 h-4 text-muted-olive" />
          <span>Ask on WhatsApp</span>
        </a>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="border border-warm-sand/50 rounded-2xl overflow-hidden transition-colors bg-warm-ivory/30"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-display font-semibold text-xs sm:text-sm text-espresso hover:text-muted-olive transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-soft-taupe flex-shrink-0 ml-3 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-espresso' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs text-soft-taupe leading-relaxed border-t border-warm-sand/30 animate-in fade-in duration-150">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
