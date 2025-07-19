import {describe, it, expect} from 'vitest';
import request from 'supertest';
import app from '../index.js';
import {
  strongPoints_ja,
  strongPoints_en,
} from './testData/expected-json/strongPoints.js';

describe('GET /api/strong-points', () => {
  it('should respond with a 200 status code and the Japanese strong points data by default', async () => {
    const response = await request(app).get('/api/strong-points');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe(
      'Strong points data fetched successfully'
    );
    expect(response.body.data).toEqual(strongPoints_ja);
  });

  it('should respond with a 200 status code and the English strong points data when lang=en', async () => {
    const response = await request(app).get('/api/strong-points?lang=en');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe(
      'Strong points data fetched successfully'
    );
    expect(response.body.data).toEqual(strongPoints_en);
  });
});
