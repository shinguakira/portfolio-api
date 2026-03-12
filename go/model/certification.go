package model

// CertificationItem represents a single certification entry.
type CertificationItem struct {
	ID           int    `json:"id"`
	Name         string `json:"name"`
	Organization string `json:"organization"`
	Date         string `json:"date"`
	VerifyLink   string `json:"verifyLink"`
}
