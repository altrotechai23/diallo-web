"use client";

import { useState } from "react";

const services = [
  "Dry Cleaning",
  "Wash & Fold",
  "Ironing",
  "Commercial Laundry",
  "Airbnb Laundry",
];

export default function BookingForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const phone = form.get("phone");
    const service = form.get("service");
    const address = form.get("address");
    const date = form.get("date");
    const notes = form.get("notes");

    const message = `
            Hello Diallo Laundry,

            Name: ${name}
            Phone: ${phone}

            Service: ${service}

            Pickup Address:
            ${address}

            Preferred Date:
            ${date}

            Additional Notes:
            ${notes}
         `;

    const whatsappUrl =
      `https://wa.me/27631872533?text=${encodeURIComponent(
        message
      )}`;

    window.gtag?.("event", "generate_lead", {
    event_category: "booking",
    event_label: service,
    value: 1,
    });

    window.open(whatsappUrl, "_blank");

    setLoading(false);

    e.currentTarget.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
        card-premium
        p-8
        md:p-10
      "
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">
            Full Name
          </label>

          <input
            required
            name="name"
            type="text"
            placeholder="John Smith"
            className="
              w-full
              rounded-2xl
              border
              border-[rgb(var(--border))]
              p-4
              outline-none
              focus:border-[rgb(var(--primary))]
            "
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Phone Number
          </label>

          <input
            required
            name="phone"
            type="tel"
            placeholder="+27..."
            className="
              w-full
              rounded-2xl
              border
              border-[rgb(var(--border))]
              p-4
              outline-none
              focus:border-[rgb(var(--primary))]
            "
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Service
          </label>

          <select
            required
            name="service"
            className="
              w-full
              rounded-2xl
              border
              border-[rgb(var(--border))]
              p-4
              outline-none
            "
          >
            <option value="">
              Select a service
            </option>

            {services.map((service) => (
              <option
                key={service}
                value={service}
              >
                {service}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Pickup Date
          </label>

          <input
            required
            name="date"
            type="date"
            className="
              w-full
              rounded-2xl
              border
              border-[rgb(var(--border))]
              p-4
            "
          />
        </div>
      </div>

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Pickup Address
        </label>

        <textarea
          required
          name="address"
          rows={3}
          placeholder="Street, suburb..."
          className="
            w-full
            rounded-2xl
            border
            border-[rgb(var(--border))]
            p-4
          "
        />
      </div>

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Additional Notes
        </label>

        <textarea
          name="notes"
          rows={4}
          placeholder="Special instructions..."
          className="
            w-full
            rounded-2xl
            border
            border-[rgb(var(--border))]
            p-4
          "
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="
          btn-primary
          mt-8
          w-full
        "
      >
        {loading
          ? "Opening WhatsApp..."
          : "Continue on WhatsApp"}
      </button>
    </form>
  );
}