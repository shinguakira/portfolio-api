package data

import "github.com/shinguakira/portfolio-api-go/model"

var ContactData = model.Contact{
	Email:   "shinguakira1022@gmail.com",
	Phone:   "+81 XX-XXXX-XXXX",
	Address: "Tokyo, Japan",
	SocialMedia: model.SocialMedia{
		LinkedIn: "https://linkedin.com/in/shinguakira",
		Github:   "https://github.com/shinguakira",
	},
	PreferredMethod: "email",
	AvailableFor: []string{
		"Full-time opportunities",
		"Freelance projects",
		"Technical consulting",
		"Speaking engagements",
	},
	Response: model.ContactResponse{
		TimeFrame: "48 hours",
		Languages: []string{"English", "Japanese"},
	},
}
