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
  // Permite el healthcheck de Railway en modo preview
  vite: {
    preview: {
      // Permitir healthchecks y cualquier host de proxy/CDN en Railway
      allowedHosts: 'any'
    },
    server: {
      // Por si se usa astro dev en entornos remotos
      allowedHosts: 'any'
    }
  }
});
