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
    <aside aria-label="WhatsApp" className="fixed bottom-6 right-6 z-50 flex items-center group animate-wa-bounce">
      {/* Tooltip Label for Desktop */}
      <span className="hidden sm:inline-block mr-2.5 px-3 py-1.5 bg-[#2C2926] text-[#F7F4EE] text-xs font-medium rounded-md shadow-card opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Chat with Furniture Specialist
      </span>

      <div className="relative flex items-center justify-center">
        {/* Expanding Olive Green Pulse Ring (Every 3.5s, 100% -> 180% over 1.2s) */}
        <span
          className="absolute inset-0 rounded-full animate-wa-ring pointer-events-none"
          style={{ backgroundColor: 'rgba(72, 86, 58, 0.45)' }}
        />

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className="relative w-13 h-13 sm:w-14 sm:h-14 bg-[#48563A] text-white rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(72,86,58,0.35)] hover:bg-[#3B4730] hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#48563A]"
          aria-label="Chat with us on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 text-white" />
          {/* Subtle Online Pulse Dot */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#D8C9B5] rounded-full border-2 border-white flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-[#48563A] rounded-full animate-ping" />
          </span>
        </a>
      </div>
    </aside>
  );
}
