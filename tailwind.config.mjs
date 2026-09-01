/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#14322B",
          soft: "#2B4A42",
        },
        accent: "#C8792F",
        paper: {
          DEFAULT: "#FAF8F4",
          warm: "#F2EDE4",
        },
        rule: "#E3DBCF",
        text: {
          DEFAULT: "#2B2724",
          muted: "#6B625A",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Source Serif 4", "Georgia", "serif"],
      },
      maxWidth: {
        prose: "42rem",
        content: "72rem",
      },
    },
  },
  plugins: [],
};
