import React from 'react';
import Link from 'next/link';

interface TagProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export default function Tag({ children, href, className = '' }: TagProps) {
  const content = (
    <span
      className={`inline-block text-xs font-medium uppercase tracking-wider text-soft-taupe hover:text-espresso transition-colors ${className}`}
    >
      {children}
    </span>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
