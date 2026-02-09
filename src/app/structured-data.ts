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
  knowsAbout: ["Go", "React", "SaaS", "Clean Architecture", "Performance"],
  sameAs: [
    "https://www.linkedin.com/in/alexandredissi/",
    "https://github.com/alexdissi",
  ],
};
