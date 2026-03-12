module Model.Profile where

import Data.Aeson (ToJSON(..), object, (.=))
import Data.Text (Text)
import GHC.Generics (Generic)

data SocialLink = SocialLink
  { slPlatform :: Text
  , slUrl      :: Text
  , slIcon     :: Text
  } deriving (Show, Generic)

instance ToJSON SocialLink where
  toJSON sl = object
    [ "platform" .= slPlatform sl
    , "url"      .= slUrl sl
    , "icon"     .= slIcon sl
    ]

data ProfileResponse = ProfileResponse
  { prName        :: Text
  , prLocation    :: Text
  , prAvatarUrl   :: Text
  , prSocialLinks :: [SocialLink]
  , prTitle       :: Text
  , prSummary     :: Text
  , prBio         :: Text
  } deriving (Show, Generic)

instance ToJSON ProfileResponse where
  toJSON pr = object
    [ "name"        .= prName pr
    , "location"    .= prLocation pr
    , "avatarUrl"   .= prAvatarUrl pr
    , "socialLinks" .= prSocialLinks pr
    , "title"       .= prTitle pr
    , "summary"     .= prSummary pr
    , "bio"         .= prBio pr
    ]
