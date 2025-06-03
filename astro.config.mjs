// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import alpinejs from "@astrojs/alpinejs";
import netlify from "@astrojs/netlify";

import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
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
  ],
  adapter: netlify({
    imageCDN: false,
  }),
});
