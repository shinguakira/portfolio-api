pub mod data;
pub mod handler;
pub mod model;
pub mod service;

use actix_web::{web, App};

pub fn create_app() -> App<
    impl actix_web::dev::ServiceFactory<
        actix_web::dev::ServiceRequest,
        Config = (),
        Response = actix_web::dev::ServiceResponse,
        Error = actix_web::Error,
        InitError = (),
    >,
> {
    App::new()
        .route("/health", web::get().to(handler::portfolio::health))
        .route("/", web::get().to(handler::portfolio::root))
        .service(
            web::scope("/api")
                .route("/profile", web::get().to(handler::portfolio::get_profile))
                .route("/experience", web::get().to(handler::portfolio::get_experience))
                .route("/projects", web::get().to(handler::portfolio::get_projects))
                .route("/skills", web::get().to(handler::portfolio::get_skills))
                .route("/other-skills", web::get().to(handler::portfolio::get_other_skills))
                .route("/education", web::get().to(handler::portfolio::get_education))
                .route("/contact", web::get().to(handler::portfolio::get_contact))
                .route("/certifications", web::get().to(handler::portfolio::get_certifications))
                .route("/changelogs", web::get().to(handler::portfolio::get_changelogs))
                .route("/faqs", web::get().to(handler::portfolio::get_faqs))
                .route("/links", web::get().to(handler::portfolio::get_links))
                .route("/strong-points", web::get().to(handler::portfolio::get_strong_points))
                .route("/download-pdf", web::get().to(handler::portfolio::download_pdf)),
        )
}
