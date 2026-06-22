import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AreaPage from "@/components/areas/AreaPage";

export const metadata: Metadata = {
  title: "Laundry Service Gardens Cape Town",
  description:
    "Dry cleaning and laundry pickup services in Gardens, Cape Town.",
};

export default function GardensPage() {
  return (
    <>
      <Header />

      <main>
        <AreaPage
          area="Gardens"
          title="Laundry & Dry Cleaning in Gardens"
          description="Convenient laundry solutions for Gardens residents looking for premium service and reliable turnaround."
          audience={[
            "Families",
            "Working professionals",
            "Apartment residents",
            "Students",
            "Frequent travellers",
            "Busy households",
          ]}
          benefits={[
            "Pickup and delivery",
            "Expert stain treatment",
            "Professional ironing",
            "Friendly local service",
            "Simple booking",
            "Consistent results",
          ]}
        />
      </main>

      <Footer />
    </>
  );
}