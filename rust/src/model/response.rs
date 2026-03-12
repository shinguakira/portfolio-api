use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone)]
pub struct ApiResponse<T: Serialize> {
    pub message: String,
    pub data: T,
}
