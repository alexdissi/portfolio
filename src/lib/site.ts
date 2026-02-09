export const DEFAULT_SITE_URL = "https://dissi.fr";

export function getSiteUrl(): URL {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const value = raw && raw.length > 0 ? raw : DEFAULT_SITE_URL;
  return new URL(value);
}
