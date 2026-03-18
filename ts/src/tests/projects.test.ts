import {describe, it, expect} from 'vitest';
import {GET} from './testHelper';
import {readFileSync} from 'fs';

describe('GET /api/projects', () => {
  it('should respond with a 200 status code and the Japanese projects data by default', async () => {
    const {status, body} = await GET('/api/projects');
    const data = readFileSync(
      'src/tests/testData/expected-json/projects_ja.json',
      'utf8'
    );
    const jsonData = JSON.parse(data);
    expect(status).toBe(200);
    expect(body.message).toBe('Projects data fetched successfully');
    expect(body.data).toEqual(jsonData);
  });

  it('should respond with a 200 status code and the English projects data when lang=en', async () => {
    const {status, body} = await GET('/api/projects?lang=en');
    const data = readFileSync(
      'src/tests/testData/expected-json/projects_en.json',
      'utf8'
    );
    const jsonData = JSON.parse(data);
    expect(status).toBe(200);
    expect(body.message).toBe('Projects data fetched successfully');
    expect(body.data).toEqual(jsonData);
  });
});
