package model

// SocialLink represents a link to a social media platform.
type SocialLink struct {
	Platform string `json:"platform"`
	URL      string `json:"url"`
	Icon     string `json:"icon"`
}

// ProfileResponse represents the profile information returned by the API.
type ProfileResponse struct {
	Name        string       `json:"name"`
	Location    string       `json:"location"`
	AvatarURL   string       `json:"avatarUrl"`
	SocialLinks []SocialLink `json:"socialLinks"`
	Title       string       `json:"title"`
	Summary     string       `json:"summary"`
	Bio         string       `json:"bio"`
}
