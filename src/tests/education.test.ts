import {describe, it, expect} from 'vitest';
import request from 'supertest';
import app from '../index.js';
import {educationHistory} from '../constants/educationHistory.js';

describe('GET /api/education', () => {
  it('should respond with a 200 status code and the Japanese education data by default', async () => {
    const response = await request(app).get('/api/education');
    expect(response.status).toBe(200);
    const expectedEducation = educationHistory.map((item) => ({
      startYear: item.startYear,
      endYear: item.endYear,
      ...item.ja,
    }));
    expect(response.body).toEqual(expectedEducation);
  });

  it('should respond with a 200 status code and the English education data when lang=en', async () => {
    const response = await request(app).get('/api/education?lang=en');
    expect(response.status).toBe(200);
    const expectedEducation = educationHistory.map((item) => ({
      startYear: item.startYear,
      endYear: item.endYear,
      ...item.en,
    }));
    expect(response.body).toEqual(expectedEducation);
  });
});
