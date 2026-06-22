import {
  Truck,
  Clock3,
  ShieldCheck,
  Leaf,
} from "lucide-react";

const reasons = [
  {
    icon: Truck,
    title: "Free Pickup & Delivery",
    description:
      "Convenient collection and delivery across Long Street, Cape Town CBD, and nearby areas.",
  },
  {
    icon: Clock3,
    title: "Same-Day Service",
    description:
      "Express turnaround available when you need your garments ready quickly.",
  },
  {
    icon: ShieldCheck,
    title: "Garment Care Guarantee",
    description:
      "Every item receives professional attention and careful handling.",
  },
  {
    icon: Leaf,
    title: "Responsible Cleaning",
    description:
      "Modern cleaning practices designed to care for both your garments and the environment.",
  },
];

export default function WhyChoose() {
  return (
    <section>
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
            Why Choose Diallo
          </p>

          <h2 className="heading-lg mt-4">
            Care you can trust.
          </h2>

          <p
            className="
              mt-6
              text-lg
              text-muted
            "
          >
            We combine premium garment care with
            convenience designed around your lifestyle.
          </p>
        </div>

        {/* Benefits */}
        <div
          className="
            mt-16
            grid
            gap-6
            md:grid-cols-2
          "
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="
                  card-premium
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
                  "
                >
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold">
                  {reason.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-muted
                    leading-7
                  "
                >
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Elegant Stats */}
        <div
          className="
            mt-20
            grid
            gap-8
            border-t
            border-[rgb(var(--border))]
            pt-12
            text-center
            sm:grid-cols-3
          "
        >
          <div>
            <p className="text-4xl font-bold">
              500+
            </p>

            <p className="mt-2 text-muted">
              Orders Completed
            </p>
          </div>

          <div>
            <p className="text-4xl font-bold">
              4.8★
            </p>

            <p className="mt-2 text-muted">
              Average Rating
            </p>
          </div>

          <div>
            <p className="text-4xl font-bold">
              24h
            </p>

            <p className="mt-2 text-muted">
              Express Turnaround
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}