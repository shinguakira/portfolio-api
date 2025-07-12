import {describe, it, expect} from 'vitest';
import request from 'supertest';
import app from '../index.js';
import {workExperiences} from '../constants/workExperience.js';

describe('GET /api/experience', () => {
  it('should respond with a 200 status code and the Japanese experience data by default', async () => {
    const response = await request(app).get('/api/experience');
    expect(response.status).toBe(200);
    const expectedExperience = workExperiences.map((item) => ({
      company: item.company,
      period: item.period,
      teamSize: item.teamSize,
      manMonth: item.manMonth,
      technologies: item.technologies,
      ...item.ja,
    }));
    expect(response.body).toEqual(expectedExperience);
  });

  it('should respond with a 200 status code and the English experience data when lang=en', async () => {
    const response = await request(app).get('/api/experience?lang=en');
    expect(response.status).toBe(200);
    const expectedExperience = workExperiences.map((item) => ({
      company: item.company,
      period: item.period,
      teamSize: item.teamSize,
      manMonth: item.manMonth,
      technologies: item.technologies,
      ...item.en,
    }));
    expect(response.body).toEqual(expectedExperience);
  });
});
