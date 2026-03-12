package model

// Project represents a portfolio project.
type Project struct {
	Title        string   `json:"title"`
	Description  string   `json:"description"`
	Image        string   `json:"image"`
	Technologies []string `json:"technologies"`
	GithubURL    string   `json:"githubUrl"`
	LiveURL      string   `json:"liveUrl"`
}
