package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
	"github.com/shinguakira/portfolio-api-go/handler"
)

func main() {
	r := chi.NewRouter()

	// Middleware
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)
	r.Use(cors.Handler(cors.Options{
		AllowedOrigins:   []string{"*"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Content-Type", "Authorization"},
		AllowCredentials: true,
		MaxAge:           86400,
	}))

	// Health check
	r.Get("/health", handler.Health)

	// Root
	r.Get("/", handler.Root)

	// API routes
	r.Route("/api", func(r chi.Router) {
		r.Get("/profile", handler.GetProfile)
		r.Get("/experience", handler.GetExperience)
		r.Get("/projects", handler.GetProjects)
		r.Get("/skills", handler.GetSkills)
		r.Get("/other-skills", handler.GetOtherSkills)
		r.Get("/education", handler.GetEducation)
		r.Get("/contact", handler.GetContact)
		r.Get("/certifications", handler.GetCertifications)
		r.Get("/changelogs", handler.GetChangelogs)
		r.Get("/faqs", handler.GetFaqs)
		r.Get("/links", handler.GetLinks)
		r.Get("/strong-points", handler.GetStrongPoints)
		r.Get("/download-pdf", handler.DownloadPortfolioPDF)
	})

	port := os.Getenv("PORT")
	if port == "" {
		port = "3005"
	}

	fmt.Printf("Portfolio API Server (Go) running on port %s\n", port)
	fmt.Printf("Local: http://localhost:%s\n", port)
	fmt.Printf("Health: http://localhost:%s/health\n", port)

	log.Fatal(http.ListenAndServe(":"+port, r))
}
