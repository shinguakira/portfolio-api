use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct CertificationItem {
    pub id: i32,
    pub name: String,
    pub organization: String,
    pub date: String,
    pub verify_link: String,
}
