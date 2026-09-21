import {describe, it, expect} from 'vitest';
import {
  workExperiences_ja,
  workExperiences_en,
} from '../constants/workExperience.js';
import type {WorkExperience} from '../types/workHistory.js';

// `period` is a localized display string; `startDate`/`endDate` are what
// consumers sort and lay out on. These guard the two against drifting apart,
// and pin the shape so no consumer has to parse Japanese or English text.

const ISO = /^\d{4}(-(0[1-9]|1[0-2]))?$/;
const ONGOING = /現在|current/;

const cases: [string, WorkExperience[]][] = [
  ['ja', workExperiences_ja],
  ['en', workExperiences_en],
];

describe.each(cases)('work experience dates (%s)', (_lang, experiences) => {
  it('has a parseable startDate on every entry', () => {
    for (const exp of experiences) {
      expect(exp.startDate, `${exp.company} / ${exp.projectOverview}`).toMatch(ISO);
    }
  });

  it('omits endDate exactly on the entries whose period says ongoing', () => {
    for (const exp of experiences) {
      const label = `${exp.company} / ${exp.projectOverview}`;
      expect(exp.endDate === undefined, label).toBe(ONGOING.test(exp.period));
    }
  });

  it('never ends before it starts', () => {
    for (const exp of experiences) {
      if (exp.endDate === undefined) continue;
      expect(exp.endDate, `${exp.company} / ${exp.projectOverview}`).toMatch(ISO);
      // `YYYY-MM` and `YYYY` both order correctly as plain strings.
      expect(
        exp.endDate >= exp.startDate,
        `${exp.company} / ${exp.projectOverview}: ${exp.startDate} -> ${exp.endDate}`
      ).toBe(true);
    }
  });

  it('agrees with the years written in the period string', () => {
    for (const exp of experiences) {
      const years = [...exp.period.matchAll(/(\d{4})/g)].map((m) => m[1]);
      const label = `${exp.company} / ${exp.projectOverview}: ${exp.period}`;
      expect(years[0], label).toBe(exp.startDate.slice(0, 4));
      if (exp.endDate !== undefined) {
        expect(years[1], label).toBe(exp.endDate.slice(0, 4));
      }
    }
  });
});

describe('work experience dates (ja/en parity)', () => {
  it('gives both languages the same dates entry for entry', () => {
    expect(workExperiences_en.length).toBe(workExperiences_ja.length);
    workExperiences_ja.forEach((ja, i) => {
      const en = workExperiences_en[i];
      expect(
        {start: en.startDate, end: en.endDate},
        `entry ${i + 1}: ${ja.projectOverview}`
      ).toEqual({start: ja.startDate, end: ja.endDate});
    });
  });
});
