import {describe, it, expect} from 'vitest';
import {GET} from './testHelper';
import {education_ja, education_en} from './testData/expected-json/education';

describe('GET /api/education', () => {
  it('should respond with a 200 status code and the Japanese education data by default', async () => {
    const {status, body} = await GET('/api/education');
    expect(status).toBe(200);
    expect(body.message).toBe('Education data fetched successfully');
    expect(body.data).toEqual(education_ja);
  });

  it('should respond with a 200 status code and the English education data when lang=en', async () => {
    const {status, body} = await GET('/api/education?lang=en');
    expect(status).toBe(200);
    expect(body.message).toBe('Education data fetched successfully');
    expect(body.data).toEqual(education_en);
  });
});
