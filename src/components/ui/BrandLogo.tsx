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
  taglineText = 'Thoughtful Furniture for Modern Homes',
  className = '',
  asLink = true,
}: BrandLogoProps) {
  const sizeConfig = {
    sm: { width: 120, height: 36, imgClass: 'h-7 md:h-8 w-auto' },
    md: { width: 160, height: 48, imgClass: 'h-9 md:h-10 w-auto' },
    lg: { width: 220, height: 66, imgClass: 'h-12 md:h-14 w-auto' },
    hero: { width: 280, height: 84, imgClass: 'h-16 md:h-20 w-auto' },
  };

  const config = sizeConfig[size];

  const logoContent = (
    <div className={`inline-flex flex-col ${showTagline ? 'items-center text-center' : 'items-start'} ${className}`}>
      <div className="relative flex items-center">
        <Image
          src="/images/brand/logo.png"
          alt="rumea home"
          width={config.width}
          height={config.height}
          priority
          className={`${config.imgClass} object-contain transition-opacity duration-200 ${
            variant === 'light'
              ? 'brightness-0 invert opacity-95 hover:opacity-100'
              : 'opacity-95 hover:opacity-100 mix-blend-multiply'
          }`}
        />
      </div>

      {showTagline && (
        <span
          className={`mt-1 text-[10px] md:text-xs tracking-wider uppercase font-body font-medium ${
            variant === 'light' ? 'text-warm-sand/80' : 'text-soft-taupe'
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
