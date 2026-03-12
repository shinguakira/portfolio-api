package model

// StrongPoint represents a single strong point entry.
type StrongPoint struct {
	Size     string `json:"size"`
	Question string `json:"question"`
	Answer   string `json:"answer"`
}
