package handler

// RootResponse is the complete response payload for the root (/) endpoint.
var RootResponse = map[string]any{
	"message": "Welcome to Portfolio API",
	"version": "1.0.0",
	"endpoints": []map[string]string{
		{"path": "/health", "description": "Health check endpoint"},
		{"path": "/api/profile", "description": "Get profile information"},
		{"path": "/api/skills", "description": "Get skills information"},
		{"path": "/api/projects", "description": "Get projects information"},
		{"path": "/api/experience", "description": "Get work experience information"},
		{"path": "/api/education", "description": "Get education history"},
		{"path": "/api/certifications", "description": "Get certification information"},
		{"path": "/api/faqs", "description": "Get FAQs"},
		{"path": "/api/links", "description": "Get important links"},
		{"path": "/api/strong-points", "description": "Get strong points information"},
		{"path": "/api/changelogs", "description": "Get changelog history"},
		{"path": "/api/download-pdf", "description": "Download portfolio as PDF (query: lang=en|ja, format=standard|compact|executive|technical|academic|modern, projects=true|false, experience=true|false, certifications=true|false, education=true|false)"},
	},
}
