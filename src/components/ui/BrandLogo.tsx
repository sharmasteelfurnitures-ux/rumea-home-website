'use client';

import React from 'react';
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
  const sizeConfig = {
    sm: { height: 38, imgClass: 'h-8 md:h-9 w-auto max-w-[160px]' },
    md: { height: 48, imgClass: 'h-10 md:h-12 w-auto max-w-[210px]' },
    lg: { height: 60, imgClass: 'h-13 md:h-15 w-auto max-w-[260px]' },
    hero: { height: 75, imgClass: 'h-16 md:h-20 w-auto max-w-[320px]' },
  };

  const config = sizeConfig[size];
  const logoSrc = variant === 'light' ? '/images/brand/logo-white.png' : '/images/brand/logo-dark.png';

  const logoContent = (
    <div className={`inline-flex flex-col ${showTagline ? 'items-center text-center' : 'items-start'} ${className}`}>
      <div className="relative flex items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt="Rumea Home"
          className={`${config.imgClass} object-contain block transition-opacity duration-200 hover:opacity-95`}
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
      <Link href="/" className="group focus:outline-none inline-block flex-shrink-0">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
