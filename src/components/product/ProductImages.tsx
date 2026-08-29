'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ProductImages as ProductImagesType } from '@/types/product';
import WishlistIcon from '@/components/dormant/WishlistIcon';
import { Maximize2 } from 'lucide-react';

interface ProductImagesProps {
  images: ProductImagesType;
  productName: string;
}

export default function ProductImages({ images, productName }: ProductImagesProps) {
  const allImages = [
    images.primary,
    ...(images.gallery || []),
    ...(images.lifestyle || []),
    ...(images.detail || []),
  ].filter((img, index, self) => img && self.indexOf(img) === index);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="space-y-4">
      {/* Main Hero Gallery Image */}
      <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square bg-white rounded-3xl overflow-hidden border border-warm-sand/60 shadow-card group">
        <Image
          src={allImages[activeIndex] || images.primary}
          alt={`${productName} - View ${activeIndex + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Counter Badge */}
        <div className="absolute top-4 left-4 px-2.5 py-1 bg-espresso/75 backdrop-blur-md text-warm-ivory text-xs font-medium rounded-full">
          {activeIndex + 1} / {allImages.length}
        </div>

        {/* Wishlist Top Right */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md rounded-full shadow-sm">
          <WishlistIcon productName={productName} className="w-5 h-5 text-soft-taupe hover:text-espresso" />
        </div>

        {/* Zoom Hint Indicator */}
        <button
          onClick={() => setIsZoomed(true)}
          className="absolute bottom-4 right-4 p-2.5 bg-white/90 backdrop-blur-md text-espresso rounded-full shadow hover:bg-espresso hover:text-warm-ivory transition-colors"
          aria-label="Enlarge image"
        >
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>

      {/* Thumbnails Row */}
      {allImages.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
          {allImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden flex-shrink-0 border-2 transition-all duration-200 ${
                activeIndex === idx
                  ? 'border-espresso shadow-md ring-2 ring-warm-sand/60'
                  : 'border-warm-sand/60 opacity-70 hover:opacity-100'
              }`}
            >
              <Image
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                fill
                sizes="88px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-espresso/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full aspect-square sm:aspect-[4/3]">
            <Image
              src={allImages[activeIndex]}
              alt={productName}
              fill
              sizes="90vw"
              className="object-contain"
            />
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-espresso text-warm-ivory text-xs rounded-full">
              Click anywhere to close
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
