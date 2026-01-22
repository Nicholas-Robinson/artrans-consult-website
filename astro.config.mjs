import { defineConfig } from 'astro/config';

export default defineConfig({
  // Serve static assets from the public/ directory (idiomatic Astro)
  publicDir: './public',
  outDir: './dist'
});
