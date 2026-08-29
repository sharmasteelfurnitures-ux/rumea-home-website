'use client';

import React from 'react';
import { Star, CheckCircle2, ThumbsUp } from 'lucide-react';

interface RatingBreakdownProps {
  rating: number;
  reviewCount: number;
}

export default function RatingBreakdown({ rating, reviewCount }: RatingBreakdownProps) {
  const distribution = [
    { stars: 5, pct: 82 },
    { stars: 4, pct: 12 },
    { stars: 3, pct: 4 },
    { stars: 2, pct: 1 },
    { stars: 1, pct: 1 },
  ];

  const highlights = [
    '100% Real Wood Feel',
    'Sturdy & Heavy Frame',
    'Smooth Finish',
    'Timely Delivery',
    'Easy Setup',
  ];

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-sand/70 shadow-card">
      <h3 className="font-display font-bold text-lg sm:text-xl text-espresso mb-6">
        Customer Reviews & Ratings (Amazon Verified)
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Left: Overall Rating Score */}
        <div className="md:col-span-4 text-center md:text-left md:border-r border-warm-sand/50 md:pr-6">
          <div className="flex items-baseline justify-center md:justify-start gap-2">
            <span className="font-display font-extrabold text-5xl text-espresso">
              {rating.toFixed(1)}
            </span>
            <span className="text-soft-taupe text-sm">out of 5</span>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-1 text-amber-400 my-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400" />
            ))}
          </div>

          <p className="text-xs text-soft-taupe font-medium">
            Based on {reviewCount} global Amazon & Website ratings
          </p>

          <div className="mt-4 p-2.5 bg-warm-ivory rounded-xl flex items-center justify-center md:justify-start gap-1.5 text-xs text-muted-olive font-semibold">
            <CheckCircle2 className="w-4 h-4" />
            <span>100% Verified Purchases</span>
          </div>
        </div>

        {/* Right: 5-Star Distribution Bar Chart (Amazon Style) */}
        <div className="md:col-span-8 space-y-2">
          {distribution.map((d) => (
            <div key={d.stars} className="flex items-center gap-3 text-xs">
              <span className="w-12 text-soft-taupe font-medium text-right">
                {d.stars} star
              </span>
              <div className="flex-1 h-3.5 bg-ivory-dark rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-400 rounded-full transition-all duration-500"
                  style={{ width: `${d.pct}%` }}
                />
              </div>
              <span className="w-10 text-espresso font-semibold text-right">
                {d.pct}%
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* Customer Tag Cloud */}
      <div className="mt-6 pt-5 border-t border-warm-sand/40">
        <p className="text-xs font-bold uppercase tracking-wider text-muted-olive mb-2.5 flex items-center gap-1">
          <ThumbsUp className="w-3.5 h-3.5" /> What Customers Love Most:
        </p>
        <div className="flex flex-wrap gap-2">
          {highlights.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-warm-ivory text-espresso text-xs font-medium rounded-full border border-warm-sand/50"
            >
              ✓ {tag}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
