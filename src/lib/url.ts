// Prefixes an absolute app path ("/about") with Astro's configured base
// path (import.meta.env.BASE_URL), so links work whether the site is
// served from the domain root or a subpath like GitHub Pages'
// /<repo>/ project-site path.
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path}`;
}
