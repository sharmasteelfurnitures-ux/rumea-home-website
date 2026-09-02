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
          className={`fixed z-50 flex items-center justify-center rounded-full bg-[#48563A] hover:bg-[#3B4730] text-[#F7F4EE] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 group border border-[#3B4730] bottom-6 right-6 w-14 h-14 cursor-pointer ${className}`}
        >
          {/* Subtle online pulse beacon */}
          <span className="absolute top-0.5 right-0.5 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D8C9B5] opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#D8C9B5]" />
          </span>
          <MessageCircle className="w-7 h-7 text-[#D8C9B5] relative z-10" />
          
          {/* Tooltip on desktop hover */}
          <span className="hidden md:group-hover:inline-block absolute right-full mr-3 px-3 py-1.5 bg-[#2C2926] text-[#F7F4EE] text-xs font-medium rounded-lg whitespace-nowrap shadow-md border border-[#D8C9B5]/20 pointer-events-none">
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
