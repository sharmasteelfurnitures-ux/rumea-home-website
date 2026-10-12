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
      q: `What materials and construction are used for the ${productName}?`,
      a: 'Each Rumea piece is crafted using durable, honest materials specified in the Technical Specifications above — such as heavy-gauge powder-coated steel, pre-laminated engineered boards, or premium structural framing. We prioritize space efficiency and everyday domestic durability.',
    },
    {
      q: 'How is this item packaged and delivered across India?',
      a: 'We use heavy-duty multi-layer corrugated cartons with reinforced corner edge protectors to ensure safe transit. For orders placed via Amazon India, tracking and delivery are managed through Amazon’s reliable logistics network.',
    },
    {
      q: 'Is assembly required and how easy is it?',
      a: 'If assembly is required, all necessary hardware, tools, wall-mounting anchors, and step-by-step visual diagrams are included. Most items can be assembled easily within 10–20 minutes using basic household tools.',
    },
    {
      q: 'What should I do if an item arrives damaged or has a defect?',
      a: 'Every piece is inspected prior to packing. In the rare event of transit damage or missing components, contact our WhatsApp support (+91 72919 62356) with photos for immediate assistance, or use Amazon’s return/replacement support.',
    },
    {
      q: 'How should I care for and maintain this piece?',
      a: 'Dust regularly with a clean, dry microfiber cloth. Wipe liquid spills immediately with a damp cloth followed by a dry wipe. For steel frames, keep dry to preserve the anti-rust coating over years of daily domestic use.',
    },
  ];

  return (
    <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-border shadow-card my-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" /> HAVE QUESTIONS?
          </span>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-primary mt-1">
            Frequently Asked Questions & Answers
          </h3>
        </div>

        <a
          href={buildWhatsAppUrl(`Hi Rumea Home! I have a question about ${productName} and sizing.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-surface-page text-primary text-xs font-semibold rounded-xl border border-border hover:bg-sand/30 transition-colors self-start sm:self-auto"
        >
          <MessageCircle className="w-4 h-4 text-accent" />
          <span>Ask on WhatsApp</span>
        </a>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="border border-border rounded-2xl overflow-hidden transition-colors bg-surface-page/50"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-display font-semibold text-xs sm:text-sm text-primary hover:text-accent transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-content-muted flex-shrink-0 ml-3 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-primary' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs text-content-muted leading-relaxed border-t border-border/40 animate-in fade-in duration-150">
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
