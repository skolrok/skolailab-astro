// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Produkcijska domena (Cloudflare Pages). Rabi jo sitemap + kanonični URL-ji.
  site: 'https://skolailab.com',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      // 404 ni za indeks; ostalo gre v sitemap.
      filter: (page) => !/\/404\/?$/.test(page),
    }),
  ],
});