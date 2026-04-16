package handler

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"github.com/shinguakira/portfolio-api-go/data"
	"github.com/shinguakira/portfolio-api-go/model"
	"github.com/shinguakira/portfolio-api-go/service"
)

func respondJSON(w http.ResponseWriter, status int, payload interface{}) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	json.NewEncoder(w).Encode(payload)
}

func respondError(w http.ResponseWriter, status int, message string) {
	respondJSON(w, status, model.ApiResponse[interface{}]{
		Message: message,
		Data:    nil,
	})
}

// GET /health
func Health(w http.ResponseWriter, r *http.Request) {
	respondJSON(w, http.StatusOK, map[string]string{
		"status":    "OK",
		"timestamp": time.Now().UTC().Format(time.RFC3339Nano),
	})
}

// GET /
func Root(w http.ResponseWriter, r *http.Request) {
	type Endpoint struct {
		Path        string `json:"path"`
		Description string `json:"description"`
	}
	respondJSON(w, http.StatusOK, map[string]interface{}{
		"message": "Welcome to Portfolio API",
		"version": "1.0.0",
		"endpoints": []Endpoint{
			{Path: "/health", Description: "Health check endpoint"},
			{Path: "/api/profile", Description: "Get profile information"},
			{Path: "/api/skills", Description: "Get skills information"},
			{Path: "/api/projects", Description: "Get projects information"},
			{Path: "/api/experience", Description: "Get work experience information"},
			{Path: "/api/education", Description: "Get education history"},
			{Path: "/api/certifications", Description: "Get certification information"},
			{Path: "/api/faqs", Description: "Get FAQs"},
			{Path: "/api/links", Description: "Get important links"},
			{Path: "/api/strong-points", Description: "Get strong points information"},
			{Path: "/api/changelogs", Description: "Get changelog history"},
			{Path: "/api/download-pdf", Description: "Download portfolio as PDF (query: lang=en|ja, format=standard|compact|executive|technical|academic|modern, projects=true|false, experience=true|false, certifications=true|false, education=true|false)"},
		},
	})
}

// GET /api/profile?lang=en|ja
func GetProfile(w http.ResponseWriter, r *http.Request) {
	lang := r.URL.Query().Get("lang")
	var profileData model.ProfileResponse
	if lang == "en" {
		profileData = data.ProfileEN
	} else {
		profileData = data.ProfileJA
	}
	respondJSON(w, http.StatusOK, model.ApiResponse[model.ProfileResponse]{
		Message: "Profile data fetched successfully",
		Data:    profileData,
	})
}

// GET /api/experience?lang=en|ja
func GetExperience(w http.ResponseWriter, r *http.Request) {
	lang := r.URL.Query().Get("lang")
	var experiences []model.WorkExperience
	if lang == "en" {
		experiences = data.WorkExperiencesEN
	} else {
		experiences = data.WorkExperiencesJA
	}
	respondJSON(w, http.StatusOK, model.ApiResponse[[]model.WorkExperience]{
		Message: "Experience data fetched successfully",
		Data:    experiences,
	})
}

// GET /api/projects?lang=en|ja
func GetProjects(w http.ResponseWriter, r *http.Request) {
	lang := r.URL.Query().Get("lang")
	var projects []model.Project
	if lang == "en" {
		projects = data.ProjectsEN
	} else {
		projects = data.ProjectsJA
	}
	respondJSON(w, http.StatusOK, model.ApiResponse[[]model.Project]{
		Message: "Projects data fetched successfully",
		Data:    projects,
	})
}

// GET /api/skills
func GetSkills(w http.ResponseWriter, r *http.Request) {
	respondJSON(w, http.StatusOK, model.ApiResponse[[]model.SkillItem]{
		Message: "Skills data fetched successfully",
		Data:    data.Skills,
	})
}

// GET /api/other-skills
func GetOtherSkills(w http.ResponseWriter, r *http.Request) {
	respondJSON(w, http.StatusOK, model.ApiResponse[[]model.SkillItem]{
		Message: "Other skills data fetched successfully",
		Data:    data.OtherSkills,
	})
}

// GET /api/education?lang=en|ja
func GetEducation(w http.ResponseWriter, r *http.Request) {
	lang := r.URL.Query().Get("lang")
	var education []model.EducationHistory
	if lang == "en" {
		education = data.EducationEN
	} else {
		education = data.EducationJA
	}
	respondJSON(w, http.StatusOK, model.ApiResponse[[]model.EducationHistory]{
		Message: "Education data fetched successfully",
		Data:    education,
	})
}

// GET /api/contact
func GetContact(w http.ResponseWriter, r *http.Request) {
	respondJSON(w, http.StatusOK, model.ApiResponse[model.Contact]{
		Message: "Contact data fetched successfully",
		Data:    data.ContactData,
	})
}

// GET /api/certifications?lang=en|ja
func GetCertifications(w http.ResponseWriter, r *http.Request) {
	lang := r.URL.Query().Get("lang")
	var certs []model.CertificationItem
	if lang == "en" {
		certs = data.CertificationsEN
	} else {
		certs = data.CertificationsJA
	}
	respondJSON(w, http.StatusOK, model.ApiResponse[[]model.CertificationItem]{
		Message: "Certifications data fetched successfully",
		Data:    certs,
	})
}

// GET /api/changelogs?lang=en|ja
func GetChangelogs(w http.ResponseWriter, r *http.Request) {
	lang := r.URL.Query().Get("lang")
	var changelogs []model.ChangelogItem
	if lang == "en" {
		changelogs = data.ChangelogsEN
	} else {
		changelogs = data.ChangelogsJA
	}
	respondJSON(w, http.StatusOK, model.ApiResponse[[]model.ChangelogItem]{
		Message: "Changelogs data fetched successfully",
		Data:    changelogs,
	})
}

// GET /api/faqs?lang=en|ja
func GetFaqs(w http.ResponseWriter, r *http.Request) {
	lang := r.URL.Query().Get("lang")
	var faqs []model.Faq
	if lang == "en" {
		faqs = data.FaqsEN
	} else {
		faqs = data.FaqsJA
	}
	respondJSON(w, http.StatusOK, model.ApiResponse[[]model.Faq]{
		Message: "FAQs data fetched successfully",
		Data:    faqs,
	})
}

// GET /api/links
func GetLinks(w http.ResponseWriter, r *http.Request) {
	respondJSON(w, http.StatusOK, model.ApiResponse[model.Links]{
		Message: "Links data fetched successfully",
		Data:    data.LinksData,
	})
}

// GET /api/strong-points?lang=en|ja
func GetStrongPoints(w http.ResponseWriter, r *http.Request) {
	lang := r.URL.Query().Get("lang")
	var strongPoints []model.StrongPoint
	if lang == "en" {
		strongPoints = data.StrongPointsEN
	} else {
		strongPoints = data.StrongPointsJA
	}
	respondJSON(w, http.StatusOK, model.ApiResponse[[]model.StrongPoint]{
		Message: "Strong points data fetched successfully",
		Data:    strongPoints,
	})
}

// GET /api/download-pdf
func DownloadPortfolioPDF(w http.ResponseWriter, r *http.Request) {
	lang := r.URL.Query().Get("lang")
	if lang == "" {
		lang = "en"
	}
	format := r.URL.Query().Get("format")
	if format == "" {
		format = "standard"
	}
	includeProjects := r.URL.Query().Get("projects") != "false"
	includeExperience := r.URL.Query().Get("experience") != "false"
	includeCertifications := r.URL.Query().Get("certifications") != "false"
	includeEducation := r.URL.Query().Get("education") != "false"

	pdfBytes, err := service.GeneratePortfolioPDF(service.PDFOptions{
		Lang:                  lang,
		Format:                format,
		IncludeProjects:       includeProjects,
		IncludeExperience:     includeExperience,
		IncludeCertifications: includeCertifications,
		IncludeEducation:      includeEducation,
	})
	if err != nil {
		respondError(w, http.StatusInternalServerError, "Error generating portfolio PDF")
		return
	}

	langLabel := "english"
	if lang != "en" {
		langLabel = "japanese"
	}
	filename := fmt.Sprintf("portfolio_%s_%s.pdf", langLabel, time.Now().Format("2006-01-02"))

	w.Header().Set("Content-Type", "application/pdf")
	w.Header().Set("Content-Disposition", fmt.Sprintf(`attachment; filename="%s"`, filename))
	w.Header().Set("Content-Length", fmt.Sprintf("%d", len(pdfBytes)))
	w.Write(pdfBytes)
}
