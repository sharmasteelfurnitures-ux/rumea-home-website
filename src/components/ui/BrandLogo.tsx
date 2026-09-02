'use client';

import React from 'react';
import Link from 'next/link';
import { LOGO_DARK_DATA_URI, LOGO_WHITE_DATA_URI } from './logoData';

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
  const sizeConfig = {
    sm: { imgClass: 'h-8 md:h-9 w-auto max-w-[160px]' },
    md: { imgClass: 'h-10 md:h-12 w-auto max-w-[210px]' },
    lg: { imgClass: 'h-13 md:h-16 w-auto max-w-[260px]' },
    hero: { imgClass: 'h-16 md:h-22 w-auto max-w-[320px]' },
  };

  const config = sizeConfig[size];
  const logoSrc = variant === 'light' ? LOGO_WHITE_DATA_URI : LOGO_DARK_DATA_URI;

  const logoContent = (
    <div className={`inline-flex flex-col justify-center ${showTagline ? 'items-center text-center' : 'items-start'} ${className}`}>
      <div className="relative flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt="rumea home"
          className={`${config.imgClass} object-contain block transition-opacity duration-200 hover:opacity-90`}
          loading="eager"
        />
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
      <Link href="/" className="group focus:outline-none flex items-center self-center flex-shrink-0">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
