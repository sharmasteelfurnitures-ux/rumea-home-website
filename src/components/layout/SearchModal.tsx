'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, X, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import { products } from '@/lib/products';
import { Product } from '@/types/product';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const popularSearches = [
    'Solid Sheesham Sofa',
    'Platform Bed',
    '6-Seater Dining Set',
    'Study Table',
    'TV Console',
    'Scandinavian',
  ];

  const results: Product[] = query.trim()
    ? products.filter((p) => {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.room.some((r) => r.toLowerCase().includes(q)) ||
          p.collection.toLowerCase().includes(q) ||
          (p.tagline && p.tagline.toLowerCase().includes(q))
        );
      }).slice(0, 6)
    : [];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-espresso/70 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-warm-sand overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        
        {/* Search Input Header */}
        <div className="p-4 sm:p-5 border-b border-warm-sand/40 flex items-center gap-3 bg-warm-ivory/60">
          <Search className="w-5 h-5 text-soft-taupe flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search furniture (e.g. Oslo Sofa, Dining Table, Bed, Teak)..."
            className="flex-1 bg-transparent text-sm sm:text-base text-espresso placeholder-soft-taupe focus:outline-none font-body"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-soft-taupe hover:text-espresso"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-semibold text-soft-taupe hover:text-espresso bg-white border border-warm-sand rounded-lg"
          >
            ESC
          </button>
        </div>

        {/* Modal Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6">
          
          {query.trim() === '' ? (
            <div className="space-y-6">
              {/* Popular Searches */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-olive flex items-center gap-1.5 mb-3">
                  <TrendingUp className="w-3.5 h-3.5" /> Popular Searches
                </p>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-3 py-1.5 bg-warm-ivory hover:bg-warm-sand/40 text-espresso text-xs rounded-full border border-warm-sand/50 transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Categories */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-olive flex items-center gap-1.5 mb-3">
                  <Sparkles className="w-3.5 h-3.5" /> Browse Spaces
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-espresso">
                  <Link
                    href="/rooms/living-room"
                    onClick={onClose}
                    className="p-2.5 bg-warm-ivory rounded-xl hover:bg-warm-sand/30 font-medium transition-colors"
                  >
                    🛋️ Living Room &rarr;
                  </Link>
                  <Link
                    href="/rooms/bedroom"
                    onClick={onClose}
                    className="p-2.5 bg-warm-ivory rounded-xl hover:bg-warm-sand/30 font-medium transition-colors"
                  >
                    🛏️ Bedroom &rarr;
                  </Link>
                  <Link
                    href="/rooms/dining-room"
                    onClick={onClose}
                    className="p-2.5 bg-warm-ivory rounded-xl hover:bg-warm-sand/30 font-medium transition-colors"
                  >
                    🪑 Dining Room &rarr;
                  </Link>
                  <Link
                    href="/rooms/study"
                    onClick={onClose}
                    className="p-2.5 bg-warm-ivory rounded-xl hover:bg-warm-sand/30 font-medium transition-colors"
                  >
                    💻 Study & Work &rarr;
                  </Link>
                  <Link
                    href="/rooms/storage"
                    onClick={onClose}
                    className="p-2.5 bg-warm-ivory rounded-xl hover:bg-warm-sand/30 font-medium transition-colors"
                  >
                    🗄️ Storage &rarr;
                  </Link>
                  <Link
                    href="/products"
                    onClick={onClose}
                    className="p-2.5 bg-warm-ivory rounded-xl hover:bg-warm-sand/30 font-medium transition-colors"
                  >
                    ✨ All Products &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-2xl mb-2">🔍</p>
              <p className="font-display font-bold text-sm text-espresso">No furniture matching &quot;{query}&quot;</p>
              <p className="text-xs text-soft-taupe mt-1">Try searching for sofa, bed, teak, dining table, or desk.</p>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-xs font-semibold text-soft-taupe">
                Found {results.length} results:
              </p>
              <div className="space-y-2">
                {results.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    onClick={onClose}
                    className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-warm-ivory border border-transparent hover:border-warm-sand/50 transition-colors group"
                  >
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-ivory-dark flex-shrink-0">
                      <Image
                        src={product.images.primary}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] uppercase font-bold text-muted-olive tracking-wider">
                        {product.category}
                      </p>
                      <h4 className="font-display font-semibold text-xs sm:text-sm text-espresso truncate group-hover:text-muted-olive transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-xs text-espresso font-bold mt-0.5">
                        ₹{product.pricing.offer.toLocaleString('en-IN')}{' '}
                        <span className="text-[11px] font-normal text-soft-taupe line-through">
                          ₹{product.pricing.mrp.toLocaleString('en-IN')}
                        </span>
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-soft-taupe group-hover:text-espresso group-hover:translate-x-1 transition-transform mr-2" />
                  </Link>
                ))}
              </div>

              <div className="pt-3 border-t border-warm-sand/30 text-center">
                <Link
                  href={`/products?search=${encodeURIComponent(query)}`}
                  onClick={onClose}
                  className="text-xs font-semibold text-muted-olive hover:text-espresso underline"
                >
                  View all results for &quot;{query}&quot; &rarr;
                </Link>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
