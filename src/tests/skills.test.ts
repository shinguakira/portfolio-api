import {describe, it, expect} from 'vitest';
import request from 'supertest';
import app from '../index.js';
import {skills} from '../constants/skill.js';

describe('GET /api/skills', () => {
  it('should respond with a 200 status code and the skills data', async () => {
    const response = await request(app).get('/api/skills');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Skills data fetched successfully');
    expect(response.body.data).toEqual(skills);
  });
});
