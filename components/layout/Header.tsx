"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
} from "lucide-react";

const navigation = [
  { name: "Services", href: "/services" },
  { name: "Service Areas", href: "/#areas" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "Book", href: "/book" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);


  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-[rgba(var(--border),0.5)]
        bg-white/90
        backdrop-blur-xl
      "
    >
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            onClick={() => setIsOpen(false)}
            href="/"
            className="flex items-center gap-3 shrink-0"
          >
            <Image
              src="/images/logo.jpeg"
              alt="Diallo Laundry"
              width={52}
              height={52}
              priority
              className="h-12 w-12 object-contain"
            />

            <div className="hidden sm:block leading-none">
              <div
                className="
                  text-xl
                  font-bold
                  tracking-tight
                  text-[rgb(var(--primary))]
                "
              >
                Diallo Laundry
              </div>

              <div
                className="
                  mt-1
                  text-sm
                  text-[rgb(var(--muted-foreground))]
                "
              >
                Premium Laundry • Cape Town
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => {
              const isActive =
                pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                   onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[rgb(var(--primary))]"
                      : "text-slate-700 hover:text-[rgb(var(--primary))]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/27631872533 "
              target="_blank"
              rel="noopener noreferrer"
              className="
                btn-success
                px-5
                py-3
                text-sm
              "
            >
              <MessageCircle size={18} />

              WhatsApp
            </a>

            <Link
              href="/book"
              className="
                btn-primary
                px-5
                py-3
                text-sm
              "
            >
              Book Pickup
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-white
              lg:hidden
            "
            aria-label={
              isOpen ? "Close menu" : "Open menu"
            }
          >
            {isOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-x-0 top-20 bottom-0 z-40 bg-white/95 backdrop-blur-xl px-8 py-10 transition-all duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col justify-between">
          <nav className="flex flex-col gap-6">
            {navigation.map((item, idx) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                style={{
                  transitionDelay: `${idx * 40}ms`,
                }}
                className={`text-3xl font-semibold tracking-tight transition-all duration-300 ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-4 opacity-0"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div
            className={`border-t border-[rgba(var(--border),0.5)] pt-8 transition-all duration-500 ${
              isOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-3">
              <Link
                href="/book"
                onClick={() => setIsOpen(false)}
                className="
                  flex
                  h-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[rgb(var(--primary))]
                  text-sm
                  font-semibold
                  text-white
                "
              >
                Book Pickup
              </Link>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://wa.me/27631872533"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    h-12
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-[rgb(var(--secondary))]
                    text-sm
                    font-semibold
                    text-white
                  "
                >
                  <MessageCircle size={16} />

                  WhatsApp
                </a>

                <a
                  href="tel:+27631872533"
                  className="
                    flex
                    h-12
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-[rgb(var(--border))]
                    bg-[rgb(var(--muted))]
                    text-sm
                    font-semibold
                  "
                >
                  <Phone size={16} />

                  Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}