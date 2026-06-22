import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AreaPage from "@/components/areas/AreaPage";

export const metadata: Metadata = {
  title: "Laundry Service Green Point",
  description:
    "Professional laundry and dry cleaning services in Green Point with convenient pickup and delivery.",
};

export default function GreenPointPage() {
  return (
    <>
      <Header />

      <main>
        <AreaPage
          area="Green Point"
          title="Laundry & Dry Cleaning in Green Point"
          description="Premium garment care and laundry solutions tailored to Green Point residents and hospitality businesses."
          audience={[
            "Young professionals",
            "Guesthouses",
            "Hospitality businesses",
            "Apartment residents",
            "Airbnb hosts",
            "Families",
          ]}
          benefits={[
            "Pickup and delivery",
            "Professional pressing",
            "Commercial support",
            "Quick turnaround",
            "WhatsApp bookings",
            "Premium care",
          ]}
        />
      </main>

      <Footer />
    </>
  );
}