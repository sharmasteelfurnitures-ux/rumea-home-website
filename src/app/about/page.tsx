import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import WhatsAppFloatingButton from '@/components/layout/WhatsAppFloatingButton';
import { 
  Heart, 
  Sparkles, 
  ShieldCheck, 
  Compass, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Hammer, 
  Scale, 
  FileText,
  MessageCircle,
  MapPin,
  Truck,
  RotateCcw,
  Check
} from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Our Story & Brand Philosophy',
  description:
    'Thoughtful furniture designed for modern Indian homes. Discover Rumea Home — considered proportions, honest materials, and clear dimensions.',
  openGraph: {
    title: 'Our Story & Brand Philosophy | Rumea Home',
    description: 'Thoughtful Furniture Designed for the Way You Actually Live.',
    url: 'https://rumeahome.com/about',
  },
};

export default function AboutPage() {
  const brandPillars = [
    {
      icon: Compass,
      title: 'Apartment Proportions',
      description: 'Calculated for modern 2BHK and 3BHK Indian floor plans with generous seating, clean profiles, and comfortable walking clearances.',
    },
    {
      icon: ShieldCheck,
      title: 'Elevated Floor Clearance',
      description: 'Thoughtfully designed leg heights so brooms, dusters, and mops pass underneath effortlessly during daily house cleaning.',
    },
    {
      icon: Hammer,
      title: 'Honest Materials',
      description: 'Transparent disclosure of all materials, timbers, steel frames, and fabrics with zero hidden shortcuts or misleading claims.',
    },
    {
      icon: Scale,
      title: 'Exact Dimensions',
      description: 'Clear, published measurements in cm and feet for every piece, helping you measure your room, doorway, or lift before ordering.',
    },
    {
      icon: Heart,
      title: 'Direct WhatsApp Advice',
      description: 'Friendly, personalized room-sizing and fit guidance via WhatsApp with zero high-pressure sales tactics.',
    },
  ];

  const legalPolicies = [
    {
      title: 'Considered Sizing & Room Fit',
      content:
        'Every product page publishes exact dimensions (width, depth, height, seat height) in centimeters and feet so you can measure your hallway, doorway, and room with complete certainty.',
      link: '/products',
      linkText: 'Explore Furniture Catalogue →',
    },
    {
      title: 'Reliable Amazon India Fulfillment',
      content:
        'Rumea Home products are available with trusted fulfillment and doorstep delivery through Amazon India, backed by verified buyer reviews and transparent tracking.',
      link: '/terms',
      linkText: 'View Terms & Delivery Policy →',
    },
    {
      title: 'Direct Sizing & Support on WhatsApp',
      content:
        'Have a question about whether a sofa will fit your hallway or whether a bed frame will clear your lift? Message our team on WhatsApp for honest, personalized sizing advice.',
      link: '/contact',
      linkText: 'Connect on WhatsApp →',
    },
    {
      title: 'Privacy & Consumer Protection',
      content:
        'Your contact details and inquiries are strictly used for customer assistance and sizing consultation. We never sell or share customer information with third-party telemarketers.',
      link: '/privacy-policy',
      linkText: 'Read Privacy Policy →',
    },
  ];

  return (
    <div className="bg-surface-page min-h-screen py-6 sm:py-10 text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Our Story' }]} className="mb-6" />

        {/* 1. Hero Brand Statement */}
        <section className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary text-primary-text text-[11px] font-bold uppercase tracking-widest rounded-btn mb-4">
            <Sparkles className="w-3.5 h-3.5 text-sand" /> OUR STORY &amp; PHILOSOPHY
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-primary font-bold tracking-tight leading-tight">
            Furniture that settles naturally into your home.
          </h1>
          <p className="text-content-muted text-base sm:text-lg mt-5 leading-relaxed max-w-2xl mx-auto">
            We started Rumea Home around a simple, honest observation: people don’t buy furniture merely to occupy square footage. They buy it to make their daily life feel calmer, more comfortable, and more like their own.
          </p>
        </section>

        {/* 2. Narrative & Workshop Split */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20 sm:mb-24 bg-surface rounded-card p-6 sm:p-10 border border-border shadow-xs">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-card overflow-hidden border border-border bg-surface-page">
              <Image
                src="https://images.unsplash.com/photo-1540518614846-7ede433c4ef2?auto=format&fit=crop&w=1000&q=85"
                alt="Considered Modern Furniture"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-text p-4 rounded-card shadow-lg max-w-xs hidden sm:block border border-border/20">
              <p className="font-serif font-bold text-xs uppercase text-sand">Considered Design</p>
              <p className="text-[11px] text-sand/90 mt-0.5">
                Proportioned for the real flow of modern Indian apartments.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4 text-xs sm:text-sm text-primary leading-relaxed">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              WHY RUMEA EXISTS
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-primary">
              Built for Real Indian Living
            </h2>
            <p className="text-content-muted">
              Furnishing a modern Indian apartment often presents frustrating extremes: fragile flatpack pieces that don&apos;t fit the room, or exorbitant retail showrooms marked up with massive overheads.
            </p>
            <p className="text-content-muted">
              We believe in a more considered path: furniture shaped around real living needs. Raised legs that allow effortless daily sweeping underneath, compact silhouettes that don&apos;t block corridors, and exact dimensions published upfront.
            </p>
            <p className="text-content-muted">
              No high-pressure sales tricks, no inflated markup-and-markdown games. Just thoughtful, well-proportioned furniture delivered reliably via Amazon India and backed by direct WhatsApp support.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs text-primary font-bold">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-accent" /> Apartment Proportions
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-accent" /> Elevated Floor Clearance
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-accent" /> Direct WhatsApp Sizing Advice
              </span>
            </div>
          </div>
        </section>

        {/* 3. Physical Showroom Trust Section */}
        <section className="mb-20 sm:mb-24 bg-surface rounded-card p-6 sm:p-10 border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-accent">
                <MapPin className="w-3.5 h-3.5" /> PHYSICAL FLAGSHIP STORE
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-primary">
                Visit Us in Vasant Kunj, New Delhi
              </h2>
              <p className="text-xs sm:text-sm text-content-muted leading-relaxed">
                We believe buying furniture is a tactile experience. If you are in Delhi NCR, come visit our showroom to touch the timber finishes, inspect joint craftsmanship, and test the cushion comfort in person.
              </p>
              <div className="p-4 bg-surface-page rounded-card border border-border text-xs space-y-2 text-primary">
                <p><strong>Address:</strong> F/F, 80, Masoodpur Dairy Farm, Masoodpur, Vasant Kunj, New Delhi - 110070</p>
                <p><strong>Timings:</strong> 10:00 AM – 9:00 PM (Monday – Sunday / All 7 Days)</p>
                <p><strong>Direct Phone &amp; WhatsApp:</strong> +91 72919 62356</p>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3">
              <a
                href={buildWhatsAppUrl("Hi Rumea Home! I'd like to book a visit to your Vasant Kunj showroom.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 bg-accent hover:bg-accent-hover text-accent-text font-bold text-xs rounded-btn flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Book a Showroom Visit on WhatsApp</span>
              </a>
              <Link
                href="/contact"
                className="w-full py-3 px-5 bg-surface-page border border-border hover:border-primary text-primary font-bold text-xs rounded-btn flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
              >
                <span>View Full Store Details &amp; Directions &rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 4. Five Pillars */}
        <section className="mb-20 sm:mb-24">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              OUR STANDARDS
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-4xl text-primary mt-1">
              The Five Standards of Rumea Home
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {brandPillars.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="bg-surface p-6 rounded-card border border-border shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-btn bg-primary text-primary-text flex items-center justify-center mb-4 shadow-2xs">
                      <Icon className="w-5 h-5 text-sand" />
                    </div>
                    <h3 className="font-serif font-bold text-base text-primary mb-1.5">
                      {val.title}
                    </h3>
                    <p className="text-xs text-content-muted leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 5. Trust, Policies & Guarantees */}
        <section className="bg-surface rounded-card p-6 sm:p-10 border border-border shadow-xs mb-20 sm:mb-24">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-1.5">
              <FileText className="w-4 h-4" /> CONSUMER TRUST &amp; POLICIES
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-primary mt-1">
              Clear Policies &amp; Honest Guarantees
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {legalPolicies.map((pol, idx) => (
              <div key={idx} className="p-5 bg-surface-page rounded-card border border-border space-y-2 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-sm text-primary flex items-center gap-2">
                    <Scale className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>{pol.title}</span>
                  </h3>
                  <p className="text-xs text-content-muted leading-relaxed mt-1.5">
                    {pol.content}
                  </p>
                </div>
                <div className="pt-2">
                  <Link href={pol.link} className="text-xs font-bold text-primary hover:text-accent transition-colors underline">
                    {pol.linkText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Direct CTA Banner */}
        <section className="bg-primary text-primary-text rounded-card p-8 sm:p-12 text-center border border-border/30 shadow-md">
          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-primary-text mb-3">
            Ready to Furnish Your Space?
          </h2>
          <p className="text-sand text-xs sm:text-sm max-w-lg mx-auto mb-8 leading-relaxed">
            Browse our space-saving shoe racks, folding tables, coat stands, and chairs, or message our team directly on WhatsApp for sizing advice.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/products"
              className="px-8 py-3.5 bg-surface text-primary text-xs font-bold rounded-btn shadow-xs hover:bg-surface-page transition-colors"
            >
              Explore the Collection &rarr;
            </Link>
            <a
              href={buildWhatsAppUrl("Hi Rumea Home! I'd like help choosing the right pieces for my apartment.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent-hover text-accent-text text-xs font-bold rounded-btn shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </section>

      </div>

      <WhatsAppFloatingButton />
    </div>
  );
}
