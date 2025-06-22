// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import node from '@astrojs/node';

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

export default defineConfig({
  integrations: [svelte(), 
    icon({
      // I include only the icons I use. This is because if you use SSR, ALL icons will be included (no bueno)
      // https://www.astroicon.dev/reference/configuration#include
      include: {
          tabler: [
              "bulb",
              "alert-triangle",
              "flame",
              "info-circle",
              "arrow-narrow-left",
              "arrow-narrow-right",
              "menu-2",
              "x",
              "chevron-down",
              "category",
              "calendar-event",
          ],
      },
  }),],
  site: "https://firelily.dance",

  vite: {
    plugins: [tailwindcss()],
    // stop inlining short scripts to fix issues with ClientRouter: https://github.com/withastro/astro/issues/12804
    build: {
        assetsInlineLimit: 0,
    },
},

  adapter: node({
    mode: 'standalone',
  }),
});