'use client';

import React, { useState } from 'react';
import { Star, CheckCircle2, ThumbsUp, MessageSquare } from 'lucide-react';

interface RatingBreakdownProps {
  rating: number;
  reviewCount: number;
}

export default function RatingBreakdown({ rating, reviewCount }: RatingBreakdownProps) {
  const [helpfulCounts, setHelpfulCounts] = useState<Record<number, number>>({
    1: 18,
    2: 12,
    3: 9,
  });
  const [voted, setVoted] = useState<Record<number, boolean>>({});

  const handleHelpful = (id: number) => {
    if (voted[id]) return;
    setHelpfulCounts((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    setVoted((prev) => ({ ...prev, [id]: true }));
  };

  const distribution = [
    { stars: 5, pct: 82 },
    { stars: 4, pct: 12 },
    { stars: 3, pct: 4 },
    { stars: 2, pct: 1 },
    { stars: 1, pct: 1 },
  ];

  const sampleReviews = [
    {
      id: 1,
      author: 'Vikram S.',
      city: 'Indiranagar, Bengaluru',
      date: '14 August 2026',
      rating: 5,
      title: 'Remarkable Sheesham grain and rock-solid build',
      comment:
        'Was skeptical buying solid wood furniture online, but Rumea delivered on every promise. The timber is heavy, genuine heartwood with no chemical odor. Delivery team brought it right up to the 4th floor elevator and set it up in 15 minutes.',
    },
    {
      id: 2,
      author: 'Ananya R.',
      city: 'Bandra West, Mumbai',
      date: '28 July 2026',
      rating: 5,
      title: 'Fits our 2BHK flat proportions like a charm',
      comment:
        'The dimensions are accurately tailored for compact urban living rooms without looking cramped. The natural satin finish shows off the rich natural grain without being overly shiny. Exceptional value compared to retail showrooms in Mumbai.',
    },
    {
      id: 3,
      author: 'Karthik N.',
      city: 'Jubilee Hills, Hyderabad',
      date: '05 July 2026',
      rating: 5,
      title: 'Zero wobble, true mortise & tenon joints',
      comment:
        'Inspected the joints underneath — authentic interlocking mortise and tenon woodwork. You can feel the heft immediately when moving it. 5 stars for customer service on WhatsApp too.',
    },
  ];

  return (
    <div id="customer-reviews" className="bg-white rounded-card p-6 sm:p-8 border border-border-sand shadow-card my-12">
      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-antique-gold flex items-center gap-1.5">
          <MessageSquare className="w-3.5 h-3.5" /> CUSTOMER EXPERIENCES
        </span>
        <h3 className="font-serif font-bold text-xl sm:text-2xl text-espresso mt-1">
          Customer Ratings &amp; Verified Reviews
        </h3>
      </div>

      {/* 5-Star Distribution Bar Chart */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-border-sand">
        
        {/* Left Overall Score */}
        <div className="md:col-span-4 text-center md:text-left md:border-r border-border-sand md:pr-6">
          <div className="flex items-baseline justify-center md:justify-start gap-2">
            <span className="font-serif font-bold text-5xl text-espresso">
              {rating.toFixed(1)}
            </span>
            <span className="text-soft-taupe text-sm">out of 5</span>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-1 text-amber-500 my-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>

          <p className="text-xs text-soft-taupe font-medium">
            Based on {reviewCount} verified homeowner ratings
          </p>

          <div className="mt-4 p-2.5 bg-warm-ivory rounded-btn flex items-center justify-center md:justify-start gap-1.5 text-xs text-antique-gold font-bold border border-border-sand">
            <CheckCircle2 className="w-4 h-4" />
            <span>100% Verified Buyer Feedback</span>
          </div>
        </div>

        {/* Right Star Bars */}
        <div className="md:col-span-8 space-y-2.5">
          {distribution.map((d) => (
            <div key={d.stars} className="flex items-center gap-3 text-xs">
              <span className="w-12 text-soft-taupe font-semibold text-right">
                {d.stars} star
              </span>
              <div className="flex-1 h-3 bg-ivory-dark rounded-btn overflow-hidden">
                <div
                  className="h-full bg-antique-gold rounded-btn transition-all duration-500"
                  style={{ width: `${d.pct}%` }}
                />
              </div>
              <span className="w-10 text-espresso font-bold text-right">
                {d.pct}%
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* Individual Customer Reviews List with Helpfulness Voting */}
      <div className="mt-8 space-y-6">
        <h4 className="font-serif font-semibold text-base text-espresso">
          Top Verified Reviews from India
        </h4>

        <div className="space-y-4 divide-y divide-border-sand">
          {sampleReviews.map((rev) => (
            <div key={rev.id} className="pt-4 first:pt-0 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xs sm:text-sm text-espresso">{rev.author}</span>
                  <span className="text-xs text-soft-taupe">({rev.city})</span>
                  <span className="inline-flex items-center gap-0.5 text-[10px] text-antique-gold font-bold bg-warm-sand/30 px-2 py-0.5 rounded-btn">
                    <CheckCircle2 className="w-3 h-3" /> Verified Purchase
                  </span>
                </div>
                <span className="text-[11px] text-soft-taupe">{rev.date}</span>
              </div>

              <div className="flex text-amber-500">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>

              <p className="font-serif font-semibold text-xs sm:text-sm text-espresso">
                {rev.title}
              </p>

              <p className="text-xs text-soft-taupe leading-relaxed">
                {rev.comment}
              </p>

              <div className="pt-1 flex items-center gap-3 text-xs text-soft-taupe">
                <button
                  onClick={() => handleHelpful(rev.id)}
                  disabled={voted[rev.id]}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-btn border text-xs transition-colors ${
                    voted[rev.id]
                      ? 'bg-warm-ivory text-antique-gold font-bold border-antique-gold'
                      : 'border-border-sand hover:bg-warm-ivory text-espresso'
                  }`}
                >
                  <ThumbsUp className="w-3 h-3" />
                  <span>Helpful ({helpfulCounts[rev.id]})</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
