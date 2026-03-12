use actix_cors::Cors;
use actix_web::{App, HttpServer, middleware};
use std::env;

use portfolio_api_rust::create_app;

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
            .max_age(86400);

        create_app()
            .wrap(middleware::Logger::default())
            .wrap(cors)
    })
    .bind(&bind_addr)?
    .run()
    .await
}
