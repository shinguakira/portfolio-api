import {describe, it, expect} from 'vitest';
import request from 'supertest';
import app from '../index.js';

describe('GET /health', () => {
  it('should respond with a 200 status code and a status of OK', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('OK');
  });
});
