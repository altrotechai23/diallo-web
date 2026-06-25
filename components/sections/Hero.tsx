import Link from "next/link";
import Image from "next/image";
import {
  MessageCircle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import WhatsAppButton from "../common/WhatsAppButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        >
          <source src="/vid.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-slate-900/65
          "
        />

        {/* Brand Gradient Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-[rgba(0,103,177,0.25)]
            via-transparent
            to-[rgba(65,190,35,0.20)]
          "
        />
      </div>

      {/* Content */}
      <div
        className="
          relative
          z-10
          container-custom
          py-28
          text-center
          text-white
          md:py-36
        "
      >
        {/* Eyebrow */}
        <div
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-white/20
            bg-white/10
            px-5
            py-2
            text-sm
            font-semibold
            tracking-wide
            text-white
            backdrop-blur-md
          "
        >
          Cape Town s Trusted Laundry Experts
        </div>

        {/* Headline */}
        <h1
          className="
            mx-auto
            mt-8
            max-w-5xl
            text-5xl
            font-bold
            tracking-tight
            leading-[0.95]
            md:text-7xl
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
            Diallo Laundry.
          </span>
           <br />
          Laundry that feels effortless
         

          
        </h1>

        {/* Subheadline */}
        <p
          className="
            mx-auto
            mt-8
            max-w-3xl
            text-lg
            leading-8
            text-white/85
            md:text-xl
          "
        >
          Affordable Premium laundry and dry cleaning with free pickup and
          delivery across Long Street and Cape Town CBD.
        </p>

        {/* CTA Buttons */}
        <div
          className="
            mt-12
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
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[rgb(var(--primary))]
              px-8
              py-4
              text-base
              font-semibold
              text-white
              shadow-xl
              transition-all
              hover:-translate-y-1
              hover:shadow-2xl
            "
          >
            Book Pickup

            <ArrowRight size={18} />
          </Link>

          <WhatsAppButton />
        </div>

        {/* Trust Line */}
        <div
          className="
            mt-12
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-8
            gap-y-4
            text-sm
            text-white/85
          "
        >
          <div className="flex items-center gap-2">
            <CheckCircle2
              size={18}
              className="text-[rgb(var(--secondary))]"
            />

            Free Pickup & Delivery
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2
              size={18}
              className="text-[rgb(var(--secondary))]"
            />

            Same-Day Service Available
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2
              size={18}
              className="text-[rgb(var(--secondary))]"
            />

            Trusted Garment Care
          </div>
        </div>

        {/* Optional Hero Card */}
        <div className="mt-20">
          <div
            className="
              overflow-hidden
              rounded-[2rem]
              border
              border-white/10
              bg-white/10
              backdrop-blur-md
              shadow-2xl
            "
          >
            <Image
              src="/images/diallo-laundry.png"
              alt="Premium laundry and dry cleaning service in Cape Town"
              width={1400}
              height={800}
              priority
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}