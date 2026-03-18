import {describe, it, expect} from 'vitest';
import {GET} from './testHelper';
import {
  certifications_ja,
  certifications_en,
} from './testData/expected-json/certifications';

describe('GET /api/certifications', () => {
  it('should respond with a 200 status code and the Japanese certifications data by default', async () => {
    const {status, body} = await GET('/api/certifications');
    expect(status).toBe(200);
    expect(body.message).toBe('Certifications data fetched successfully');
    expect(body.data).toEqual(certifications_ja);
  });

  it('should respond with a 200 status code and the English certifications data when lang=en', async () => {
    const {status, body} = await GET('/api/certifications?lang=en');
    expect(status).toBe(200);
    expect(body.message).toBe('Certifications data fetched successfully');
    expect(body.data).toEqual(certifications_en);
  });
});
