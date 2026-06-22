import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServicePage from "@/components/services/ServicePage";

export const metadata: Metadata = {
  title: "Ironing Service Cape Town",
  description:
    "Professional ironing service with pickup and delivery in Cape Town.",
};

export default function IroningPage() {
  return (
    <>
      <Header />

      <main>
        <ServicePage
          eyebrow="Ironing"
          title="Professional Ironing Service"
          description="Perfectly pressed garments ready for work, meetings and special occasions."
          benefits={[
            "Wrinkle-free results",
            "Business attire specialists",
            "Pickup and delivery",
            "Time-saving convenience",
            "Consistent quality",
            "Ready-to-wear presentation",
          ]}
        />
      </main>

      <Footer />
    </>
  );
}