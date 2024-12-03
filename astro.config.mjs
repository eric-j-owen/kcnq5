// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://kcnq5.org",
  integrations: [sitemap()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
