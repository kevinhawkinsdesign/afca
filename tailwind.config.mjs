/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      // Dark-first palette (site has no light theme — this is the only one).
      // Token names are kept from the original light palette so component
      // markup didn't need to change, but the values are inverted: "paper"
      // is now the dark page background, "ink" is now the light
      // foreground/heading color.
      colors: {
        // Black-and-white base — accent stays as the site's one deliberate
        // color, a warm bronze against the monochrome rest (see BRIEF.md's
        // "restraint over energy" rule; this is the same discipline
        // applied to a black-and-white palette instead of a green one).
        ink: {
          DEFAULT: "#F7F7F4",
          soft: "#C9C9C5",
        },
        accent: "#E0924A",
        paper: {
          DEFAULT: "#0A0A0A",
          warm: "#161616",
        },
        rule: "#2E2E2E",
        text: {
          DEFAULT: "#D9D9D6",
          muted: "#8C8C89",
        },
      },
      fontFamily: {
        sans: ["Schibsted Grotesk", "system-ui", "sans-serif"],
        serif: ["Source Serif 4", "Georgia", "serif"],
        // Italic-only editorial emphasis accent — never used for full
        // paragraphs, only <em> within a headline (see .accent-em below).
        accentSerif: ["Fraunces", "Georgia", "serif"],
        mono: ["DM Mono", "SFMono-Regular", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      maxWidth: {
        prose: "42rem",
        content: "72rem",
      },
    },
  },
  plugins: [],
};
