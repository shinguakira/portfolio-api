use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone)]
pub struct SocialLink {
    pub platform: String,
    pub url: String,
    pub icon: String,
}

#[derive(Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct ProfileResponse {
    pub name: String,
    pub location: String,
    pub avatar_url: String,
    pub social_links: Vec<SocialLink>,
    pub title: String,
    pub summary: String,
    pub bio: String,
}
