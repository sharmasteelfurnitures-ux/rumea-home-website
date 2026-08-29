import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  variant?: 'olive' | 'sand' | 'espresso' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export default function Badge({
  variant = 'olive',
  children,
  className = '',
}: BadgeProps) {
  const styles = {
    olive: 'bg-muted-olive text-warm-ivory',
    sand: 'bg-warm-sand text-espresso font-semibold',
    espresso: 'bg-espresso text-warm-ivory',
    outline: 'border border-muted-olive text-muted-olive bg-transparent',
  };

  return (
    <span
      className={twMerge(
        clsx(
          'inline-flex items-center px-2 py-0.5 text-[10px] font-medium tracking-wider uppercase rounded',
          styles[variant],
          className
        )
      )}
    >
      {children}
    </span>
  );
}
