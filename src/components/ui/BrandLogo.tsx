'use client';

import React from 'react';
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
  const sizeConfig = {
    sm: { width: 160, height: 43, imgClass: 'h-9 md:h-10 w-auto' },
    md: { width: 200, height: 53, imgClass: 'h-11 md:h-12 w-auto' },
    lg: { width: 260, height: 70, imgClass: 'h-14 md:h-16 w-auto' },
    hero: { width: 320, height: 85, imgClass: 'h-18 md:h-22 w-auto' },
  };

  const config = sizeConfig[size];
  const logoSrc = variant === 'light' ? '/images/brand/logo-white.png' : '/images/brand/logo-dark.png';

  const logoContent = (
    <div className={`inline-flex flex-col ${showTagline ? 'items-center text-center' : 'items-start'} ${className}`}>
      <div className="relative flex items-center">
        <Image
          src={logoSrc}
          alt="Rumea Home"
          width={config.width}
          height={config.height}
          priority
          unoptimized
          className={`${config.imgClass} object-contain transition-opacity duration-200 hover:opacity-90`}
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
      <Link href="/" className="group focus:outline-none inline-block">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
