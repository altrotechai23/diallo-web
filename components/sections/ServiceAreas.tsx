import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const areas = [
  {
    name: "Long Street",
    href: "/areas/long-street",
  },
  {
    name: "Cape Town CBD",
    href: "/areas/cape-town-cbd",
  },
  {
    name: "Sea Point",
    href: "/areas/sea-point",
  },
  {
    name: "Green Point",
    href: "/areas/green-point",
  },
  {
    name: "Gardens",
    href: "/areas/gardens",
  },
  {
    name: "Woodstock",
    href: "/areas/woodstock",
  },
];

export default function ServiceAreas() {
  return (
    <section id="areas">
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
            Service Areas
          </p>

          <h2 className="heading-lg mt-4">
            Serving Cape Town s busiest neighbourhoods.
          </h2>

          <p
            className="
              mt-6
              text-lg
              text-muted
            "
          >
            Convenient pickup and delivery from our Long Street
            location to homes, offices, Airbnb properties,
            and businesses.
          </p>
        </div>

        {/* Areas Grid */}
        <div
          className="
            mt-16
            grid
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {areas.map((area) => (
            <Link
              key={area.name}
              href={area.href}
              className="
                card-premium
                flex
                items-center
                justify-between
                p-6
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[rgb(var(--muted))]
                    text-[rgb(var(--primary))]
                  "
                >
                  <MapPin size={22} />
                </div>

                <span className="font-semibold">
                  {area.name}
                </span>
              </div>

              <ArrowRight
                size={18}
                className="
                  text-[rgb(var(--primary))]
                "
              />
            </Link>
          ))}
        </div>

        {/* Location Highlight */}
        <div
          className="
            mt-16
            rounded-[32px]
            border
            border-[rgb(var(--border))]
            bg-[rgb(var(--muted))]
            p-8
            text-center
          "
        >
          <p className="text-sm uppercase tracking-[0.2em] text-[rgb(var(--primary))]">
            Visit Us
          </p>

          <h3 className="mt-4 text-2xl font-semibold">
            Africa Mall, 98 Long Street
          </h3>

          <p className="mt-3 text-muted">
            Cape Town City Centre, Cape Town, 8001
          </p>

          <p className="mt-6 text-lg font-medium">
            Open Daily • 08:00 – 18:00
          </p>
        </div>
      </div>
    </section>
  );
}