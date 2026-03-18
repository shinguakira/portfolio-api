import {describe, it, expect} from 'vitest';
import {GET} from './testHelper.js';
import {
  experience_ja,
  experience_en,
} from './testData/expected-json/experience.js';

describe('GET /api/experience', () => {
  it('should respond with a 200 status code and the Japanese experience data by default', async () => {
    const {status, body} = await GET('/api/experience');
    expect(status).toBe(200);
    expect(body.message).toBe('Experience data fetched successfully');
    expect(body.data).toEqual(experience_ja);
  });

  it('should respond with a 200 status code and the English experience data when lang=en', async () => {
    const {status, body} = await GET('/api/experience?lang=en');
    expect(status).toBe(200);
    expect(body.message).toBe('Experience data fetched successfully');
    expect(body.data).toEqual(experience_en);
  });
});
