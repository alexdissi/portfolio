import { personJsonLd, websiteJsonLd } from "./structured-data";

export default function Head() {
  const jsonLd = [websiteJsonLd, personJsonLd];

  return (
    <>
      <meta name="robots" content="index,follow" />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is expected to be embedded as a script tag.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
