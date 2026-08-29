import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, CheckCircle2, Quote } from 'lucide-react';
import { getTestimonials } from '@/lib/products';

export default function Testimonials() {
  const reviews = getTestimonials();

  return (
    <section className="py-16 md:py-24 bg-ivory-dark/40 border-t border-warm-sand/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-muted-olive">
            REAL HOMES, REAL STORIES
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-espresso mt-1">
            Good Design Brings Us Together
          </h2>
          <p className="text-soft-taupe text-sm sm:text-base mt-2">
            Verified homeowners across Bengaluru, Mumbai, Delhi, and Hyderabad share their experience with Rumea Home.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-warm-sand/50 shadow-card flex flex-col justify-between hover:border-warm-sand hover:shadow-warm transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-warm-sand/50" />
                </div>

                <p className="text-sm text-espresso leading-relaxed italic mb-6">
                  &ldquo;{review.reviewText}&rdquo;
                </p>
              </div>

              <div>
                <div className="pt-4 border-t border-warm-sand/30">
                  <p className="font-display font-bold text-sm text-espresso">
                    {review.name}
                  </p>
                  <p className="text-xs text-soft-taupe flex items-center gap-1.5 mt-0.5">
                    <span>{review.city}</span>
                    <span>•</span>
                    <span className="text-muted-olive font-medium flex items-center gap-0.5">
                      <CheckCircle2 className="w-3 h-3" /> Verified Purchase
                    </span>
                  </p>
                </div>

                <Link
                  href={`/products/${review.productSlug}`}
                  className="mt-3.5 flex items-center gap-2.5 p-2 bg-warm-ivory rounded-xl hover:bg-warm-sand/30 transition-colors"
                >
                  <div className="relative w-8 h-8 rounded-lg overflow-hidden flex-shrink-0 bg-ivory-dark">
                    <Image
                      src={review.productImage}
                      alt={review.productName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs font-medium text-espresso truncate">
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
