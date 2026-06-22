import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AreaPage from "@/components/areas/AreaPage";

export const metadata: Metadata = {
  title: "Laundry Service Sea Point",
  description:
    "Premium laundry and dry cleaning services in Sea Point with pickup and delivery.",
};

export default function SeaPointPage() {
  return (
    <>
      <Header />

      <main>
        <AreaPage
          area="Sea Point"
          title="Laundry & Dry Cleaning in Sea Point"
          description="Reliable laundry services designed for busy families, professionals and Airbnb hosts in Sea Point."
          audience={[
            "Families",
            "Professionals",
            "Airbnb hosts",
            "Short-term rental owners",
            "Retirees",
            "Holiday apartment residents",
          ]}
          benefits={[
            "Free pickup and delivery",
            "Fresh folded laundry",
            "Expert dry cleaning",
            "Flexible scheduling",
            "WhatsApp convenience",
            "Consistent quality",
          ]}
        />
      </main>

      <Footer />
    </>
  );
}