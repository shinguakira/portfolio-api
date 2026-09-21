package model

// WorkExperience represents a single work experience entry.
type WorkExperience struct {
	Company         string   `json:"company"`
	ProjectOverview string   `json:"projectOverview"`
	Period          string   `json:"period"`
	StartDate       string   `json:"startDate"`
	EndDate         string   `json:"endDate,omitempty"`
	TeamSize        string   `json:"teamSize,omitempty"`
	Role            string   `json:"role"`
	ManMonth        string   `json:"manMonth"`
	Description     []string `json:"description"`
	Archivement     []string `json:"archivement"`
	Technologies    []string `json:"technologies"`
}
