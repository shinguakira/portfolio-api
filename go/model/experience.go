package model

// WorkExperience represents a single work experience entry.
type WorkExperience struct {
	Company         string   `json:"company"`
	ProjectOverview string   `json:"projectOverview"`
	Period          string   `json:"period"`
	TeamSize        string   `json:"teamSize,omitempty"`
	Role            string   `json:"role"`
	ManMonth        string   `json:"manMonth"`
	Description     []string `json:"description"`
	Archivement     []string `json:"archivement"`
	Technologies    []string `json:"technologies"`
}
