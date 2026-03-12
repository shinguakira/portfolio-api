import app from './index.js';

// Vercel serverless handler — Elysia's fetch is compatible with @vercel/node
export default app.fetch;
