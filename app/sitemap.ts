import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://diallolaundry.co.za";

  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${baseUrl}/book`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    /*
     * Services
     */
    {
      url: `${baseUrl}/services/dry-cleaning`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/services/wash-fold`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/services/ironing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/services/commercial`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/services/airbnb`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    /*
     * Areas
     */
    {
      url: `${baseUrl}/areas/long-street`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${baseUrl}/areas/cape-town-cbd`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${baseUrl}/areas/sea-point`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${baseUrl}/areas/green-point`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${baseUrl}/areas/gardens`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${baseUrl}/areas/woodstock`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}