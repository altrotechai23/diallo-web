import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServicePage from "@/components/services/ServicePage";

export const metadata: Metadata = {
  title: "Dry Cleaning Cape Town",
  description:
    "Professional dry cleaning services in Cape Town with free pickup and delivery.",
};

export default function DryCleaningPage() {
  return (
    <>
      <Header />

      <main>
        <ServicePage
          eyebrow="Dry Cleaning"
          title="Premium Dry Cleaning in Cape Town"
          description="Expert care for suits, dresses, jackets, delicate fabrics and garments that deserve special attention."
          benefits={[
            "Free pickup and delivery",
            "Care for delicate fabrics",
            "Professional stain treatment",
            "Fast turnaround",
            "Attention to detail",
            "Trusted garment handling",
          ]}
        />
      </main>

      <Footer />
    </>
  );
}