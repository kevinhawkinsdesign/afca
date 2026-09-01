import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://kevinhawkinsdesign.github.io",
  base: "/afca",
  output: "static",
  integrations: [mdx(), tailwind({ applyBaseStyles: false })],
});
