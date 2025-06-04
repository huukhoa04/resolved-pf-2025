// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  srcDir: './src',
  publicDir: './public',
  outDir: './dist',
  site: 'https://resolved.id.vn',
  build: {
    assets: '_astro',
    format: 'directory'
  },
});