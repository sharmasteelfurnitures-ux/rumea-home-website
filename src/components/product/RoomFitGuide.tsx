'use client';

import React, { useState } from 'react';
import { Ruler, DoorOpen, Move, MessageCircle, CheckCircle2 } from 'lucide-react';
import { Product } from '@/types/product';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';

interface RoomFitGuideProps {
  product: Product;
}

export default function RoomFitGuide({ product }: RoomFitGuideProps) {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappMsg = `Hi Rumea Home! I'm measuring my room for the ${product.name} (${product.dimensions.width.cm}x${product.dimensions.depth.cm}x${product.dimensions.height.cm} cm). Can your design team help verify if it fits my floor plan?`;

  return (
    <div className="bg-white rounded-card p-6 sm:p-8 border border-border-sand shadow-card my-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-antique-gold flex items-center gap-1.5">
            <Ruler className="w-3.5 h-3.5" /> ACCURATE FIT GUARANTEE
          </span>
          <h3 className="font-serif font-bold text-xl sm:text-2xl text-espresso mt-1">
            Will It Fit in Your Room?
          </h3>
          <p className="text-xs text-soft-taupe mt-1">
            Ensure smooth doorway entry and comfortable walking space before ordering.
          </p>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-warm-ivory text-espresso text-xs font-semibold rounded-btn border border-border-sand hover:bg-warm-sand/30 transition-colors self-start sm:self-auto"
        >
          <span>{isOpen ? 'Hide Checklist' : 'Open Sizing Checklist'}</span>
        </button>
      </div>

      {/* Quick Specs Pill Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <div className="p-3 bg-warm-ivory rounded-card border border-border-sand/60 text-center">
          <p className="text-[10px] uppercase font-bold text-soft-taupe">Width / Length</p>
          <p className="font-serif font-bold text-sm text-espresso mt-0.5">
            {product.dimensions.width.cm} cm ({product.dimensions.width.ft})
          </p>
        </div>

        <div className="p-3 bg-warm-ivory rounded-card border border-border-sand/60 text-center">
          <p className="text-[10px] uppercase font-bold text-soft-taupe">Depth</p>
          <p className="font-serif font-bold text-sm text-espresso mt-0.5">
            {product.dimensions.depth.cm} cm ({product.dimensions.depth.ft})
          </p>
        </div>

        <div className="p-3 bg-warm-ivory rounded-card border border-border-sand/60 text-center">
          <p className="text-[10px] uppercase font-bold text-soft-taupe">Height</p>
          <p className="font-serif font-bold text-sm text-espresso mt-0.5">
            {product.dimensions.height.cm} cm ({product.dimensions.height.ft})
          </p>
        </div>

        <div className="p-3 bg-warm-ivory rounded-card border border-border-sand/60 text-center">
          <p className="text-[10px] uppercase font-bold text-soft-taupe">Solid Weight</p>
          <p className="font-serif font-bold text-sm text-espresso mt-0.5">
            {product.dimensions.weight} kg
          </p>
        </div>
      </div>

      {/* Sizing & Doorway Measurement Guide (Wooden Street Style) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <div className="p-4 rounded-card bg-warm-ivory/60 border border-border-sand/60 flex gap-3">
          <DoorOpen className="w-5 h-5 text-antique-gold flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-serif font-bold text-xs text-espresso">1. Doorway &amp; Elevator Clearance</h4>
            <p className="text-[11px] text-soft-taupe mt-1 leading-snug">
              Main door opening should be at least {Math.min(product.dimensions.depth.cm, product.dimensions.height.cm) - 5} cm wide for boxed transit.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-card bg-warm-ivory/60 border border-border-sand/60 flex gap-3">
          <Move className="w-5 h-5 text-antique-gold flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-serif font-bold text-xs text-espresso">2. Walking Pathway Clearance</h4>
            <p className="text-[11px] text-soft-taupe mt-1 leading-snug">
              Leave at least 2.5 to 3 feet (75–90 cm) of open circulation space around this furniture piece.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-card bg-warm-ivory/60 border border-border-sand/60 flex gap-3">
          <CheckCircle2 className="w-5 h-5 text-antique-gold flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-serif font-bold text-xs text-espresso">3. Room Proportions</h4>
            <p className="text-[11px] text-soft-taupe mt-1 leading-snug">
              Recommended room area: <strong>{product.dimensions.recommendedRoomSize || '10x12 ft or larger'}</strong> for optimal balance.
            </p>
          </div>
        </div>
      </div>

      {/* Expandable Floor Plan Advice CTA */}
      <div className="mt-6 pt-5 border-t border-border-sand/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-soft-taupe text-center sm:text-left">
          <MessageCircle className="w-4 h-4 text-antique-gold flex-shrink-0" />
          <span>Have an unusual room corner or narrow staircase? Share your layout blueprint with our design team.</span>
        </div>

        <a
          href={buildWhatsAppUrl(whatsappMsg)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick({ source: 'pdp', product_id: product.id, product_name: product.name })}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-espresso text-warm-ivory font-semibold text-xs rounded-btn shadow-warm hover:bg-espresso/90 transition-colors whitespace-nowrap"
        >
          <MessageCircle className="w-3.5 h-3.5 text-warm-sand" />
          <span>Free Room Fit Consultation</span>
        </a>
      </div>
    </div>
  );
}
