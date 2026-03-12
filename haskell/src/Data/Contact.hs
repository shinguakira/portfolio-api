module Data.Contact where

import Model.Contact (Contact(..), SocialMedia(..), ContactResponseInfo(..))

contactData :: Contact
contactData = Contact
  { ctEmail = "shinguakira1022@gmail.com"
  , ctPhone = "+81 XX-XXXX-XXXX"
  , ctAddress = "Tokyo, Japan"
  , ctSocialMedia = SocialMedia
      { smLinkedin = "https://linkedin.com/in/shinguakira"
      , smGithub = "https://github.com/shinguakira"
      }
  , ctPreferredMethod = "email"
  , ctAvailableFor =
      [ "Full-time opportunities"
      , "Freelance projects"
      , "Technical consulting"
      , "Speaking engagements"
      ]
  , ctResponse = ContactResponseInfo
      { criTimeFrame = "48 hours"
      , criLanguages = ["English", "Japanese"]
      }
  }
