'use client';

import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';

export default function CartSlot() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative inline-flex items-center">
      <button
        onClick={() => {
          setShowTooltip(true);
          setTimeout(() => setShowTooltip(false), 3000);
        }}
        className="relative p-2 text-soft-taupe hover:text-espresso transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-warm-sand"
        aria-label="Shopping cart (coming soon)"
      >
        <ShoppingBag className="w-5 h-5" />
        <span className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 text-[10px] font-semibold text-warm-ivory bg-muted-olive rounded-full">
          0
        </span>
      </button>

      {showTooltip && (
        <div className="absolute right-0 top-full mt-2 w-64 p-3 bg-espresso text-warm-ivory text-xs rounded-lg shadow-lg z-50 animate-fade-in border border-warm-sand/20">
          <p className="font-medium text-warm-sand mb-1">Direct Checkout Coming Soon!</p>
          <p className="text-warm-ivory/80">For now, explore our catalogue and checkout securely via Amazon with official Rumea Home warranty.</p>
        </div>
      )}
    </div>
  );
}
