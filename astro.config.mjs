// @ts-check
import { defineConfig } from "astro/config";
import path from "path";
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
  // alias: {
  //   "@": "./src",
  //   "@components": "./src/components",
  //   "@blocks": "./src/blocks",
  //   "@layouts": "./src/layouts",
  //   "@pages": "./src/pages",
  //   "@utils": "./src/utils",
  //   "@styles": "./src/styles",
  //   "@config": "./src/config",
  // },
  site: "https://jameer.online",
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@components": path.resolve("./src/components"),
        "@blocks": path.resolve("./src/blocks"),
        "@layouts": path.resolve("./src/layouts"),
        "@pages": path.resolve("./src/pages"),
        "@utils": path.resolve("./src/utils"),
        "@styles": path.resolve("./src/styles"),
        "@config": path.resolve("./src/config"),
      },
    },
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
