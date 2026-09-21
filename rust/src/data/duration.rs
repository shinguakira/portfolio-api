//! Hand-written helper (NOT emitted by ts/src/scripts/generateBackends.ts).
//!
//! Skill durations that grow with the calendar are stored in the generated data
//! as an `@since:YYYY-MM` marker rather than a value. [`skills`] and
//! [`other_skills`] resolve those markers on every call, so this long-running
//! server keeps serving the correct duration after a month boundary instead of
//! a snapshot taken when the process started.

use chrono::{DateTime, Datelike, FixedOffset, Utc};

use crate::data::skill::{OTHER_SKILL_DEFS, SKILL_DEFS};
use crate::model::skill::SkillItem;

const SINCE_PREFIX: &str = "@since:";

/// Main skills with their durations resolved against the current date.
pub fn skills() -> Vec<SkillItem> {
    resolve_durations(&SKILL_DEFS)
}

/// Other skills with their durations resolved against the current date.
pub fn other_skills() -> Vec<SkillItem> {
    resolve_durations(&OTHER_SKILL_DEFS)
}

fn resolve_durations(items: &[SkillItem]) -> Vec<SkillItem> {
    // Durations are counted on the JST calendar to match the TypeScript source.
    let jst = FixedOffset::east_opt(9 * 60 * 60).expect("valid JST offset");
    let now = Utc::now().with_timezone(&jst);
    items
        .iter()
        .map(|item| SkillItem {
            years: resolve_duration(&item.years, now),
            ..item.clone()
        })
        .collect()
}

/// Renders `@since:YYYY-MM` as the whole months elapsed until `now`, in the
/// same style as the fixed durations ("6 months", "1 year", "1 year 6 months").
/// Any other value is already fixed and passes through.
fn resolve_duration(years: &str, now: DateTime<FixedOffset>) -> String {
    let Some(rest) = years.strip_prefix(SINCE_PREFIX) else {
        return years.to_string();
    };
    match parse_since(rest) {
        Some((year, month)) => {
            format_duration((now.year() - year) * 12 + (now.month() as i32 - month))
        }
        None => years.to_string(),
    }
}

fn parse_since(value: &str) -> Option<(i32, i32)> {
    let (year, month) = value.split_once('-')?;
    let year = year.parse::<i32>().ok()?;
    let month = month.parse::<i32>().ok()?;
    (1..=12).contains(&month).then_some((year, month))
}

fn format_duration(months: i32) -> String {
    if months < 1 {
        return "less than a month".to_string();
    }
    let (years, rest) = (months / 12, months % 12);
    match (years, rest) {
        (0, _) => plural(rest, "month"),
        (_, 0) => plural(years, "year"),
        _ => format!("{} {}", plural(years, "year"), plural(rest, "month")),
    }
}

fn plural(n: i32, unit: &str) -> String {
    if n == 1 {
        format!("{} {}", n, unit)
    } else {
        format!("{} {}s", n, unit)
    }
}
