import {describe, it, expect} from 'vitest';
import request from 'supertest';
import app from '../index.js';
import {
  certifications_ja,
  certifications_en,
} from './testData/expected-json/certifications.js';

describe('GET /api/certifications', () => {
  it('should respond with a 200 status code and the Japanese certifications data by default', async () => {
    const response = await request(app).get('/api/certifications');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe(
      'Certifications data fetched successfully'
    );
    expect(response.body.data).toEqual(certifications_ja);
  });

  it('should respond with a 200 status code and the English certifications data when lang=en', async () => {
    const response = await request(app).get('/api/certifications?lang=en');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe(
      'Certifications data fetched successfully'
    );
    expect(response.body.data).toEqual(certifications_en);
  });
});
