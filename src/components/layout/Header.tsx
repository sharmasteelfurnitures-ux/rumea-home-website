'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  Search, 
  MessageCircle, 
  ExternalLink 
} from 'lucide-react';
import BrandLogo from '@/components/ui/BrandLogo';
import SearchModal from '@/components/layout/SearchModal';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'Shop All', href: '/products' },
    { label: 'Entryway', href: '/products?category=shoe-rack' },
    { label: 'Tables', href: '/products?category=folding-table' },
    { label: 'Seating', href: '/products?category=seating' },
    { label: 'Work & Study', href: '/products?category=folding-table' },
    { label: 'Why Rumea', href: '/about' },
  ];

  return (
    <>
      {/* 1. Static Announcement Bar */}
      <aside
        aria-label="Announcement"
        className="w-full bg-[#2C2926] text-[#F7F4EE] text-xs py-2 px-4 text-center font-sans tracking-wide"
      >
        <span>Thoughtful furniture for modern Indian homes</span>
        <span className="mx-2 text-[#D8C9B5]/60">•</span>
        <a
          href="https://www.amazon.in"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#D8C9B5] transition-colors font-medium"
        >
          Shop on Amazon India
        </a>
      </aside>

      {/* 2. Clean Sticky Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F7F4EE]/95 backdrop-blur-md border-b border-[#D8C9B5]/70 shadow-xs py-3'
            : 'bg-[#F7F4EE] border-b border-[#D8C9B5]/40 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-11">
            
            {/* Left: Mobile Menu Toggle + Brand Logo */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-1.5 -ml-1.5 text-[#2C2926] hover:text-[#78806A] lg:hidden focus:outline-none cursor-pointer"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>

              <BrandLogo variant="dark" size="md" />
            </div>

            {/* Center: Clean Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/products' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-sm font-sans tracking-tight transition-colors duration-200 ${
                      isActive
                        ? 'text-[#2C2926] font-semibold'
                        : 'text-[#6B6962] hover:text-[#2C2926] font-normal'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Actions */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              
              {/* Search Trigger */}
              <button
                onClick={() => setSearchModalOpen(true)}
                className="p-2 text-[#2C2926] hover:text-[#78806A] transition-colors rounded-full hover:bg-[#D8C9B5]/20"
                aria-label="Search furniture"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* WhatsApp Help */}
              <a
                href={buildWhatsAppUrl("Hi Rumea Home! I'd like help choosing the right size for my space.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick({ source: 'header' })}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#2C2926] hover:text-[#78806A] transition-colors"
                title="Sizing support on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#78806A]" />
                <span>Help</span>
              </a>

              {/* Prominent Shop on Amazon Button */}
              <a
                href="https://www.amazon.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#2C2926] hover:bg-[#3D3632] text-[#F7F4EE] text-xs font-semibold rounded-full transition-all shadow-xs hover:shadow-sm"
              >
                <span>Shop on Amazon</span>
                <ExternalLink className="w-3 h-3 text-[#D8C9B5]" />
              </a>

            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation (One-hand friendly) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Sheet */}
          <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-[#F7F4EE] p-6 shadow-xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#D8C9B5]/60">
                <BrandLogo variant="dark" size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 -mr-2 text-[#2C2926] hover:text-[#78806A]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="py-6 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-base font-sans font-medium text-[#2C2926] hover:text-[#78806A] transition-colors py-1"
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="pt-4 mt-2 border-t border-[#D8C9B5]/60 space-y-2">
                  <p className="text-[10px] font-sans font-semibold uppercase tracking-wider text-[#78806A]">
                    Discover More
                  </p>
                  <Link
                    href="/rooms"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-sans text-[#6B6962] hover:text-[#2C2926] py-1"
                  >
                    Rooms Hub &amp; Layouts
                  </Link>
                  <Link
                    href="/collections"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-sans text-[#6B6962] hover:text-[#2C2926] py-1"
                  >
                    Style Collections
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-sans text-[#6B6962] hover:text-[#2C2926] py-1"
                  >
                    Contact &amp; Support
                  </Link>
                  <Link
                    href="/blog"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-sans text-[#6B6962] hover:text-[#2C2926] py-1"
                  >
                    Design Journal &amp; Guides
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Support / Amazon CTA in Drawer */}
            <div className="pt-6 border-t border-[#D8C9B5]/60 space-y-3">
              <a
                href="https://www.amazon.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#2C2926] hover:bg-[#3D3632] text-[#F7F4EE] text-xs font-semibold rounded-full text-center transition-colors shadow-xs"
              >
                <span>Shop on Amazon India</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#D8C9B5]" />
              </a>

              <a
                href={buildWhatsAppUrl("Hi Rumea Home! I'd like help choosing the right size for my space.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick({ source: 'mobile_menu' })}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-white border border-[#78806A]/40 text-[#78806A] hover:bg-[#78806A]/5 text-xs font-medium rounded-full transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#78806A]" />
                <span>Room Sizing on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      )}

      {/* Global Search Modal */}
      {searchModalOpen && (
        <SearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />
      )}
    </>
  );
}
