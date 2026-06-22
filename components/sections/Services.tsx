import Link from "next/link";

import {
  Sparkles,
  Shirt,
  BadgeCheck,
  Building2,
  BedDouble,
  ArrowRight,
} from "lucide-react";


const services = [
  {
    icon: Sparkles,
    title: "Dry Cleaning",
    description:
      "Professional care for suits, dresses, jackets, delicate fabrics, and special garments.",
    href: "/services/dry-cleaning",
  },
  {
    icon: Shirt,
    title: "Wash & Fold",
    description:
      "Fresh, neatly folded everyday laundry picked up and delivered to your door.",
    href: "/services/wash-fold",
  },
  {
    icon: BadgeCheck,
    title: "Ironing Service",
    description:
      "Perfectly pressed clothing ready to wear for work, events, and daily life.",
    href: "/services/ironing",
  },
  {
    icon: Building2,
    title: "Commercial Laundry",
    description:
      "Reliable laundry solutions for offices, salons, restaurants, and businesses.",
    href: "/services/commercial",
  },
  {
    icon: BedDouble,
    title: "Airbnb Laundry",
    description:
      "Fast turnaround for linens and towels to keep your guests delighted.",
    href: "/services/airbnb",
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="container-custom">
        {/* Heading */}
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
            Services
          </p>

          <h2 className="heading-lg mt-4">
            <span
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
            <br />
            Care designed around your life.
          </h2>

          <p
            className="
              mt-6
              text-lg
              text-muted
            "
          >
            From everyday laundry to premium garment care,
            we make looking your best effortless.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className="
            mt-16
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                  card-premium
                  flex
                  flex-col
                  p-8
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
                    p-8
                  "
                >
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold">
                  {service.title}
                </h3>

                <p
                  className="
                    mt-4
                    flex-1
                    text-muted
                    leading-7
                  "
                >
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    font-semibold
                    text-[rgb(var(--primary))]
                    transition
                    hover:gap-3
                  "
                >
                  Learn More

                  <ArrowRight size={18} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}