'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Armchair, LayoutGrid, MessageCircle, Info } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';

export default function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/', icon: Home, match: (p: string) => p === '/' },
    { label: 'Products', href: '/products', icon: Armchair, match: (p: string) => p.startsWith('/products') },
    { label: 'Rooms', href: '/rooms', icon: LayoutGrid, match: (p: string) => p.startsWith('/rooms') },
    {
      label: 'WhatsApp',
      href: buildWhatsAppUrl('Hi! I am browsing on my phone and would like to ask a question.'),
      icon: MessageCircle,
      isExternal: true,
      onClick: () => trackWhatsAppClick({ source: 'nav' }),
    },
    { label: 'About', href: '/about', icon: Info, match: (p: string) => p === '/about' || p === '/contact' },
  ];

  return (
    <nav
      aria-label="Mobile Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-warm-ivory/95 backdrop-blur-md border-t border-warm-sand/60 px-2 py-1.5 shadow-[0_-2px_10px_rgba(44,41,38,0.08)]"
    >
      <div className="flex items-center justify-around h-12">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.match ? item.match(pathname) : false;

          if (item.isExternal) {
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={item.onClick}
                className="flex flex-col items-center justify-center flex-1 py-1 text-soft-taupe hover:text-muted-olive transition-colors relative"
              >
                <div className="relative">
                  <Icon className="w-5 h-5 text-muted-olive" />
                </div>
                <span className="text-[10px] font-medium mt-0.5 text-muted-olive">{item.label}</span>
              </a>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 py-1 transition-all relative ${
                isActive ? 'text-espresso font-bold' : 'text-soft-taupe font-medium hover:text-espresso'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 transition-transform ${isActive ? 'text-espresso scale-105' : 'text-soft-taupe'}`} />
              </div>
              <span className={`text-[10px] mt-0.5 tracking-tight ${isActive ? 'font-bold text-espresso' : 'font-medium'}`}>
                {item.label}
              </span>
              {isActive && (
                <span className="absolute bottom-0 w-6 h-0.5 bg-muted-olive rounded-full" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
