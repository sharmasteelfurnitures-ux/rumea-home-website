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

  const whatsappUrl = buildWhatsAppUrl(
    "Hi Rumea Home! I'd like help choosing the right size for my space."
  );

  return (
    <>
      {/* 1. Ultra-Clean Minimalist Announcement Bar */}
      <aside
        aria-label="Announcement"
        className="w-full bg-surface text-content-body text-[11px] sm:text-xs py-2 px-4 text-center font-sans tracking-wide border-b border-border"
      >
        <span>Practical furniture for Indian apartments</span>
        <span className="mx-2 text-content-muted">•</span>
        <a
          href="https://www.amazon.in"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline underline-offset-2 hover:text-primary-hover transition-colors"
        >
          Shop on Amazon India &rarr;
        </a>
      </aside>

      {/* 2. Clean Sticky Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-surface-page/95 backdrop-blur-md border-b border-border shadow-2xs py-3'
            : 'bg-surface-page border-b border-border py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-11">
            
            {/* Left: Mobile Menu Toggle + Brand Logo */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-1.5 -ml-1.5 text-primary hover:text-content-muted lg:hidden focus:outline-none cursor-pointer"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>

              <BrandLogo variant="dark" size="md" />
            </div>

            {/* Center: Clean Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/products' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-[13px] font-sans tracking-tight transition-colors duration-150 relative py-1 ${
                      isActive
                        ? 'text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-primary'
                        : 'text-content-body/80 hover:text-primary font-medium'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* Search Trigger */}
              <button
                onClick={() => setSearchModalOpen(true)}
                className="w-9 h-9 rounded-full text-primary hover:bg-black/5 transition-colors flex items-center justify-center cursor-pointer"
                aria-label="Search furniture"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* WhatsApp Help */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick({ source: 'header' })}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-accent bg-accent-subtle hover:bg-accent hover:text-accent-text transition-all duration-200"
                title="Sizing support on WhatsApp"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span>Help</span>
              </a>

              {/* Prominent Shop on Amazon Button */}
              <a
                href="https://www.amazon.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary hover:bg-primary-hover text-primary-text text-xs font-medium rounded-full transition-all duration-200 shadow-2xs hover:-translate-y-0.5"
              >
                <span>Shop on Amazon</span>
                <ExternalLink className="w-3 h-3 text-border" />
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
          <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-surface-page p-6 shadow-xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-border">
                <BrandLogo variant="dark" size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 -mr-2 text-primary hover:text-content-muted"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-serif text-primary hover:text-primary-hover transition-colors py-1"
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="pt-4 mt-2 border-t border-border space-y-2.5">
                  <p className="text-[10px] font-sans font-medium uppercase tracking-[0.14em] text-content-muted">
                    Explore
                  </p>
                  <Link
                    href="/rooms"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-sans text-content-muted hover:text-primary py-1"
                  >
                    Rooms Hub &amp; Layouts
                  </Link>
                  <Link
                    href="/collections"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-sans text-content-muted hover:text-primary py-1"
                  >
                    Curated Collections
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-border space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick({ source: 'mobile_menu' })}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-accent-subtle text-accent rounded-full text-xs font-semibold hover:bg-accent hover:text-accent-text transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Sizing Support</span>
              </a>

              <a
                href="https://www.amazon.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-primary hover:bg-primary-hover text-primary-text rounded-full text-xs font-semibold transition-colors"
              >
                <span>Store on Amazon India</span>
                <ExternalLink className="w-3.5 h-3.5 text-border" />
              </a>

              <p className="text-center text-[10px] text-content-muted pt-1">
                Practical furniture for Indian apartments
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Global Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />
    </>
  );
}
