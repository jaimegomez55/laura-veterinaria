import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { remarkFaq } from './src/plugins/remark-faq.mjs';

export default defineConfig({
  site: 'https://lauraquinteroveterinaria.com',
  output: 'static',
  integrations: [
    react(),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [remarkFaq],
  },
});
