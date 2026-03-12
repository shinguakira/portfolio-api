package model

// EducationHistory represents a single education history entry.
type EducationHistory struct {
	StartYear   string `json:"startYear"`
	EndYear     string `json:"endYear"`
	School      string `json:"school"`
	Department  string `json:"department"`
	Description string `json:"description"`
}
