'use client';

import React, { useState } from 'react';
import Script from 'next/script';
import { Move3d, Play, Pause, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Custom declaration for Google model-viewer custom element in JSX
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        alt?: string;
        poster?: string;
        loading?: 'auto' | 'lazy' | 'eager';
        reveal?: 'auto' | 'interaction' | 'manual';
        ar?: boolean;
        'ar-modes'?: string;
        'camera-controls'?: boolean;
        'auto-rotate'?: boolean;
        'auto-rotate-delay'?: number;
        'rotation-per-second'?: string;
        'shadow-intensity'?: string | number;
        'shadow-softness'?: string | number;
        'exposure'?: string | number;
        'camera-orbit'?: string;
        'min-camera-orbit'?: string;
        'max-camera-orbit'?: string;
        'interaction-prompt'?: 'auto' | 'when-focused' | 'none';
        style?: React.CSSProperties;
      };
    }
  }
}

interface Furniture3DModel {
  id: string;
  name: string;
  tabLabel: string;
  tagline: string;
  modelSrc: string;
  price: number;
  mrp: number;
  slug: string;
  material: string;
}

export default function Product360Viewer() {
  const models: Furniture3DModel[] = [
    {
      id: 'sofa-velvet',
      name: 'The Aura Sculpted Velvet Lounge Sofa',
      tabLabel: 'Aura Lounge',
      tagline: 'An architectural centerpiece with curved ergonomic contours and rich tactile velvet.',
      modelSrc: '/models/sofa-velvet.glb',
      price: 42999,
      mrp: 52999,
      slug: 'sofa-oslo-3seater',
      material: 'Kiln-Dried Hardwood Base • Zero-Sag S-Springs • 32D High-Resilience Cushioning',
    },
    {
      id: 'sofa-wood-leather',
      name: 'The Nordic Solid Timber & Saddle Leather Sofa',
      tabLabel: 'Nordic Timber',
      tagline: 'Hand-selected solid Sheesham chassis paired with artisanal saddle-stitched leather.',
      modelSrc: '/models/sofa-wood-leather.glb',
      price: 54999,
      mrp: 68999,
      slug: 'sofa-oslo-3seater',
      material: '100% Solid Sheesham Timber • Top-Grain Nappa Leather • Mortise & Tenon Joinery',
    },
    {
      id: 'chair-sheen',
      name: 'The Kyoto Velvet & Teak Accent Armchair',
      tabLabel: 'Kyoto Armchair',
      tagline: 'Sculptural curves with tapered solid wood dowel legs, tailored for statement corners.',
      modelSrc: '/models/chair.glb',
      price: 18999,
      mrp: 24999,
      slug: 'table-kyoto-coffee',
      material: 'Artisan Solid Teak Legs • Dual-Tone Velvet • Precision Metal Hardware',
    },
  ];

  const [selectedModelIdx, setSelectedModelIdx] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  const currentModel = models[selectedModelIdx];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white border-t border-[#D8C9B5]">
      {/* Load Google Model-Viewer Web Component */}
      <Script
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js"
        type="module"
        strategy="afterInteractive"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#48563A]" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-[#48563A] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#48563A]" /> 360° CRAFTSMANSHIP STUDIO
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2C2926] font-normal tracking-tight">
              Experience Every Angle in 360°
            </h2>
            <p className="text-[#A69B8C] text-xs sm:text-sm mt-1.5 max-w-xl">
              Take an intimate look at our kiln-dried solid timber framing, tailoring, and hand-finished details. Drag in any direction to explore the piece all around, or zoom in to appreciate the grain.
            </p>
          </div>

          {/* Model Selector Tabs + Auto-Rotate Toggle */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1 bg-[#F7F4EE] p-1 rounded-xl border border-[#D8C9B5]">
              {models.map((m, idx) => (
                <button
                  key={m.id}
                  onClick={() => setSelectedModelIdx(idx)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                    selectedModelIdx === idx
                      ? 'bg-[#2C2926] text-[#F7F4EE] shadow-xs'
                      : 'text-[#2C2926] hover:text-[#48563A]'
                  }`}
                >
                  {m.tabLabel}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsAutoRotating(!isAutoRotating)}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F7F4EE] border border-[#D8C9B5] text-[#2C2926] hover:bg-[#2C2926] hover:text-[#F7F4EE] text-xs font-medium transition-colors shadow-2xs cursor-pointer"
            >
              {isAutoRotating ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-[#48563A]" />}
              <span>{isAutoRotating ? 'Pause Spin' : 'Auto 360°'}</span>
            </button>
          </div>
        </div>

        {/* 3D WebGL Viewport Studio Card */}
        <div className="relative rounded-2xl sm:rounded-3xl border border-[#D8C9B5] bg-gradient-to-b from-[#F7F4EE] via-[#F3ECE0] to-[#E9DFD1] overflow-hidden shadow-2xl">
          
          {/* Main 3D Canvas Area */}
          <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full flex items-center justify-center">
            
            {/* Real 3D Model Viewer */}
            <model-viewer
              key={currentModel.id}
              src={currentModel.modelSrc}
              alt={currentModel.name}
              camera-controls
              auto-rotate={isAutoRotating}
              rotation-per-second="24deg"
              shadow-intensity="1.2"
              shadow-softness="0.9"
              exposure="1.05"
              interaction-prompt="auto"
              ar
              ar-modes="webxr scene-viewer quick-look"
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'transparent',
                outline: 'none',
                cursor: 'grab',
              }}
            />

            {/* Drag & Orbit Direction Overlay */}
            <div className="absolute bottom-4 inset-x-0 flex justify-center pointer-events-none z-10">
              <div className="px-4 py-2 rounded-full bg-[#2C2926]/85 backdrop-blur-md text-[#F7F4EE] text-xs font-medium border border-white/15 flex items-center gap-2 shadow-lg">
                <Move3d className="w-4 h-4 text-[#D8C9B5]" />
                <span>Drag to spin 360° in any direction • Pinch or scroll to zoom details</span>
              </div>
            </div>

            {/* Top Left Studio Experience Badge */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 pointer-events-none">
              <div className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#D8C9B5] text-[#2C2926] text-xs font-medium flex items-center gap-2 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#48563A] animate-pulse" />
                <span>Interactive 360° Studio</span>
              </div>
            </div>

            {/* Top Right AR Preview Pill */}
            <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
              <div className="px-3 py-1.5 rounded-full bg-[#2C2926]/90 backdrop-blur-md border border-white/10 text-[#F7F4EE] text-xs font-medium flex items-center gap-1.5 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#D8C9B5]" />
                <span>Preview in Your Living Room</span>
              </div>
            </div>

          </div>

          {/* Bottom Interactive Product Summary Bar */}
          <div className="p-4 sm:p-6 bg-white border-t border-[#D8C9B5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="max-w-2xl">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#48563A]">
                Featured Studio Piece
              </span>
              <h3 className="font-serif font-medium text-base sm:text-lg text-[#2C2926] mt-0.5">
                {currentModel.name}
              </h3>
              <p className="text-xs text-[#A69B8C] mt-0.5">
                {currentModel.tagline}
              </p>
              <p className="text-[11px] text-[#48563A] font-medium mt-1">
                {currentModel.material}
              </p>
            </div>

            <div className="flex items-center gap-4 flex-shrink-0">
              <div className="text-right">
                <span className="text-[11px] text-[#A69B8C] line-through block">
                  MRP ₹{currentModel.mrp.toLocaleString('en-IN')}
                </span>
                <span className="font-sans font-bold text-lg sm:text-xl text-[#2C2926]">
                  ₹{currentModel.price.toLocaleString('en-IN')}
                </span>
              </div>

              <Link
                href={`/products/${currentModel.slug}`}
                className="px-5 py-3 bg-[#2C2926] hover:bg-[#3D3632] text-[#F7F4EE] text-xs font-semibold rounded-btn flex items-center gap-2 transition-colors shadow-sm whitespace-nowrap cursor-pointer"
              >
                <span>View Product Details</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D8C9B5]" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
