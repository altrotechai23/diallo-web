import Link from "next/link";
import { MapPin, CheckCircle2, ArrowRight } from "lucide-react";

type AreaPageProps = {
  area: string;
  title: string;
  description: string;
  audience: string[];
  benefits: string[];
};

export default function AreaPage({
  area,
  title,
  description,
  audience,
  benefits,
}: AreaPageProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom max-w-5xl">
        {/* Hero */}
        <div className="text-center">
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[rgb(var(--border))]
              px-4
              py-2
              text-sm
              font-medium
              text-[rgb(var(--primary))]
            "
          >
            <MapPin size={16} />
            Serving {area}
          </div>

          <h1 className="heading-lg mt-6">
            {title}
          </h1>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-muted
            "
          >
            {description}
          </p>
        </div>

        {/* Ideal For */}
        <div className="mt-16 card-premium p-8 md:p-10">
          <h2 className="text-2xl font-semibold">
            Ideal for
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {audience.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <CheckCircle2
                  size={20}
                  className="text-[rgb(var(--secondary))]"
                />

                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-10 card-premium p-8 md:p-10">
          <h2 className="text-2xl font-semibold">
            Why choose Diallo Laundry?
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3"
              >
                <CheckCircle2
                  size={20}
                  className="text-[rgb(var(--secondary))]"
                />

                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/book"
            className="btn-primary inline-flex items-center gap-2"
          >
            Schedule Pickup

            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}