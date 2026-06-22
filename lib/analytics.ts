declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

export function trackWhatsAppClick(location: string) {
  if (typeof window === "undefined") return;

  window.gtag?.("event", "generate_lead", {
    event_category: "whatsapp",
    event_label: location,
    value: 1,
  });
}