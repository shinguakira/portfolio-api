package model

// ChangelogChange represents a single change within a changelog entry.
type ChangelogChange struct {
	Type        string `json:"type"`
	Description string `json:"description"`
}

// ChangelogItem represents a single changelog entry containing multiple changes.
type ChangelogItem struct {
	Version string            `json:"version"`
	Date    string            `json:"date"`
	Changes []ChangelogChange `json:"changes"`
}
