module Data.Profile where

import Model.Profile (ProfileResponse(..), SocialLink(..))

profileJA :: ProfileResponse
profileJA = ProfileResponse
  { prName = "Web Dev"
  , prLocation = "Tokyo, Japan"
  , prAvatarUrl = "https://example.com/avatar.jpg"
  , prSocialLinks =
      [ SocialLink { slPlatform = "GitHub", slUrl = "https://github.com/shinguakira", slIcon = "github" }
      ]
  , prTitle = "フルスタックエンジニア"
  , prSummary = "React/TypeScript/Next.jsを中心としたWeb開発に従事するフルスタックエンジニア。"
  , prBio = "Turning Vision Into Reality With Code And Design."
  }

profileEN :: ProfileResponse
profileEN = ProfileResponse
  { prName = "Web Dev"
  , prLocation = "Tokyo, Japan"
  , prAvatarUrl = "https://example.com/avatar.jpg"
  , prSocialLinks =
      [ SocialLink { slPlatform = "GitHub", slUrl = "https://github.com/shinguakira", slIcon = "github" }
      ]
  , prTitle = "Full Stack Developer"
  , prSummary = "Full stack developer working primarily with React, TypeScript, and Next.js for web development."
  , prBio = "Turning Vision Into Reality With Code And Design."
  }
