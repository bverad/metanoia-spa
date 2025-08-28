import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://metanoiaspa.cl',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  },
  // Vite config can be removed for simplicity
});
