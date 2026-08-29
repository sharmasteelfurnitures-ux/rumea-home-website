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
          className={`fixed z-40 flex items-center justify-center rounded-full bg-muted-olive text-warm-ivory shadow-lg hover:bg-espresso transition-all duration-300 transform hover:scale-105 active:scale-95 group
            bottom-[76px] right-4 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 ${className}`}
        >
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-muted-olive/30 animate-ping opacity-75 group-hover:opacity-100" />
          <MessageCircle className="w-7 h-7 md:w-8 md:h-8 relative z-10" />
          
          {/* Tooltip on desktop hover */}
          <span className="hidden md:group-hover:inline-block absolute right-full mr-3 px-3 py-1.5 bg-espresso text-warm-ivory text-xs font-medium rounded-lg whitespace-nowrap shadow-md border border-warm-sand/20">
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
        className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-warm-sand text-espresso font-body font-medium text-sm rounded-lg hover:bg-soft-taupe/40 transition-colors shadow-sm ${className}`}
      >
        <MessageCircle className="w-4 h-4 text-espresso" />
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
        className={`inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-muted-olive/10 hover:bg-muted-olive/20 text-muted-olive text-xs font-medium rounded-md transition-colors ${className}`}
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
      className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-warm-sand text-espresso border border-warm-sand font-body font-medium text-sm rounded-lg hover:bg-warm-sand/80 transition-colors shadow-sm ${className}`}
    >
      <MessageCircle className="w-4 h-4 text-espresso" />
      <span>{children || 'Chat with Our Furniture Experts'}</span>
    </a>
  );
}
