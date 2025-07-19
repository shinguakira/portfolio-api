import {describe, it, expect} from 'vitest';
import request from 'supertest';
import app from '../index.js';
import {profile} from '../constants/profile.js';

describe('GET /api/profile', () => {
  it('should respond with a 200 status code and the Japanese profile data by default', async () => {
    const response = await request(app).get('/api/profile');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Profile data fetched successfully');

    // Expect combined base profile data with Japanese localized content
    const expectedData = {
      name: profile.name,
      location: profile.location,
      avatarUrl: profile.avatarUrl,
      socialLinks: profile.socialLinks,
      ...profile.ja,
    };
    expect(response.body.data).toEqual(expectedData);
  });

  it('should respond with a 200 status code and the English profile data when lang=en', async () => {
    const response = await request(app).get('/api/profile?lang=en');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Profile data fetched successfully');

    // Expect combined base profile data with English localized content
    const expectedData = {
      name: profile.name,
      location: profile.location,
      avatarUrl: profile.avatarUrl,
      socialLinks: profile.socialLinks,
      ...profile.en,
    };
    expect(response.body.data).toEqual(expectedData);
  });
});
