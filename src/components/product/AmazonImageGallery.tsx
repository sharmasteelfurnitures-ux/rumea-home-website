'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductImages as ProductImagesType } from '@/types/product';
import WishlistIcon from '@/components/dormant/WishlistIcon';
import { Maximize2, Sparkles, ChevronLeft, ChevronRight, Share2, Check } from 'lucide-react';

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
  const [zoomMode, setZoomMode] = useState<'side' | 'inner'>('side');

  // Zoom factor: 2.5x magnification
  const ZOOM_FACTOR = 2.5;

  const [lens, setLens] = useState({
    x: 0,
    y: 0,
    w: 160,
    h: 120,
    containerW: 600,
    containerH: 450,
    cursorXPercent: 50,
    cursorYPercent: 50,
  });

  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const containerW = rect.width;
    const containerH = rect.height;

    // Lens dimensions match proportional field of view
    const lensW = containerW / ZOOM_FACTOR;
    const lensH = containerH / ZOOM_FACTOR;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Clamp lens within bounds of main container
    const lensX = Math.max(0, Math.min(mouseX - lensW / 2, containerW - lensW));
    const lensY = Math.max(0, Math.min(mouseY - lensH / 2, containerH - lensH));

    const cursorXPercent = Math.max(0, Math.min(100, (mouseX / containerW) * 100));
    const cursorYPercent = Math.max(0, Math.min(100, (mouseY / containerH) * 100));

    setLens({
      x: lensX,
      y: lensY,
      w: lensW,
      h: lensH,
      containerW,
      containerH,
      cursorXPercent,
      cursorYPercent,
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

  // Calculate synchronized side flyout dimensions matching aspect ratio
  const flyoutWidth = Math.min(540, lens.containerW);
  const flyoutHeight = flyoutWidth * (lens.containerH / lens.containerW || 0.75);
  const innerWidth = flyoutWidth * ZOOM_FACTOR;
  const innerHeight = flyoutHeight * ZOOM_FACTOR;
  const offsetX = -(lens.x / lens.containerW) * innerWidth;
  const offsetY = -(lens.y / lens.containerH) * innerHeight;

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
            {/* Base Image Viewport */}
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
                    zoomMode === 'inner' && isHovering
                      ? 'scale-[2.3] duration-75 ease-out'
                      : 'scale-100 duration-200 ease-out'
                  }`}
                  style={
                    zoomMode === 'inner' && isHovering
                      ? {
                          transformOrigin: `${lens.cursorXPercent}% ${lens.cursorYPercent}%`,
                        }
                      : undefined
                  }
                />
              </motion.div>
            </AnimatePresence>

            {/* Synchronized Lens Rectangle (Active in Side Magnifier mode on Desktop) */}
            {zoomMode === 'side' && isHovering && (
              <div
                className="hidden lg:block absolute pointer-events-none border-2 border-accent bg-accent/20 backdrop-blur-[0.5px] shadow-sm rounded-sm"
                style={{
                  width: `${lens.w}px`,
                  height: `${lens.h}px`,
                  left: `${lens.x}px`,
                  top: `${lens.y}px`,
                }}
              />
            )}

            {/* Top Left Craft Badge */}
            <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary text-primary-text text-[10px] font-semibold uppercase tracking-wider rounded-full shadow-xs">
                <Sparkles className="w-3 h-3 text-sand" /> Sized for Indian Homes
              </span>
            </div>

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
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-surface/90 text-primary shadow-xs hover:bg-surface transition-colors z-10 cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-surface/90 text-primary shadow-xs hover:bg-surface transition-colors z-10 cursor-pointer"
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

          {/* Action Row & Zoom Mode Switcher */}
          <div className="flex items-center justify-between mt-2.5 px-1">
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="text-xs text-content-muted hover:text-primary inline-flex items-center gap-1.5 font-medium transition-colors cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5 text-accent" />
              <span>Click to see full view</span>
            </button>

            {/* Mode Switcher (Desktop) */}
            <div className="hidden lg:flex items-center gap-1 bg-surface p-0.5 rounded-full text-[11px] font-medium text-content-muted">
              <button
                onClick={() => setZoomMode('side')}
                className={`px-2.5 py-0.5 rounded-full transition-all cursor-pointer ${
                  zoomMode === 'side'
                    ? 'bg-surface-page text-primary font-semibold shadow-2xs'
                    : 'hover:text-primary'
                }`}
                title="Amazon-style side magnifier pane"
              >
                Side Magnifier
              </button>
              <button
                onClick={() => setZoomMode('inner')}
                className={`px-2.5 py-0.5 rounded-full transition-all cursor-pointer ${
                  zoomMode === 'inner'
                    ? 'bg-surface-page text-primary font-semibold shadow-2xs'
                    : 'hover:text-primary'
                }`}
                title="Modern in-frame cursor zoom"
              >
                In-Place Zoom
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* PIXEL-PERFECT SYNCHRONIZED SIDE FLYOUT ZOOM PANE (Desktop Only) */}
      {zoomMode === 'side' && isHovering && (
        <div
          className="hidden xl:block absolute left-[calc(100%+1.5rem)] top-0 bg-surface rounded-2xl overflow-hidden shadow-2xl border-2 border-border z-50 pointer-events-none animate-in fade-in duration-100"
          style={{
            width: `${flyoutWidth}px`,
            height: `${flyoutHeight}px`,
          }}
        >
          {/* Magnified Image Container with Exact 1:1 Pixel Alignment */}
          <div
            style={{
              width: `${innerWidth}px`,
              height: `${innerHeight}px`,
              transform: `translate3d(${offsetX}px, ${offsetY}px, 0)`,
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          >
            <Image
              src={currentImage}
              alt={`${productName} zoomed detail`}
              fill
              sizes="1400px"
              priority
              className="object-cover object-center pointer-events-none select-none"
            />
          </div>

          {/* Badge Label */}
          <div className="absolute bottom-3 left-3 px-3 py-1 bg-primary/90 backdrop-blur-xs text-primary-text text-[11px] font-semibold rounded-full border border-border/20">
            High-Resolution Material &amp; Detail View (2.5× Zoom)
          </div>
        </div>
      )}

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
