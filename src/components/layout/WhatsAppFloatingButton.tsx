'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';

export default function WhatsAppFloatingButton() {
  const handleClick = () => {
    trackWhatsAppClick({ source: 'floating' });
  };

  const whatsappUrl = buildWhatsAppUrl(
    "Hi Rumea Home! I'm browsing your website and would like assistance with furniture sizing and recommendations."
  );

  return (
    <aside aria-label="WhatsApp Concierge" className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip Label for Desktop */}
      <span className="hidden sm:inline-block mr-2.5 px-3 py-1.5 bg-espresso text-warm-ivory text-xs font-medium rounded-md shadow-card opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Chat with Furniture Specialist
      </span>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="w-13 h-13 sm:w-14 sm:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#20bd5a] hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        {/* Subtle Online Pulse Dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-espresso rounded-full border-2 border-white flex items-center justify-center">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
        </span>
      </a>
    </aside>
  );
}
