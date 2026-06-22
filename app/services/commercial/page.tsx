import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServicePage from "@/components/services/ServicePage";

export const metadata: Metadata = {
  title: "Commercial Laundry Cape Town",
  description:
    "Reliable commercial laundry services for businesses in Cape Town.",
};

export default function CommercialPage() {
  return (
    <>
      <Header />

      <main>
        <ServicePage
          eyebrow="Commercial"
          title="Commercial Laundry Solutions"
          description="Dependable laundry services for restaurants, salons, offices and growing businesses."
          benefits={[
            "Reliable turnaround",
            "Business-friendly service",
            "Flexible scheduling",
            "Volume handling",
            "Pickup and delivery",
            "Dedicated support",
          ]}
        />
      </main>

      <Footer />
    </>
  );
}