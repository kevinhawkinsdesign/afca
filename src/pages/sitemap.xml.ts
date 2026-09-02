import type { APIRoute } from "astro";
import { locales, defaultLocale, localizePath } from "../i18n/config";
import { standardsGuides } from "../i18n/standardsGuides";

// Every localized route in the app. Kept as a flat list here (rather than
// walking the filesystem) so it stays trivially readable — add a path when
// a new page is added under both src/pages/*.astro and src/pages/[locale]/*.astro.
const localizedPaths = [
  "/",
  "/about",
  "/community",
  "/intelligence",
  "/standards",
  "/summit",
  ...Object.keys(standardsGuides).map((slug) => `/standards/${slug}`),
];

// Routes that only exist in English (no [locale] counterpart).
const englishOnlyPaths = ["/glossary"];

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL("https://africancharging.org");
  const urls = new Set<string>();

  for (const path of localizedPaths) {
    for (const locale of locales) {
      urls.add(new URL(localizePath(path, locale), base).href);
    }
  }
  for (const path of englishOnlyPaths) {
    urls.add(new URL(localizePath(path, defaultLocale), base).href);
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Array.from(urls)
  .sort()
  .map((url) => `  <url><loc>${url}</loc></url>`)
  .join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml" },
  });
};
