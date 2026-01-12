// @ts-check
import { defineConfig } from "astro/config";

import path from "path";

//adapter
import netlify from "@astrojs/netlify";

//remark plugins
import { remarkReadingTime } from './remark-reading-time.mjs';

//integrations
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import alpinejs from "@astrojs/alpinejs";
import tailwindcss from "@tailwindcss/vite";
import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
    site: "https://jameer.online",
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@components": path.resolve("./src/components"),
        "@blocks": path.resolve("./src/components/blocks"),
        "@layouts": path.resolve("./src/layouts"),
        "@pages": path.resolve("./src/pages"),
        "@utils": path.resolve("./src/utils"),
        "@styles": path.resolve("./src/styles"),
        "@config": path.resolve("./src/config"),
        "@assets": path.resolve("./src/assets"),
        "@types": path.resolve("./src/types"),
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
  image: {
    domains: [
      "docs.astro.build", "randomuser.me", "images.unsplash.com", "picsum.photos",
      "avatars.githubusercontent.com", "jameer.online"
    ]
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});