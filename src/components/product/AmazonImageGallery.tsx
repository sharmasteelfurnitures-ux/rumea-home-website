'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, ChevronLeft, ChevronRight, Share2, Check, ChevronDown, ChevronUp } from 'lucide-react';
import WishlistIcon from '@/components/dormant/WishlistIcon';

interface AmazonImageGalleryProps {
  images: {
    primary: string;
    hover?: string;
    gallery?: string[];
  };
  productName: string;
}

export default function AmazonImageGallery({ images, productName }: AmazonImageGalleryProps) {
  const allImages = Array.from(
    new Set([images.primary, images.hover, ...(images.gallery || [])].filter((img): img is string => Boolean(img)))
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });
  const [showAllThumbnails, setShowAllThumbnails] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
    setCursorPos({ x, y });
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

  // Amazon-style: When collapsed, show first 5 thumbnails, and the 6th slot as "+N"
  const COLLAPSED_LIMIT = 5;
  const hasMoreThumbnails = allImages.length > COLLAPSED_LIMIT;
  const remainingCount = allImages.length - COLLAPSED_LIMIT;

  const visibleThumbnails = showAllThumbnails || !hasMoreThumbnails 
    ? allImages 
    : allImages.slice(0, COLLAPSED_LIMIT);

  return (
    <div className="relative">
      <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-5 items-start">
        
        {/* Left Stacked Thumbnail Strip (Desktop) / Horizontal Rail (Mobile) */}
        <div className="flex lg:flex-col gap-2.5 overflow-x-auto lg:overflow-y-auto no-scrollbar w-full lg:w-20 flex-shrink-0 max-h-[600px] py-1">
          {visibleThumbnails.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              onMouseEnter={() => setActiveIndex(idx)}
              className={`relative aspect-square w-16 lg:w-20 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all duration-150 bg-surface ${
                activeIndex === idx
                  ? 'border-primary ring-2 ring-primary/40 shadow-sm scale-[1.02]'
                  : 'border-border opacity-80 hover:opacity-100 hover:border-primary/50'
              }`}
              title={`${productName} thumbnail ${idx + 1}`}
            >
              <Image
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                fill
                sizes="80px"
                className="object-contain p-1"
              />
            </button>
          ))}

          {/* Amazon-style "+N more" expander thumbnail slot */}
          {hasMoreThumbnails && !showAllThumbnails && (
            <button
              onClick={() => setShowAllThumbnails(true)}
              className="relative aspect-square w-16 lg:w-20 rounded-xl overflow-hidden flex-shrink-0 border-2 border-dashed border-primary/50 bg-surface hover:bg-surface-page transition-all duration-150 group cursor-pointer"
              title={`View ${remainingCount} more images`}
            >
              <Image
                src={allImages[COLLAPSED_LIMIT]}
                alt="More images thumbnail"
                fill
                sizes="80px"
                className="object-contain p-1 opacity-40 blur-[0.5px]"
              />
              <div className="absolute inset-0 bg-primary/75 backdrop-blur-[1px] flex flex-col items-center justify-center text-primary-text transition-colors group-hover:bg-primary/85">
                <span className="text-base font-bold tracking-tight">+{remainingCount}</span>
                <span className="text-[10px] font-medium opacity-90">more</span>
              </div>
            </button>
          )}

          {/* Collapse button when expanded */}
          {hasMoreThumbnails && showAllThumbnails && (
            <button
              onClick={() => setShowAllThumbnails(false)}
              className="hidden lg:flex items-center justify-center p-2 rounded-xl border border-border bg-surface text-content-muted hover:text-primary text-xs font-medium gap-1 transition-colors"
              title="Show fewer thumbnails"
            >
              <ChevronUp className="w-3.5 h-3.5" />
              <span>Less</span>
            </button>
          )}
        </div>

        {/* Main Viewport: Pixel-perfect Amazon-style 1:1 Square Frame (2000x2000 ready) */}
        <div className="relative flex-1 w-full flex flex-col">
          <div
            ref={containerRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onMouseMove={handleMouseMove}
            onClick={() => setIsLightboxOpen(true)}
            className="relative aspect-square w-full bg-surface rounded-2xl overflow-hidden border border-border shadow-card cursor-zoom-in group select-none flex items-center justify-center"
          >
            {/* Base Image Viewport with In-place Smooth Zoom */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="relative w-full h-full p-3 sm:p-6 flex items-center justify-center overflow-hidden"
              >
                <Image
                  src={currentImage}
                  alt={`${productName} view ${activeIndex + 1}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className={`object-contain pointer-events-none select-none transition-transform ${
                    isHovering
                      ? 'scale-[2.4] duration-100 ease-out'
                      : 'scale-100 duration-300 ease-out'
                  }`}
                  style={
                    isHovering
                      ? {
                          transformOrigin: `${cursorPos.x}% ${cursorPos.y}%`,
                        }
                      : undefined
                  }
                />
              </motion.div>
            </AnimatePresence>

            {/* Top Right Controls (Share + Wishlist) */}
            <div className="absolute top-3.5 right-3.5 flex items-center gap-2 z-10">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleShare();
                }}
                className="p-2 bg-surface/90 backdrop-blur-xs rounded-full shadow-xs hover:bg-surface text-primary hover:text-accent transition-colors cursor-pointer border border-border/50"
                title="Copy link to share"
                aria-label="Share product"
              >
                {copiedShare ? <Check className="w-4 h-4 text-accent" /> : <Share2 className="w-4 h-4" />}
              </button>

              <div className="bg-surface/90 backdrop-blur-xs rounded-full p-1.5 shadow-xs border border-border/50">
                <WishlistIcon productName={productName} className="w-4 h-4 text-content-muted hover:text-primary" />
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
                  className="opacity-0 group-hover:opacity-100 transition-opacity absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-surface/90 text-primary shadow-sm hover:bg-surface transition-colors z-10 cursor-pointer border border-border/60"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-surface/90 text-primary shadow-sm hover:bg-surface transition-colors z-10 cursor-pointer border border-border/60"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Counter Pill */}
            <div className="absolute bottom-3.5 right-3.5 px-3 py-1 bg-primary/85 backdrop-blur-xs text-primary-text text-xs font-semibold rounded-full pointer-events-none shadow-xs">
              {activeIndex + 1} / {allImages.length}
            </div>
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between mt-2.5 px-1">
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="text-xs text-content-muted hover:text-primary inline-flex items-center gap-1.5 font-medium transition-colors cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5 text-accent" />
              <span>Click to open full resolution (all {allImages.length} photos)</span>
            </button>
            <span className="text-xs text-content-muted hidden sm:inline">Roll over image to zoom</span>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal on Click (Amazon-style 2000x2000 inspection) */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-primary/95 backdrop-blur-md flex flex-col items-center justify-center p-3 sm:p-6"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Main Inspection Viewport */}
          <div 
            className="relative max-w-4xl max-h-[75vh] sm:max-h-[80vh] w-full aspect-square bg-surface rounded-2xl overflow-hidden shadow-2xl border border-border flex items-center justify-center p-4 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={currentImage}
              alt={productName}
              fill
              sizes="90vw"
              priority
              className="object-contain p-4"
            />
            
            {/* Close Button */}
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 px-4 py-2 bg-primary text-primary-text text-xs font-semibold rounded-full shadow-md hover:bg-primary-hover cursor-pointer border border-border/30 z-20"
            >
              ✕ Close
            </button>

            {/* Lightbox Prev / Next */}
            {allImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-surface/90 text-primary shadow-lg hover:bg-surface transition-colors z-20 cursor-pointer border border-border"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-surface/90 text-primary shadow-lg hover:bg-surface transition-colors z-20 cursor-pointer border border-border"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Image index counter in lightbox */}
            <div className="absolute bottom-4 left-4 px-3 py-1 bg-primary/85 text-primary-text text-xs font-semibold rounded-full pointer-events-none">
              Photo {activeIndex + 1} of {allImages.length}
            </div>
          </div>

          {/* Lightbox Bottom Thumbnail Rail (All 10 thumbnails) */}
          <div 
            className="flex items-center gap-2 mt-4 max-w-4xl overflow-x-auto no-scrollbar py-1 px-2"
            onClick={(e) => e.stopPropagation()}
          >
            {allImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative aspect-square w-14 sm:w-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all bg-surface ${
                  activeIndex === idx
                    ? 'border-white ring-2 ring-white/50 scale-105'
                    : 'border-border/60 opacity-60 hover:opacity-100'
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  sizes="64px"
                  className="object-contain p-0.5"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
