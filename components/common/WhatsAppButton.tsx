"use client";

import { MessageCircle } from "lucide-react"; // Assuming you are using lucide-react for icons
import { sendGTMEvent } from "@next/third-parties/google";
import Link from "next/link";

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    sendGTMEvent({
      event: 'conversion',
      value: {
        // Replace with your actual WhatsApp conversion label from Google Ads if different
        'send_to': 'AW-18265948639/whatsapp_click', 
      }
    });
  };

  return (
    <Link
      href="https://wa.me/27631872533"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleWhatsAppClick}
      className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[rgb(var(--secondary))]
              px-8
              py-4
              text-base
              font-semibold
              text-white
              shadow-xl
              transition-all
              hover:-translate-y-1
              hover:shadow-2xl
            "
    >
      <MessageCircle size={18} className="text-white"/>
      <span className="text-white">WhatsApp Us</span>
    </Link>
  );
}
