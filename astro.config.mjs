import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  output: 'static',
  site: 'https://metanoiaspa.cl',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
