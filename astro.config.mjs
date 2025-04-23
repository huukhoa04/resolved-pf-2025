// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  srcDir: './src',
  publicDir: './public',
  outDir: './dist',
  build: {
    assets: '_astro',
    format: 'directory'
  }
});