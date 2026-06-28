package handler

const (
	WelcomeMessage = "Welcome to Portfolio API"
	APIVersion     = "1.0.0"
)

// Endpoint path constants
const (
	PathHealth       = "/health"
	PathProfile      = "/api/profile"
	PathSkills       = "/api/skills"
	PathProjects     = "/api/projects"
	PathExperience   = "/api/experience"
	PathEducation    = "/api/education"
	PathCerts        = "/api/certifications"
	PathFAQs         = "/api/faqs"
	PathLinks        = "/api/links"
	PathStrongPoints = "/api/strong-points"
	PathChangelogs   = "/api/changelogs"
	PathDownloadPDF  = "/api/download-pdf"
)

// Endpoint is a path/description pair returned by the root handler.
type Endpoint struct {
	Path        string `json:"path"`
	Description string `json:"description"`
}

// RootEndpoints is the list of available API endpoints advertised by the root handler.
var RootEndpoints = []Endpoint{
	{Path: PathHealth, Description: "Health check endpoint"},
	{Path: PathProfile, Description: "Get profile information"},
	{Path: PathSkills, Description: "Get skills information"},
	{Path: PathProjects, Description: "Get projects information"},
	{Path: PathExperience, Description: "Get work experience information"},
	{Path: PathEducation, Description: "Get education history"},
	{Path: PathCerts, Description: "Get certification information"},
	{Path: PathFAQs, Description: "Get FAQs"},
	{Path: PathLinks, Description: "Get important links"},
	{Path: PathStrongPoints, Description: "Get strong points information"},
	{Path: PathChangelogs, Description: "Get changelog history"},
	{Path: PathDownloadPDF, Description: "Download portfolio as PDF (query: lang=en|ja, format=standard|compact|executive|technical|academic|modern, projects=true|false, experience=true|false, certifications=true|false, education=true|false)"},
}
