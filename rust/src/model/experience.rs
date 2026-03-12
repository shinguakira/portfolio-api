use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct WorkExperience {
    pub company: String,
    pub project_overview: String,
    pub period: String,
    #[serde(skip_serializing_if = "String::is_empty")]
    pub team_size: String,
    pub role: String,
    pub man_month: String,
    pub description: Vec<String>,
    pub archivement: Vec<String>,
    pub technologies: Vec<String>,
}
