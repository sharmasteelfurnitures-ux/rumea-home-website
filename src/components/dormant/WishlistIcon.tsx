'use client';

import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

interface WishlistIconProps {
  className?: string;
  productName?: string;
  isFloating?: boolean;
}

export default function WishlistIcon({ className = 'w-5 h-5', productName, isFloating }: WishlistIconProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className={`relative inline-flex items-center ${isFloating ? '' : ''}`}>
      <button
        onClick={() => {
          setShowTooltip(true);
          setTimeout(() => setShowTooltip(false), 3500);
        }}
        className="p-2 text-soft-taupe hover:text-espresso transition-colors rounded-full focus:outline-none"
        aria-label="Wishlist (coming soon)"
      >
        <Heart className={className} />
      </button>

      {showTooltip && (
        <div className="absolute right-0 top-full mt-2 w-60 p-3 bg-espresso text-warm-ivory text-xs rounded-lg shadow-lg z-50 animate-fade-in border border-warm-sand/20 text-left">
          <p className="font-medium text-warm-sand mb-1">Wishlists Coming Soon!</p>
          <p className="text-warm-ivory/80 mb-2">
            {productName 
              ? `Interested in ${productName}? Save it or enquire directly on WhatsApp.`
              : 'WhatsApp us to save your favourite furniture pieces for later.'}
          </p>
          <a
            href={buildWhatsAppUrl(`Hi, I would like to save/enquire about ${productName || 'furniture items'} for my home.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[11px] text-muted-olive bg-warm-ivory px-2.5 py-1 rounded font-medium hover:bg-warm-sand transition-colors"
          >
            Save on WhatsApp &rarr;
          </a>
        </div>
      )}
    </div>
  );
}
