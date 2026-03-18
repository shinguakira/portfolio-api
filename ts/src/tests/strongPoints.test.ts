import {describe, it, expect} from 'vitest';
import {GET} from './testHelper';
import {
  strongPoints_ja,
  strongPoints_en,
} from './testData/expected-json/strongPoints';

describe('GET /api/strong-points', () => {
  it('should respond with a 200 status code and the Japanese strong points data by default', async () => {
    const {status, body} = await GET('/api/strong-points');
    expect(status).toBe(200);
    expect(body.message).toBe(
      'Strong points data fetched successfully'
    );
    expect(body.data).toEqual(strongPoints_ja);
  });

  it('should respond with a 200 status code and the English strong points data when lang=en', async () => {
    const {status, body} = await GET('/api/strong-points?lang=en');
    expect(status).toBe(200);
    expect(body.message).toBe(
      'Strong points data fetched successfully'
    );
    expect(body.data).toEqual(strongPoints_en);
  });
});
