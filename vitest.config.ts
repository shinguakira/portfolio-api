import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Use the 'node' environment for backend testing
    environment: 'node',
    // You can include more configuration here as needed
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
});
