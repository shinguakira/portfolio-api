use lazy_static::lazy_static;
use crate::model::profile::{ProfileResponse, SocialLink};

lazy_static! {
    pub static ref PROFILE_JA: ProfileResponse = ProfileResponse {
        name: "Web Dev".to_string(),
        location: "Tokyo, Japan".to_string(),
        avatar_url: "https://example.com/avatar.jpg".to_string(),
        social_links: vec![
            SocialLink { platform: "GitHub".to_string(), url: "https://github.com/shinguakira".to_string(), icon: "github".to_string() },
        ],
        title: "フルスタックエンジニア".to_string(),
        summary: "React/TypeScript/Next.jsを中心としたWeb開発に従事するフルスタックエンジニア。".to_string(),
        bio: "Turning Vision Into Reality With Code And Design.".to_string(),
    };

    pub static ref PROFILE_EN: ProfileResponse = ProfileResponse {
        name: "Web Dev".to_string(),
        location: "Tokyo, Japan".to_string(),
        avatar_url: "https://example.com/avatar.jpg".to_string(),
        social_links: vec![
            SocialLink { platform: "GitHub".to_string(), url: "https://github.com/shinguakira".to_string(), icon: "github".to_string() },
        ],
        title: "Full Stack Developer".to_string(),
        summary: "Full stack developer working primarily with React, TypeScript, and Next.js for web development.".to_string(),
        bio: "Turning Vision Into Reality With Code And Design.".to_string(),
    };
}
