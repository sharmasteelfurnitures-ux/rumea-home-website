'use client';

import React, { useState } from 'react';
import { User } from 'lucide-react';
import Link from 'next/link';

export default function AccountIcon() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative inline-flex items-center">
      <button
        onClick={() => {
          setShowTooltip(true);
          setTimeout(() => setShowTooltip(false), 3000);
        }}
        className="p-2 text-soft-taupe hover:text-espresso transition-colors rounded-full focus:outline-none"
        aria-label="Account profile (coming soon)"
      >
        <User className="w-5 h-5" />
      </button>

      {showTooltip && (
        <div className="absolute right-0 top-full mt-2 w-56 p-3 bg-espresso text-warm-ivory text-xs rounded-lg shadow-lg z-50 animate-fade-in border border-warm-sand/20 text-left">
          <p className="font-medium text-warm-sand mb-1">Customer Portal</p>
          <p className="text-warm-ivory/80 mb-2">Member accounts with order tracking and saved room plans launching in Phase 2.</p>
          <Link href="/contact" className="text-[11px] text-muted-olive bg-warm-ivory px-2.5 py-1 rounded font-medium inline-block hover:bg-warm-sand">
            Contact Support &rarr;
          </Link>
        </div>
      )}
    </div>
  );
}
