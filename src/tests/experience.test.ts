import {describe, it, expect} from 'vitest';
import request from 'supertest';
import app from '../index.js';
import {
  experience_ja,
  experience_en,
} from './testData/expected-json/experience.js';

describe('GET /api/experience', () => {
  it('should respond with a 200 status code and the Japanese experience data by default', async () => {
    const response = await request(app).get('/api/experience');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Experience data fetched successfully');
    console.log(experience_ja);
    expect(response.body.data).toEqual(experience_ja);
  });

  it('should respond with a 200 status code and the English experience data when lang=en', async () => {
    const response = await request(app).get('/api/experience?lang=en');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Experience data fetched successfully');
    expect(response.body.data).toEqual(experience_en);
  });
});
