import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Shirt,
  Sparkles,
  BriefcaseBusiness,
  Hotel,
  WashingMachine,
} from "lucide-react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Laundry Services Cape Town",
  description:
    "Explore Diallo Laundry's professional laundry and dry cleaning services in Cape Town, including wash & fold, ironing, commercial and Airbnb laundry.",
};

const services = [
  {
    title: "Dry Cleaning",
    description:
      "Professional care for suits, dresses, jackets and delicate garments.",
    href: "/services/dry-cleaning",
    icon: Sparkles,
  },
  {
    title: "Wash & Fold",
    description:
      "Fresh, neatly folded laundry delivered back to your door.",
    href: "/services/wash-fold",
    icon: WashingMachine,
  },
  {
    title: "Ironing Service",
    description:
      "Perfectly pressed garments ready for work and special occasions.",
    href: "/services/ironing",
    icon: Shirt,
  },
  {
    title: "Commercial Laundry",
    description:
      "Reliable laundry solutions for businesses and hospitality.",
    href: "/services/commercial",
    icon: BriefcaseBusiness,
  },
  {
    title: "Airbnb Laundry",
    description:
      "Fast linen turnaround for Airbnb hosts and guesthouses.",
    href: "/services/airbnb",
    icon: Hotel,
  },
];


export default function ServicesPage() {
  return (
    <>
      <Header />

      <main>
        <section className="py-16 md:py-24">
          <div className="container-custom">
            {/* Hero */}
            <div className="mx-auto max-w-3xl text-center">
              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[rgb(var(--primary))]
                "
              >
                Our Services
              </p>

              <h1 className="heading-lg mt-4">
                Laundry services designed around your life. <br /> <span
            className="
              bg-gradient-to-r
              from-[#41BE23]
              to-[#00A3FF]
              bg-clip-text
              text-transparent
            "
          >
            Diallo Laundry
          </span>
              </h1>

              <p
                className="
                  mt-6
                  text-lg
                  leading-8
                  text-muted
                "
              >
                From everyday laundry to specialist garment care,
                Diallo Laundry provides premium services with
                pickup and delivery across Cape Town.
              </p>
            </div>

            {/* Services Grid */}
            <div
              className="
                mt-16
                grid
                gap-6
                md:grid-cols-2
                lg:grid-cols-3
              "
            >
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="
                      card-premium
                      p-8
                      transition
                      hover:-translate-y-1
                    "
                  >
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[rgb(var(--muted))]
                        text-[rgb(var(--primary))]
                      "
                    >
                      <Icon size={28} />
                    </div>

                    <h2 className="mt-6 text-2xl font-semibold">
                      {service.title}
                    </h2>

                    <p
                      className="
                        mt-4
                        leading-7
                        text-muted
                      "
                    >
                      {service.description}
                    </p>

                    <div
                      className="
                        mt-6
                        inline-flex
                        items-center
                        gap-2
                        font-medium
                        text-[rgb(var(--primary))]
                      "
                    >
                      Learn More

                      <ArrowRight size={18} />
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <div
              className="
                mt-20
                rounded-[32px]
                bg-[rgb(var(--primary))]
                px-8
                py-14
                text-center
                text-white
              "
            >
              <h2 className="text-3xl font-bold">
                Ready to schedule a pickup?
              </h2>

              <p className="mt-4 text-white/80">
                Book in under a minute and let us handle the laundry.
              </p>

              <Link
                href="/book"
                className="
                  mt-8
                  inline-flex
                  rounded-full
                  bg-white
                  px-8
                  py-4
                  font-semibold
                  text-[rgb(var(--primary))]
                "
              >
                Schedule Pickup
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}