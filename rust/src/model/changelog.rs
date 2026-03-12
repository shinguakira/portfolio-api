use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone)]
pub struct ChangelogChange {
    #[serde(rename = "type")]
    pub change_type: String,
    pub description: String,
}

#[derive(Serialize, Deserialize, Clone)]
pub struct ChangelogItem {
    pub version: String,
    pub date: String,
    pub changes: Vec<ChangelogChange>,
}
