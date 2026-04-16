use lazy_static::lazy_static;
use crate::model::contact::{Contact, ContactResponseInfo, SocialMedia};

lazy_static! {
    pub static ref CONTACT_DATA: Contact = Contact {
        email: "user@example.com".to_string(),
        phone: "+81 XX-XXXX-XXXX".to_string(),
        address: "Tokyo, Japan".to_string(),
        social_media: SocialMedia {
            github: "https://github.com/shinguakira".to_string(),
        },
        preferred_method: "email".to_string(),
        available_for: vec![
            "Full-time opportunities".to_string(),
            "Freelance projects".to_string(),
            "Technical consulting".to_string(),
            "Speaking engagements".to_string(),
        ],
        response: ContactResponseInfo {
            time_frame: "48 hours".to_string(),
            languages: vec!["English".to_string(), "Japanese".to_string()],
        },
    };
}
