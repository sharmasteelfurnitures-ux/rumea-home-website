'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BrandLogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showTagline?: boolean;
  taglineText?: string;
  className?: string;
  asLink?: boolean;
}

export default function BrandLogo({
  variant = 'dark',
  size = 'md',
  showTagline = false,
  taglineText = 'Solid Sheesham Furniture',
  className = '',
  asLink = true,
}: BrandLogoProps) {
  const [imgError, setImgError] = useState(false);

  const sizeConfig = {
    sm: { width: 140, height: 42, imgClass: 'h-8 md:h-9 w-auto', textClass: 'text-lg tracking-tight' },
    md: { width: 180, height: 54, imgClass: 'h-10 md:h-12 w-auto', textClass: 'text-xl tracking-tight' },
    lg: { width: 240, height: 72, imgClass: 'h-14 md:h-16 w-auto', textClass: 'text-2xl tracking-tight' },
    hero: { width: 300, height: 90, imgClass: 'h-18 md:h-20 w-auto', textClass: 'text-3xl tracking-tight' },
  };

  const config = sizeConfig[size];

  const logoContent = (
    <div className={`inline-flex flex-col ${showTagline ? 'items-center text-center' : 'items-start'} ${className}`}>
      <div className="relative flex items-center">
        {!imgError ? (
          <Image
            src="/logo.png"
            alt="Rumea Home"
            width={config.width}
            height={config.height}
            priority
            onError={() => setImgError(true)}
            className={`${config.imgClass} object-contain transition-opacity duration-200 ${
              variant === 'light' ? 'brightness-0 invert' : ''
            }`}
          />
        ) : (
          <div className="flex items-center gap-1.5 py-1">
            <span className="w-2.5 h-2.5 rounded-full bg-terracotta" />
            <span className={`font-serif font-bold ${config.textClass} ${variant === 'light' ? 'text-white' : 'text-charcoal'}`}>
              rumea home
            </span>
          </div>
        )}
      </div>

      {showTagline && (
        <span
          className={`mt-1 text-[10px] md:text-xs tracking-wider uppercase font-body font-medium ${
            variant === 'light' ? 'text-warm-sand' : 'text-mid-gray'
          }`}
        >
          {taglineText}
        </span>
      )}
    </div>
  );

  if (asLink) {
    return (
      <Link href="/" className="group focus:outline-none inline-block">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
