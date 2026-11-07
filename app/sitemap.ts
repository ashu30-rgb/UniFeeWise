import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://unifeewise.vercel.app";
  const now = new Date();

  // Core High-Intent Pages
  const coreRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/mock-test`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/lpunest-coupon-code`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/lpunest-previous-year-papers`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculator`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/btech-previous-year-paper`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ];

  // Program-Specific Fee & Cutoff Pages
  const programRoutes = [
    "lpu-cse-fees",
    "lpu-ece-fees",
    "lpu-btech-aiml-fees",
    "lpu-bba-fees",
    "lpu-bca-fees",
    "lpu-mba-fees",
  ].map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Subject Practice Mock Tests
  const subjectRoutes = [
    "physics",
    "chemistry",
    "mathematics",
    "biology",
    "english",
    "computer-science",
  ].map((subject) => ({
    url: `${baseUrl}/mock-test/${subject}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  // Compliance Pages
  const legalRoutes = [
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
  ];

  return [...coreRoutes, ...programRoutes, ...subjectRoutes, ...legalRoutes];
}

