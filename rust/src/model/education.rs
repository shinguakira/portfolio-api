use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct EducationHistory {
    pub start_year: String,
    pub end_year: String,
    pub school: String,
    pub department: String,
    pub description: String,
}
