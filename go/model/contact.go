package model

// SocialMedia represents social media account links.
type SocialMedia struct {
	LinkedIn string `json:"linkedin"`
	Github   string `json:"github"`
}

// ContactResponse represents the response details within a contact entry.
type ContactResponse struct {
	TimeFrame string   `json:"timeFrame"`
	Languages []string `json:"languages"`
}

// Contact represents the full contact information returned by the API.
type Contact struct {
	Email           string          `json:"email"`
	Phone           string          `json:"phone"`
	Address         string          `json:"address"`
	SocialMedia     SocialMedia     `json:"socialMedia"`
	PreferredMethod string          `json:"preferredMethod"`
	AvailableFor    []string        `json:"availableFor"`
	Response        ContactResponse `json:"response"`
}
