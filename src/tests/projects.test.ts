import {describe, it, expect} from 'vitest';
import request from 'supertest';
import app from '../index.js';
import {projects_ja, projects_en} from './testData/expected-json/projects.js';

describe('GET /api/projects', () => {
  it('should respond with a 200 status code and the Japanese projects data by default', async () => {
    const response = await request(app).get('/api/projects');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Projects data fetched successfully');
    expect(response.body.data).toEqual(projects_ja);
  });

  it('should respond with a 200 status code and the English projects data when lang=en', async () => {
    const response = await request(app).get('/api/projects?lang=en');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Projects data fetched successfully');
    expect(response.body.data).toEqual(projects_en);
  });
});
