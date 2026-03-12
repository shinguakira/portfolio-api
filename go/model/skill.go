package model

// SkillItem represents a single skill entry.
type SkillItem struct {
	Name         string `json:"name"`
	Category     string `json:"category"`
	Years        string `json:"years"`
	Proficiency  string `json:"proficiency,omitempty"`
	Picture      string `json:"picture,omitempty"`
	PictureColor string `json:"pictureColor,omitempty"`
}
