'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Sun, Layers, Trees, Sliders, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';

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
  const [isDraggingImage, setIsDraggingImage] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

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
      description: 'Drag the volume track bar below to compare the Oslo 3-Seater in Natural Honey Teak vs. Rich Dark Walnut timber finish.',
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

  // Handle position calculation on direct image drag
  const handleImageMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPosition(Math.round(percentage));
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDraggingImage) return;
    handleImageMove(e.touches[0].clientX);
  }, [isDraggingImage, handleImageMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDraggingImage) return;
    handleImageMove(e.clientX);
  }, [isDraggingImage, handleImageMove]);

  const handleMouseUp = useCallback(() => {
    setIsDraggingImage(false);
  }, []);

  useEffect(() => {
    if (isDraggingImage) {
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
  }, [isDraggingImage, handleMouseMove, handleMouseUp, handleTouchMove]);

  // Handle click on flat track bar
  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(Math.round(percentage));
  };

  return (
    <section className="my-12 sm:my-16 bg-white rounded-card border border-border-sand p-6 sm:p-8 shadow-card overflow-hidden">
      
      {/* Header & Mode Selector */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-warm-alabaster text-charcoal border border-border-sand text-[11px] font-bold uppercase tracking-widest rounded-btn mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#48563A]" /> INTERACTIVE BEFORE &amp; AFTER VIEWER
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
                <Icon className="w-3.5 h-3.5 text-[#48563A]" />
                <span>{mode.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Image Stage */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDraggingImage(true)}
        onTouchStart={() => setIsDraggingImage(true)}
        className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-card overflow-hidden select-none cursor-ew-resize bg-warm-alabaster border border-border-sand shadow-inner"
      >
        {/* Right Image (Base Layer) */}
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

        {/* Slim Vertical Divider Line on Image */}
        <div
          className="absolute top-0 bottom-0 z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Vertical Glowing Line */}
          <div className="absolute top-0 bottom-0 -left-[1.5px] w-[3px] bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)]" />

          {/* Minimal Floating Split Indicator */}
          <div className="absolute top-4 -translate-x-1/2 px-2 py-0.5 bg-charcoal/90 text-white text-[10px] font-mono font-bold rounded shadow-lg border border-white/30 whitespace-nowrap">
            {sliderPosition}%
          </div>
        </div>
      </div>

      {/* 🎚️ FLAT VOLUME-STYLE SLIDER BAR CONTROLLER */}
      <div className="mt-6 bg-warm-alabaster p-4 sm:p-5 rounded-card border border-border-sand">
        
        {/* Top Status & End-Point Labels */}
        <div className="flex items-center justify-between text-xs font-bold text-charcoal mb-2.5">
          <button
            onClick={() => setSliderPosition(0)}
            className="flex items-center gap-1 text-mid-gray hover:text-charcoal transition-colors group"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform" />
            <span>{activeMode.leftLabel}</span>
          </button>

          <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-border-sand text-[11px] font-mono shadow-xs text-charcoal">
            <Sliders className="w-3 h-3 text-[#48563A]" />
            <span>{sliderPosition}% {sliderPosition < 50 ? activeMode.leftLabel : sliderPosition > 50 ? activeMode.rightLabel : 'Balanced Split'}</span>
          </div>

          <button
            onClick={() => setSliderPosition(100)}
            className="flex items-center gap-1 text-mid-gray hover:text-charcoal transition-colors group"
          >
            <span>{activeMode.rightLabel}</span>
            <span className="w-2 h-2 rounded-full bg-amber-500 group-hover:scale-125 transition-transform" />
          </button>
        </div>

        {/* Flat Volume-Style Track Bar with Draggable Dot */}
        <div className="relative py-3 flex items-center">
          
          {/* Step Back (-5%) Button */}
          <button
            onClick={() => setSliderPosition((prev) => Math.max(0, prev - 10))}
            title="Step Left"
            className="w-8 h-8 rounded-full bg-white border border-border-sand hover:bg-warm-offwhite flex items-center justify-center text-charcoal mr-3 flex-shrink-0 shadow-xs active:scale-95 transition-transform"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Draggable Track Container */}
          <div
            ref={trackRef}
            onClick={handleTrackClick}
            className="relative flex-1 h-3 bg-border-sand/70 hover:bg-border-sand rounded-full cursor-pointer overflow-hidden transition-colors"
          >
            {/* Active Left Fill Track */}
            <div
              className="absolute top-0 bottom-0 left-0 bg-[#48563A] rounded-full transition-all duration-75"
              style={{ width: `${sliderPosition}%` }}
            />

            {/* Center Reference Marker Tick (50%) */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-white/80 z-10 pointer-events-none" />
          </div>

          {/* Native High-Performance HTML5 Range Slider (Invisible Overlay with Stylized Thumb) */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={(e) => setSliderPosition(Number(e.target.value))}
            aria-label="Image comparison slider control"
            className="absolute left-11 right-11 inset-y-0 opacity-0 cursor-pointer w-[calc(100%-5.5rem)] z-30"
          />

          {/* Stylized Visual Draggable Knob/Dot */}
          <div
            className="absolute pointer-events-none transition-all duration-75 z-20"
            style={{
              left: `calc(2.75rem + (${sliderPosition} / 100) * (100% - 5.5rem))`,
              transform: 'translateX(-50%)',
            }}
          >
            <div className="w-6 h-6 rounded-full bg-white border-3 border-[#48563A] shadow-md flex items-center justify-center scale-100 hover:scale-125 transition-transform">
              <div className="w-2 h-2 rounded-full bg-charcoal" />
            </div>
          </div>

          {/* Step Forward (+5%) Button */}
          <button
            onClick={() => setSliderPosition((prev) => Math.min(100, prev + 10))}
            title="Step Right"
            className="w-8 h-8 rounded-full bg-white border border-border-sand hover:bg-warm-offwhite flex items-center justify-center text-charcoal ml-3 flex-shrink-0 shadow-xs active:scale-95 transition-transform"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Quick Jump Preset Pills */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-border-sand/60 text-xs text-mid-gray mt-1">
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-charcoal text-[11px]">Presets:</span>
            <button
              onClick={() => setSliderPosition(0)}
              className={`px-2 py-0.5 rounded text-[11px] font-bold border transition-colors ${
                sliderPosition === 0 ? 'bg-charcoal text-white border-charcoal' : 'bg-white border-border-sand text-charcoal hover:bg-warm-offwhite'
              }`}
            >
              100% Left
            </button>
            <button
              onClick={() => setSliderPosition(25)}
              className={`px-2 py-0.5 rounded text-[11px] font-bold border transition-colors ${
                sliderPosition === 25 ? 'bg-charcoal text-white border-charcoal' : 'bg-white border-border-sand text-charcoal hover:bg-warm-offwhite'
              }`}
            >
              25%
            </button>
            <button
              onClick={() => setSliderPosition(50)}
              className={`px-2 py-0.5 rounded text-[11px] font-bold border transition-colors ${
                sliderPosition === 50 ? 'bg-charcoal text-white border-charcoal' : 'bg-white border-border-sand text-charcoal hover:bg-warm-offwhite'
              }`}
            >
              50% Split
            </button>
            <button
              onClick={() => setSliderPosition(75)}
              className={`px-2 py-0.5 rounded text-[11px] font-bold border transition-colors ${
                sliderPosition === 75 ? 'bg-charcoal text-white border-charcoal' : 'bg-white border-border-sand text-charcoal hover:bg-warm-offwhite'
              }`}
            >
              75%
            </button>
            <button
              onClick={() => setSliderPosition(100)}
              className={`px-2 py-0.5 rounded text-[11px] font-bold border transition-colors ${
                sliderPosition === 100 ? 'bg-charcoal text-white border-charcoal' : 'bg-white border-border-sand text-charcoal hover:bg-warm-offwhite'
              }`}
            >
              100% Right
            </button>
          </div>

          <button
            onClick={() => setSliderPosition(50)}
            className="flex items-center gap-1 text-[11px] font-bold text-[#48563A] hover:text-[#48563A]/80 transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset to Center</span>
          </button>
        </div>

      </div>

    </section>
  );
}
