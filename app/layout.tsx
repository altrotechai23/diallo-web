import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Script from 'next/script';
import "./globals.css";
import WhatsAppFloat from "@/components/common/WhatsAppFloat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://diallolaundry.co.za";

  export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),

    title: {
      default:
        "Diallo Laundry | Premium Laundry & Dry Cleaning in Cape Town",
      template: "%s | Diallo Laundry",
    },

    description:
      "Premium laundry and dry cleaning services in Cape Town. Free pickup and delivery from Long Street and surrounding areas. Book online or WhatsApp Diallo Laundry today.",

    keywords: [
      "laundry cape town",
      "dry cleaning cape town",
      "laundry service cape town",
      "dry cleaners long street",
      "wash and fold cape town",
      "airbnb laundry cape town",
      "commercial laundry cape town",
      "wedding dress dry cleaning near me",
      "same day dry cleaning cape town"
    ],

    applicationName: "Diallo Laundry",

    authors: [
      {
        name: "Diallo Laundry",
      },
    ],

    creator: "Diallo Laundry",

    publisher: "Diallo Laundry",

    icons: {
        icon: [
          { url: "/favicon.ico" },
          {
            url: "/icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            url: "/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],

        apple: [
          {
            url: "/apple-touch-icon.png",
            sizes: "180x180",
          },
        ],

        shortcut: ["/favicon.ico"],
      },

    manifest: "/manifest.json",

    alternates: {
      canonical: siteUrl,
    },

    openGraph: {
      type: "website",
      locale: "en_ZA",
      url: siteUrl,
      siteName: "Diallo Laundry",

      title:
        "Premium Laundry & Dry Cleaning in Cape Town",

      description:
        "Free pickup and delivery. Professional garment care for busy professionals, Airbnb hosts, businesses and families.",

      images: [
        {
          url: `${siteUrl}/images/og-image.jpeg`,
          width: 1200,
          height: 630,
          alt: "Diallo Laundry",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title:
        "Premium Laundry & Dry Cleaning in Cape Town",

      description:
        "Free pickup and delivery across Cape Town.",

      images: [`${siteUrl}/images/og-image.jpg`],
    },

    category: "Laundry Services",

    robots: {
      index: true,
      follow: true,

      googleBot: {
        index: true,
        follow: true,

        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };

  export const viewport: Viewport = {
    themeColor: "#0F4C81",
    colorScheme: "light",
  };

  type RootLayoutProps = {
    children: React.ReactNode;
  };

  export default function RootLayout({
    children,
  }: RootLayoutProps) {
    return (
      <html
        lang="en"
        suppressHydrationWarning
      >
        {/* 2. Google Tag Manager/Google Ads Tag goes at the very top of the html tag */}
        <GoogleTagManager gtmId="AW-18265948639" />
        <body
          className={`${inter.variable} ${poppins.variable}`}
        >      
          {children}
          <WhatsAppFloat />
          {/* Local SEO Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "DryCleaningOrLaundry",
                "@id": "https://diallolaundry.co.za/#business",
                name: "Diallo Laundry",

                url: "https://diallolaundry.co.za",

                hasMap: "https://maps.app.goo.gl/faSAuPKiqPVGEcDz7",

                image: "https://diallolaundry.co.za/images/hero-laundry.png",

                logo: "https://diallolaundry.co.za/images/logo.jpeg",

                telephone: "+27631872533",

                priceRange: "$$",

                inLanguage: "en-ZA",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Africa Mall, 98 Long Street",
                  addressLocality: "Cape Town",
                  postalCode: "8001",
                  addressCountry: "ZA",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: "-33.9249",
                  longitude: "18.4241",
                },
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                      "Sunday",
                    ],
                    opens: "08:00",
                    closes: "20:00",
                  },
                ],
                areaServed: [
                  "Long Street",
                  "Cape Town CBD",
                  "Sea Point",
                  "Green Point",
                  "Gardens",
                  "Woodstock",
                ],
                sameAs: [
                  "https://maps.google.com/?cid=8066815179643636288",
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "5",
                  reviewCount: "1",
                },
              }),
            }}
          />
          
          <GoogleAnalytics gaId="G-46VZ6EE43Q"  />
        </body>
      </html>
    );
  }