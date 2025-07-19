import {describe, it, expect} from 'vitest';
import request from 'supertest';
import app from '../index.js';
import {
  education_ja,
  education_en,
} from './testData/expected-json/education.js';

describe('GET /api/education', () => {
  it('should respond with a 200 status code and the Japanese education data by default', async () => {
    const response = await request(app).get('/api/education');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Education data fetched successfully');
    expect(response.body.data).toEqual(education_ja);
  });

  it('should respond with a 200 status code and the English education data when lang=en', async () => {
    const response = await request(app).get('/api/education?lang=en');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Education data fetched successfully');
    expect(response.body.data).toEqual(education_en);
  });
});
