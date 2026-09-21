export const onBusiness = 'onBusiness';
export const selfStudy = 'self-study';

// ─── growing skill durations ─────────────────────────────────────────────────
// Some skill durations are not a fixed fact but "this start month until today".
// Storing the computed result would silently go stale, so the raw data holds an
// `@since:YYYY-MM` marker and the duration is derived from the current date.
// Keeping the marker (not the result) in the data is also what lets the backend
// generator pass it straight through to the Go/Rust/Haskell clones, where each
// one's own duration helper resolves it per request.
const SINCE_PREFIX = '@since:';

/** `since(2026, 8)` => `'@since:2026-08'` */
export const since = (year: number, month: number): string =>
  `${SINCE_PREFIX}${year}-${String(month).padStart(2, '0')}`;

/** `'@since:2026-08'` => `[2026, 8]`; any other string => `null`. */
const parseSince = (value: string): [number, number] | null => {
  if (!value.startsWith(SINCE_PREFIX)) return null;
  const [year, month] = value.slice(SINCE_PREFIX.length).split('-');
  const y = Number(year);
  const m = Number(month);
  const valid = Number.isInteger(y) && Number.isInteger(m) && m >= 1 && m <= 12;
  return valid ? [y, m] : null;
};

// Durations are counted on the JST calendar. Asia/Tokyo is a fixed +09:00
// offset with no DST, so shifting the epoch and reading UTC fields is exact
// and needs no timezone database.
const jstYearMonth = (now: Date): [number, number] => {
  const jst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  return [jst.getUTCFullYear(), jst.getUTCMonth() + 1];
};

const plural = (n: number, unit: string): string =>
  `${n} ${unit}${n === 1 ? '' : 's'}`;

/** Renders a whole-month count in the same style as the fixed durations. */
const formatDuration = (months: number): string => {
  if (months < 1) return 'less than a month';
  const years = Math.floor(months / 12);
  const rest = months % 12;
  if (years === 0) return plural(rest, 'month');
  if (rest === 0) return plural(years, 'year');
  return `${plural(years, 'year')} ${plural(rest, 'month')}`;
};

/**
 * Renders an `@since:YYYY-MM` marker as a duration ('1 month', '1 year
 * 6 months', ...). Any other string is already a fixed duration and is
 * returned unchanged.
 */
export const resolveDuration = (
  value: string,
  now: Date = new Date()
): string => {
  const start = parseSince(value);
  if (!start) return value;
  const [nowYear, nowMonth] = jstYearMonth(now);
  return formatDuration((nowYear - start[0]) * 12 + (nowMonth - start[1]));
};
