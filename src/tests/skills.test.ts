import {describe, it, expect} from 'vitest';
import request from 'supertest';
import app from '../index.js';
import {otherSkills, skills} from './testData/expected-json/skills.js';

describe('GET /api/skills', () => {
  it('should respond with a 200 status code and the Japanese skills data by default', async () => {
    const response = await request(app).get('/api/skills');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Skills data fetched successfully');
    expect(response.body.data).toEqual(skills);
  });
});

describe('GET /api/other-skills', () => {
  it('should respond with a 200 status code and the Japanese skills data by default', async () => {
    const response = await request(app).get('/api/other-skills');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe(
      'Other skills data fetched successfully'
    );
    expect(response.body.data).toEqual(otherSkills);
  });
});
