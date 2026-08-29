'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { ProductImages as ProductImagesType } from '@/types/product';
import WishlistIcon from '@/components/dormant/WishlistIcon';
import { Maximize2, ShieldCheck, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

interface AmazonImageGalleryProps {
  images: ProductImagesType;
  productName: string;
}

export default function AmazonImageGallery({ images, productName }: AmazonImageGalleryProps) {
  const allImages = [
    images.primary,
    ...(images.gallery || []),
    ...(images.lifestyle || []),
    ...(images.detail || []),
  ].filter((img, index, self) => img && self.indexOf(img) === index);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4 items-start">
      
      {/* Left Thumbnail Strip (Amazon Style Desktop) / Bottom Rail (Mobile) */}
      <div className="flex lg:flex-col gap-2.5 overflow-x-auto lg:overflow-y-auto no-scrollbar w-full lg:w-20 lg:max-h-[540px] flex-shrink-0">
        {allImages.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            onMouseEnter={() => setActiveIndex(idx)}
            className={`relative w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all duration-150 ${
              activeIndex === idx
                ? 'border-espresso shadow-md ring-2 ring-warm-sand'
                : 'border-warm-sand/50 opacity-70 hover:opacity-100 hover:border-espresso/50'
            }`}
          >
            <Image
              src={img}
              alt={`${productName} thumbnail ${idx + 1}`}
              fill
              sizes="80px"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main High-Res Image Viewport with Amazon-Style Hover Zoom Lens */}
      <div className="relative flex-1 w-full aspect-square sm:aspect-[4/3] lg:aspect-square bg-white rounded-3xl overflow-hidden border border-warm-sand/70 shadow-card group">
        
        {/* Main Image Container */}
        <div
          ref={containerRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onMouseMove={handleMouseMove}
          onClick={() => setIsZoomed(true)}
          className="relative w-full h-full cursor-crosshair overflow-hidden"
        >
          <Image
            src={allImages[activeIndex] || images.primary}
            alt={`${productName} view ${activeIndex + 1}`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={`object-cover object-center transition-transform duration-100 ease-out ${
              isHovering ? 'scale-150' : 'scale-100'
            }`}
            style={
              isHovering
                ? {
                    transformOrigin: `${mousePos.x}% ${mousePos.y}%`,
                  }
                : undefined
            }
          />
        </div>

        {/* Amazon-style Badges Top Left */}
        <div className="absolute top-3.5 left-3.5 flex flex-col gap-1.5 z-10 pointer-events-none">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-espresso text-warm-ivory text-[10px] font-bold uppercase tracking-wider rounded-md shadow-sm">
            <Sparkles className="w-3 h-3 text-warm-sand" /> 100% Solid Wood
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-muted-olive text-warm-ivory text-[10px] font-bold uppercase tracking-wider rounded-md shadow-sm">
            <ShieldCheck className="w-3 h-3" /> 5-Yr Warranty
          </span>
        </div>

        {/* Counter Badge Top Right */}
        <div className="absolute top-3.5 right-3.5 flex items-center gap-2 z-10">
          <div className="px-2.5 py-1 bg-espresso/80 backdrop-blur-md text-warm-ivory text-xs font-medium rounded-full">
            {activeIndex + 1} / {allImages.length}
          </div>
          <div className="bg-white/90 backdrop-blur-md rounded-full shadow-sm">
            <WishlistIcon productName={productName} className="w-5 h-5 text-soft-taupe hover:text-espresso" />
          </div>
        </div>

        {/* Navigation Arrows for Quick Swiping */}
        {allImages.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/85 text-espresso shadow hover:bg-white transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/85 text-espresso shadow hover:bg-white transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Hover Zoom Hint */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-md text-espresso text-[11px] font-medium rounded-xl shadow-xs pointer-events-none">
          <Maximize2 className="w-3.5 h-3.5 text-muted-olive" />
          <span>Roll over image to zoom</span>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-espresso/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full aspect-square sm:aspect-[4/3]">
            <Image
              src={allImages[activeIndex]}
              alt={productName}
              fill
              sizes="90vw"
              className="object-contain"
            />
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-espresso text-warm-ivory text-xs font-semibold rounded-full border border-warm-sand/30">
              Click anywhere to close full view
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
