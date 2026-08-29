'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Armchair, 
  Bed, 
  UtensilsCrossed, 
  Laptop, 
  Boxes, 
  Trees, 
  Sparkles, 
  Percent 
} from 'lucide-react';

export default function CategoryNavStrip() {
  const pathname = usePathname();

  const categories = [
    { name: 'Living Room', href: '/rooms/living-room', icon: Armchair },
    { name: 'Bedroom', href: '/rooms/bedroom', icon: Bed },
    { name: 'Dining', href: '/rooms/dining-room', icon: UtensilsCrossed },
    { name: 'Study & Work', href: '/rooms/study', icon: Laptop },
    { name: 'Storage', href: '/rooms/storage', icon: Boxes },
    { name: 'Outdoor', href: '/rooms/outdoor', icon: Trees },
    { name: 'Collections', href: '/collections/modern', icon: Sparkles },
    { name: 'All Products', href: '/products', icon: Percent },
  ];

  return (
    <div className="bg-white border-b border-warm-sand/50 shadow-xs hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between overflow-x-auto py-2.5 gap-6 no-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = pathname === cat.href;
            return (
              <Link
                key={cat.name}
                href={cat.href}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-body font-medium transition-all duration-200 whitespace-nowrap group ${
                  isActive
                    ? 'bg-espresso text-warm-ivory font-semibold shadow-xs'
                    : 'text-espresso/80 hover:text-espresso hover:bg-warm-ivory'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 transition-colors ${
                  isActive ? 'text-warm-sand' : 'text-muted-olive group-hover:text-espresso'
                }`} />
                <span>{cat.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
