'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, ChevronLeft, ChevronRight, Share2, Check } from 'lucide-react';
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

  return (
    <div className="relative">
      <div className="flex flex-col-reverse lg:flex-row gap-4 items-start">
        
        {/* Left Stacked Thumbnail Strip (Desktop) / Horizontal Scroll Rail (Mobile) */}
        <div className="flex lg:flex-col gap-2.5 overflow-x-auto lg:overflow-y-auto no-scrollbar w-full lg:w-20 flex-shrink-0">
          {allImages.slice(0, 6).map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              onMouseEnter={() => setActiveIndex(idx)}
              className={`relative aspect-[4/3] w-18 lg:w-20 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all duration-150 ${
                activeIndex === idx
                  ? 'border-primary shadow-xs ring-1 ring-primary scale-[1.02]'
                  : 'border-border opacity-75 hover:opacity-100 hover:border-primary/40'
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

        {/* Main Viewport */}
        <div className="relative flex-1 w-full flex flex-col">
          <div
            ref={containerRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onMouseMove={handleMouseMove}
            onClick={() => setIsLightboxOpen(true)}
            className="relative aspect-[4/3] bg-surface rounded-2xl overflow-hidden border border-border shadow-card cursor-zoom-in group select-none"
          >
            {/* Base Image Viewport with In-place Smooth Zoom */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative w-full h-full overflow-hidden"
              >
                <Image
                  src={currentImage}
                  alt={`${productName} view ${activeIndex + 1}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className={`object-cover object-center pointer-events-none select-none transition-transform ${
                    isHovering
                      ? 'scale-[1.8] duration-100 ease-out'
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
            <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleShare();
                }}
                className="p-1.5 bg-surface/90 backdrop-blur-xs rounded-full shadow-xs hover:bg-surface text-primary hover:text-accent transition-colors cursor-pointer"
                title="Copy link to share"
                aria-label="Share product"
              >
                {copiedShare ? <Check className="w-4 h-4 text-accent" /> : <Share2 className="w-4 h-4" />}
              </button>

              <div className="bg-surface/90 backdrop-blur-xs rounded-full p-1 shadow-xs">
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
                  className="opacity-0 group-hover:opacity-100 transition-opacity absolute left-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-surface/90 text-primary shadow-xs hover:bg-surface transition-colors z-10 cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-surface/90 text-primary shadow-xs hover:bg-surface transition-colors z-10 cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}

            {/* Counter Pill */}
            <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-primary/80 backdrop-blur-xs text-primary-text text-xs font-semibold rounded-full pointer-events-none">
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
              <span>Click to open full view</span>
            </button>
            <span className="text-xs text-content-muted">Hover to inspect detail</span>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal on Click */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-primary/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full aspect-[4/3] bg-surface rounded-2xl overflow-hidden shadow-2xl border border-border">
            <Image
              src={currentImage}
              alt={productName}
              fill
              sizes="95vw"
              className="object-contain"
            />
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 px-4 py-2 bg-primary text-primary-text text-xs font-semibold rounded-full shadow-md hover:bg-primary-hover cursor-pointer"
            >
              ✕ Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
