// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import alpinejs from "@astrojs/alpinejs";
import netlify from "@astrojs/netlify";

import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

import expressiveCode from "astro-expressive-code";

import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://jameer.online",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    alpinejs(),
    react(),
    expressiveCode({
      themes: ["github-dark", "github-dark-default"],
    }),
    mdx(),
    sitemap(),
    icon(),
  ],
  adapter: netlify({
    imageCDN: false,
  }),
});
