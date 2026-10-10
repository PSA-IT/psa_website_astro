// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://psa-online.net',
  // Keep the same page addresses as the old site: /about, /pt_info, /staff …
  trailingSlash: 'never',
  // Keep line breaks as spaces so text next to links never runs together.
  compressHTML: false,
  build: { format: 'file' },
  integrations: [sitemap()],
});
