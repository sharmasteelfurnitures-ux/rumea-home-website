'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, CheckCircle2, Quote } from 'lucide-react';
import { getTestimonials } from '@/lib/products';

export default function CustomerReviews() {
  const reviews = getTestimonials();

  return (
    <section className="py-16 md:py-24 bg-warm-ivory border-t border-border-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-antique-gold">
            VERIFIED EXPERIENCES
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-espresso mt-1">
            Real Words From Real Homes
          </h2>
          <p className="text-soft-taupe text-sm sm:text-base mt-2">
            Read authentic reviews from homeowners across Bengaluru, Mumbai, Delhi NCR, and Hyderabad.
          </p>
        </div>

        {/* 3-Column Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-card p-6 sm:p-7 border border-border-sand shadow-card flex flex-col justify-between card-hover"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-border-sand" />
                </div>

                <p className="font-serif italic text-sm sm:text-base text-espresso leading-relaxed mb-6">
                  &ldquo;{review.reviewText}&rdquo;
                </p>
              </div>

              <div>
                <div className="pt-4 border-t border-border-sand/60">
                  <p className="font-sans font-bold text-sm text-espresso">
                    {review.name}
                  </p>
                  <p className="text-xs text-soft-taupe flex items-center gap-1.5 mt-0.5 font-medium">
                    <span>{review.city}</span>
                    <span>•</span>
                    <span className="text-antique-gold flex items-center gap-0.5 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Verified Buyer
                    </span>
                  </p>
                </div>

                <Link
                  href={`/products/${review.productSlug}`}
                  className="mt-3.5 flex items-center gap-2.5 p-2 bg-warm-ivory rounded-btn hover:bg-warm-sand/30 transition-colors"
                >
                  <div className="relative w-8 h-8 rounded-btn overflow-hidden flex-shrink-0 bg-ivory-dark">
                    <Image
                      src={review.productImage}
                      alt={review.productName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs font-semibold text-espresso truncate">
                    {review.productName} &rarr;
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
