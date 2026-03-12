package service

import (
	"bytes"

	"github.com/go-pdf/fpdf"
	"github.com/shinguakira/portfolio-api-go/data"
	"github.com/shinguakira/portfolio-api-go/model"
)

type PDFOptions struct {
	Lang                  string
	Format                string
	IncludeProjects       bool
	IncludeExperience     bool
	IncludeCertifications bool
	IncludeEducation      bool
}

func GeneratePortfolioPDF(opts PDFOptions) ([]byte, error) {
	switch opts.Format {
	case "compact":
		return createCompactPDF(opts)
	case "executive":
		return createExecutivePDF(opts)
	case "technical":
		return createTechnicalPDF(opts)
	case "academic":
		return createAcademicPDF(opts)
	case "modern":
		return createModernPDF(opts)
	default:
		return createStandardPDF(opts)
	}
}

func getProfileData(lang string) model.ProfileResponse {
	if lang == "en" {
		return data.ProfileEN
	}
	return data.ProfileJA
}

func getExperience(lang string) []model.WorkExperience {
	if lang == "en" {
		return data.WorkExperiencesEN
	}
	return data.WorkExperiencesJA
}

func getProjects(lang string) []model.Project {
	if lang == "en" {
		return data.ProjectsEN
	}
	return data.ProjectsJA
}

func getEducation(lang string) []model.EducationHistory {
	if lang == "en" {
		return data.EducationEN
	}
	return data.EducationJA
}

func getCertifications(lang string) []model.CertificationItem {
	if lang == "en" {
		return data.CertificationsEN
	}
	return data.CertificationsJA
}

func getStrongPoints(lang string) []model.StrongPoint {
	if lang == "en" {
		return data.StrongPointsEN
	}
	return data.StrongPointsJA
}

func localizedText(lang, en, ja string) string {
	if lang == "en" {
		return en
	}
	return ja
}

func pdfToBytes(pdf *fpdf.Fpdf) ([]byte, error) {
	var buf bytes.Buffer
	err := pdf.Output(&buf)
	if err != nil {
		return nil, err
	}
	return buf.Bytes(), nil
}

// Helper: add section title
func addSectionTitle(pdf *fpdf.Fpdf, title string) {
	pdf.SetFont("Helvetica", "B", 14)
	pdf.SetTextColor(0, 102, 204)
	pdf.CellFormat(0, 8, title, "", 1, "", false, 0, "")
	pdf.SetDrawColor(224, 224, 224)
	pdf.Line(pdf.GetX(), pdf.GetY(), 190, pdf.GetY())
	pdf.Ln(4)
}

// Helper: add text
func addText(pdf *fpdf.Fpdf, text string) {
	pdf.SetFont("Helvetica", "", 11)
	pdf.SetTextColor(51, 51, 51)
	pdf.MultiCell(0, 5, text, "", "", false)
	pdf.Ln(2)
}

// Helper: add bold text
func addBoldText(pdf *fpdf.Fpdf, text string) {
	pdf.SetFont("Helvetica", "B", 11)
	pdf.SetTextColor(51, 51, 51)
	pdf.MultiCell(0, 5, text, "", "", false)
}

// Standard format - 2 pages
func createStandardPDF(opts PDFOptions) ([]byte, error) {
	pdf := fpdf.New("P", "mm", "A4", "")
	pdf.SetMargins(15, 15, 15)
	pdf.AddPage()

	profileData := getProfileData(opts.Lang)

	// Header
	pdf.SetFont("Helvetica", "B", 24)
	pdf.SetTextColor(0, 102, 204)
	pdf.CellFormat(0, 10, profileData.Name, "", 1, "", false, 0, "")

	pdf.SetFont("Helvetica", "", 16)
	pdf.SetTextColor(51, 51, 51)
	pdf.CellFormat(0, 8, profileData.Title, "", 1, "", false, 0, "")

	pdf.SetFont("Helvetica", "", 10)
	pdf.SetTextColor(102, 102, 102)
	pdf.CellFormat(0, 6, data.ContactData.Email+" | "+data.ContactData.SocialMedia.Github+" | "+data.ContactData.Address, "", 1, "", false, 0, "")

	pdf.SetDrawColor(0, 102, 204)
	pdf.SetLineWidth(0.5)
	pdf.Line(15, pdf.GetY()+2, 195, pdf.GetY()+2)
	pdf.Ln(8)

	// Profile Summary
	addSectionTitle(pdf, localizedText(opts.Lang, "Profile Summary", "プロフィール概要"))
	addText(pdf, profileData.Summary)

	// Strong Points
	strongPoints := getStrongPoints(opts.Lang)
	addSectionTitle(pdf, localizedText(opts.Lang, "Key Strengths", "強み"))
	for _, sp := range strongPoints {
		addBoldText(pdf, sp.Question)
		addText(pdf, sp.Answer)
	}

	// Skills
	addSectionTitle(pdf, localizedText(opts.Lang, "Technical Skills", "技術スキル"))
	for _, skill := range data.Skills {
		pdf.SetFont("Helvetica", "", 10)
		pdf.SetTextColor(51, 51, 51)
		pdf.CellFormat(0, 5, skill.Name+" ("+skill.Years+")", "", 1, "", false, 0, "")
	}
	pdf.Ln(4)

	// Experience
	if opts.IncludeExperience {
		experiences := getExperience(opts.Lang)
		addSectionTitle(pdf, localizedText(opts.Lang, "Professional Experience", "職務経歴"))
		limit := 2
		if len(experiences) < limit {
			limit = len(experiences)
		}
		for _, exp := range experiences[:limit] {
			addBoldText(pdf, exp.Role+" at "+exp.Company)
			pdf.SetFont("Helvetica", "", 11)
			pdf.SetTextColor(51, 51, 51)
			teamInfo := ""
			if exp.TeamSize != "" {
				teamInfo = " | Team: " + exp.TeamSize
			}
			manMonthInfo := ""
			if exp.ManMonth != "" {
				manMonthInfo = " | " + exp.ManMonth
			}
			pdf.CellFormat(0, 5, exp.Period+teamInfo+manMonthInfo, "", 1, "", false, 0, "")
			addText(pdf, exp.ProjectOverview)
			if len(exp.Technologies) > 0 {
				techs := ""
				for i, t := range exp.Technologies {
					if i > 0 {
						techs += ", "
					}
					techs += t
				}
				addText(pdf, "Technologies: "+techs)
			}
		}
	}

	// Second page
	pdf.AddPage()

	// Projects
	if opts.IncludeProjects {
		projects := getProjects(opts.Lang)
		addSectionTitle(pdf, localizedText(opts.Lang, "Key Projects", "主要プロジェクト"))
		limit := 4
		if len(projects) < limit {
			limit = len(projects)
		}
		for _, proj := range projects[:limit] {
			addBoldText(pdf, proj.Title)
			addText(pdf, proj.Description)
			if len(proj.Technologies) > 0 {
				techs := ""
				for i, t := range proj.Technologies {
					if i > 0 {
						techs += ", "
					}
					techs += t
				}
				addText(pdf, "Technologies: "+techs)
			}
		}
	}

	// Education
	if opts.IncludeEducation {
		education := getEducation(opts.Lang)
		addSectionTitle(pdf, localizedText(opts.Lang, "Education", "学歴"))
		for _, edu := range education {
			addBoldText(pdf, edu.School+" - "+edu.Department)
			pdf.SetFont("Helvetica", "", 11)
			pdf.SetTextColor(51, 51, 51)
			pdf.CellFormat(0, 5, "("+edu.StartYear+" - "+edu.EndYear+")", "", 1, "", false, 0, "")
			addText(pdf, edu.Description)
		}
	}

	// Certifications
	if opts.IncludeCertifications {
		certs := getCertifications(opts.Lang)
		addSectionTitle(pdf, localizedText(opts.Lang, "Certifications", "資格・認定"))
		for _, cert := range certs {
			addBoldText(pdf, cert.Name)
			pdf.SetFont("Helvetica", "", 11)
			pdf.SetTextColor(51, 51, 51)
			pdf.CellFormat(0, 5, cert.Organization+" | "+cert.Date, "", 1, "", false, 0, "")
			if cert.VerifyLink != "" {
				pdf.SetFont("Helvetica", "", 10)
				pdf.CellFormat(0, 5, cert.VerifyLink, "", 1, "", false, 0, "")
			}
			pdf.Ln(2)
		}
	}

	return pdfToBytes(pdf)
}

// Compact format - single page
func createCompactPDF(opts PDFOptions) ([]byte, error) {
	pdf := fpdf.New("P", "mm", "A4", "")
	pdf.SetMargins(15, 15, 15)
	pdf.AddPage()

	profileData := getProfileData(opts.Lang)

	// Compact header
	pdf.SetFont("Helvetica", "B", 16)
	pdf.SetTextColor(0, 102, 204)
	pdf.CellFormat(0, 7, profileData.Name, "", 1, "", false, 0, "")
	pdf.SetFont("Helvetica", "", 12)
	pdf.SetTextColor(51, 51, 51)
	pdf.CellFormat(0, 6, profileData.Title, "", 1, "", false, 0, "")
	pdf.SetFont("Helvetica", "", 9)
	pdf.SetTextColor(102, 102, 102)
	pdf.CellFormat(0, 5, data.ContactData.Email+" | "+data.ContactData.SocialMedia.Github+" | "+data.ContactData.SocialMedia.LinkedIn, "", 1, "", false, 0, "")
	pdf.Ln(4)

	// Summary
	pdf.SetFont("Helvetica", "B", 12)
	pdf.SetTextColor(0, 102, 204)
	pdf.CellFormat(0, 6, localizedText(opts.Lang, "Summary", "概要"), "", 1, "", false, 0, "")
	summary := profileData.Summary
	if len(summary) > 200 {
		summary = summary[:200] + "..."
	}
	pdf.SetFont("Helvetica", "", 9)
	pdf.SetTextColor(51, 51, 51)
	pdf.MultiCell(0, 4, summary, "", "", false)
	pdf.Ln(3)

	// Experience
	if opts.IncludeExperience {
		experiences := getExperience(opts.Lang)
		pdf.SetFont("Helvetica", "B", 12)
		pdf.SetTextColor(0, 102, 204)
		pdf.CellFormat(0, 6, localizedText(opts.Lang, "Experience", "経験"), "", 1, "", false, 0, "")
		limit := 3
		if len(experiences) < limit {
			limit = len(experiences)
		}
		for _, exp := range experiences[:limit] {
			pdf.SetFont("Helvetica", "", 9)
			pdf.SetTextColor(51, 51, 51)
			pdf.CellFormat(0, 4, exp.Role+" at "+exp.Company+" ("+exp.Period+")", "", 1, "", false, 0, "")
		}
		pdf.Ln(3)
	}

	// Projects
	if opts.IncludeProjects {
		projects := getProjects(opts.Lang)
		pdf.SetFont("Helvetica", "B", 12)
		pdf.SetTextColor(0, 102, 204)
		pdf.CellFormat(0, 6, localizedText(opts.Lang, "Key Projects", "主要プロジェクト"), "", 1, "", false, 0, "")
		limit := 3
		if len(projects) < limit {
			limit = len(projects)
		}
		for _, proj := range projects[:limit] {
			techs := ""
			limit2 := 3
			if len(proj.Technologies) < limit2 {
				limit2 = len(proj.Technologies)
			}
			for i, t := range proj.Technologies[:limit2] {
				if i > 0 {
					techs += ", "
				}
				techs += t
			}
			pdf.SetFont("Helvetica", "", 9)
			pdf.SetTextColor(51, 51, 51)
			pdf.CellFormat(0, 4, proj.Title+" - "+techs, "", 1, "", false, 0, "")
		}
		pdf.Ln(3)
	}

	// Certifications
	if opts.IncludeCertifications {
		certs := getCertifications(opts.Lang)
		pdf.SetFont("Helvetica", "B", 12)
		pdf.SetTextColor(0, 102, 204)
		pdf.CellFormat(0, 6, localizedText(opts.Lang, "Certifications", "資格"), "", 1, "", false, 0, "")
		limit := 5
		if len(certs) < limit {
			limit = len(certs)
		}
		for _, cert := range certs[:limit] {
			pdf.SetFont("Helvetica", "", 9)
			pdf.SetTextColor(51, 51, 51)
			pdf.CellFormat(0, 4, cert.Name+" ("+cert.Organization+", "+cert.Date+")", "", 1, "", false, 0, "")
		}
	}

	return pdfToBytes(pdf)
}

// Executive format
func createExecutivePDF(opts PDFOptions) ([]byte, error) {
	pdf := fpdf.New("P", "mm", "A4", "")
	pdf.SetMargins(15, 15, 15)
	pdf.AddPage()

	profileData := getProfileData(opts.Lang)

	// Header with background
	pdf.SetFillColor(248, 249, 250)
	pdf.Rect(15, 15, 180, 30, "F")
	pdf.SetFont("Helvetica", "B", 18)
	pdf.SetTextColor(0, 102, 204)
	pdf.CellFormat(0, 8, profileData.Name, "", 1, "", false, 0, "")
	pdf.SetFont("Helvetica", "B", 14)
	pdf.SetTextColor(51, 51, 51)
	pdf.CellFormat(0, 7, profileData.Title, "", 1, "", false, 0, "")
	pdf.SetFont("Helvetica", "", 11)
	pdf.SetTextColor(102, 102, 102)
	pdf.CellFormat(0, 6, data.ContactData.Email+" | "+data.ContactData.SocialMedia.LinkedIn, "", 1, "", false, 0, "")
	pdf.Ln(8)

	// Executive Summary
	addSectionTitle(pdf, localizedText(opts.Lang, "Executive Summary", "エグゼクティブサマリー"))
	pdf.SetFont("Helvetica", "", 12)
	pdf.SetTextColor(51, 51, 51)
	pdf.MultiCell(0, 6, profileData.Summary, "", "", false)
	pdf.Ln(6)

	// Key Achievements
	experiences := getExperience(opts.Lang)
	addSectionTitle(pdf, localizedText(opts.Lang, "Key Achievements", "主な実績"))
	limit := 2
	if len(experiences) < limit {
		limit = len(experiences)
	}
	for _, exp := range experiences[:limit] {
		pdf.SetFont("Helvetica", "B", 12)
		pdf.SetTextColor(51, 51, 51)
		pdf.CellFormat(0, 6, exp.Role+" - "+exp.Company, "", 1, "", false, 0, "")
		pdf.SetFont("Helvetica", "", 11)
		pdf.SetTextColor(102, 102, 102)
		pdf.CellFormat(0, 5, exp.Period, "", 1, "", false, 0, "")
		desc := ""
		for _, d := range exp.Description {
			desc += d + "\n"
		}
		if len(desc) > 150 {
			desc = desc[:150] + "..."
		}
		pdf.SetFont("Helvetica", "", 11)
		pdf.SetTextColor(51, 51, 51)
		pdf.MultiCell(0, 5, desc, "", "", false)
		pdf.Ln(4)
	}

	// Core Technologies
	addSectionTitle(pdf, localizedText(opts.Lang, "Core Technologies", "コア技術"))
	for _, skill := range data.Skills {
		pdf.SetFont("Helvetica", "", 11)
		pdf.SetTextColor(51, 51, 51)
		pdf.CellFormat(0, 5, skill.Category+": "+skill.Name, "", 1, "", false, 0, "")
	}

	return pdfToBytes(pdf)
}

// Technical format
func createTechnicalPDF(opts PDFOptions) ([]byte, error) {
	pdf := fpdf.New("P", "mm", "A4", "")
	pdf.SetMargins(15, 15, 15)
	pdf.AddPage()

	profileData := getProfileData(opts.Lang)

	// Header
	pdf.SetFont("Helvetica", "B", 24)
	pdf.SetTextColor(0, 102, 204)
	pdf.CellFormat(0, 10, profileData.Name, "", 1, "", false, 0, "")
	pdf.SetFont("Helvetica", "", 16)
	pdf.SetTextColor(51, 51, 51)
	pdf.CellFormat(0, 8, profileData.Title, "", 1, "", false, 0, "")
	pdf.SetFont("Helvetica", "", 10)
	pdf.SetTextColor(102, 102, 102)
	pdf.CellFormat(0, 5, data.ContactData.Email+" | "+data.ContactData.SocialMedia.Github, "", 1, "", false, 0, "")
	pdf.Ln(6)

	// Technical Skills
	addSectionTitle(pdf, localizedText(opts.Lang, "Technical Expertise", "技術的専門知識"))
	currentCategory := ""
	for _, skill := range data.Skills {
		if skill.Category != currentCategory {
			currentCategory = skill.Category
			pdf.SetFont("Helvetica", "B", 12)
			pdf.SetTextColor(0, 102, 204)
			pdf.CellFormat(0, 6, currentCategory+":", "", 1, "", false, 0, "")
		}
		pdf.SetFont("Helvetica", "", 11)
		pdf.SetTextColor(51, 51, 51)
		pdf.CellFormat(0, 5, "  "+skill.Name+" ("+skill.Years+")", "", 1, "", false, 0, "")
	}
	pdf.Ln(4)

	// Technical Projects
	projects := getProjects(opts.Lang)
	addSectionTitle(pdf, localizedText(opts.Lang, "Technical Projects", "技術プロジェクト"))
	limit := 4
	if len(projects) < limit {
		limit = len(projects)
	}
	for _, proj := range projects[:limit] {
		pdf.SetFont("Helvetica", "B", 12)
		pdf.SetTextColor(51, 51, 51)
		pdf.CellFormat(0, 6, proj.Title, "", 1, "", false, 0, "")
		techs := ""
		for i, t := range proj.Technologies {
			if i > 0 {
				techs += ", "
			}
			techs += t
		}
		pdf.SetFont("Helvetica", "", 10)
		pdf.SetTextColor(102, 102, 102)
		pdf.CellFormat(0, 5, "Technologies: "+techs, "", 1, "", false, 0, "")
		desc := proj.Description
		if len(desc) > 120 {
			desc = desc[:120] + "..."
		}
		pdf.SetFont("Helvetica", "", 11)
		pdf.SetTextColor(51, 51, 51)
		pdf.MultiCell(0, 5, desc, "", "", false)
		pdf.Ln(4)
	}

	return pdfToBytes(pdf)
}

// Academic format
func createAcademicPDF(opts PDFOptions) ([]byte, error) {
	pdf := fpdf.New("P", "mm", "A4", "")
	pdf.SetMargins(15, 15, 15)
	pdf.AddPage()

	profileData := getProfileData(opts.Lang)

	// Header
	pdf.SetFont("Helvetica", "B", 24)
	pdf.SetTextColor(0, 102, 204)
	pdf.CellFormat(0, 10, profileData.Name, "", 1, "", false, 0, "")
	pdf.SetFont("Helvetica", "", 16)
	pdf.SetTextColor(51, 51, 51)
	pdf.CellFormat(0, 8, profileData.Title, "", 1, "", false, 0, "")
	pdf.SetFont("Helvetica", "", 10)
	pdf.SetTextColor(102, 102, 102)
	pdf.CellFormat(0, 5, data.ContactData.Email, "", 1, "", false, 0, "")
	pdf.Ln(6)

	// Education
	education := getEducation(opts.Lang)
	addSectionTitle(pdf, localizedText(opts.Lang, "Education", "学歴"))
	for _, edu := range education {
		pdf.SetFont("Helvetica", "B", 12)
		pdf.SetTextColor(51, 51, 51)
		pdf.CellFormat(0, 6, edu.School+" - "+edu.Department, "", 1, "", false, 0, "")
		pdf.SetFont("Helvetica", "", 11)
		pdf.SetTextColor(102, 102, 102)
		pdf.CellFormat(0, 5, "("+edu.StartYear+" - "+edu.EndYear+")", "", 1, "", false, 0, "")
		if edu.Description != "" {
			addText(pdf, edu.Description)
		}
		pdf.Ln(2)
	}

	// Certifications
	certs := getCertifications(opts.Lang)
	addSectionTitle(pdf, localizedText(opts.Lang, "Certifications & Licenses", "資格・免許"))
	for _, cert := range certs {
		pdf.SetFont("Helvetica", "B", 12)
		pdf.SetTextColor(51, 51, 51)
		pdf.CellFormat(0, 6, cert.Name, "", 1, "", false, 0, "")
		pdf.SetFont("Helvetica", "", 11)
		pdf.SetTextColor(102, 102, 102)
		pdf.CellFormat(0, 5, cert.Organization+" | "+cert.Date, "", 1, "", false, 0, "")
		if cert.VerifyLink != "" {
			pdf.SetFont("Helvetica", "", 10)
			pdf.SetTextColor(0, 102, 204)
			pdf.CellFormat(0, 5, cert.VerifyLink, "", 1, "", false, 0, "")
		}
		pdf.Ln(2)
	}

	// Skills
	addSectionTitle(pdf, localizedText(opts.Lang, "Technical Skills", "技術スキル"))
	for _, skill := range data.Skills {
		pdf.SetFont("Helvetica", "", 11)
		pdf.SetTextColor(51, 51, 51)
		pdf.CellFormat(0, 5, skill.Category+": "+skill.Name, "", 1, "", false, 0, "")
	}

	return pdfToBytes(pdf)
}

// Modern format
func createModernPDF(opts PDFOptions) ([]byte, error) {
	pdf := fpdf.New("P", "mm", "A4", "")
	pdf.SetMargins(15, 15, 15)
	pdf.AddPage()

	profileData := getProfileData(opts.Lang)

	// Modern header with blue background
	pdf.SetFillColor(0, 102, 204)
	pdf.Rect(0, 0, 210, 45, "F")
	pdf.SetY(10)
	pdf.SetFont("Helvetica", "B", 18)
	pdf.SetTextColor(255, 255, 255)
	pdf.CellFormat(0, 8, profileData.Name, "", 1, "C", false, 0, "")
	pdf.SetFont("Helvetica", "", 13)
	pdf.CellFormat(0, 7, profileData.Title, "", 1, "C", false, 0, "")
	pdf.SetFont("Helvetica", "", 10)
	contactLine := data.ContactData.Email + " | " + data.ContactData.SocialMedia.LinkedIn + " | " + data.ContactData.SocialMedia.Github
	pdf.CellFormat(0, 6, contactLine, "", 1, "C", false, 0, "")
	pdf.SetY(50)

	// Card-style summary
	pdf.SetFillColor(255, 255, 255)
	pdf.Rect(15, 50, 180, 30, "F")
	pdf.SetFont("Helvetica", "B", 13)
	pdf.SetTextColor(0, 102, 204)
	pdf.CellFormat(0, 7, localizedText(opts.Lang, "Professional Summary", "プロフェッショナルサマリー"), "", 1, "", false, 0, "")
	pdf.SetFont("Helvetica", "", 11)
	pdf.SetTextColor(51, 51, 51)
	pdf.MultiCell(0, 5, profileData.Summary, "", "", false)
	pdf.Ln(6)

	// Experience highlights
	experiences := getExperience(opts.Lang)
	pdf.SetFont("Helvetica", "B", 13)
	pdf.SetTextColor(0, 102, 204)
	pdf.CellFormat(0, 7, localizedText(opts.Lang, "Experience Highlights", "経験ハイライト"), "", 1, "", false, 0, "")
	pdf.Ln(2)
	limit := 2
	if len(experiences) < limit {
		limit = len(experiences)
	}
	for _, exp := range experiences[:limit] {
		// Left border accent
		x := pdf.GetX()
		y := pdf.GetY()
		pdf.SetDrawColor(0, 102, 204)
		pdf.SetLineWidth(1)
		pdf.Line(x, y, x, y+20)
		pdf.SetX(x + 5)
		pdf.SetFont("Helvetica", "B", 12)
		pdf.SetTextColor(51, 51, 51)
		pdf.CellFormat(0, 6, exp.Role+" @ "+exp.Company, "", 1, "", false, 0, "")
		pdf.SetX(x + 5)
		pdf.SetFont("Helvetica", "", 10)
		pdf.SetTextColor(102, 102, 102)
		pdf.CellFormat(0, 5, exp.Period, "", 1, "", false, 0, "")
		pdf.SetX(x + 5)
		desc := ""
		for _, d := range exp.Description {
			desc += d + "\n"
		}
		if len(desc) > 100 {
			desc = desc[:100] + "..."
		}
		pdf.SetFont("Helvetica", "", 10)
		pdf.SetTextColor(85, 85, 85)
		pdf.MultiCell(170, 4, desc, "", "", false)
		pdf.Ln(4)
	}

	// Skills with tags
	pdf.SetFont("Helvetica", "B", 13)
	pdf.SetTextColor(0, 102, 204)
	pdf.CellFormat(0, 7, localizedText(opts.Lang, "Technical Expertise", "技術的専門知識"), "", 1, "", false, 0, "")
	pdf.Ln(2)
	currentCategory := ""
	for _, skill := range data.Skills {
		if skill.Category != currentCategory {
			currentCategory = skill.Category
			pdf.SetFont("Helvetica", "B", 11)
			pdf.SetTextColor(0, 102, 204)
			pdf.CellFormat(0, 5, currentCategory, "", 1, "", false, 0, "")
		}
		pdf.SetFont("Helvetica", "", 10)
		pdf.SetTextColor(85, 85, 85)
		pdf.CellFormat(0, 4, "  "+skill.Name, "", 1, "", false, 0, "")
	}

	return pdfToBytes(pdf)
}
