import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServicePage from "@/components/services/ServicePage";

export const metadata: Metadata = {
  title: "Wash and Fold Cape Town",
  description:
    "Convenient wash and fold laundry service with pickup and delivery in Cape Town.",
};

export default function WashFoldPage() {
  return (
    <>
      <Header />

      <main>
        <ServicePage
          eyebrow="Wash & Fold"
          title="Wash & Fold Laundry Service"
          description="Fresh, folded everyday laundry delivered back to your door."
          benefits={[
            "Save hours every week",
            "Free pickup and delivery",
            "Fresh and neatly folded",
            "Perfect for busy families",
            "Ideal for professionals",
            "Simple pricing",
          ]}
        />
      </main>

      <Footer />
    </>
  );
}