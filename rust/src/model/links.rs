use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Links {
    pub creadly_link: String,
    pub restaurant_around_station_link: String,
    pub advanced_search_youtube_link: String,
}
