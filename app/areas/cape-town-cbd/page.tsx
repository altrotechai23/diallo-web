import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AreaPage from "@/components/areas/AreaPage";

export const metadata: Metadata = {
  title: "Laundry Service Cape Town CBD",
  description:
    "Professional laundry and dry cleaning services in Cape Town CBD with pickup and delivery.",
};

export default function CapeTownCBDPage() {
  return (
    <>
      <Header />

      <main>
        <AreaPage
          area="Cape Town CBD"
          title="Laundry & Dry Cleaning in Cape Town CBD"
          description="Convenient laundry services for professionals, residents and businesses in Cape Town CBD. Schedule a pickup and let us take care of the rest."
          audience={[
            "CBD professionals",
            "Apartment residents",
            "Students",
            "Corporate offices",
            "Hotels and guesthouses",
            "Busy city commuters",
          ]}
          benefits={[
            "Pickup and delivery",
            "Fast turnaround",
            "Dry cleaning specialists",
            "WhatsApp bookings",
            "Professional garment care",
            "Trusted local service",
          ]}
        />
      </main>

      <Footer />
    </>
  );
}