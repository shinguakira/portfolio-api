import {describe, it, expect} from 'vitest';
import request from 'supertest';
import app from '../index';
import {projects} from '../constants/project.js';

describe('GET /api/projects', () => {
  it('should respond with a 200 status code and the Japanese projects data by default', async () => {
    const response = await request(app).get('/api/projects');
    expect(response.status).toBe(200);
    const expectedProjects = projects.map(project => ({
      technologies: project.technologies,
      ...project.ja
    }));
    expect(response.body).toEqual(expectedProjects);
  });

  it('should respond with a 200 status code and the English projects data when lang=en', async () => {
    const response = await request(app).get('/api/projects?lang=en');
    expect(response.status).toBe(200);
    const expectedProjects = projects.map(project => ({
      technologies: project.technologies,
      ...project.en
    }));
    expect(response.body).toEqual(expectedProjects);
  });
});
