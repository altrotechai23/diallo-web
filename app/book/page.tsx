import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingForm from "@/components/forms/BookingForm";

export const metadata = {
  title: "Schedule Pickup",
  description:
    "Book your laundry pickup online in under a minute.",
};

export default function BookPage() {
  return (
    <>
      <Header />

      <main>
        <section>
          <div className="container-custom max-w-4xl">
            <div className="text-center">
              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[rgb(var(--primary))]
                "
              >
                Schedule Pickup
              </p>

              <h1 className="heading-lg mt-4">
                Book in under a minute.
              </h1>

              <p className="mt-6 text-lg text-muted">
                Tell us what you need and well take care of the rest.
              </p>
            </div>

            <div className="mt-16">
              <BookingForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}