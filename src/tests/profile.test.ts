import {describe, it, expect} from 'vitest';
import request from 'supertest';
import app from '../index.js';
import {profile} from '../constants/profile.js';

describe('GET /api/profile', () => {
  it('should respond with a 200 status code and the Japanese profile data by default', async () => {
    const response = await request(app).get('/api/profile');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Profile data fetched successfully');
    expect(response.body.data).toEqual(profile.ja);
  });

  it('should respond with a 200 status code and the English profile data when lang=en', async () => {
    const response = await request(app).get('/api/profile?lang=en');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Profile data fetched successfully');
    expect(response.body.data).toEqual(profile.en);
  });
});
