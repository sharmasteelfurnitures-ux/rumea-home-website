import React from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'olive';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-display font-semibold transition-all duration-200 ease-out active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl';

  const variants = {
    primary: 'bg-espresso text-warm-ivory hover:bg-espresso/90 hover:shadow-md focus:ring-espresso shadow-warm',
    secondary: 'bg-warm-sand text-espresso hover:bg-warm-sand/80 focus:ring-warm-sand shadow-sm',
    outline: 'border-2 border-espresso text-espresso hover:bg-espresso hover:text-warm-ivory focus:ring-espresso',
    ghost: 'text-espresso hover:bg-warm-sand/30 focus:ring-espresso',
    olive: 'bg-muted-olive text-warm-ivory hover:bg-muted-olive/90 focus:ring-muted-olive shadow-sm',
  };

  const sizes = {
    sm: 'text-xs px-4 py-2 min-h-[40px]',
    md: 'text-sm px-6 py-3 min-h-[46px]',
    lg: 'text-base sm:text-lg px-8 py-3.5 min-h-[50px]',
  };

  const combinedClasses = twMerge(clsx(baseStyles, variants[variant], sizes[size], className));

  if (href) {
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
