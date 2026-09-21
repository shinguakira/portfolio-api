import {describe, it, expect} from 'vitest';
import {GET} from './testHelper.js';
import {readFileSync} from 'fs';
import {resolveDuration} from '../constants/common.js';
import type {SkillItem} from '../types/skillItem.js';

// Fixtures keep `@since:YYYY-MM` markers for durations that grow with the
// calendar, so the expectation stays correct as months pass instead of needing
// a fixture edit every month.
const expected = (path: string): SkillItem[] =>
  (JSON.parse(readFileSync(path, 'utf8')) as SkillItem[]).map((skill) => ({
    ...skill,
    years: resolveDuration(skill.years),
  }));

describe('GET /api/skills', () => {
  it('should respond with a 200 status code and the Japanese skills data by default', async () => {
    const {status, body} = await GET('/api/skills');
    const jsonData = expected(
      'src/tests/testData/expected-json/skills_en.json'
    );
    expect(status).toBe(200);
    expect(body.message).toBe('Skills data fetched successfully');
    expect(body.data).toEqual(jsonData);
  });
});

describe('GET /api/other-skills', () => {
  it('should respond with a 200 status code and the Japanese skills data by default', async () => {
    const {status, body} = await GET('/api/other-skills');
    const jsonData = expected(
      'src/tests/testData/expected-json/other_skills.json'
    );
    expect(status).toBe(200);
    expect(body.message).toBe('Other skills data fetched successfully');
    expect(body.data).toEqual(jsonData);
  });
});
