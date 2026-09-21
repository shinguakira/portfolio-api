import {describe, it, expect, afterEach, vi} from 'vitest';
import {skills} from '../constants/skill.js';
import {resolveDuration} from '../constants/common.js';

// Durations held as `@since:YYYY-MM` must be derived when the data is read, not
// when the module was loaded. Vercel and AWS Lambda reuse a warm instance across
// many requests, so a module-scope snapshot would keep serving last month's
// duration after a month boundary until that instance happened to recycle.
const at = (iso: string): void => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date(iso));
};

const goYears = (): string => skills().find((s) => s.name === 'Go')!.years;

describe('growing skill durations', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders an @since marker against the current date', () => {
    at('2026-09-09T12:00:00+09:00');
    expect(goYears()).toBe('1 month');
  });

  it('follows the calendar without a reload of the module', () => {
    at('2026-09-09T12:00:00+09:00');
    expect(goYears()).toBe('1 month');

    // Same already-imported module, later clock: a per-request read must move.
    at('2027-02-09T12:00:00+09:00');
    expect(goYears()).toBe('6 months');

    at('2027-08-09T12:00:00+09:00');
    expect(goYears()).toBe('1 year');

    at('2028-02-09T12:00:00+09:00');
    expect(goYears()).toBe('1 year 6 months');
  });

  it('counts months on the JST calendar', () => {
    // 2026-09-01T00:30 JST is still 2026-08-31 in UTC; JST must win.
    at('2026-09-01T00:30:00+09:00');
    expect(resolveDuration('@since:2026-08')).toBe('1 month');
  });

  it('leaves a fixed duration untouched', () => {
    at('2026-09-09T12:00:00+09:00');
    expect(resolveDuration('2 years')).toBe('2 years');
    expect(resolveDuration('self-study')).toBe('self-study');
  });

  it('does not go negative before the start month', () => {
    at('2026-09-09T12:00:00+09:00');
    expect(resolveDuration('@since:2027-01')).toBe('less than a month');
  });
});
