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
    <div id="customer-reviews" className="bg-white rounded-card p-6 sm:p-8 border border-[#D8C9B5] shadow-card my-12">
      <div className="mb-8">
        <span className="text-xs font-medium uppercase tracking-[0.10em] text-[#48563A] flex items-center gap-1.5">
          <MessageSquare className="w-3.5 h-3.5 text-[#48563A]" /> CUSTOMER EXPERIENCES
        </span>
        <h3 className="font-serif font-medium text-xl sm:text-2xl text-[#2C2926] mt-1">
          Customer Ratings &amp; Verified Reviews
        </h3>
      </div>

      {/* 5-Star Distribution Bar Chart */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-[#D8C9B5]">
        
        {/* Left Overall Score */}
        <div className="md:col-span-4 text-center md:text-left md:border-r border-[#D8C9B5] md:pr-6">
          <div className="flex items-baseline justify-center md:justify-start gap-2">
            <span className="font-serif font-semibold text-5xl text-[#2C2926]">
              {rating.toFixed(1)}
            </span>
            <span className="text-[#A69B8C] text-sm">out of 5</span>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-1 text-[#D8C9B5] my-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>

          <p className="text-xs text-[#A69B8C] font-normal">
            Based on {reviewCount} verified homeowner ratings
          </p>

          <div className="mt-4 p-2.5 bg-[#F7F4EE] rounded-btn flex items-center justify-center md:justify-start gap-1.5 text-xs text-[#48563A] font-medium border border-[#D8C9B5]">
            <CheckCircle2 className="w-4 h-4" />
            <span>100% Verified Buyer Feedback</span>
          </div>
        </div>

        {/* Right Star Bars */}
        <div className="md:col-span-8 space-y-2.5">
          {distribution.map((d) => (
            <div key={d.stars} className="flex items-center gap-3 text-xs">
              <span className="w-12 text-[#A69B8C] font-medium text-right">
                {d.stars} star
              </span>
              <div className="flex-1 h-3 bg-[#F7F4EE] border border-[#D8C9B5]/40 rounded-btn overflow-hidden">
                <div
                  className="h-full bg-[#48563A] rounded-btn transition-all duration-500"
                  style={{ width: `${d.pct}%` }}
                />
              </div>
              <span className="w-10 text-[#2C2926] font-medium text-right">
                {d.pct}%
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* Individual Customer Reviews List with Helpfulness Voting */}
      <div className="mt-8 space-y-6">
        <h4 className="font-serif font-medium text-base text-[#2C2926]">
          Top Verified Reviews from India
        </h4>

        <div className="space-y-4 divide-y divide-[#D8C9B5]">
          {sampleReviews.map((rev) => (
            <div key={rev.id} className="pt-4 first:pt-0 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-xs sm:text-sm text-[#2C2926]">{rev.author}</span>
                  <span className="text-xs text-[#A69B8C]">({rev.city})</span>
                  <span className="inline-flex items-center gap-0.5 text-[10px] text-[#48563A] font-medium bg-[#48563A]/12 px-2 py-0.5 rounded-btn">
                    <CheckCircle2 className="w-3 h-3" /> Verified Purchase
                  </span>
                </div>
                <span className="text-[11px] text-[#A69B8C]">{rev.date}</span>
              </div>

              <div className="flex text-[#D8C9B5]">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>

              <p className="font-serif font-medium text-xs sm:text-sm text-[#2C2926]">
                {rev.title}
              </p>

              <p className="text-xs text-[#A69B8C] leading-relaxed">
                {rev.comment}
              </p>

              <div className="pt-1 flex items-center gap-3 text-xs text-[#A69B8C]">
                <button
                  onClick={() => handleHelpful(rev.id)}
                  disabled={voted[rev.id]}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-btn border text-xs transition-colors ${
                    voted[rev.id]
                      ? 'bg-[#F7F4EE] text-[#48563A] font-medium border-[#48563A]'
                      : 'border-[#D8C9B5] hover:bg-[#F7F4EE] text-[#2C2926]'
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
