'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, CheckCircle2, Quote, MessageSquare } from 'lucide-react';
import { getTestimonials } from '@/lib/products';

export default function CustomerReviews() {
  const reviews = getTestimonials();

  return (
    <section className="py-16 md:py-24 bg-white border-t border-border-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta flex items-center justify-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5" /> VERIFIED EXPERIENCES
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-charcoal mt-1">
            Real Words From Real Homes
          </h2>
          <p className="text-mid-gray text-sm sm:text-base mt-2">
            Read authentic experiences from 1,200+ homeowners across Bengaluru, Mumbai, Delhi NCR, and Hyderabad.
          </p>
        </div>

        {/* 3-Column Reviews Grid (Desktop) / Swipeable Rail (Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-warm-offwhite rounded-card p-6 sm:p-7 border border-border-sand shadow-card flex flex-col justify-between card-hover"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-warm-sand" />
                </div>

                <p className="font-serif italic text-sm sm:text-base text-charcoal leading-relaxed mb-6">
                  &ldquo;{review.reviewText}&rdquo;
                </p>
              </div>

              <div>
                <div className="pt-4 border-t border-border-sand/60">
                  <p className="font-sans font-bold text-sm text-charcoal">
                    {review.name}
                  </p>
                  <p className="text-xs text-mid-gray flex items-center gap-1.5 mt-0.5 font-medium">
                    <span>{review.city}</span>
                    <span>•</span>
                    <span className="text-emerald-700 flex items-center gap-0.5 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Verified Buyer
                    </span>
                  </p>
                </div>

                {review.productName && (
                  <div className="mt-4 pt-3 border-t border-border-sand/40 flex items-center justify-between text-xs">
                    <span className="text-mid-gray font-medium">Verified for:</span>
                    <Link
                      href={`/products/${review.productSlug}`}
                      className="font-bold text-terracotta hover:text-charcoal transition-colors truncate max-w-[170px]"
                    >
                      {review.productName} &rarr;
                    </Link>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
