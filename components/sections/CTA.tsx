import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section>
      <div className="container-custom p-6">
        <div
          className="
            overflow-hidden
            rounded-[40px]
            bg-[rgb(var(--primary))]
            px-8
            py-14
            text-center
            text-white
            md:px-16
            md:py-20
          "
        >
          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-white/80
            "
          >
            Ready to get started?
          </p>

          <h2
            className="
              mt-4
              text-4xl
              font-bold
              leading-tight
              md:text-5xl
            "
          >
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
            Let us take laundry
            off your to-do list. 
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              leading-8
              text-white/80
            "
          >
            Schedule a pickup in minutes and enjoy
            professional garment care delivered back
            to your door.
          </p>

          <div
            className="
              mt-10
              flex
              flex-col
              items-center
              justify-center
              gap-4
              sm:flex-row
            "
          >
            <Link
              href="/book"
              className="
                rounded-full
                bg-white
                px-8
                py-4
                font-semibold
                text-[rgb(var(--primary))]
                transition
                hover:-translate-y-0.5
              "
            >
              Schedule Pickup
            </Link>

            <a
              href="https://wa.me/27631872533"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-white/20
                px-8
                py-4
                font-semibold
                transition
                hover:bg-white/10
              "
            >
              <MessageCircle size={18} />

              WhatsApp Us
            </a>

            <a
              href="tel:+27631872533"
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-white/20
                px-8
                py-4
                font-semibold
                transition
                hover:bg-white/10
              "
            >
              <Phone size={18} />

              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}