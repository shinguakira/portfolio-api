import {describe, it, expect} from 'vitest';
import request from 'supertest';
import app from '../index.js';
import {projects_ja, projects_en} from './testData/expected-json/projects.js';
import {readFileSync} from 'fs';

describe('GET /api/projects', () => {
  it('should respond with a 200 status code and the Japanese projects data by default', async () => {
    const response = await request(app).get('/api/projects');
    const data = readFileSync(
      'src/tests/testData/expected-json/projects_ja.json',
      'utf8'
    );
    const jsonData = JSON.parse(data);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Projects data fetched successfully');
    expect(response.body.data).toEqual(jsonData);
  });

  it('should respond with a 200 status code and the English projects data when lang=en', async () => {
    const response = await request(app).get('/api/projects?lang=en');
    const data = readFileSync(
      'src/tests/testData/expected-json/projects_en.json',
      'utf8'
    );
    const jsonData = JSON.parse(data);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Projects data fetched successfully');
    expect(response.body.data).toEqual(jsonData);
  });
});
