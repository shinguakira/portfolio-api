import {describe, it, expect} from 'vitest';
import {GET} from './testHelper.js';
import {
  changelogs_ja,
  changelogs_en,
} from './testData/expected-json/changelogs.js';

describe('GET /api/changelogs', () => {
  it('should respond with a 200 status code and the Japanese changelogs data by default', async () => {
    const {status, body} = await GET('/api/changelogs');
    expect(status).toBe(200);
    expect(body.message).toBe('Changelogs data fetched successfully');
    expect(body.data).toEqual(changelogs_ja);
  });

  it('should respond with a 200 status code and the English changelogs data when lang=en', async () => {
    const {status, body} = await GET('/api/changelogs?lang=en');
    expect(status).toBe(200);
    expect(body.message).toBe('Changelogs data fetched successfully');
    expect(body.data).toEqual(changelogs_en);
  });
});
