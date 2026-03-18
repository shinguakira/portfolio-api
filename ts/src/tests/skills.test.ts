import {describe, it, expect} from 'vitest';
import {GET} from './testHelper.js';
import {readFileSync} from 'fs';

describe('GET /api/skills', () => {
  it('should respond with a 200 status code and the Japanese skills data by default', async () => {
    const {status, body} = await GET('/api/skills');
    const data = readFileSync(
      'src/tests/testData/expected-json/skills_en.json',
      'utf8'
    );
    const jsonData = JSON.parse(data);
    expect(status).toBe(200);
    expect(body.message).toBe('Skills data fetched successfully');
    expect(body.data).toEqual(jsonData);
  });
});

describe('GET /api/other-skills', () => {
  it('should respond with a 200 status code and the Japanese skills data by default', async () => {
    const {status, body} = await GET('/api/other-skills');
    const data = readFileSync(
      'src/tests/testData/expected-json/other_skills.json',
      'utf8'
    );
    const jsonData = JSON.parse(data);
    expect(status).toBe(200);
    expect(body.message).toBe('Other skills data fetched successfully');
    expect(body.data).toEqual(jsonData);
  });
});
