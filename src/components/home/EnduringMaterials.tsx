'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function EnduringMaterials() {
  const materials = [
    {
      title: 'Powder-Coated Steel',
      subtitle: '100% rust-resistant electrostatic matte finish built to withstand humid monsoons and coastal air.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      tag: 'Rust-Resistant',
    },
    {
      title: 'Engineered Wood Tops',
      subtitle: 'High-density scratch-resistant Sheesham & Walnut finishes that handle hot cups, spills, and daily work.',
      image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80',
      tag: 'Scratch-Proof',
    },
    {
      title: 'Heavy-Duty Hardware',
      subtitle: 'Precision-tested folding hinges and smooth interlocking joints rated for over 10,000 collapse cycles.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      tag: 'Built to Last',
    },
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-xl">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#2C2926] tracking-tight">
              Built with enduring materials.
            </h2>
            <p className="text-sm sm:text-base text-[#6B6962] font-sans mt-3 leading-relaxed">
              No hollow plastic or flimsy particle board. Crafted with heavy-gauge steel and solid engineered wood for real daily life.
            </p>
          </div>

          <Link
            href="/about"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#2C2926] hover:text-[#7A6B5D] transition-colors self-start sm:self-auto"
          >
            <span>Learn about our build</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Material Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {materials.map((m, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl border border-[#DEDAD1] overflow-hidden transition-all duration-300 hover:border-[#2C2926] hover:shadow-md flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EBE7DF]">
                <Image
                  src={m.image}
                  alt={m.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-sans font-semibold uppercase tracking-wider bg-[#2C2926] text-white">
                    {m.tag}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl text-[#2C2926] mb-2 group-hover:text-[#7A6B5D] transition-colors">
                  {m.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6B6962] font-sans leading-relaxed">
                  {m.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
