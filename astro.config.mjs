import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://afca.example.org",
  output: "static",
  integrations: [mdx(), tailwind({ applyBaseStyles: false })],
});
