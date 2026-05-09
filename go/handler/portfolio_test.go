package handler

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/go-chi/chi/v5"
	"github.com/shinguakira/portfolio-api-go/model"
)

func setupRouter() *chi.Mux {
	r := chi.NewRouter()
	r.Get("/health", Health)
	r.Get("/", Root)
	r.Route("/api", func(r chi.Router) {
		r.Get("/profile", GetProfile)
		r.Get("/experience", GetExperience)
		r.Get("/projects", GetProjects)
		r.Get("/skills", GetSkills)
		r.Get("/other-skills", GetOtherSkills)
		r.Get("/education", GetEducation)
		r.Get("/contact", GetContact)
		r.Get("/certifications", GetCertifications)
		r.Get("/changelogs", GetChangelogs)
		r.Get("/faqs", GetFaqs)
		r.Get("/links", GetLinks)
		r.Get("/strong-points", GetStrongPoints)
		r.Get("/download-pdf", DownloadPortfolioPDF)
	})
	return r
}

func TestHealthEndpoint(t *testing.T) {
	r := setupRouter()
	req := httptest.NewRequest("GET", "/health", nil)
	w := httptest.NewRecorder()
	r.ServeHTTP(w, req)

	if w.Code != http.StatusOK {
		t.Errorf("expected status 200, got %d", w.Code)
	}

	var result map[string]interface{}
	if err := json.Unmarshal(w.Body.Bytes(), &result); err != nil {
		t.Fatalf("failed to parse response: %v", err)
	}
	if result["status"] != "OK" {
		t.Errorf("expected status OK, got %v", result["status"])
	}
	if _, ok := result["timestamp"]; !ok {
		t.Error("expected timestamp field in health response")
	}
}

func TestRootEndpoint(t *testing.T) {
	r := setupRouter()
	req := httptest.NewRequest("GET", "/", nil)
	w := httptest.NewRecorder()
	r.ServeHTTP(w, req)

	if w.Code != http.StatusOK {
		t.Errorf("expected status 200, got %d", w.Code)
	}

	var result map[string]interface{}
	if err := json.Unmarshal(w.Body.Bytes(), &result); err != nil {
		t.Fatalf("failed to parse response: %v", err)
	}
	if result["message"] != "Welcome to Portfolio API" {
		t.Errorf("unexpected message: %v", result["message"])
	}
	endpoints, ok := result["endpoints"].([]interface{})
	if !ok {
		t.Fatal("expected endpoints to be an array")
	}
	if len(endpoints) == 0 {
		t.Error("expected at least one endpoint")
	}
}

func TestProfileEndpoint(t *testing.T) {
	r := setupRouter()

	tests := []struct {
		name     string
		lang     string
		wantName string
	}{
		{"default (ja)", "", "Web Dev"},
		{"japanese", "ja", "Web Dev"},
		{"english", "en", "Web Dev"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			url := "/api/profile"
			if tt.lang != "" {
				url += "?lang=" + tt.lang
			}
			req := httptest.NewRequest("GET", url, nil)
			w := httptest.NewRecorder()
			r.ServeHTTP(w, req)

			if w.Code != http.StatusOK {
				t.Errorf("expected status 200, got %d", w.Code)
			}

			var result model.ApiResponse[model.ProfileResponse]
			if err := json.Unmarshal(w.Body.Bytes(), &result); err != nil {
				t.Fatalf("failed to parse response: %v", err)
			}
			if result.Message != "Profile data fetched successfully" {
				t.Errorf("unexpected message: %v", result.Message)
			}
			if result.Data.Name != tt.wantName {
				t.Errorf("expected name %q, got %q", tt.wantName, result.Data.Name)
			}
			if result.Data.Title == "" {
				t.Error("expected non-empty title")
			}
			if result.Data.Summary == "" {
				t.Error("expected non-empty summary")
			}
		})
	}
}

func TestExperienceEndpoint(t *testing.T) {
	r := setupRouter()

	tests := []struct {
		name string
		lang string
	}{
		{"default (ja)", ""},
		{"japanese", "ja"},
		{"english", "en"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			url := "/api/experience"
			if tt.lang != "" {
				url += "?lang=" + tt.lang
			}
			req := httptest.NewRequest("GET", url, nil)
			w := httptest.NewRecorder()
			r.ServeHTTP(w, req)

			if w.Code != http.StatusOK {
				t.Errorf("expected status 200, got %d", w.Code)
			}

			var result model.ApiResponse[[]model.WorkExperience]
			if err := json.Unmarshal(w.Body.Bytes(), &result); err != nil {
				t.Fatalf("failed to parse response: %v", err)
			}
			if result.Message != "Experience data fetched successfully" {
				t.Errorf("unexpected message: %v", result.Message)
			}
			if len(result.Data) == 0 {
				t.Error("expected at least one experience entry")
			}
			for _, exp := range result.Data {
				if exp.Company == "" {
					t.Error("expected non-empty company name")
				}
				if exp.Role == "" {
					t.Error("expected non-empty role")
				}
				if exp.Period == "" {
					t.Error("expected non-empty period")
				}
			}
		})
	}
}

func TestProjectsEndpoint(t *testing.T) {
	r := setupRouter()

	tests := []struct {
		name string
		lang string
	}{
		{"default (ja)", ""},
		{"japanese", "ja"},
		{"english", "en"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			url := "/api/projects"
			if tt.lang != "" {
				url += "?lang=" + tt.lang
			}
			req := httptest.NewRequest("GET", url, nil)
			w := httptest.NewRecorder()
			r.ServeHTTP(w, req)

			if w.Code != http.StatusOK {
				t.Errorf("expected status 200, got %d", w.Code)
			}

			var result model.ApiResponse[[]model.Project]
			if err := json.Unmarshal(w.Body.Bytes(), &result); err != nil {
				t.Fatalf("failed to parse response: %v", err)
			}
			if result.Message != "Projects data fetched successfully" {
				t.Errorf("unexpected message: %v", result.Message)
			}
			if len(result.Data) == 0 {
				t.Error("expected at least one project")
			}
			for _, proj := range result.Data {
				if proj.Title == "" {
					t.Error("expected non-empty project title")
				}
				if proj.Description == "" {
					t.Error("expected non-empty project description")
				}
			}
		})
	}
}

func TestSkillsEndpoint(t *testing.T) {
	r := setupRouter()
	req := httptest.NewRequest("GET", "/api/skills", nil)
	w := httptest.NewRecorder()
	r.ServeHTTP(w, req)

	if w.Code != http.StatusOK {
		t.Errorf("expected status 200, got %d", w.Code)
	}

	var result model.ApiResponse[[]model.SkillItem]
	if err := json.Unmarshal(w.Body.Bytes(), &result); err != nil {
		t.Fatalf("failed to parse response: %v", err)
	}
	if result.Message != "Skills data fetched successfully" {
		t.Errorf("unexpected message: %v", result.Message)
	}
	if len(result.Data) == 0 {
		t.Error("expected at least one skill")
	}
	for _, skill := range result.Data {
		if skill.Name == "" {
			t.Error("expected non-empty skill name")
		}
		if skill.Category == "" {
			t.Error("expected non-empty skill category")
		}
	}
}

func TestOtherSkillsEndpoint(t *testing.T) {
	r := setupRouter()
	req := httptest.NewRequest("GET", "/api/other-skills", nil)
	w := httptest.NewRecorder()
	r.ServeHTTP(w, req)

	if w.Code != http.StatusOK {
		t.Errorf("expected status 200, got %d", w.Code)
	}

	var result model.ApiResponse[[]model.SkillItem]
	if err := json.Unmarshal(w.Body.Bytes(), &result); err != nil {
		t.Fatalf("failed to parse response: %v", err)
	}
	if result.Message != "Other skills data fetched successfully" {
		t.Errorf("unexpected message: %v", result.Message)
	}
	if len(result.Data) == 0 {
		t.Error("expected at least one other skill")
	}
}

func TestEducationEndpoint(t *testing.T) {
	r := setupRouter()

	tests := []struct {
		name string
		lang string
	}{
		{"default (ja)", ""},
		{"japanese", "ja"},
		{"english", "en"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			url := "/api/education"
			if tt.lang != "" {
				url += "?lang=" + tt.lang
			}
			req := httptest.NewRequest("GET", url, nil)
			w := httptest.NewRecorder()
			r.ServeHTTP(w, req)

			if w.Code != http.StatusOK {
				t.Errorf("expected status 200, got %d", w.Code)
			}

			var result model.ApiResponse[[]model.EducationHistory]
			if err := json.Unmarshal(w.Body.Bytes(), &result); err != nil {
				t.Fatalf("failed to parse response: %v", err)
			}
			if result.Message != "Education data fetched successfully" {
				t.Errorf("unexpected message: %v", result.Message)
			}
			if len(result.Data) == 0 {
				t.Error("expected at least one education entry")
			}
			for _, edu := range result.Data {
				if edu.School == "" {
					t.Error("expected non-empty school name")
				}
			}
		})
	}
}

func TestContactEndpoint(t *testing.T) {
	r := setupRouter()
	req := httptest.NewRequest("GET", "/api/contact", nil)
	w := httptest.NewRecorder()
	r.ServeHTTP(w, req)

	if w.Code != http.StatusOK {
		t.Errorf("expected status 200, got %d", w.Code)
	}

	var result model.ApiResponse[model.Contact]
	if err := json.Unmarshal(w.Body.Bytes(), &result); err != nil {
		t.Fatalf("failed to parse response: %v", err)
	}
	if result.Message != "Contact data fetched successfully" {
		t.Errorf("unexpected message: %v", result.Message)
	}
	if result.Data.Email == "" {
		t.Error("expected non-empty email")
	}
	if result.Data.Address == "" {
		t.Error("expected non-empty address")
	}
	if result.Data.SocialMedia.Github == "" {
		t.Error("expected non-empty github link")
	}
	if len(result.Data.AvailableFor) == 0 {
		t.Error("expected at least one availableFor entry")
	}
}

func TestCertificationsEndpoint(t *testing.T) {
	r := setupRouter()

	tests := []struct {
		name string
		lang string
	}{
		{"default (ja)", ""},
		{"japanese", "ja"},
		{"english", "en"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			url := "/api/certifications"
			if tt.lang != "" {
				url += "?lang=" + tt.lang
			}
			req := httptest.NewRequest("GET", url, nil)
			w := httptest.NewRecorder()
			r.ServeHTTP(w, req)

			if w.Code != http.StatusOK {
				t.Errorf("expected status 200, got %d", w.Code)
			}

			var result model.ApiResponse[[]model.CertificationItem]
			if err := json.Unmarshal(w.Body.Bytes(), &result); err != nil {
				t.Fatalf("failed to parse response: %v", err)
			}
			if result.Message != "Certifications data fetched successfully" {
				t.Errorf("unexpected message: %v", result.Message)
			}
			if len(result.Data) == 0 {
				t.Error("expected at least one certification")
			}
			for _, cert := range result.Data {
				if cert.Name == "" {
					t.Error("expected non-empty certification name")
				}
				if cert.Organization == "" {
					t.Error("expected non-empty organization")
				}
			}
		})
	}
}

func TestChangelogsEndpoint(t *testing.T) {
	r := setupRouter()

	tests := []struct {
		name string
		lang string
	}{
		{"default (ja)", ""},
		{"japanese", "ja"},
		{"english", "en"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			url := "/api/changelogs"
			if tt.lang != "" {
				url += "?lang=" + tt.lang
			}
			req := httptest.NewRequest("GET", url, nil)
			w := httptest.NewRecorder()
			r.ServeHTTP(w, req)

			if w.Code != http.StatusOK {
				t.Errorf("expected status 200, got %d", w.Code)
			}

			var result model.ApiResponse[[]model.ChangelogItem]
			if err := json.Unmarshal(w.Body.Bytes(), &result); err != nil {
				t.Fatalf("failed to parse response: %v", err)
			}
			if result.Message != "Changelogs data fetched successfully" {
				t.Errorf("unexpected message: %v", result.Message)
			}
			if len(result.Data) == 0 {
				t.Error("expected at least one changelog entry")
			}
			for _, cl := range result.Data {
				if cl.Version == "" {
					t.Error("expected non-empty version")
				}
				if cl.Date == "" {
					t.Error("expected non-empty date")
				}
				if len(cl.Changes) == 0 {
					t.Error("expected at least one change")
				}
			}
		})
	}
}

func TestFaqsEndpoint(t *testing.T) {
	r := setupRouter()

	tests := []struct {
		name string
		lang string
	}{
		{"default (ja)", ""},
		{"japanese", "ja"},
		{"english", "en"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			url := "/api/faqs"
			if tt.lang != "" {
				url += "?lang=" + tt.lang
			}
			req := httptest.NewRequest("GET", url, nil)
			w := httptest.NewRecorder()
			r.ServeHTTP(w, req)

			if w.Code != http.StatusOK {
				t.Errorf("expected status 200, got %d", w.Code)
			}

			var result model.ApiResponse[[]model.Faq]
			if err := json.Unmarshal(w.Body.Bytes(), &result); err != nil {
				t.Fatalf("failed to parse response: %v", err)
			}
			if result.Message != "FAQs data fetched successfully" {
				t.Errorf("unexpected message: %v", result.Message)
			}
			if len(result.Data) == 0 {
				t.Error("expected at least one FAQ")
			}
			for _, faq := range result.Data {
				if faq.Question == "" {
					t.Error("expected non-empty question")
				}
				if faq.Answer == "" {
					t.Error("expected non-empty answer")
				}
			}
		})
	}
}

func TestLinksEndpoint(t *testing.T) {
	r := setupRouter()
	req := httptest.NewRequest("GET", "/api/links", nil)
	w := httptest.NewRecorder()
	r.ServeHTTP(w, req)

	if w.Code != http.StatusOK {
		t.Errorf("expected status 200, got %d", w.Code)
	}

	var result model.ApiResponse[model.Links]
	if err := json.Unmarshal(w.Body.Bytes(), &result); err != nil {
		t.Fatalf("failed to parse response: %v", err)
	}
	if result.Message != "Links data fetched successfully" {
		t.Errorf("unexpected message: %v", result.Message)
	}
	if result.Data.CreadlyLink == "" {
		t.Error("expected non-empty credly link")
	}
}

func TestStrongPointsEndpoint(t *testing.T) {
	r := setupRouter()

	tests := []struct {
		name string
		lang string
	}{
		{"default (ja)", ""},
		{"japanese", "ja"},
		{"english", "en"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			url := "/api/strong-points"
			if tt.lang != "" {
				url += "?lang=" + tt.lang
			}
			req := httptest.NewRequest("GET", url, nil)
			w := httptest.NewRecorder()
			r.ServeHTTP(w, req)

			if w.Code != http.StatusOK {
				t.Errorf("expected status 200, got %d", w.Code)
			}

			var result model.ApiResponse[[]model.StrongPoint]
			if err := json.Unmarshal(w.Body.Bytes(), &result); err != nil {
				t.Fatalf("failed to parse response: %v", err)
			}
			if result.Message != "Strong points data fetched successfully" {
				t.Errorf("unexpected message: %v", result.Message)
			}
			if len(result.Data) == 0 {
				t.Error("expected at least one strong point")
			}
			for _, sp := range result.Data {
				if sp.Question == "" {
					t.Error("expected non-empty question")
				}
				if sp.Answer == "" {
					t.Error("expected non-empty answer")
				}
			}
		})
	}
}

func TestDownloadPDFEndpoint(t *testing.T) {
	r := setupRouter()

	tests := []struct {
		name   string
		query  string
		format string
	}{
		{"default", "", "standard"},
		{"english standard", "?lang=en", "standard"},
		{"japanese standard", "?lang=ja", "standard"},
		{"compact", "?lang=en&format=compact", "compact"},
		{"executive", "?lang=en&format=executive", "executive"},
		{"technical", "?lang=en&format=technical", "technical"},
		{"academic", "?lang=en&format=academic", "academic"},
		{"modern", "?lang=en&format=modern", "modern"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			url := "/api/download-pdf" + tt.query
			req := httptest.NewRequest("GET", url, nil)
			w := httptest.NewRecorder()
			r.ServeHTTP(w, req)

			if w.Code != http.StatusOK {
				t.Errorf("expected status 200, got %d", w.Code)
			}
			if ct := w.Header().Get("Content-Type"); ct != "application/pdf" {
				t.Errorf("expected Content-Type application/pdf, got %s", ct)
			}
			if cd := w.Header().Get("Content-Disposition"); cd == "" {
				t.Error("expected Content-Disposition header")
			}
			if w.Body.Len() == 0 {
				t.Error("expected non-empty PDF body")
			}
			// Check PDF magic bytes
			body := w.Body.Bytes()
			if len(body) < 4 || string(body[:4]) != "%PDF" {
				t.Error("response does not appear to be a valid PDF")
			}
		})
	}
}

func TestDownloadPDFWithSectionFilters(t *testing.T) {
	r := setupRouter()

	req := httptest.NewRequest("GET", "/api/download-pdf?lang=en&projects=false&experience=false&certifications=false&education=false", nil)
	w := httptest.NewRecorder()
	r.ServeHTTP(w, req)

	if w.Code != http.StatusOK {
		t.Errorf("expected status 200, got %d", w.Code)
	}
	if ct := w.Header().Get("Content-Type"); ct != "application/pdf" {
		t.Errorf("expected Content-Type application/pdf, got %s", ct)
	}
}

func TestContentTypeJSON(t *testing.T) {
	r := setupRouter()

	endpoints := []string{
		"/health",
		"/",
		"/api/profile",
		"/api/experience",
		"/api/projects",
		"/api/skills",
		"/api/other-skills",
		"/api/education",
		"/api/contact",
		"/api/certifications",
		"/api/changelogs",
		"/api/faqs",
		"/api/links",
		"/api/strong-points",
	}

	for _, endpoint := range endpoints {
		t.Run(endpoint, func(t *testing.T) {
			req := httptest.NewRequest("GET", endpoint, nil)
			w := httptest.NewRecorder()
			r.ServeHTTP(w, req)

			if w.Code != http.StatusOK {
				t.Errorf("expected status 200 for %s, got %d", endpoint, w.Code)
			}
			ct := w.Header().Get("Content-Type")
			if ct != "application/json" {
				t.Errorf("expected Content-Type application/json for %s, got %s", endpoint, ct)
			}
		})
	}
}
