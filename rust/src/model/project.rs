use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Project {
    pub title: String,
    pub description: String,
    pub image: String,
    pub technologies: Vec<String>,
    pub github_url: String,
    pub live_url: String,
}
