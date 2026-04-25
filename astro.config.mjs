import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://nikoemme.dev",
  output: "server",
  adapter: cloudflare({
    imageService: "compile",
    platformProxy: {
      enabled: true,
    },
  }),
  integrations: [tailwind(), sitemap()],
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
    assets: "_astro",
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: "hover",
  },
  vite: {
    build: {
      cssMinify: "esbuild",
      cssCodeSplit: false,
    },
  },
});
