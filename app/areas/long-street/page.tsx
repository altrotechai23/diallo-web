import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AreaPage from "@/components/areas/AreaPage";

export const metadata: Metadata = {
  title: "Laundry Service Long Street Cape Town",

  description:
    "Premium laundry and dry cleaning services on Long Street with free pickup and delivery.",
};
export const dynamic = "force-static";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you offer pickup and delivery on Long Street?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Diallo Laundry offers pickup and delivery services across Long Street and nearby areas.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide same-day service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Same-day turnaround may be available depending on the type of service and time of booking.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book through WhatsApp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Customers can easily schedule pickups through WhatsApp.",
      },
    },
  ],
};

export default function LongStreetPage() {
  return (
    <>
      <Header />

      <main>
        <AreaPage
          area="Long Street"
          title="Laundry & Dry Cleaning on Long Street"
          description="
            Looking for reliable laundry services on Long Street?
            Diallo Laundry offers premium garment care,
            wash and fold, ironing, and dry cleaning
            with convenient pickup and delivery.
          "
          audience={[
            "Professionals working in the CBD",
            "Residents living on Long Street",
            "Students and city dwellers",
            "Hotels and guesthouses",
            "Short-term rental hosts",
            "Busy individuals",
          ]}
          benefits={[
            "Free pickup and delivery",
            "Same-day service available",
            "Professional garment care",
            "Convenient city-centre location",
            "WhatsApp bookings",
            "Friendly local service",
          ]}
        />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(faqSchema),
            }}
            />
      </main>

      <Footer />
    </>
  );
}