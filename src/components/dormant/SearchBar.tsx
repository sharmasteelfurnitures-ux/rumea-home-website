'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, X } from 'lucide-react';

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);

  const quickCategories = [
    { name: 'Living Room Sofas', href: '/rooms/living-room' },
    { name: 'Solid Wood Beds', href: '/rooms/bedroom' },
    { name: 'Dining Tables', href: '/rooms/dining-room' },
    { name: 'Work from Home Desks', href: '/rooms/study' },
    { name: 'Scandinavian Style', href: '/collections/scandinavian' },
    { name: 'Modern Minimalist', href: '/collections/modern' },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-soft-taupe hover:text-espresso transition-colors rounded-full focus:outline-none"
        aria-label="Search catalogue"
      >
        <Search className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-espresso/60 backdrop-blur-sm">
          <div className="bg-warm-ivory border border-warm-sand w-full max-w-lg rounded-2xl p-6 shadow-2xl relative animate-in fade-in zoom-in-95">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-soft-taupe hover:text-espresso"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <h3 className="font-display font-semibold text-lg text-espresso mb-1">Search Rumea Home</h3>
              <p className="text-xs text-soft-taupe">Full text search engine is currently indexing our catalogue.</p>
            </div>

            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Try 'Oslo sofa', 'Sheesham bed', 'Dining table'..."
                className="w-full pl-10 pr-4 py-3 bg-white border border-warm-sand rounded-xl text-espresso placeholder-soft-taupe focus:outline-none focus:ring-2 focus:ring-espresso text-sm"
                autoFocus
              />
              <Search className="w-5 h-5 text-soft-taupe absolute left-3 top-3.5" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-olive mb-3">Popular Categories</p>
              <div className="flex flex-wrap gap-2">
                {quickCategories.map((cat) => (
                  <Link
                    key={cat.name}
                    href={cat.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xs px-3 py-1.5 bg-warm-sand/30 hover:bg-warm-sand text-espresso rounded-full transition-colors font-medium"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-warm-sand/40 flex justify-between items-center text-xs text-soft-taupe">
              <Link href="/products" onClick={() => setIsOpen(false)} className="text-espresso font-medium hover:underline">
                View All Products &rarr;
              </Link>
              <span>Instant WhatsApp Enquiry available</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
