import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="border-t border-[rgb(var(--border))] bg-white"
    >
      <div className="container-custom py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[rgb(var(--primary))]
                  text-white
                  font-bold
                "
              >
                D
              </div>

              <div>
                <h3 className="text-lg font-bold">
                  Diallo Laundry
                </h3>

                <p className="text-sm text-muted">
                  Cape Town
                </p>
              </div>
            </div>

            <p className="mt-5 text-muted leading-7">
              Premium laundry and dry cleaning services designed
              around your lifestyle. Free pickup and delivery
              across Cape Town.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold">
              Services
            </h4>

            <ul className="mt-5 space-y-3 text-muted">
              <li>
                <Link href="/services/dry-cleaning">
                  Dry Cleaning
                </Link>
              </li>

              <li>
                <Link href="/services/wash-fold">
                  Wash & Fold
                </Link>
              </li>

              <li>
                <Link href="/services/ironing">
                  Ironing Service
                </Link>
              </li>

              <li>
                <Link href="/services/commercial">
                  Commercial Laundry
                </Link>
              </li>

              <li>
                <Link href="/services/airbnb">
                  Airbnb Laundry
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-semibold">
              Service Areas
            </h4>

            <ul className="mt-5 space-y-3 text-muted">
              <li>Long Street</li>
              <li>Cape Town CBD</li>
              <li>Sea Point</li>
              <li>Green Point</li>
              <li>Gardens</li>
              <li>Woodstock</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold">
              Contact
            </h4>

            <ul className="mt-5 space-y-4 text-muted">
              <li>
                Africa Mall
                <br />
                98 Long Street
                <br />
                Cape Town, 8001
              </li>
              <li>
                <a
                  href="tel:+27736171543"
                  className="hover:text-[rgb(var(--primary))]"
                >
                  +27 73 617 1543
                </a>
              </li>

              <li>
                <a
                  href="tel:+27631872533"
                  className="hover:text-[rgb(var(--primary))]"
                >
                  +27 63 187 2533 
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/27736171543"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[rgb(var(--primary))]"
                >
                  WhatsApp Us
                </a>
              </li>

              <li>
                Open Daily
                <br />
                08:00 – 18:00
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="
            mt-12
            flex
            flex-col
            items-center
            justify-between
            gap-4
            border-t
            border-[rgb(var(--border))]
            pt-8
            text-sm
            text-muted
            md:flex-row
          "
        >
          <p>
            © {currentYear} Diallo Laundry. All rights reserved.
          </p>

          <p>
            Designed to serve Cape Town better.
          </p>
        </div>
      </div>
    </footer>
  );
}