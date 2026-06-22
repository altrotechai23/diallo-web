import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AreaPage from "@/components/areas/AreaPage";

export const metadata: Metadata = {
  title: "Laundry Service Woodstock Cape Town",
  description:
    "Laundry and dry cleaning services in Woodstock with pickup and delivery.",
};

export default function WoodstockPage() {
  return (
    <>
      <Header />

      <main>
        <AreaPage
          area="Woodstock"
          title="Laundry & Dry Cleaning in Woodstock"
          description="Modern laundry services for Woodstock residents, creatives and small businesses."
          audience={[
            "Creative professionals",
            "Small businesses",
            "Apartment residents",
            "Families",
            "Students",
            "Entrepreneurs",
          ]}
          benefits={[
            "Convenient pickups",
            "Wash and fold service",
            "Professional dry cleaning",
            "Flexible scheduling",
            "Fast communication",
            "Trusted local team",
          ]}
        />
      </main>

      <Footer />
    </>
  );
}