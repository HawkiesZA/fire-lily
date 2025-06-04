// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import node from '@astrojs/node';

export default defineConfig({
  integrations: [svelte()],
  site: "https://firelily.dance",

  adapter: node({
    mode: 'standalone',
  }),
});