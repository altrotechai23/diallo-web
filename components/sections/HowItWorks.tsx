import {
  CalendarCheck,
  Truck,
  Sparkles,
  Home,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    title: "Book Your Pickup",
    description:
      "Schedule online or via WhatsApp in under 60 seconds. Choose a time that suits your lifestyle.",
  },
  {
    icon: Truck,
    title: "We Collect",
    description:
      "Our driver picks up your laundry from your home, office, Airbnb, or business.",
  },
  {
    icon: Sparkles,
    title: "Expert Cleaning",
    description:
      "Every item is professionally cleaned, inspected, and treated with exceptional care.",
  },
  {
    icon: Home,
    title: "Delivered Fresh",
    description:
      "Fresh, folded, and ready to wear — returned to your doorstep on time.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="
        relative
        overflow-hidden
        bg-[rgb(var(--muted))]
        py-24
        md:py-32
      "
    >
      {/* Background Decoration */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-40
        "
      >
        <div
          className="
            absolute
            -top-32
            left-1/2
            h-96
            w-96
            -translate-x-1/2
            rounded-full
            bg-[rgba(0,103,177,0.08)]
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            h-72
            w-72
            rounded-full
            bg-[rgba(65,190,35,0.08)]
            blur-3xl
          "
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
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
              tracking-wide
              text-[rgb(var(--primary))]
              shadow-sm
            "
          >
            How It Works
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
            Laundry designed for
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
              modern living.
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
            We take care of the laundry so you can focus on
            work, family, and the moments that matter most.
          </p>
        </div>

        {/* Steps */}
        <div
          className="
            relative
            mt-20
            grid
            gap-8
            lg:grid-cols-4
          "
        >
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="
                  group
                  relative
                  rounded-[2rem]
                  border
                  border-white/60
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div
                    className="
                      absolute
                      top-12
                      left-full
                      hidden
                      h-[2px]
                      w-8
                      bg-gradient-to-r
                      from-[rgb(var(--primary))]
                      to-[rgb(var(--secondary))]
                      lg:block
                    "
                  />
                )}

                {/* Step Number */}
                <div
                  className="
                    absolute
                    right-6
                    top-6
                    text-5xl
                    font-bold
                    text-slate-100
                    transition-colors
                    group-hover:text-slate-200
                  "
                >
                  0{index + 1}
                </div>

                {/* Icon */}
                <div
                  className="
                    flex
                    h-16
                    w-16
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
                  <Icon size={30} />
                </div>

                <h3
                  className="
                    mt-8
                    text-2xl
                    font-semibold
                    text-[rgb(var(--foreground))]
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-4
                    leading-7
                    text-[rgb(var(--muted-foreground))]
                  "
                >
                  {step.description}
                </p>

                {/* Learn More */}
                <div
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-[rgb(var(--primary))]
                  "
                >
                  Simple & Convenient

                  <ArrowRight
                    size={16}
                    className="
                      transition-transform
                      group-hover:translate-x-1
                    "
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Statement */}
        <div
          className="
            mt-20
            rounded-[2rem]
            bg-gradient-to-r
            from-[rgb(var(--primary))]
            to-[rgb(var(--secondary))]
            px-8
            py-10
            text-center
            text-white
            shadow-xl
          "
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
            Trusted Across Cape Town
          </p>

          <h3 className="mt-3 text-3xl font-bold md:text-4xl">
            More time for what matters.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            Join busy professionals, families, Airbnb hosts, and local businesses
            who trust Diallo Laundry for reliable pickup, expert cleaning,
            and doorstep delivery.
          </p>
        </div>
      </div>
    </section>
  );
}