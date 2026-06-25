"use client";

import { MessageCircle } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";
import { sendGTMEvent } from '@next/third-parties/google';
const PHONE = "27631872533";

export default function WhatsAppFloat() {
  function handleClick() {
    trackWhatsAppClick("floating_button");

    // Fired directly to your layout's Google Tag Manager layer
    sendGTMEvent({
      event: 'conversion',
      value: {
        // Your Google Ads Conversion ID configuration
        'send_to': 'AW-18265948639/whatsapp_click', 
      }
    });

    const message =
      "Hello Diallo Laundry, I would like to enquire about your laundry services.";

    window.open(
      `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <button
      type="button"
      aria-label="Chat with Diallo Laundry on WhatsApp"
      onClick={handleClick}
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        items-center
        gap-3
        rounded-full
        bg-[rgb(var(--primary))]
        px-5
        py-4
        text-white
        shadow-lg
        transition
        hover:-translate-y-1
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-[rgb(var(--primary))]
      "
    >
      <MessageCircle size={22} />

      <span className="hidden sm:inline font-medium">
        WhatsApp Us
      </span>
    </button>
  );
}