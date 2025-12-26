import { defineConfig } from 'vite';

export default defineConfig({
  base: '/wacorp-skin-viewer/',
  server: {
    fs: {
      strict: false,
      allow: ['.']
    },
    cors: {
      origin: '*'
    }
  }
});