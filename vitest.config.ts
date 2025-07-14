import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Use the 'node' environment for backend testing
    environment: 'node',
    // Coverage configuration
    coverage: {
      provider: 'v8', // Using v8 which is a valid option
      reporter: ['text', 'json', 'html'],
      exclude: ['**/node_modules/**', '**/dist/**', '**/tests/**'],
      all: true,
      // Thresholds are handled differently with v8 provider
      thresholds: {
        perFile: true,
        100: true,
        lines: 70,
        functions: 70,
        branches: 70,
        statements: 70
      }
    },
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
});
