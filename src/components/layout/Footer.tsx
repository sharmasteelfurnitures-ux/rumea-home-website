'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MessageCircle, 
  Instagram, 
  ShoppingBag, 
  Mail, 
  ArrowRight,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const whatsappUrl = buildWhatsAppUrl(
    "Hi Rumea Home! I'd like help choosing the right size for my space."
  );

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const shopLinks = [
    { label: 'Shop all', href: '/products' },
    { label: 'Shoe Racks', href: '/products?category=shoe-rack' },
    { label: 'Folding Tables', href: '/products?category=folding-table' },
    { label: 'Coat Stands', href: '/products?category=coat-stand' },
    { label: 'Seating & Benches', href: '/products?category=seating' },
    { label: 'Rooms Hub', href: '/rooms' },
  ];

  const helpLinks = [
    { label: 'Room-Fit Assistance', href: '/#fit-assistance' },
    { label: 'Sizing & Dimensions', href: '/contact' },
    { label: 'Assembly & Care', href: '/contact' },
    { label: 'Shipping & Delivery', href: '/terms' },
    { label: 'Amazon India Store', href: 'https://www.amazon.in', external: true },
  ];

  const companyLinks = [
    { label: 'Our Story', href: '/about' },
    { label: 'Design Journal', href: '/blog' },
    { label: 'Customization Studio', href: '/customization' },
    { label: 'Contact us', href: '/contact' },
  ];

  return (
    <footer className="w-full bg-surface-page border-t border-border pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-14 px-5 sm:px-8 lg:px-12 text-primary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Grid: Lead Title & Newsletter (Left) + Nav Columns (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-14">
          
          {/* Left Column: Clean Architectural Lead Statement & Single-Underline Input */}
          <div className="lg:col-span-5 space-y-7">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl leading-[1.08] tracking-tight text-primary">
              Thoughtful furniture. <span className="block text-content-muted font-medium">Built for real homes.</span>
            </h2>

            {/* Newsletter: Single underline field matching brand minimalism */}
            <div className="pt-1 max-w-sm">
              <label htmlFor="footer-newsletter-email" className="block text-xs font-sans text-content-muted leading-relaxed mb-3">
                New pieces, dimensions &amp; apartment layouts in your inbox.
              </label>
              
              <form onSubmit={handleNewsletterSubmit} className="flex items-center border-b border-border focus-within:border-primary transition-colors pb-2">
                <input
                  id="footer-newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="flex-1 bg-transparent border-0 outline-none text-sm text-primary placeholder:text-content-muted py-1 font-sans"
                  required
                />
                <button
                  type="submit"
                  className="group inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-primary hover:text-primary-hover transition-colors pl-3 shrink-0 uppercase tracking-wider"
                >
                  <span>Sign up</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </form>

              {subscribed && (
                <p className="mt-2 text-xs text-accent font-semibold">
                  Thank you! You are now subscribed to apartment sizing updates.
                </p>
              )}
            </div>

            {/* Sizing Help Badge */}
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-subtle text-accent hover:bg-accent hover:text-accent-text transition-all duration-200 text-xs font-semibold"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span>WhatsApp Sizing Help: +91 72919 62356</span>
              </a>
            </div>
          </div>

          {/* Right Navigation Columns (Shop / Help / Company) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 pt-2">
            
            {/* Column 1: Shop */}
            <div>
              <p className="text-[11px] font-sans font-semibold uppercase tracking-[0.14em] text-content-muted mb-4 sm:mb-5">
                Shop
              </p>
              <ul className="space-y-3 text-sm font-sans text-content-body">
                {shopLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:text-primary hover:underline underline-offset-4 transition-colors duration-150 block py-0.5"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Help */}
            <div>
              <p className="text-[11px] font-sans font-semibold uppercase tracking-[0.14em] text-content-muted mb-4 sm:mb-5">
                Help
              </p>
              <ul className="space-y-3 text-sm font-sans text-content-body">
                {helpLinks.map((item) => (
                  <li key={item.label}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:text-primary hover:underline underline-offset-4 transition-colors duration-150 py-0.5"
                      >
                        <span>{item.label}</span>
                        <ExternalLink className="w-3 h-3 text-content-muted" />
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="hover:text-primary hover:underline underline-offset-4 transition-colors duration-150 block py-0.5"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <p className="text-[11px] font-sans font-semibold uppercase tracking-[0.14em] text-content-muted mb-4 sm:mb-5">
                Company
              </p>
              <ul className="space-y-3 text-sm font-sans text-content-body">
                {companyLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:text-primary hover:underline underline-offset-4 transition-colors duration-150 block py-0.5"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Meta Bar: Socials + Legal Links */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-content-muted">
          
          {/* Social Channels Row */}
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-surface hover:bg-primary text-primary hover:text-primary-text transition-all duration-200 flex items-center justify-center border border-border hover:border-primary hover:-translate-y-0.5"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Support"
              className="w-8 h-8 rounded-full bg-surface hover:bg-accent text-accent hover:text-accent-text transition-all duration-200 flex items-center justify-center border border-border hover:border-accent hover:-translate-y-0.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://www.amazon.in"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Amazon India Store"
              className="w-8 h-8 rounded-full bg-surface hover:bg-primary text-primary hover:text-primary-text transition-all duration-200 flex items-center justify-center border border-border hover:border-primary hover:-translate-y-0.5"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
            </a>

            <a
              href="mailto:support@rumeahome.com"
              aria-label="Email Support"
              className="w-8 h-8 rounded-full bg-surface hover:bg-primary text-primary hover:text-primary-text transition-all duration-200 flex items-center justify-center border border-border hover:border-primary hover:-translate-y-0.5"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>

            <span className="text-[11px] font-sans text-content-muted ml-2 hidden sm:inline-block">
              India (INR ₹)
            </span>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-sans">
            <span>&copy; {currentYear} Rumea Home</span>
            <Link href="/terms" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
              Terms
            </Link>
            <Link href="/privacy-policy" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
              Shipping &amp; Returns
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
              Support
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}
