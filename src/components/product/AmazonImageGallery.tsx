'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { ProductImages as ProductImagesType } from '@/types/product';
import WishlistIcon from '@/components/dormant/WishlistIcon';
import { Maximize2, ShieldCheck, Sparkles, ChevronLeft, ChevronRight, Share2, Check } from 'lucide-react';

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
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  // Position coordinates in percentage (0 to 100)
  const [coords, setCoords] = useState({ x: 50, y: 50, px: 0, py: 0 });

  const containerRef = useRef<HTMLDivElement>(null);

  // Lens size dimensions in pixels
  const LENS_WIDTH = 140;
  const LENS_HEIGHT = 105;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    // Raw mouse position relative to image box
    let mouseX = e.clientX - rect.left;
    let mouseY = e.clientY - rect.top;

    // Constrain lens within box bounds
    const halfW = LENS_WIDTH / 2;
    const halfH = LENS_HEIGHT / 2;

    let lensX = Math.max(0, Math.min(mouseX - halfW, rect.width - LENS_WIDTH));
    let lensY = Math.max(0, Math.min(mouseY - halfH, rect.height - LENS_HEIGHT));

    // Calculate background zoom percentage (0% to 100%)
    const pctX = (lensX / (rect.width - LENS_WIDTH)) * 100;
    const pctY = (lensY / (rect.height - LENS_HEIGHT)) * 100;

    setCoords({
      x: pctX,
      y: pctY,
      px: lensX,
      py: lensY,
    });
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  const currentImage = allImages[activeIndex] || images.primary;

  return (
    <div className="relative">
      
      <div className="flex flex-col-reverse lg:flex-row gap-4 items-start">
        
        {/* Left Stacked 5-Thumbnail Strip (Desktop) / Horizontal Scroll Rail (Mobile) */}
        <div className="flex lg:flex-col gap-2.5 overflow-x-auto lg:overflow-y-auto no-scrollbar w-full lg:w-20 flex-shrink-0">
          {allImages.slice(0, 6).map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              onMouseEnter={() => setActiveIndex(idx)}
              className={`relative aspect-[4/3] w-18 lg:w-20 rounded-card overflow-hidden flex-shrink-0 border-2 transition-all duration-150 ${
                activeIndex === idx
                  ? 'border-espresso shadow-xs ring-1 ring-espresso'
                  : 'border-border-sand/70 opacity-70 hover:opacity-100 hover:border-espresso/40'
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

        {/* Main 4/3 Aspect Ratio Viewport */}
        <div className="relative flex-1 w-full flex flex-col">
          
          <div
            ref={containerRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onMouseMove={handleMouseMove}
            onClick={() => setIsLightboxOpen(true)}
            className="relative aspect-[4/3] bg-white rounded-card overflow-hidden border border-border-sand shadow-card cursor-crosshair group"
          >
            {/* Base Image */}
            <Image
              src={currentImage}
              alt={`${productName} view ${activeIndex + 1}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-center pointer-events-none select-none"
            />

            {/* Amazon-Style Shaded Hover Magnifier Lens Rectangle (Desktop only) */}
            {isHovering && (
              <div
                className="hidden lg:block absolute pointer-events-none border-2 border-antique-gold/80 bg-antique-gold/15 backdrop-blur-[1px] shadow-sm transition-opacity duration-75"
                style={{
                  width: `${LENS_WIDTH}px`,
                  height: `${LENS_HEIGHT}px`,
                  left: `${coords.px}px`,
                  top: `${coords.py}px`,
                }}
              />
            )}

            {/* Top Left Craft Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-espresso text-warm-ivory text-[10px] font-bold uppercase tracking-wider rounded-btn shadow-xs">
                <Sparkles className="w-3 h-3 text-warm-sand" /> 100% Solid Sheesham
              </span>
            </div>

            {/* Top Right Controls (Share + Wishlist + Counter) */}
            <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleShare();
                }}
                className="p-1.5 bg-white/90 backdrop-blur-xs rounded-full shadow-xs hover:bg-white text-espresso hover:text-antique-gold transition-colors"
                title="Copy link to share"
                aria-label="Share product"
              >
                {copiedShare ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
              </button>

              <div className="bg-white/90 backdrop-blur-xs rounded-full p-1 shadow-xs">
                <WishlistIcon productName={productName} className="w-4 h-4 text-soft-taupe hover:text-espresso" />
              </div>
            </div>

            {/* Previous / Next Arrow Controls */}
            {allImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 p-2 rounded-btn bg-white/90 text-espresso shadow-xs hover:bg-white transition-colors z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-btn bg-white/90 text-espresso shadow-xs hover:bg-white transition-colors z-10"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}

            {/* Counter Pill */}
            <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-espresso/80 backdrop-blur-xs text-warm-ivory text-xs font-semibold rounded-btn pointer-events-none">
              {activeIndex + 1} / {allImages.length}
            </div>

          </div>

          {/* Amazon-Style Hint Text below the image */}
          <div className="text-center mt-2.5">
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="text-xs text-soft-taupe hover:text-espresso inline-flex items-center gap-1 font-medium underline transition-colors"
            >
              <Maximize2 className="w-3 h-3 text-antique-gold" />
              <span>Click to see full view</span>
            </button>
          </div>

        </div>

      </div>

      {/* 🔍 AMAZON-STYLE HIGH-RESOLUTION SIDE FLYOUT ZOOM PANE (Desktop Only) */}
      {isHovering && (
        <div
          className="hidden lg:block absolute left-[calc(100%+1.5rem)] top-0 w-[540px] h-[480px] bg-white rounded-card overflow-hidden shadow-2xl border-2 border-border-sand z-50 pointer-events-none animate-in fade-in duration-100"
          style={{
            backgroundImage: `url(${currentImage})`,
            backgroundPosition: `${coords.x}% ${coords.y}%`,
            backgroundSize: '280%',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute bottom-3 left-3 px-3 py-1 bg-espresso/80 backdrop-blur-xs text-warm-ivory text-[11px] font-semibold rounded-btn">
            High-Resolution Wood Grain &amp; Joinery View (2.8× Zoom)
          </div>
        </div>
      )}

      {/* Fullscreen Lightbox Modal on Click */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-espresso/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full aspect-[4/3] bg-white rounded-card overflow-hidden">
            <Image
              src={currentImage}
              alt={productName}
              fill
              sizes="95vw"
              className="object-contain"
            />
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 px-3 py-1.5 bg-espresso text-warm-ivory text-xs font-bold rounded-btn shadow-md hover:bg-espresso/80"
            >
              ✕ Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
