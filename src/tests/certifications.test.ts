import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../index';
import { certifications } from '../constants/certification.js';

describe('GET /api/certifications', () => {
  it('should respond with a 200 status code and the Japanese certifications data by default', async () => {
    const response = await request(app).get('/api/certifications');
    expect(response.status).toBe(200);
    const expectedCertifications = certifications.map(item => ({
      id: item.id,
      organization: item.organization,
      date: item.date,
      verifyLink: item.verifyLink,
      ...item.ja
    }));
    expect(response.body).toEqual(expectedCertifications);
  });

  it('should respond with a 200 status code and the English certifications data when lang=en', async () => {
    const response = await request(app).get('/api/certifications?lang=en');
    expect(response.status).toBe(200);
    const expectedCertifications = certifications.map(item => ({
      id: item.id,
      organization: item.organization,
      date: item.date,
      verifyLink: item.verifyLink,
      ...item.en
    }));
    expect(response.body).toEqual(expectedCertifications);
  });
});
