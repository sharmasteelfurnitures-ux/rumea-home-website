'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';

interface WhatsAppButtonProps {
  variant?: 'floating' | 'inline' | 'compact' | 'hero';
  message?: string;
  className?: string;
  productName?: string;
  productId?: string;
  children?: React.ReactNode;
}

export default function WhatsAppButton({
  variant = 'inline',
  message,
  className = '',
  productName,
  productId,
  children,
}: WhatsAppButtonProps) {
  const url = message 
    ? buildWhatsAppUrl(message) 
    : buildWhatsAppUrl("Hi! I found your website and I'm interested in your furniture. Can you help me?");

  const handleClick = () => {
    trackWhatsAppClick({
      source: variant === 'floating' ? 'floating' : 'pdp',
      product_id: productId,
      product_name: productName,
    });
  };

  if (variant === 'floating') {
    return (
      <aside aria-label="WhatsApp Support">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          aria-label="Chat with us on WhatsApp"
          className={`fixed z-50 flex items-center justify-center rounded-full bg-accent hover:bg-accent-hover text-accent-text shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 group border border-accent/40 bottom-20 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 cursor-pointer ${className}`}
        >
          {/* Subtle online pulse beacon */}
          <span className="absolute top-0.5 right-0.5 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sand opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-sand" />
          </span>
          <MessageCircle className="w-7 h-7 text-accent-text relative z-10" />
          
          {/* Tooltip on desktop hover */}
          <span className="hidden md:group-hover:inline-block absolute right-full mr-3 px-3 py-1.5 bg-primary text-primary-text text-xs font-medium rounded-lg whitespace-nowrap shadow-md border border-border/20 pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>
      </aside>
    );
  }

  if (variant === 'hero') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent-hover text-accent-text font-body font-medium text-sm rounded-btn transition-colors shadow-sm ${className}`}
      >
        <MessageCircle className="w-4 h-4 text-accent-text" />
        <span>{children || 'Chat on WhatsApp'}</span>
      </a>
    );
  }

  if (variant === 'compact') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={`inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-accent-subtle hover:bg-accent/20 text-accent text-xs font-medium rounded-btn transition-colors ${className}`}
      >
        <MessageCircle className="w-3.5 h-3.5" />
        <span>{children || 'Enquire on WhatsApp'}</span>
      </a>
    );
  }

  // Default Inline Variant
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent-hover text-accent-text border border-accent font-body font-medium text-sm rounded-btn transition-colors shadow-sm ${className}`}
    >
      <MessageCircle className="w-4 h-4 text-accent-text" />
      <span>{children || 'Chat with Our Furniture Experts'}</span>
    </a>
  );
}
