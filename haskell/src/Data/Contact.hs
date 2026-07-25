{-# LANGUAGE OverloadedStrings #-}

module Data.Contact where

import Model.Contact (Contact(..), SocialMedia(..), ContactResponseInfo(..))

contactData :: Contact
contactData =
  Contact
      { ctEmail = "user@example.com"
      , ctPhone = "+81 XX-XXXX-XXXX"
      , ctAddress = "Tokyo, Japan"
      , ctSocialMedia = SocialMedia { smLinkedin = "", smGithub = "https://github.com/shinguakira" }
      , ctPreferredMethod = "email"
      , ctAvailableFor = ["Full-time opportunities", "Freelance projects", "Technical consulting", "Speaking engagements"]
      , ctResponse = ContactResponseInfo { criTimeFrame = "48 hours", criLanguages = ["English", "Japanese"] }
      }
