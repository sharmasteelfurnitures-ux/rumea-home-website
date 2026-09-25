'use client';

import React from 'react';
import { motion } from 'framer-motion';
import testimonials from '@/data/testimonials.json';

export default function CustomerProof() {
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: smoothEase }}
          className="mb-10 sm:mb-12 text-center max-w-xl mx-auto"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#78806A] block mb-2">
            REAL HOMES, REAL SPACES
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl text-[#2C2926] font-bold tracking-tight">
            Loved in everyday Indian homes
          </h2>
        </motion.div>

        {/* 3 Genuine Customer Reviews with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: smoothEase }}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#D8C9B5] shadow-xs hover:border-[#2C2926]/30 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5-Star indicator */}
                <div className="flex items-center gap-1 text-[#78806A] text-xs mb-4">
                  {'★'.repeat(5)}
                  <span className="text-[11px] text-[#A69B8C] ml-1 font-medium">Verified Buyer</span>
                </div>
                <p className="text-sm font-sans text-[#2C2926] leading-relaxed mb-6">
                  &ldquo;{review.reviewText}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#D8C9B5]/50">
                <p className="font-heading font-bold text-xs text-[#2C2926]">
                  {review.name} <span className="text-[#6B6962] font-normal font-sans">• {review.city}</span>
                </p>
                <p className="text-[11px] text-[#78806A] font-semibold mt-0.5">
                  {review.productName}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
