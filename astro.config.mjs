import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lauraquinteroveterinaria.com',
  output: 'static',
  integrations: [
    react(),
    sitemap(),
  ],
});
