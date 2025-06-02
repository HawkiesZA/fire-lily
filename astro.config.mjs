// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

export default defineConfig({
  integrations: [svelte()],
  site: "https://firelily.dance",
});