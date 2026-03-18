import {describe, it, expect} from 'vitest';
import {GET} from './testHelper.js';
import {profile_ja, profile_en} from './testData/expected-json/profile.js';

describe('GET /api/profile', () => {
  it('should respond with a 200 status code and the Japanese profile data by default', async () => {
    const {status, body} = await GET('/api/profile');
    expect(status).toBe(200);
    expect(body.message).toBe('Profile data fetched successfully');
    expect(body.data).toEqual(profile_ja);
  });

  it('should respond with a 200 status code and the English profile data when lang=en', async () => {
    const {status, body} = await GET('/api/profile?lang=en');
    expect(status).toBe(200);
    expect(body.message).toBe('Profile data fetched successfully');
    expect(body.data).toEqual(profile_en);
  });
});
