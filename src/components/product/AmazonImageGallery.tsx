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
      
      {/* Left Stacked 5-Thumbnail Strip (Desktop) / Horizontal Rail (Mobile) */}
      <div className="flex lg:flex-col gap-2.5 overflow-x-auto lg:overflow-y-auto no-scrollbar w-full lg:w-20 flex-shrink-0">
        {allImages.slice(0, 6).map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            onMouseEnter={() => setActiveIndex(idx)}
            className={`relative aspect-[4/3] w-18 lg:w-20 rounded-card overflow-hidden flex-shrink-0 border-2 transition-all duration-150 ${
              activeIndex === idx
                ? 'border-espresso shadow-sm ring-1 ring-espresso'
                : 'border-border-sand/70 opacity-70 hover:opacity-100 hover:border-espresso/40'
            }`}
          >
            <Image
              src={img}
              alt={`${productName} view ${idx + 1}`}
              fill
              sizes="80px"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main 4/3 Aspect Ratio Viewport with Interactive Magnifier Zoom */}
      <div className="relative flex-1 w-full aspect-[4/3] bg-white rounded-card overflow-hidden border border-border-sand shadow-card group">
        
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
            sizes="(max-width: 1024px) 100vw, 55vw"
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

        {/* Top Left Craft Badges */}
        <div className="absolute top-3.5 left-3.5 flex flex-col gap-1.5 z-10 pointer-events-none">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-espresso text-warm-ivory text-[10px] font-bold uppercase tracking-wider rounded-btn shadow-xs">
            <Sparkles className="w-3 h-3 text-warm-sand" /> 100% Solid Wood
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-antique-gold text-white text-[10px] font-bold uppercase tracking-wider rounded-btn shadow-xs">
            <ShieldCheck className="w-3 h-3" /> 5-Yr Warranty
          </span>
        </div>

        {/* Counter Badge Top Right */}
        <div className="absolute top-3.5 right-3.5 flex items-center gap-2 z-10">
          <div className="px-2.5 py-1 bg-espresso/80 backdrop-blur-xs text-warm-ivory text-xs font-semibold rounded-btn">
            {activeIndex + 1} / {allImages.length}
          </div>
          <div className="bg-white/90 backdrop-blur-xs rounded-full p-1 shadow-xs">
            <WishlistIcon productName={productName} className="w-5 h-5 text-soft-taupe hover:text-espresso" />
          </div>
        </div>

        {/* Previous / Next Navigation Arrows */}
        {allImages.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-btn bg-white/90 text-espresso shadow hover:bg-white transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-btn bg-white/90 text-espresso shadow hover:bg-white transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Zoom Hint */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-xs text-espresso text-[11px] font-medium rounded-btn shadow-xs pointer-events-none">
          <Maximize2 className="w-3.5 h-3.5 text-antique-gold" />
          <span>Roll over to zoom</span>
        </div>

      </div>

      {/* Fullscreen Modal on Click */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-espresso/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full aspect-[4/3]">
            <Image
              src={allImages[activeIndex]}
              alt={productName}
              fill
              sizes="90vw"
              className="object-contain"
            />
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-espresso text-warm-ivory text-xs font-semibold rounded-btn border border-border-sand/40">
              Click anywhere to close
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
