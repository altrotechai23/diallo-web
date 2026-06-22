import {
  CalendarCheck,
  Truck,
  Sparkles,
  Home,
} from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    title: "Book",
    description:
      "Schedule your pickup online or through WhatsApp in less than a minute.",
  },
  {
    icon: Truck,
    title: "We Collect",
    description:
      "Our team picks up your laundry from your home, office, or business.",
  },
  {
    icon: Sparkles,
    title: "We Clean",
    description:
      "Your garments receive professional care and attention to detail.",
  },
  {
    icon: Home,
    title: "We Deliver",
    description:
      "Fresh, folded, and ready to wear — delivered back to you.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section-muted"
    >
      <div className="container-custom">
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
            How It Works
          </p>

          <h2 className="heading-lg mt-4">
            Laundry made simple. <br /> <span
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
          </h2>

          <p
            className="
              mt-6
              text-lg
              text-muted
            "
          >
            From pickup to delivery, we ve designed every step to save you time.
          </p>
        </div>

        <div
          className="
            mt-16
            grid
            gap-6
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="
                  card-premium
                  p-8
                  text-center
                "
              >
                <div
                  className="
                    mx-auto
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[rgb(var(--muted))]
                    text-[rgb(var(--primary))]
                  "
                >
                  <Icon size={28} />
                </div>

                <p
                  className="
                    mt-6
                    text-sm
                    font-semibold
                    text-[rgb(var(--secondary))]
                  "
                >
                  Step {index + 1}
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  {step.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-muted
                  "
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}