import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../index.js';
import { links } from '../constants/links.js';

describe('GET /api/links', () => {
  it('should respond with a 200 status code and the links data', async () => {
    const response = await request(app).get('/api/links');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(links);
  });
});
