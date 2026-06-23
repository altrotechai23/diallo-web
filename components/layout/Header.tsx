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
  ArrowRight,
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
    <>
      {/* Header */}
      <header
        className={`
          sticky top-0 z-50 transition-all duration-300
          border-b border-[rgba(var(--border),0.5)]
          ${
            isOpen
              ? "bg-white shadow-lg"
              : "bg-white/90 backdrop-blur-xl shadow-sm"
          }
        `}
      >
        <div className="container-custom px-4 md:px-6">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 shrink-0"
            >
              <Image
                src="/images/logo.jpeg"
                alt="Diallo Laundry"
                width={52}
                height={52}
                priority
                className="h-20 w-20 object-contain"
              />

              <div className="leading-none">
                <div
                  className="
                    text-lg
                    md:text-xl
                    font-bold
                    tracking-tight
                    text-[rgb(var(--primary))]
                  "
                >
                  Diallo Laundry
                </div>

                <div
                  className="
                    hidden sm:block
                    mt-1
                    text-xs md:text-sm
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
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`
                      relative
                      text-sm
                      font-medium
                      transition-colors
                      ${
                        isActive
                          ? "text-[rgb(var(--primary))]"
                          : "text-slate-700 hover:text-[rgb(var(--primary))]"
                      }
                    `}
                  >
                    {item.name}

                    <span
                      className={`
                        absolute
                        -bottom-2
                        left-0
                        h-[2px]
                        rounded-full
                        bg-[rgb(var(--primary))]
                        transition-all duration-300
                        ${
                          isActive
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }
                      `}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/27631872533"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[rgb(var(--secondary))]
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-sm
                  transition-all
                  hover:-translate-y-0.5
                  hover:shadow-md
                "
              >
                <MessageCircle size={18} className="text-white"/>
                <span className="text-white">WhatsApp</span>
              </a>

              <Link
                href="/book"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[rgb(var(--primary))]
                  px-5
                  py-3
                  text-sm
                  font-semibold
                text-white
                  shadow-sm
                  transition-all
                  hover:-translate-y-0.5
                  hover:shadow-md
                "
              >
                <span className="text-white">Book Pickup</span>

                <ArrowRight size={16}  className="text-white"/>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="
                flex lg:hidden
                h-11 w-11
                items-center justify-center
                rounded-full
                border border-[rgb(var(--border))]
                bg-white
                shadow-sm
                transition-all
                hover:shadow-md
              "
            >
              {isOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`
          fixed inset-0 z-40 lg:hidden
          bg-white
          transition-all duration-300
          ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        <div className="pt-24 px-8 pb-10 flex h-full flex-col justify-center">
          {/* Navigation */}
          <nav className="flex flex-col gap-8">
            {navigation.map((item, idx) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    transitionDelay: `${idx * 50}ms`,
                  }}
                  className={`
                    text-3xl
                    font-semibold
                    tracking-tight
                    transition-all duration-300
                    ${
                      isOpen
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-4 opacity-0"
                    }
                    ${
                      isActive
                        ? "text-[rgb(var(--primary))]"
                        : "text-slate-800"
                    }
                  `}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div
            className={`
              border-t border-[rgba(var(--border),0.5)]
              pt-8
              transition-all duration-500
              ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }
            `}
          >
            <div className="flex flex-col gap-3">
              <Link
                href="/book"
                onClick={() => setIsOpen(false)}
                className="
                  flex h-14 items-center justify-center gap-2
                  rounded-full
                  bg-[rgb(var(--primary))]
                  text-base font-semibold text-white
                  shadow-sm
                "
              >
                Book Pickup

                <ArrowRight size={18} />
              </Link>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://wa.me/27631872533"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex h-14 items-center justify-center gap-2
                    rounded-full
                    bg-[rgb(var(--secondary))]
                    text-sm font-semibold text-white
                  "
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>

                <a
                  href="tel:+27631872533"
                  className="
                    flex h-14 items-center justify-center gap-2
                    rounded-full
                    border border-[rgb(var(--border))]
                    bg-[rgb(var(--muted))]
                    text-sm font-semibold
                    text-[rgb(var(--foreground))]
                  "
                >
                  <Phone size={18} />
                  Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}