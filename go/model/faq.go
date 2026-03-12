package model

// Faq represents a single FAQ entry.
type Faq struct {
	Question string `json:"question"`
	Answer   string `json:"answer"`
	Size     string `json:"size"`
	Category string `json:"category"`
}
