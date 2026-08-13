import { getSiteUrl } from "@/lib/site";

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Alexandre Dissi",
  url: `${getSiteUrl().toString()}/`,
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alexandre Dissi",
  url: `${getSiteUrl().toString()}/`,
  jobTitle: "Software Engineer",
  knowsAbout: [
    "Go",
    "React",
    "Swift",
    "SaaS",
    "Clean Architecture",
    "Performance",
  ],
  sameAs: [
    "https://www.linkedin.com/in/alexandredissi/",
    "https://github.com/alexdissi",
  ],
};

export const murmurJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Murmur",
  operatingSystem: "macOS",
  applicationCategory: "ProductivityApplication",
  url: "https://murmur.dissi.fr",
  description:
    "Free on-device AI dictation for macOS. Speak naturally, Apple Intelligence rewrites it professionally and types it into any app.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  author: {
    "@type": "Person",
    name: "Alexandre Dissi",
    url: `${getSiteUrl().toString()}/`,
  },
};
