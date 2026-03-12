use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone)]
pub struct SocialMedia {
    pub linkedin: String,
    pub github: String,
}

#[derive(Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct ContactResponseInfo {
    pub time_frame: String,
    pub languages: Vec<String>,
}

#[derive(Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Contact {
    pub email: String,
    pub phone: String,
    pub address: String,
    pub social_media: SocialMedia,
    pub preferred_method: String,
    pub available_for: Vec<String>,
    pub response: ContactResponseInfo,
}
