use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone)]
pub struct StrongPoint {
    pub size: String,
    pub question: String,
    pub answer: String,
}
