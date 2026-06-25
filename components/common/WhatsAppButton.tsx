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
        flex h-14 items-center justify-center gap-2
        rounded-full
        bg-[rgb(var(--secondary))]
        text-sm font-semibold text-white
        transition-all hover:opacity-90
      "
    >
      <MessageCircle size={18} />
      WhatsApp
    </Link>
  );
}
