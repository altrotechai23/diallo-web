import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServicePage from "@/components/services/ServicePage";

export const metadata: Metadata = {
  title: "Airbnb Laundry Cape Town",
  description:
    "Fast linen and towel laundry service for Airbnb hosts in Cape Town.",
};

export default function AirbnbPage() {
  return (
    <>
      <Header />

      <main>
        <ServicePage
          eyebrow="Airbnb Laundry"
          title="Laundry for Airbnb Hosts"
          description="Fast turnaround for linens and towels to help you delight your guests."
          benefits={[
            "Fast turnaround",
            "Linen specialists",
            "Reliable scheduling",
            "Pickup and delivery",
            "Support for multiple properties",
            "Guest-ready presentation",
          ]}
        />
      </main>

      <Footer />
    </>
  );
}