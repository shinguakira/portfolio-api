package data

import "github.com/shinguakira/portfolio-api-go/model"

var ProfileJA = model.ProfileResponse{
	Name:      "Web Dev",
	Location:  "Tokyo, Japan",
	AvatarURL: "https://example.com/avatar.jpg",
	SocialLinks: []model.SocialLink{
		{Platform: "GitHub", URL: "https://github.com/shinguakira", Icon: "github"},
	},
	Title:   "フルスタックエンジニア",
	Summary: "React/TypeScript/Next.jsを中心としたWeb開発に従事するフルスタックエンジニア。",
	Bio:     "Turning Vision Into Reality With Code And Design.",
}

var ProfileEN = model.ProfileResponse{
	Name:      "Web Dev",
	Location:  "Tokyo, Japan",
	AvatarURL: "https://example.com/avatar.jpg",
	SocialLinks: []model.SocialLink{
		{Platform: "GitHub", URL: "https://github.com/shinguakira", Icon: "github"},
	},
	Title:   "Full Stack Developer",
	Summary: "Full stack developer working primarily with React, TypeScript, and Next.js for web development.",
	Bio:     "Turning Vision Into Reality With Code And Design.",
}
