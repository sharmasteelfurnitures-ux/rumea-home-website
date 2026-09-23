'use client';

import React from 'react';
import { motion } from 'framer-motion';
import testimonials from '@/data/testimonials.json';

export default function CustomerProof() {
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: smoothEase }}
          className="mb-10 sm:mb-12 text-center max-w-xl mx-auto"
        >
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#8A684A] block mb-2">
            REAL HOMES, REAL SPACES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1E1B] font-normal tracking-tight">
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
              className="bg-white rounded-xl p-6 sm:p-7 border border-[#DEDAD1] shadow-2xs hover:border-[#1E1E1B]/30 hover:shadow-xs transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <p className="text-sm font-sans text-[#1E1E1B] leading-relaxed mb-6">
                  &ldquo;{review.reviewText}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#DEDAD1]/50">
                <p className="font-sans font-semibold text-xs text-[#1E1E1B]">
                  {review.name} <span className="text-[#6B6962] font-normal">• {review.city}</span>
                </p>
                <p className="text-[11px] text-[#8A684A] font-medium mt-0.5">
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
