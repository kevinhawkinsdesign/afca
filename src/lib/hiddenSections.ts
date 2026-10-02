// Site sections that are temporarily hidden. Every page in a hidden
// section redirects to the home page, and links to it are left out of
// the header, footer, home "Explore" cards and sitemap. To bring a
// section back, remove it from this list.
export const hiddenSections: string[] = ["/community", "/intelligence", "/standards"];

export function isHidden(path: string): boolean {
  const bare = path.split("#")[0];
  return hiddenSections.some((section) => bare === section || bare.startsWith(`${section}/`));
}

// Hides the home page "Explore AfCA" cards. Set to false to show them again.
export const hideHomeExplore = true;
