use actix_web::test;
use actix_web::http::StatusCode;
use serde_json::Value;

use portfolio_api_rust::create_app;

#[actix_rt::test]
async fn test_health_endpoint() {
    let app = test::init_service(create_app()).await;
    let req = test::TestRequest::get().uri("/health").to_request();
    let resp = test::call_service(&app, req).await;

    assert_eq!(resp.status(), StatusCode::OK);

    let body: Value = test::read_body_json(resp).await;
    assert_eq!(body["status"], "OK");
    assert!(body["timestamp"].is_string());
}

#[actix_rt::test]
async fn test_root_endpoint() {
    let app = test::init_service(create_app()).await;
    let req = test::TestRequest::get().uri("/").to_request();
    let resp = test::call_service(&app, req).await;

    assert_eq!(resp.status(), StatusCode::OK);

    let body: Value = test::read_body_json(resp).await;
    assert_eq!(body["message"], "Welcome to Portfolio API");
    assert!(body["endpoints"].is_array());
    assert!(body["endpoints"].as_array().unwrap().len() > 0);
}

#[actix_rt::test]
async fn test_profile_endpoint_default() {
    let app = test::init_service(create_app()).await;
    let req = test::TestRequest::get().uri("/api/profile").to_request();
    let resp = test::call_service(&app, req).await;

    assert_eq!(resp.status(), StatusCode::OK);

    let body: Value = test::read_body_json(resp).await;
    assert_eq!(body["message"], "Profile data fetched successfully");
    assert_eq!(body["data"]["name"], "Web Dev");
    assert!(body["data"]["title"].is_string());
    assert!(!body["data"]["title"].as_str().unwrap().is_empty());
    assert!(body["data"]["summary"].is_string());
    assert!(!body["data"]["summary"].as_str().unwrap().is_empty());
}

#[actix_rt::test]
async fn test_profile_endpoint_en() {
    let app = test::init_service(create_app()).await;
    let req = test::TestRequest::get().uri("/api/profile?lang=en").to_request();
    let resp = test::call_service(&app, req).await;

    assert_eq!(resp.status(), StatusCode::OK);

    let body: Value = test::read_body_json(resp).await;
    assert_eq!(body["message"], "Profile data fetched successfully");
    assert_eq!(body["data"]["name"], "Web Dev");
}

#[actix_rt::test]
async fn test_profile_endpoint_ja() {
    let app = test::init_service(create_app()).await;
    let req = test::TestRequest::get().uri("/api/profile?lang=ja").to_request();
    let resp = test::call_service(&app, req).await;

    assert_eq!(resp.status(), StatusCode::OK);

    let body: Value = test::read_body_json(resp).await;
    assert_eq!(body["message"], "Profile data fetched successfully");
    assert_eq!(body["data"]["name"], "Web Dev");
}

#[actix_rt::test]
async fn test_experience_endpoint() {
    let app = test::init_service(create_app()).await;

    for lang_param in &["", "?lang=ja", "?lang=en"] {
        let uri = format!("/api/experience{}", lang_param);
        let req = test::TestRequest::get().uri(&uri).to_request();
        let resp = test::call_service(&app, req).await;

        assert_eq!(resp.status(), StatusCode::OK);

        let body: Value = test::read_body_json(resp).await;
        assert_eq!(body["message"], "Experience data fetched successfully");
        let data = body["data"].as_array().unwrap();
        assert!(data.len() > 0);
    }
}

#[actix_rt::test]
async fn test_projects_endpoint() {
    let app = test::init_service(create_app()).await;

    for lang_param in &["", "?lang=ja", "?lang=en"] {
        let uri = format!("/api/projects{}", lang_param);
        let req = test::TestRequest::get().uri(&uri).to_request();
        let resp = test::call_service(&app, req).await;

        assert_eq!(resp.status(), StatusCode::OK);

        let body: Value = test::read_body_json(resp).await;
        assert_eq!(body["message"], "Projects data fetched successfully");
        let data = body["data"].as_array().unwrap();
        assert!(data.len() > 0);
        for proj in data {
            assert!(!proj["title"].as_str().unwrap().is_empty());
            assert!(!proj["description"].as_str().unwrap().is_empty());
        }
    }
}

#[actix_rt::test]
async fn test_skills_endpoint() {
    let app = test::init_service(create_app()).await;
    let req = test::TestRequest::get().uri("/api/skills").to_request();
    let resp = test::call_service(&app, req).await;

    assert_eq!(resp.status(), StatusCode::OK);

    let body: Value = test::read_body_json(resp).await;
    assert_eq!(body["message"], "Skills data fetched successfully");
    let data = body["data"].as_array().unwrap();
    assert!(data.len() > 0);
    for skill in data {
        assert!(!skill["name"].as_str().unwrap().is_empty());
        assert!(!skill["category"].as_str().unwrap().is_empty());
    }
}

#[actix_rt::test]
async fn test_other_skills_endpoint() {
    let app = test::init_service(create_app()).await;
    let req = test::TestRequest::get().uri("/api/other-skills").to_request();
    let resp = test::call_service(&app, req).await;

    assert_eq!(resp.status(), StatusCode::OK);

    let body: Value = test::read_body_json(resp).await;
    assert_eq!(body["message"], "Other skills data fetched successfully");
    let data = body["data"].as_array().unwrap();
    assert!(data.len() > 0);
}

#[actix_rt::test]
async fn test_education_endpoint() {
    let app = test::init_service(create_app()).await;

    for lang_param in &["", "?lang=ja", "?lang=en"] {
        let uri = format!("/api/education{}", lang_param);
        let req = test::TestRequest::get().uri(&uri).to_request();
        let resp = test::call_service(&app, req).await;

        assert_eq!(resp.status(), StatusCode::OK);

        let body: Value = test::read_body_json(resp).await;
        assert_eq!(body["message"], "Education data fetched successfully");
        let data = body["data"].as_array().unwrap();
        assert!(data.len() > 0);
        for edu in data {
            assert!(!edu["school"].as_str().unwrap().is_empty());
        }
    }
}

#[actix_rt::test]
async fn test_contact_endpoint() {
    let app = test::init_service(create_app()).await;
    let req = test::TestRequest::get().uri("/api/contact").to_request();
    let resp = test::call_service(&app, req).await;

    assert_eq!(resp.status(), StatusCode::OK);

    let body: Value = test::read_body_json(resp).await;
    assert_eq!(body["message"], "Contact data fetched successfully");
    assert!(!body["data"]["email"].as_str().unwrap().is_empty());
    assert!(!body["data"]["address"].as_str().unwrap().is_empty());
    assert!(!body["data"]["socialMedia"]["github"].as_str().unwrap().is_empty());
    assert!(body["data"]["availableFor"].as_array().unwrap().len() > 0);
}

#[actix_rt::test]
async fn test_certifications_endpoint() {
    let app = test::init_service(create_app()).await;

    for lang_param in &["", "?lang=ja", "?lang=en"] {
        let uri = format!("/api/certifications{}", lang_param);
        let req = test::TestRequest::get().uri(&uri).to_request();
        let resp = test::call_service(&app, req).await;

        assert_eq!(resp.status(), StatusCode::OK);

        let body: Value = test::read_body_json(resp).await;
        assert_eq!(body["message"], "Certifications data fetched successfully");
        let data = body["data"].as_array().unwrap();
        assert!(data.len() > 0);
        for cert in data {
            assert!(!cert["name"].as_str().unwrap().is_empty());
        }
    }
}

#[actix_rt::test]
async fn test_changelogs_endpoint() {
    let app = test::init_service(create_app()).await;

    for lang_param in &["", "?lang=ja", "?lang=en"] {
        let uri = format!("/api/changelogs{}", lang_param);
        let req = test::TestRequest::get().uri(&uri).to_request();
        let resp = test::call_service(&app, req).await;

        assert_eq!(resp.status(), StatusCode::OK);

        let body: Value = test::read_body_json(resp).await;
        assert_eq!(body["message"], "Changelogs data fetched successfully");
        let data = body["data"].as_array().unwrap();
        assert!(data.len() > 0);
        for cl in data {
            assert!(!cl["version"].as_str().unwrap().is_empty());
            assert!(!cl["date"].as_str().unwrap().is_empty());
            assert!(cl["changes"].as_array().unwrap().len() > 0);
        }
    }
}

#[actix_rt::test]
async fn test_faqs_endpoint() {
    let app = test::init_service(create_app()).await;

    for lang_param in &["", "?lang=ja", "?lang=en"] {
        let uri = format!("/api/faqs{}", lang_param);
        let req = test::TestRequest::get().uri(&uri).to_request();
        let resp = test::call_service(&app, req).await;

        assert_eq!(resp.status(), StatusCode::OK);

        let body: Value = test::read_body_json(resp).await;
        assert_eq!(body["message"], "FAQs data fetched successfully");
        let data = body["data"].as_array().unwrap();
        assert!(data.len() > 0);
        for faq in data {
            assert!(!faq["question"].as_str().unwrap().is_empty());
            assert!(!faq["answer"].as_str().unwrap().is_empty());
        }
    }
}

#[actix_rt::test]
async fn test_links_endpoint() {
    let app = test::init_service(create_app()).await;
    let req = test::TestRequest::get().uri("/api/links").to_request();
    let resp = test::call_service(&app, req).await;

    assert_eq!(resp.status(), StatusCode::OK);

    let body: Value = test::read_body_json(resp).await;
    assert_eq!(body["message"], "Links data fetched successfully");
    assert!(!body["data"]["creadlyLink"].as_str().unwrap().is_empty());
}

#[actix_rt::test]
async fn test_strong_points_endpoint() {
    let app = test::init_service(create_app()).await;

    for lang_param in &["", "?lang=ja", "?lang=en"] {
        let uri = format!("/api/strong-points{}", lang_param);
        let req = test::TestRequest::get().uri(&uri).to_request();
        let resp = test::call_service(&app, req).await;

        assert_eq!(resp.status(), StatusCode::OK);

        let body: Value = test::read_body_json(resp).await;
        assert_eq!(body["message"], "Strong points data fetched successfully");
        let data = body["data"].as_array().unwrap();
        assert!(data.len() > 0);
        for sp in data {
            assert!(!sp["question"].as_str().unwrap().is_empty());
            assert!(!sp["answer"].as_str().unwrap().is_empty());
        }
    }
}

#[actix_rt::test]
async fn test_download_pdf_default() {
    let app = test::init_service(create_app()).await;
    let req = test::TestRequest::get().uri("/api/download-pdf").to_request();
    let resp = test::call_service(&app, req).await;

    assert_eq!(resp.status(), StatusCode::OK);
    assert_eq!(resp.headers().get("Content-Type").unwrap(), "application/pdf");
    assert!(resp.headers().get("Content-Disposition").is_some());

    let body = test::read_body(resp).await;
    assert!(body.len() > 0);
    // Check PDF magic bytes
    assert!(body.len() >= 4);
    assert_eq!(&body[..4], b"%PDF");
}

#[actix_rt::test]
async fn test_download_pdf_formats() {
    let app = test::init_service(create_app()).await;

    let formats = vec![
        ("standard", "?lang=en"),
        ("compact", "?lang=en&format=compact"),
        ("executive", "?lang=en&format=executive"),
        ("technical", "?lang=en&format=technical"),
        ("academic", "?lang=en&format=academic"),
        ("modern", "?lang=en&format=modern"),
        ("japanese_standard", "?lang=ja"),
    ];

    for (name, query) in formats {
        let uri = format!("/api/download-pdf{}", query);
        let req = test::TestRequest::get().uri(&uri).to_request();
        let resp = test::call_service(&app, req).await;

        assert_eq!(resp.status(), StatusCode::OK, "Failed for format: {}", name);
        assert_eq!(
            resp.headers().get("Content-Type").unwrap(),
            "application/pdf",
            "Wrong Content-Type for format: {}", name
        );

        let body = test::read_body(resp).await;
        assert!(body.len() > 0, "Empty body for format: {}", name);
        assert_eq!(&body[..4], b"%PDF", "Not a valid PDF for format: {}", name);
    }
}

#[actix_rt::test]
async fn test_download_pdf_with_section_filters() {
    let app = test::init_service(create_app()).await;
    let req = test::TestRequest::get()
        .uri("/api/download-pdf?lang=en&projects=false&experience=false&certifications=false&education=false")
        .to_request();
    let resp = test::call_service(&app, req).await;

    assert_eq!(resp.status(), StatusCode::OK);
    assert_eq!(resp.headers().get("Content-Type").unwrap(), "application/pdf");
}

#[actix_rt::test]
async fn test_content_type_json() {
    let app = test::init_service(create_app()).await;

    let endpoints = vec![
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
    ];

    for endpoint in endpoints {
        let req = test::TestRequest::get().uri(endpoint).to_request();
        let resp = test::call_service(&app, req).await;

        assert_eq!(resp.status(), StatusCode::OK, "Failed for endpoint: {}", endpoint);
        let ct = resp.headers().get("Content-Type").unwrap().to_str().unwrap();
        assert!(
            ct.contains("application/json"),
            "Expected application/json for {}, got {}", endpoint, ct
        );
    }
}
