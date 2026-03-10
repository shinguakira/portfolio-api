package data

import "github.com/shinguakira/portfolio-api-go/model"

var ProfileJA = model.ProfileResponse{
	Name:      "Shingu Akira",
	Location:  "Tokyo, Japan",
	AvatarURL: "https://example.com/avatar.jpg",
	SocialLinks: []model.SocialLink{
		{Platform: "GitHub", URL: "https://github.com/shinguakira", Icon: "github"},
		{Platform: "LinkedIn", URL: "https://linkedin.com/in/shinguakira", Icon: "linkedin"},
		{Platform: "Twitter", URL: "https://twitter.com/shinguakira", Icon: "twitter"},
	},
	Title:   "フルスタックエンジニア",
	Summary: "React/TypeScript/Next.jsを中心としたWeb開発に従事するフルスタックエンジニア。",
	Bio:     "Turning Vision Into Reality With Code And Design.",
}

var ProfileEN = model.ProfileResponse{
	Name:      "Shingu Akira",
	Location:  "Tokyo, Japan",
	AvatarURL: "https://example.com/avatar.jpg",
	SocialLinks: []model.SocialLink{
		{Platform: "GitHub", URL: "https://github.com/shinguakira", Icon: "github"},
		{Platform: "LinkedIn", URL: "https://linkedin.com/in/shinguakira", Icon: "linkedin"},
		{Platform: "Twitter", URL: "https://twitter.com/shinguakira", Icon: "twitter"},
	},
	Title:   "Full Stack Developer",
	Summary: "Full stack developer working primarily with React, TypeScript, and Next.js for web development.",
	Bio:     "Turning Vision Into Reality With Code And Design.",
}
