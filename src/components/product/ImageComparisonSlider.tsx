'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, MoveHorizontal, Sun, Moon, Layers, Trees } from 'lucide-react';

interface ComparisonMode {
  id: string;
  title: string;
  icon: React.ElementType;
  leftLabel: string;
  rightLabel: string;
  leftImage: string;
  rightImage: string;
  leftTag: string;
  rightTag: string;
  description: string;
}

export default function ImageComparisonSlider() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const comparisonModes: ComparisonMode[] = [
    {
      id: 'finishes',
      title: 'Timber Finish Comparison',
      icon: Trees,
      leftLabel: 'Warm Honey Teak',
      rightLabel: 'Dark Walnut Finish',
      leftImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85',
      rightImage: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1400&q=85',
      leftTag: 'Natural Golden Sheen',
      rightTag: 'Deep Espresso Grain',
      description: 'Slide to compare the Oslo 3-Seater in Natural Honey Teak vs. Rich Dark Walnut timber finish.',
    },
    {
      id: 'ambience',
      title: 'Daylight vs. Evening Mood',
      icon: Sun,
      leftLabel: 'Natural Morning Light',
      rightLabel: 'Warm Evening Ambience',
      leftImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85',
      rightImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85',
      leftTag: 'Direct Sunlit Living Room',
      rightTag: 'Warm 2700K Lamp Glow',
      description: 'See how the premium velvet upholstery and Sheesham wood tones adapt to natural daylight vs cozy night lighting.',
    },
    {
      id: 'craft',
      title: 'Wood Structure vs. Upholstered',
      icon: Layers,
      leftLabel: '100% Solid Wood Skeleton',
      rightLabel: 'Finished Velvet Suite',
      leftImage: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1400&q=85',
      rightImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85',
      leftTag: 'Mortise & Tenon Frame',
      rightTag: 'Plush 38kg/m³ Cushioning',
      description: 'Slide to inspect the inner heavy-duty kiln-dried Sheesham frame vs the final hand-stitched velvet seating.',
    },
  ];

  const [activeModeIndex, setActiveModeIndex] = useState(0);
  const activeMode = comparisonModes[activeModeIndex];

  // Handle position calculation on drag
  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <section className="my-12 sm:my-16 bg-white rounded-card border border-border-sand p-6 sm:p-8 shadow-card overflow-hidden">
      
      {/* Header & Mode Selector */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-warm-alabaster text-charcoal border border-border-sand text-[11px] font-bold uppercase tracking-widest rounded-btn mb-2">
            <Sparkles className="w-3.5 h-3.5 text-terracotta" /> INTERACTIVE BEFORE &amp; AFTER VIEWER
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-charcoal">
            Compare Sofa Finishes &amp; Craft Details
          </h2>
          <p className="text-mid-gray text-xs sm:text-sm mt-1 max-w-xl">
            {activeMode.description}
          </p>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex items-center gap-1.5 bg-warm-alabaster p-1 rounded-btn border border-border-sand overflow-x-auto no-scrollbar">
          {comparisonModes.map((mode, idx) => {
            const Icon = mode.icon;
            return (
              <button
                key={mode.id}
                onClick={() => {
                  setActiveModeIndex(idx);
                  setSliderPosition(50);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-btn text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                  activeModeIndex === idx
                    ? 'bg-white text-charcoal shadow-xs'
                    : 'text-mid-gray hover:text-charcoal'
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-terracotta" />
                <span>{mode.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Draggable Comparison Stage */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
        className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-card overflow-hidden select-none cursor-ew-resize bg-warm-alabaster border border-border-sand shadow-inner"
      >
        {/* Right Image (Background / Base Layer) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={activeMode.rightImage}
            alt={activeMode.rightLabel}
            fill
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-cover object-center"
          />
          {/* Right Badge */}
          <div className="absolute bottom-4 right-4 z-10 bg-charcoal/90 text-white text-[11px] font-bold px-3 py-1.5 rounded-btn backdrop-blur-xs shadow-md flex items-center gap-1.5">
            <span>{activeMode.rightLabel}</span>
            <span className="text-[10px] text-amber-300 font-normal hidden sm:inline">({activeMode.rightTag})</span>
          </div>
        </div>

        {/* Left Image (Foreground / Clipped Layer) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <Image
            src={activeMode.leftImage}
            alt={activeMode.leftLabel}
            fill
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-cover object-center"
          />
          {/* Left Badge */}
          <div className="absolute bottom-4 left-4 z-10 bg-charcoal/90 text-white text-[11px] font-bold px-3 py-1.5 rounded-btn backdrop-blur-xs shadow-md flex items-center gap-1.5">
            <span>{activeMode.leftLabel}</span>
            <span className="text-[10px] text-emerald-300 font-normal hidden sm:inline">({activeMode.leftTag})</span>
          </div>
        </div>

        {/* Vertical Divider Line with Draggable Handle */}
        <div
          className="absolute top-0 bottom-0 z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Vertical Glowing Line */}
          <div className="absolute top-0 bottom-0 -left-[1.5px] w-[3px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]" />

          {/* Center Circular Grabber Pill */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-charcoal shadow-2xl border-2 border-charcoal flex items-center justify-center pointer-events-auto cursor-ew-resize hover:scale-110 active:scale-95 transition-transform duration-150">
            <MoveHorizontal className="w-5 h-5 text-terracotta" />
          </div>
        </div>

        {/* Quick Instructions Overlay */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20 pointer-events-none">
          Drag slider horizontally to compare
        </div>

      </div>

      {/* Preset Quick-Jump Controls */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-mid-gray pt-2 border-t border-border-sand/60">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-charcoal">Quick Views:</span>
          <button
            onClick={() => setSliderPosition(25)}
            className={`px-2.5 py-1 rounded-btn border text-[11px] font-bold transition-colors ${
              sliderPosition === 25 ? 'bg-charcoal text-white border-charcoal' : 'bg-warm-alabaster border-border-sand hover:bg-white text-charcoal'
            }`}
          >
            25% Left
          </button>
          <button
            onClick={() => setSliderPosition(50)}
            className={`px-2.5 py-1 rounded-btn border text-[11px] font-bold transition-colors ${
              sliderPosition === 50 ? 'bg-charcoal text-white border-charcoal' : 'bg-warm-alabaster border-border-sand hover:bg-white text-charcoal'
            }`}
          >
            50% Split
          </button>
          <button
            onClick={() => setSliderPosition(75)}
            className={`px-2.5 py-1 rounded-btn border text-[11px] font-bold transition-colors ${
              sliderPosition === 75 ? 'bg-charcoal text-white border-charcoal' : 'bg-warm-alabaster border-border-sand hover:bg-white text-charcoal'
            }`}
          >
            75% Right
          </button>
        </div>

        <span className="text-[11px] italic">
          100% Solid Kiln-Dried Sheesham Frame • Handcrafted in India
        </span>
      </div>

    </section>
  );
}
