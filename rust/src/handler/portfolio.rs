use actix_web::{web, HttpRequest, HttpResponse};
use chrono::Utc;
use serde::{Deserialize, Serialize};

use crate::data;
use crate::model::response::ApiResponse;
use crate::service::pdf::{generate_portfolio_pdf, PDFOptions};

#[derive(Deserialize)]
pub struct LangQuery {
    lang: Option<String>,
}

#[derive(Deserialize)]
pub struct PdfQuery {
    lang: Option<String>,
    format: Option<String>,
    projects: Option<String>,
    experience: Option<String>,
    certifications: Option<String>,
    education: Option<String>,
}

#[derive(Serialize)]
struct HealthResponse {
    status: String,
    timestamp: String,
}

#[derive(Serialize)]
struct EndpointInfo {
    path: String,
    description: String,
}

#[derive(Serialize)]
struct RootResponse {
    message: String,
    version: String,
    endpoints: Vec<EndpointInfo>,
}

pub async fn health() -> HttpResponse {
    let now = Utc::now();
    HttpResponse::Ok().json(HealthResponse {
        status: "OK".to_string(),
        timestamp: now.format("%Y-%m-%dT%H:%M:%S%.9fZ").to_string(),
    })
}

pub async fn root() -> HttpResponse {
    HttpResponse::Ok().json(RootResponse {
        message: "Welcome to Portfolio API".to_string(),
        version: "1.0.0".to_string(),
        endpoints: vec![
            EndpointInfo { path: "/health".to_string(), description: "Health check endpoint".to_string() },
            EndpointInfo { path: "/api/profile".to_string(), description: "Get profile information".to_string() },
            EndpointInfo { path: "/api/skills".to_string(), description: "Get skills information".to_string() },
            EndpointInfo { path: "/api/projects".to_string(), description: "Get projects information".to_string() },
            EndpointInfo { path: "/api/experience".to_string(), description: "Get work experience information".to_string() },
            EndpointInfo { path: "/api/education".to_string(), description: "Get education history".to_string() },
            EndpointInfo { path: "/api/certifications".to_string(), description: "Get certification information".to_string() },
            EndpointInfo { path: "/api/faqs".to_string(), description: "Get FAQs".to_string() },
            EndpointInfo { path: "/api/links".to_string(), description: "Get important links".to_string() },
            EndpointInfo { path: "/api/strong-points".to_string(), description: "Get strong points information".to_string() },
            EndpointInfo { path: "/api/changelogs".to_string(), description: "Get changelog history".to_string() },
            EndpointInfo { path: "/api/download-pdf".to_string(), description: "Download portfolio as PDF (query: lang=en|ja, format=standard|compact|executive|technical|academic|modern, projects=true|false, experience=true|false, certifications=true|false, education=true|false)".to_string() },
        ],
    })
}

pub async fn get_profile(query: web::Query<LangQuery>) -> HttpResponse {
    let profile_data = if query.lang.as_deref() == Some("en") {
        data::profile::PROFILE_EN.clone()
    } else {
        data::profile::PROFILE_JA.clone()
    };
    HttpResponse::Ok().json(ApiResponse {
        message: "Profile data fetched successfully".to_string(),
        data: profile_data,
    })
}

pub async fn get_experience(query: web::Query<LangQuery>) -> HttpResponse {
    let experiences = if query.lang.as_deref() == Some("en") {
        data::experience::WORK_EXPERIENCES_EN.clone()
    } else {
        data::experience::WORK_EXPERIENCES_JA.clone()
    };
    HttpResponse::Ok().json(ApiResponse {
        message: "Experience data fetched successfully".to_string(),
        data: experiences,
    })
}

pub async fn get_projects(query: web::Query<LangQuery>) -> HttpResponse {
    let projects = if query.lang.as_deref() == Some("en") {
        data::project::PROJECTS_EN.clone()
    } else {
        data::project::PROJECTS_JA.clone()
    };
    HttpResponse::Ok().json(ApiResponse {
        message: "Projects data fetched successfully".to_string(),
        data: projects,
    })
}

pub async fn get_skills() -> HttpResponse {
    HttpResponse::Ok().json(ApiResponse {
        message: "Skills data fetched successfully".to_string(),
        data: data::skill::SKILLS.clone(),
    })
}

pub async fn get_other_skills() -> HttpResponse {
    HttpResponse::Ok().json(ApiResponse {
        message: "Other skills data fetched successfully".to_string(),
        data: data::skill::OTHER_SKILLS.clone(),
    })
}

pub async fn get_education(query: web::Query<LangQuery>) -> HttpResponse {
    let education = if query.lang.as_deref() == Some("en") {
        data::education::EDUCATION_EN.clone()
    } else {
        data::education::EDUCATION_JA.clone()
    };
    HttpResponse::Ok().json(ApiResponse {
        message: "Education data fetched successfully".to_string(),
        data: education,
    })
}

pub async fn get_contact() -> HttpResponse {
    HttpResponse::Ok().json(ApiResponse {
        message: "Contact data fetched successfully".to_string(),
        data: data::contact::CONTACT_DATA.clone(),
    })
}

pub async fn get_certifications(query: web::Query<LangQuery>) -> HttpResponse {
    let certs = if query.lang.as_deref() == Some("en") {
        data::certification::CERTIFICATIONS_EN.clone()
    } else {
        data::certification::CERTIFICATIONS_JA.clone()
    };
    HttpResponse::Ok().json(ApiResponse {
        message: "Certifications data fetched successfully".to_string(),
        data: certs,
    })
}

pub async fn get_changelogs(query: web::Query<LangQuery>) -> HttpResponse {
    let changelogs = if query.lang.as_deref() == Some("en") {
        data::changelog::CHANGELOGS_EN.clone()
    } else {
        data::changelog::CHANGELOGS_JA.clone()
    };
    HttpResponse::Ok().json(ApiResponse {
        message: "Changelogs data fetched successfully".to_string(),
        data: changelogs,
    })
}

pub async fn get_faqs(query: web::Query<LangQuery>) -> HttpResponse {
    let faqs = if query.lang.as_deref() == Some("en") {
        data::faq::FAQS_EN.clone()
    } else {
        data::faq::FAQS_JA.clone()
    };
    HttpResponse::Ok().json(ApiResponse {
        message: "FAQs data fetched successfully".to_string(),
        data: faqs,
    })
}

pub async fn get_links() -> HttpResponse {
    HttpResponse::Ok().json(ApiResponse {
        message: "Links data fetched successfully".to_string(),
        data: data::links::LINKS_DATA.clone(),
    })
}

pub async fn get_strong_points(query: web::Query<LangQuery>) -> HttpResponse {
    let strong_points = if query.lang.as_deref() == Some("en") {
        data::strong_point::STRONG_POINTS_EN.clone()
    } else {
        data::strong_point::STRONG_POINTS_JA.clone()
    };
    HttpResponse::Ok().json(ApiResponse {
        message: "Strong points data fetched successfully".to_string(),
        data: strong_points,
    })
}

pub async fn download_pdf(query: web::Query<PdfQuery>, _req: HttpRequest) -> HttpResponse {
    let lang = query.lang.clone().unwrap_or_else(|| "en".to_string());
    let format = query.format.clone().unwrap_or_else(|| "standard".to_string());
    let include_projects = query.projects.as_deref() != Some("false");
    let include_experience = query.experience.as_deref() != Some("false");
    let include_certifications = query.certifications.as_deref() != Some("false");
    let include_education = query.education.as_deref() != Some("false");

    let opts = PDFOptions {
        lang: lang.clone(),
        format,
        include_projects,
        include_experience,
        include_certifications,
        include_education,
    };

    match generate_portfolio_pdf(opts) {
        Ok(pdf_bytes) => {
            let lang_label = if lang == "en" { "english" } else { "japanese" };
            let date = Utc::now().format("%Y-%m-%d").to_string();
            let filename = format!("portfolio_{}_{}.pdf", lang_label, date);

            HttpResponse::Ok()
                .content_type("application/pdf")
                .insert_header(("Content-Disposition", format!("attachment; filename=\"{}\"", filename)))
                .insert_header(("Content-Length", pdf_bytes.len().to_string()))
                .body(pdf_bytes)
        }
        Err(_) => {
            HttpResponse::InternalServerError().json(ApiResponse {
                message: "Error generating portfolio PDF".to_string(),
                data: serde_json::Value::Null,
            })
        }
    }
}
