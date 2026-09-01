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
        ink: {
          DEFAULT: "#F5F1E8",
          soft: "#D8CFC0",
        },
        accent: "#E0924A",
        paper: {
          DEFAULT: "#10201B",
          warm: "#16281F",
        },
        rule: "#2A3F35",
        text: {
          DEFAULT: "#E5E0D5",
          muted: "#9C9384",
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
