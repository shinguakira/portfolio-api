import {describe, it, expect} from 'vitest';
import request from 'supertest';
import app from '../index.js';
import {
  changelogs_ja,
  changelogs_en,
} from './testData/expected-json/changelogs.js';

describe('GET /api/changelogs', () => {
  it('should respond with a 200 status code and the Japanese changelogs data by default', async () => {
    const response = await request(app).get('/api/changelogs');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Changelogs data fetched successfully');
    expect(response.body.data).toEqual(changelogs_ja);
  });

  it('should respond with a 200 status code and the English changelogs data when lang=en', async () => {
    const response = await request(app).get('/api/changelogs?lang=en');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Changelogs data fetched successfully');
    expect(response.body.data).toEqual(changelogs_en);
  });
});
