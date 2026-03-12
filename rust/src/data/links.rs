use lazy_static::lazy_static;
use crate::model::links::Links;

lazy_static! {
    pub static ref LINKS_DATA: Links = Links {
        creadly_link: "https://www.credly.com/users/akira-shingu/badges".to_string(),
        restaurant_around_station_link: "https://restaurant-around-station.vercel.app/".to_string(),
        advanced_search_youtube_link: "https://advanced-search-youtube.vercel.app/".to_string(),
    };
}
