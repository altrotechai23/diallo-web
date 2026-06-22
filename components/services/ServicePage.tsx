import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type ServicePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  benefits: string[];
};

export default function ServicePage({
  eyebrow,
  title,
  description,
  benefits,
}: ServicePageProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom max-w-5xl">
        <div className="text-center">
          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[rgb(var(--primary))]
            "
          >
            {eyebrow}
          </p>

          <h1 className="heading-lg mt-4">
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

        <div className="mt-16 card-premium p-8 md:p-10">
          <h2 className="text-2xl font-semibold">
            Why customers choose this service
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3"
              >
                <CheckCircle2
                  size={22}
                  className="mt-1 text-[rgb(var(--secondary))]"
                />

                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

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