import {describe, it, expect} from 'vitest';
import request from 'supertest';
import app from '../index.js';
import {readFileSync} from 'fs';

describe('GET /api/skills', () => {
  it('should respond with a 200 status code and the Japanese skills data by default', async () => {
    const response = await request(app).get('/api/skills');
    const data = readFileSync(
      'src/tests/testData/expected-json/skills_en.json',
      'utf8'
    );
    const jsonData = JSON.parse(data);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Skills data fetched successfully');
    expect(response.body.data).toEqual(jsonData);
  });
});

describe('GET /api/other-skills', () => {
  it('should respond with a 200 status code and the Japanese skills data by default', async () => {
    const response = await request(app).get('/api/other-skills');
    const data = readFileSync(
      'src/tests/testData/expected-json/other_skills.json',
      'utf8'
    );
    const jsonData = JSON.parse(data);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe(
      'Other skills data fetched successfully'
    );
    expect(response.body.data).toEqual(jsonData);
  });
});
