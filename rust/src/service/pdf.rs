use printpdf::*;
use printpdf::path::PaintMode;

use crate::data;
use crate::model::certification::CertificationItem;
use crate::model::education::EducationHistory;
use crate::model::experience::WorkExperience;
use crate::model::profile::ProfileResponse;
use crate::model::project::Project;
use crate::model::skill::SkillItem;
use crate::model::strong_point::StrongPoint;

pub struct PDFOptions {
    pub lang: String,
    pub format: String,
    pub include_projects: bool,
    pub include_experience: bool,
    pub include_certifications: bool,
    pub include_education: bool,
}

pub fn generate_portfolio_pdf(opts: PDFOptions) -> Result<Vec<u8>, Box<dyn std::error::Error>> {
    match opts.format.as_str() {
        "compact" => create_compact_pdf(&opts),
        "executive" => create_executive_pdf(&opts),
        "technical" => create_technical_pdf(&opts),
        "academic" => create_academic_pdf(&opts),
        "modern" => create_modern_pdf(&opts),
        _ => create_standard_pdf(&opts),
    }
}

fn get_profile_data(lang: &str) -> ProfileResponse {
    if lang == "en" {
        data::profile::PROFILE_EN.clone()
    } else {
        data::profile::PROFILE_JA.clone()
    }
}

fn get_experience(lang: &str) -> Vec<WorkExperience> {
    if lang == "en" {
        data::experience::WORK_EXPERIENCES_EN.clone()
    } else {
        data::experience::WORK_EXPERIENCES_JA.clone()
    }
}

fn get_projects(lang: &str) -> Vec<Project> {
    if lang == "en" {
        data::project::PROJECTS_EN.clone()
    } else {
        data::project::PROJECTS_JA.clone()
    }
}

fn get_education(lang: &str) -> Vec<EducationHistory> {
    if lang == "en" {
        data::education::EDUCATION_EN.clone()
    } else {
        data::education::EDUCATION_JA.clone()
    }
}

fn get_certifications(lang: &str) -> Vec<CertificationItem> {
    if lang == "en" {
        data::certification::CERTIFICATIONS_EN.clone()
    } else {
        data::certification::CERTIFICATIONS_JA.clone()
    }
}

fn get_strong_points(lang: &str) -> Vec<StrongPoint> {
    if lang == "en" {
        data::strong_point::STRONG_POINTS_EN.clone()
    } else {
        data::strong_point::STRONG_POINTS_JA.clone()
    }
}

fn get_skills() -> Vec<SkillItem> {
    data::skill::SKILLS.clone()
}

fn localized_text<'a>(lang: &str, en: &'a str, ja: &'a str) -> &'a str {
    if lang == "en" { en } else { ja }
}

fn truncate_str(s: &str, max_chars: usize) -> &str {
    match s.char_indices().nth(max_chars) {
        Some((idx, _)) => &s[..idx],
        None => s,
    }
}

fn doc_to_bytes(doc: PdfDocumentReference) -> Result<Vec<u8>, Box<dyn std::error::Error>> {
    let bytes = doc.save_to_bytes()?;
    Ok(bytes)
}

// Helper to add text to a layer at a given position
fn add_text(
    layer: &PdfLayerReference,
    font: &IndirectFontRef,
    size: f32,
    x: f32,
    y: f32,
    text: &str,
) {
    layer.use_text(text, size, Mm(x), Mm(y), font);
}

// Standard format - 2 pages
fn create_standard_pdf(opts: &PDFOptions) -> Result<Vec<u8>, Box<dyn std::error::Error>> {
    let (doc, page1, layer1) = PdfDocument::new("Portfolio", Mm(210.0), Mm(297.0), "Layer 1");
    let font = doc.add_builtin_font(BuiltinFont::Helvetica)?;
    let font_bold = doc.add_builtin_font(BuiltinFont::HelveticaBold)?;

    let profile = get_profile_data(&opts.lang);
    let current_layer = doc.get_page(page1).get_layer(layer1);

    let mut y = 280.0;

    // Header
    add_text(&current_layer, &font_bold, 24.0, 15.0, y, &profile.name);
    y -= 10.0;
    add_text(&current_layer, &font, 16.0, 15.0, y, &profile.title);
    y -= 8.0;
    let contact_line = format!("{} | {} | {}",
        data::contact::CONTACT_DATA.email,
        data::contact::CONTACT_DATA.social_media.github,
        data::contact::CONTACT_DATA.address);
    add_text(&current_layer, &font, 10.0, 15.0, y, &contact_line);
    y -= 12.0;

    // Profile Summary
    add_text(&current_layer, &font_bold, 14.0, 15.0, y,
        localized_text(&opts.lang, "Profile Summary", "Profile Summary"));
    y -= 8.0;
    add_text(&current_layer, &font, 11.0, 15.0, y, &profile.summary);
    y -= 12.0;

    // Strong Points
    let strong_points = get_strong_points(&opts.lang);
    add_text(&current_layer, &font_bold, 14.0, 15.0, y,
        localized_text(&opts.lang, "Key Strengths", "Key Strengths"));
    y -= 8.0;
    for sp in &strong_points {
        if y < 20.0 { break; }
        add_text(&current_layer, &font_bold, 11.0, 15.0, y, &sp.question);
        y -= 6.0;
        // Truncate long answers for PDF
        let answer = truncate_str(&sp.answer, 100);
        add_text(&current_layer, &font, 10.0, 15.0, y, answer);
        y -= 8.0;
    }

    // Skills
    if y > 40.0 {
        add_text(&current_layer, &font_bold, 14.0, 15.0, y,
            localized_text(&opts.lang, "Technical Skills", "Technical Skills"));
        y -= 8.0;
        let skills = get_skills();
        for skill in &skills {
            if y < 20.0 { break; }
            let skill_text = format!("{} ({})", skill.name, skill.years);
            add_text(&current_layer, &font, 10.0, 15.0, y, &skill_text);
            y -= 5.0;
        }
    }

    // Experience
    if opts.include_experience {
        let experiences = get_experience(&opts.lang);
        if y > 40.0 {
            add_text(&current_layer, &font_bold, 14.0, 15.0, y,
                localized_text(&opts.lang, "Professional Experience", "Professional Experience"));
            y -= 8.0;
            let limit = std::cmp::min(2, experiences.len());
            for exp in &experiences[..limit] {
                if y < 20.0 { break; }
                let role_line = format!("{} at {}", exp.role, exp.company);
                add_text(&current_layer, &font_bold, 11.0, 15.0, y, &role_line);
                y -= 6.0;
                add_text(&current_layer, &font, 10.0, 15.0, y, &exp.period);
                y -= 6.0;
                add_text(&current_layer, &font, 10.0, 15.0, y, &exp.project_overview);
                y -= 8.0;
            }
        }
    }

    // Second page
    let (page2, layer2) = doc.add_page(Mm(210.0), Mm(297.0), "Layer 2");
    let current_layer2 = doc.get_page(page2).get_layer(layer2);
    y = 280.0;

    // Projects
    if opts.include_projects {
        let projects = get_projects(&opts.lang);
        add_text(&current_layer2, &font_bold, 14.0, 15.0, y,
            localized_text(&opts.lang, "Key Projects", "Key Projects"));
        y -= 8.0;
        let limit = std::cmp::min(4, projects.len());
        for proj in &projects[..limit] {
            if y < 20.0 { break; }
            add_text(&current_layer2, &font_bold, 11.0, 15.0, y, &proj.title);
            y -= 6.0;
            let desc = truncate_str(&proj.description, 120);
            add_text(&current_layer2, &font, 10.0, 15.0, y, desc);
            y -= 6.0;
            if !proj.technologies.is_empty() {
                let techs = proj.technologies.join(", ");
                let tech_text = format!("Technologies: {}", techs);
                add_text(&current_layer2, &font, 10.0, 15.0, y, &tech_text);
                y -= 8.0;
            }
        }
    }

    // Education
    if opts.include_education {
        let education = get_education(&opts.lang);
        add_text(&current_layer2, &font_bold, 14.0, 15.0, y,
            localized_text(&opts.lang, "Education", "Education"));
        y -= 8.0;
        for edu in &education {
            if y < 20.0 { break; }
            let school_line = format!("{} - {}", edu.school, edu.department);
            add_text(&current_layer2, &font_bold, 11.0, 15.0, y, &school_line);
            y -= 6.0;
            let period = format!("({} - {})", edu.start_year, edu.end_year);
            add_text(&current_layer2, &font, 10.0, 15.0, y, &period);
            y -= 6.0;
            add_text(&current_layer2, &font, 10.0, 15.0, y, &edu.description);
            y -= 8.0;
        }
    }

    // Certifications
    if opts.include_certifications {
        let certs = get_certifications(&opts.lang);
        add_text(&current_layer2, &font_bold, 14.0, 15.0, y,
            localized_text(&opts.lang, "Certifications", "Certifications"));
        y -= 8.0;
        for cert in &certs {
            if y < 20.0 { break; }
            add_text(&current_layer2, &font_bold, 11.0, 15.0, y, &cert.name);
            y -= 5.0;
            let org_date = format!("{} | {}", cert.organization, cert.date);
            add_text(&current_layer2, &font, 10.0, 15.0, y, &org_date);
            y -= 7.0;
        }
    }

    doc_to_bytes(doc)
}

// Compact format - single page
fn create_compact_pdf(opts: &PDFOptions) -> Result<Vec<u8>, Box<dyn std::error::Error>> {
    let (doc, page1, layer1) = PdfDocument::new("Portfolio Compact", Mm(210.0), Mm(297.0), "Layer 1");
    let font = doc.add_builtin_font(BuiltinFont::Helvetica)?;
    let font_bold = doc.add_builtin_font(BuiltinFont::HelveticaBold)?;

    let profile = get_profile_data(&opts.lang);
    let current_layer = doc.get_page(page1).get_layer(layer1);
    let mut y = 285.0;

    // Compact header
    add_text(&current_layer, &font_bold, 16.0, 15.0, y, &profile.name);
    y -= 7.0;
    add_text(&current_layer, &font, 12.0, 15.0, y, &profile.title);
    y -= 6.0;
    let contact_line = format!("{} | {} | {}",
        data::contact::CONTACT_DATA.email,
        data::contact::CONTACT_DATA.social_media.github,
        data::contact::CONTACT_DATA.social_media.linkedin);
    add_text(&current_layer, &font, 9.0, 15.0, y, &contact_line);
    y -= 8.0;

    // Summary (truncated to 200 chars)
    add_text(&current_layer, &font_bold, 12.0, 15.0, y,
        localized_text(&opts.lang, "Summary", "Summary"));
    y -= 6.0;
    let summary = if profile.summary.chars().count() > 200 {
        format!("{}...", truncate_str(&profile.summary, 200))
    } else {
        profile.summary.clone()
    };
    add_text(&current_layer, &font, 9.0, 15.0, y, &summary);
    y -= 10.0;

    // Experience
    if opts.include_experience {
        let experiences = get_experience(&opts.lang);
        add_text(&current_layer, &font_bold, 12.0, 15.0, y,
            localized_text(&opts.lang, "Experience", "Experience"));
        y -= 6.0;
        let limit = std::cmp::min(3, experiences.len());
        for exp in &experiences[..limit] {
            let line = format!("{} at {} ({})", exp.role, exp.company, exp.period);
            add_text(&current_layer, &font, 9.0, 15.0, y, &line);
            y -= 5.0;
        }
        y -= 4.0;
    }

    // Projects
    if opts.include_projects {
        let projects = get_projects(&opts.lang);
        add_text(&current_layer, &font_bold, 12.0, 15.0, y,
            localized_text(&opts.lang, "Key Projects", "Key Projects"));
        y -= 6.0;
        let limit = std::cmp::min(3, projects.len());
        for proj in &projects[..limit] {
            let tech_limit = std::cmp::min(3, proj.technologies.len());
            let techs = proj.technologies[..tech_limit].join(", ");
            let line = format!("{} - {}", proj.title, techs);
            add_text(&current_layer, &font, 9.0, 15.0, y, &line);
            y -= 5.0;
        }
        y -= 4.0;
    }

    // Certifications
    if opts.include_certifications {
        let certs = get_certifications(&opts.lang);
        add_text(&current_layer, &font_bold, 12.0, 15.0, y,
            localized_text(&opts.lang, "Certifications", "Certifications"));
        y -= 6.0;
        let limit = std::cmp::min(5, certs.len());
        for cert in &certs[..limit] {
            let line = format!("{} ({}, {})", cert.name, cert.organization, cert.date);
            add_text(&current_layer, &font, 9.0, 15.0, y, &line);
            y -= 5.0;
        }
    }

    doc_to_bytes(doc)
}

// Executive format
fn create_executive_pdf(opts: &PDFOptions) -> Result<Vec<u8>, Box<dyn std::error::Error>> {
    let (doc, page1, layer1) = PdfDocument::new("Portfolio Executive", Mm(210.0), Mm(297.0), "Layer 1");
    let font = doc.add_builtin_font(BuiltinFont::Helvetica)?;
    let font_bold = doc.add_builtin_font(BuiltinFont::HelveticaBold)?;

    let profile = get_profile_data(&opts.lang);
    let current_layer = doc.get_page(page1).get_layer(layer1);
    let mut y = 280.0;

    // Header
    add_text(&current_layer, &font_bold, 18.0, 15.0, y, &profile.name);
    y -= 8.0;
    add_text(&current_layer, &font_bold, 14.0, 15.0, y, &profile.title);
    y -= 7.0;
    let contact_line = format!("{} | {}",
        data::contact::CONTACT_DATA.email,
        data::contact::CONTACT_DATA.social_media.linkedin);
    add_text(&current_layer, &font, 11.0, 15.0, y, &contact_line);
    y -= 12.0;

    // Executive Summary
    add_text(&current_layer, &font_bold, 14.0, 15.0, y,
        localized_text(&opts.lang, "Executive Summary", "Executive Summary"));
    y -= 8.0;
    add_text(&current_layer, &font, 12.0, 15.0, y, &profile.summary);
    y -= 14.0;

    // Key Achievements
    let experiences = get_experience(&opts.lang);
    add_text(&current_layer, &font_bold, 14.0, 15.0, y,
        localized_text(&opts.lang, "Key Achievements", "Key Achievements"));
    y -= 8.0;
    let limit = std::cmp::min(2, experiences.len());
    for exp in &experiences[..limit] {
        if y < 20.0 { break; }
        let role_line = format!("{} - {}", exp.role, exp.company);
        add_text(&current_layer, &font_bold, 12.0, 15.0, y, &role_line);
        y -= 6.0;
        add_text(&current_layer, &font, 11.0, 15.0, y, &exp.period);
        y -= 6.0;
        let desc = exp.description.join("\n");
        let desc = if desc.chars().count() > 150 { format!("{}...", truncate_str(&desc, 150)) } else { desc };
        add_text(&current_layer, &font, 11.0, 15.0, y, &desc);
        y -= 10.0;
    }

    // Core Technologies
    add_text(&current_layer, &font_bold, 14.0, 15.0, y,
        localized_text(&opts.lang, "Core Technologies", "Core Technologies"));
    y -= 8.0;
    let skills = get_skills();
    for skill in &skills {
        if y < 20.0 { break; }
        let line = format!("{}: {}", skill.category, skill.name);
        add_text(&current_layer, &font, 11.0, 15.0, y, &line);
        y -= 5.0;
    }

    doc_to_bytes(doc)
}

// Technical format
fn create_technical_pdf(opts: &PDFOptions) -> Result<Vec<u8>, Box<dyn std::error::Error>> {
    let (doc, page1, layer1) = PdfDocument::new("Portfolio Technical", Mm(210.0), Mm(297.0), "Layer 1");
    let font = doc.add_builtin_font(BuiltinFont::Helvetica)?;
    let font_bold = doc.add_builtin_font(BuiltinFont::HelveticaBold)?;

    let profile = get_profile_data(&opts.lang);
    let current_layer = doc.get_page(page1).get_layer(layer1);
    let mut y = 280.0;

    // Header
    add_text(&current_layer, &font_bold, 24.0, 15.0, y, &profile.name);
    y -= 10.0;
    add_text(&current_layer, &font, 16.0, 15.0, y, &profile.title);
    y -= 8.0;
    let contact_line = format!("{} | {}",
        data::contact::CONTACT_DATA.email,
        data::contact::CONTACT_DATA.social_media.github);
    add_text(&current_layer, &font, 10.0, 15.0, y, &contact_line);
    y -= 10.0;

    // Technical Skills grouped by category
    add_text(&current_layer, &font_bold, 14.0, 15.0, y,
        localized_text(&opts.lang, "Technical Expertise", "Technical Expertise"));
    y -= 8.0;
    let skills = get_skills();
    let mut current_category = String::new();
    for skill in &skills {
        if y < 20.0 { break; }
        if skill.category != current_category {
            current_category = skill.category.clone();
            let cat_label = format!("{}:", current_category);
            add_text(&current_layer, &font_bold, 12.0, 15.0, y, &cat_label);
            y -= 6.0;
        }
        let skill_text = format!("  {} ({})", skill.name, skill.years);
        add_text(&current_layer, &font, 11.0, 15.0, y, &skill_text);
        y -= 5.0;
    }
    y -= 4.0;

    // Technical Projects
    let projects = get_projects(&opts.lang);
    add_text(&current_layer, &font_bold, 14.0, 15.0, y,
        localized_text(&opts.lang, "Technical Projects", "Technical Projects"));
    y -= 8.0;
    let limit = std::cmp::min(4, projects.len());
    for proj in &projects[..limit] {
        if y < 20.0 { break; }
        add_text(&current_layer, &font_bold, 12.0, 15.0, y, &proj.title);
        y -= 6.0;
        let techs = proj.technologies.join(", ");
        let tech_line = format!("Technologies: {}", techs);
        add_text(&current_layer, &font, 10.0, 15.0, y, &tech_line);
        y -= 5.0;
        let desc = if proj.description.chars().count() > 120 { format!("{}...", truncate_str(&proj.description, 120)) } else { proj.description.clone() };
        add_text(&current_layer, &font, 11.0, 15.0, y, &desc);
        y -= 8.0;
    }

    doc_to_bytes(doc)
}

// Academic format
fn create_academic_pdf(opts: &PDFOptions) -> Result<Vec<u8>, Box<dyn std::error::Error>> {
    let (doc, page1, layer1) = PdfDocument::new("Portfolio Academic", Mm(210.0), Mm(297.0), "Layer 1");
    let font = doc.add_builtin_font(BuiltinFont::Helvetica)?;
    let font_bold = doc.add_builtin_font(BuiltinFont::HelveticaBold)?;

    let profile = get_profile_data(&opts.lang);
    let current_layer = doc.get_page(page1).get_layer(layer1);
    let mut y = 280.0;

    // Header
    add_text(&current_layer, &font_bold, 24.0, 15.0, y, &profile.name);
    y -= 10.0;
    add_text(&current_layer, &font, 16.0, 15.0, y, &profile.title);
    y -= 8.0;
    add_text(&current_layer, &font, 10.0, 15.0, y, &data::contact::CONTACT_DATA.email);
    y -= 10.0;

    // Education first
    let education = get_education(&opts.lang);
    add_text(&current_layer, &font_bold, 14.0, 15.0, y,
        localized_text(&opts.lang, "Education", "Education"));
    y -= 8.0;
    for edu in &education {
        if y < 20.0 { break; }
        let school_line = format!("{} - {}", edu.school, edu.department);
        add_text(&current_layer, &font_bold, 12.0, 15.0, y, &school_line);
        y -= 6.0;
        let period = format!("({} - {})", edu.start_year, edu.end_year);
        add_text(&current_layer, &font, 11.0, 15.0, y, &period);
        y -= 6.0;
        if !edu.description.is_empty() {
            add_text(&current_layer, &font, 10.0, 15.0, y, &edu.description);
            y -= 8.0;
        }
    }

    // Certifications
    let certs = get_certifications(&opts.lang);
    add_text(&current_layer, &font_bold, 14.0, 15.0, y,
        localized_text(&opts.lang, "Certifications & Licenses", "Certifications & Licenses"));
    y -= 8.0;
    for cert in &certs {
        if y < 20.0 { break; }
        add_text(&current_layer, &font_bold, 12.0, 15.0, y, &cert.name);
        y -= 5.0;
        let org_date = format!("{} | {}", cert.organization, cert.date);
        add_text(&current_layer, &font, 11.0, 15.0, y, &org_date);
        y -= 7.0;
    }

    // Skills
    if y > 40.0 {
        add_text(&current_layer, &font_bold, 14.0, 15.0, y,
            localized_text(&opts.lang, "Technical Skills", "Technical Skills"));
        y -= 8.0;
        let skills = get_skills();
        for skill in &skills {
            if y < 20.0 { break; }
            let line = format!("{}: {}", skill.category, skill.name);
            add_text(&current_layer, &font, 11.0, 15.0, y, &line);
            y -= 5.0;
        }
    }

    doc_to_bytes(doc)
}

// Modern format
fn create_modern_pdf(opts: &PDFOptions) -> Result<Vec<u8>, Box<dyn std::error::Error>> {
    let (doc, page1, layer1) = PdfDocument::new("Portfolio Modern", Mm(210.0), Mm(297.0), "Layer 1");
    let font = doc.add_builtin_font(BuiltinFont::Helvetica)?;
    let font_bold = doc.add_builtin_font(BuiltinFont::HelveticaBold)?;

    let profile = get_profile_data(&opts.lang);
    let current_layer = doc.get_page(page1).get_layer(layer1);

    // Blue header banner
    current_layer.set_fill_color(Color::Rgb(Rgb::new(0.0, 0.4, 0.8, None)));
    let rect = Rect::new(Mm(0.0), Mm(252.0), Mm(210.0), Mm(297.0))
        .with_mode(PaintMode::Fill);
    current_layer.add_rect(rect);

    // Header text (white on blue)
    let mut y = 285.0;
    current_layer.set_fill_color(Color::Rgb(Rgb::new(1.0, 1.0, 1.0, None)));
    add_text(&current_layer, &font_bold, 18.0, 70.0, y, &profile.name);
    y -= 8.0;
    add_text(&current_layer, &font, 13.0, 60.0, y, &profile.title);
    y -= 7.0;
    let contact_line = format!("{} | {} | {}",
        data::contact::CONTACT_DATA.email,
        data::contact::CONTACT_DATA.social_media.linkedin,
        data::contact::CONTACT_DATA.social_media.github);
    add_text(&current_layer, &font, 10.0, 30.0, y, &contact_line);

    // Reset to black text
    current_layer.set_fill_color(Color::Rgb(Rgb::new(0.0, 0.0, 0.0, None)));
    y = 245.0;

    // Professional Summary
    add_text(&current_layer, &font_bold, 13.0, 15.0, y,
        localized_text(&opts.lang, "Professional Summary", "Professional Summary"));
    y -= 8.0;
    add_text(&current_layer, &font, 11.0, 15.0, y, &profile.summary);
    y -= 14.0;

    // Experience highlights
    let experiences = get_experience(&opts.lang);
    add_text(&current_layer, &font_bold, 13.0, 15.0, y,
        localized_text(&opts.lang, "Experience Highlights", "Experience Highlights"));
    y -= 8.0;
    let limit = std::cmp::min(2, experiences.len());
    for exp in &experiences[..limit] {
        if y < 20.0 { break; }
        let role_line = format!("{} @ {}", exp.role, exp.company);
        add_text(&current_layer, &font_bold, 12.0, 20.0, y, &role_line);
        y -= 6.0;
        add_text(&current_layer, &font, 10.0, 20.0, y, &exp.period);
        y -= 6.0;
        let desc = exp.description.join("\n");
        let desc = if desc.chars().count() > 100 { format!("{}...", truncate_str(&desc, 100)) } else { desc };
        add_text(&current_layer, &font, 10.0, 20.0, y, &desc);
        y -= 10.0;
    }

    // Skills with tags
    add_text(&current_layer, &font_bold, 13.0, 15.0, y,
        localized_text(&opts.lang, "Technical Expertise", "Technical Expertise"));
    y -= 8.0;
    let skills = get_skills();
    let mut current_category = String::new();
    for skill in &skills {
        if y < 20.0 { break; }
        if skill.category != current_category {
            current_category = skill.category.clone();
            add_text(&current_layer, &font_bold, 11.0, 15.0, y, &current_category);
            y -= 5.0;
        }
        let skill_name = format!("  {}", skill.name);
        add_text(&current_layer, &font, 10.0, 15.0, y, &skill_name);
        y -= 4.0;
    }

    doc_to_bytes(doc)
}
