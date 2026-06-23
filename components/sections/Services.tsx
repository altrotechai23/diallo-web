import Link from "next/link";
import Image from "next/image";
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
      "Premium care for suits, dresses, delicate fabrics, and special garments.",
    image: "/images/dry-cleaning.jpg",
    href: "/services/dry-cleaning",
  },
  {
    icon: Shirt,
    title: "Wash & Fold",
    description:
      "Everyday laundry professionally washed, folded, and delivered fresh.",
    image: "/images/wash-and-fold.jpg",
    href: "/services/wash-fold",
    featured: true,
  },
  {
    icon: BadgeCheck,
    title: "Ironing Service",
    description:
      "Perfectly pressed clothing ready for work, meetings, and events.",
    image: "/images/ironing.jpg",
    href: "/services/ironing",
  },
  {
    icon: Building2,
    title: "Commercial Laundry",
    description:
      "Reliable laundry solutions for offices, salons, restaurants, and businesses.",
    image: "/images/commercial.png",
    href: "/services/commercial",
  },
  {
    icon: BedDouble,
    title: "Airbnb Laundry",
    description:
      "Fast linen turnaround to delight guests and improve reviews.",
    image: "/images/airbnb.png",
    href: "/services/airbnb",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-white"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-[rgb(var(--border))]
              bg-white
              px-5
              py-2
              text-sm
              font-semibold
              text-[rgb(var(--primary))]
              shadow-sm
            "
          >
            Our Services
          </div>

          <h2
            className="
              mt-8
              text-4xl
              font-bold
              tracking-tight
              text-[rgb(var(--foreground))]
              md:text-6xl
            "
          >
            Laundry services built for
            <br />

            <span
              className="
                bg-gradient-to-r
                from-[#41BE23]
                to-[#00A3FF]
                bg-clip-text
                text-transparent
              "
            >
              modern lifestyles.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              leading-8
              text-[rgb(var(--muted-foreground))]
            "
          >
            From everyday laundry to premium garment care,
            Diallo Laundry helps you save time and always
            look your best.
          </p>
        </div>

        {/* Services */}
        <div
          className="
            mt-20
            grid
            gap-8
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
                  group
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-[rgb(var(--border))]
                  bg-white
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="
                      h-60
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                  {service.featured && (
                    <div
                      className="
                        absolute
                        left-5
                        top-5
                        rounded-full
                        bg-[rgb(var(--secondary))]
                        px-4
                        py-2
                        text-xs
                        font-semibold
                        text-white
                        shadow-lg
                      "
                    >
                      Most Popular
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8">
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-[rgb(var(--primary))]
                      to-[rgb(var(--secondary))]
                      text-white
                      shadow-lg
                    "
                  >
                    <Icon size={28} />
                  </div>

                  <h3
                    className="
                      mt-6
                      text-2xl
                      font-semibold
                      text-[rgb(var(--foreground))]
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      leading-7
                      text-[rgb(var(--muted-foreground))]
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
                      text-sm
                      font-semibold
                      text-[rgb(var(--primary))]
                      transition-all
                      group-hover:gap-3
                    "
                  >
                    Learn More

                    <ArrowRight
                      size={18}
                      className="
                        transition-transform
                        group-hover:translate-x-1
                      "
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className="
            mt-20
            rounded-[2rem]
            bg-gradient-to-r
            from-[rgb(var(--primary))]
            to-[rgb(var(--secondary))]
            px-8
            py-12
            text-center
            text-white
            shadow-xl
          "
        >
          <h3 className="text-3xl font-bold md:text-4xl">
            Ready to reclaim your time?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            Book your pickup today and experience Cape Town&apos;s
            premium laundry service.
          </p>

          <Link
            href="/book"
            className="
              mt-8
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-black
              px-8
              py-4
              font-semibold
              text-[rgb(var(--primary))]
              shadow-lg
              transition-all
              hover:-translate-y-1
            "
          >
            Book Pickup

            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}