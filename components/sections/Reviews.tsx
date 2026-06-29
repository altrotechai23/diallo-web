import { Star } from "lucide-react";

const reviews = [
  {
    name: "Google Customer",
    review:
      "Excellent service and attention to detail. Highly recommended.",
  },
];

export default function Reviews() {
  return (
    <section className="section-muted">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[rgb(var(--primary))]">
            Customer Reviews
          </p>

          <h2 className="heading-lg mt-4">
            <span
            className="bg-gradient-to-r
              from-[#41BE23]
              to-[#00A3FF]
              bg-clip-text
              text-transparent
            "
          >
            Diallo Laundry
            
          </span>
          <br />
          Trusted by our customers. 
          </h2>

          <p className="mt-6 text-lg text-muted"> Real feedback from people who trust Diallo Laundry with their garments.</p>
        </div>

        {/* Rating Summary */}
        <div
          className="
            mt-12
            text-center
          "
        >
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={28}
                fill="currentColor"
                className="text-[rgb(var(--secondary))]"
              />
            ))}
          </div>

          <p className="mt-4 text-5xl font-bold">
            5.0
          </p>

          <p className="mt-2 text-muted">
            Based on 1 Google Review
          </p>
        </div>

        {/* Review Card */}
        <div className="mx-auto mt-12 max-w-2xl">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="
                card-premium
                p-8
                text-center
              "
            >
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    fill="currentColor"
                    className="text-[rgb(var(--secondary))]"
                  />
                ))}
              </div>

              <p
                className="
                  mt-6
                  text-lg
                  leading-8
                "
              >
                {'"'}{review.review}{'"'}
              </p>

              <p
                className="
                  mt-6
                  font-semibold
                "
              >
                {review.name}
              </p>
            </div>
          ))}
        </div>
 
        {/* CTA */}
        <div className="mb-12 text-center">
          <a
            href="https://g.page/r/CUBKBWI3Cv5vEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary my-10"
          >
            Leave a Google Review
          </a>
        </div>
      </div>
    </section>
  );
}