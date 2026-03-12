use actix_cors::Cors;
use actix_web::{web, App, HttpServer, middleware};
use std::env;

use portfolio_api_rust::handler;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    env_logger::init();

    let port = env::var("PORT").unwrap_or_else(|_| "3006".to_string());
    let bind_addr = format!("0.0.0.0:{}", port);

    println!("Portfolio API Server (Rust) running on port {}", port);
    println!("Local: http://localhost:{}", port);
    println!("Health: http://localhost:{}/health", port);

    HttpServer::new(|| {
        let cors = Cors::default()
            .allow_any_origin()
            .allowed_methods(vec!["GET", "POST", "PUT", "DELETE", "OPTIONS"])
            .allowed_headers(vec!["Content-Type", "Authorization"])
            .supports_credentials()
            .max_age(86400);

        App::new()
            .wrap(middleware::Logger::default())
            .wrap(cors)
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
    })
    .bind(&bind_addr)?
    .run()
    .await
}
