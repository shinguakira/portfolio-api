import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Use the 'node' environment for backend testing
    environment: 'node',
    // Coverage configuration
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        '**/node_modules/**',
        '**/dist/**',
        '**/tests/**',
        // Exclude type definition files - they don't need testing
        '**/types/**',
        // Exclude deployment handlers and serverless config files
        '**/handler.ts',
        '**/azure-functions/**',
        // Exclude config files
        '**/vitest.config.ts',
        '**/test-extract.js',
        // Exclude services with complex external dependencies (optional)
        '**/services/pdfService.ts'
      ],
      all: true,
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 70,
        statements: 80
      }
    },
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
});
