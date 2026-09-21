package data

import (
	"fmt"
	"strconv"
	"strings"
	"time"

	"github.com/shinguakira/portfolio-api-go/model"
)

// Hand-written helper (NOT emitted by ts/src/scripts/generateBackends.ts).
//
// Skill durations that grow with the calendar are stored in the generated data
// as an "@since:YYYY-MM" marker rather than a value. Skills and OtherSkills
// resolve those markers on every call, so this long-running server keeps
// serving the correct duration after a month boundary instead of a snapshot
// taken when the process started.

const sincePrefix = "@since:"

// Durations are counted on the JST calendar to match the TypeScript source.
var jst = time.FixedZone("JST", 9*60*60)

// Skills returns the main skills with their durations resolved against now.
func Skills() []model.SkillItem { return resolveDurations(skillDefs) }

// OtherSkills returns the other skills with their durations resolved against now.
func OtherSkills() []model.SkillItem { return resolveDurations(otherSkillDefs) }

func resolveDurations(items []model.SkillItem) []model.SkillItem {
	now := time.Now().In(jst)
	out := make([]model.SkillItem, len(items))
	for i, item := range items {
		item.Years = resolveDuration(item.Years, now)
		out[i] = item
	}
	return out
}

// resolveDuration renders "@since:YYYY-MM" as the whole months elapsed until
// now, in the same style as the fixed durations ("6 months", "1 year",
// "1 year 6 months"). Any other value is already fixed and passes through.
func resolveDuration(years string, now time.Time) string {
	if !strings.HasPrefix(years, sincePrefix) {
		return years
	}
	year, month, ok := parseSince(strings.TrimPrefix(years, sincePrefix))
	if !ok {
		return years
	}
	return formatDuration((now.Year()-year)*12 + (int(now.Month()) - month))
}

func parseSince(value string) (year, month int, ok bool) {
	parts := strings.SplitN(value, "-", 2)
	if len(parts) != 2 {
		return 0, 0, false
	}
	year, errYear := strconv.Atoi(parts[0])
	month, errMonth := strconv.Atoi(parts[1])
	if errYear != nil || errMonth != nil || month < 1 || month > 12 {
		return 0, 0, false
	}
	return year, month, true
}

func formatDuration(months int) string {
	if months < 1 {
		return "less than a month"
	}
	years, rest := months/12, months%12
	switch {
	case years == 0:
		return plural(rest, "month")
	case rest == 0:
		return plural(years, "year")
	default:
		return plural(years, "year") + " " + plural(rest, "month")
	}
}

func plural(n int, unit string) string {
	if n == 1 {
		return fmt.Sprintf("%d %s", n, unit)
	}
	return fmt.Sprintf("%d %ss", n, unit)
}
