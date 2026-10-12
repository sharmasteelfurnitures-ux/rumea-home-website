import React from 'react';
import Link from 'next/link';
import { ArrowRight, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F7F4EE] px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#D8C9B5] text-[#2C2926] mx-auto flex items-center justify-center shadow-xs">
          <Compass className="w-8 h-8 text-[#2C2926]" />
        </div>
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.10em] text-[#48563A]">404 Error</span>
          <h1 className="font-serif font-medium text-3xl sm:text-4xl text-[#2C2926] mt-2">
            Page Not Found
          </h1>
          <p className="text-[#A69B8C] text-sm mt-2 leading-relaxed">
            The page or furniture piece you are looking for might have been moved or is no longer available.
          </p>
        </div>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 bg-[#2C2926] hover:bg-[#3D3632] text-[#F7F4EE] text-xs font-medium rounded-btn transition-colors shadow-xs"
          >
            Back to Home
          </Link>
          <Link
            href="/products"
            className="w-full sm:w-auto px-6 py-3 bg-transparent text-[#2C2926] border border-[#D8C9B5] hover:border-[#2C2926] text-xs font-medium rounded-btn transition-colors inline-flex items-center justify-center gap-1.5"
          >
            <span>Browse Catalogue</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#48563A]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
