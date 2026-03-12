use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone)]
pub struct Faq {
    pub question: String,
    pub answer: String,
    pub size: String,
    pub category: String,
}
