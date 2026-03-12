module Model.Contact where

import Data.Aeson (ToJSON(..), object, (.=))
import Data.Text (Text)
import GHC.Generics (Generic)

data SocialMedia = SocialMedia
  { smLinkedin :: Text
  , smGithub   :: Text
  } deriving (Show, Generic)

instance ToJSON SocialMedia where
  toJSON sm = object
    [ "linkedin" .= smLinkedin sm
    , "github"   .= smGithub sm
    ]

data ContactResponseInfo = ContactResponseInfo
  { criTimeFrame :: Text
  , criLanguages :: [Text]
  } deriving (Show, Generic)

instance ToJSON ContactResponseInfo where
  toJSON cri = object
    [ "timeFrame" .= criTimeFrame cri
    , "languages" .= criLanguages cri
    ]

data Contact = Contact
  { ctEmail           :: Text
  , ctPhone           :: Text
  , ctAddress         :: Text
  , ctSocialMedia     :: SocialMedia
  , ctPreferredMethod :: Text
  , ctAvailableFor    :: [Text]
  , ctResponse        :: ContactResponseInfo
  } deriving (Show, Generic)

instance ToJSON Contact where
  toJSON ct = object
    [ "email"           .= ctEmail ct
    , "phone"           .= ctPhone ct
    , "address"         .= ctAddress ct
    , "socialMedia"     .= ctSocialMedia ct
    , "preferredMethod" .= ctPreferredMethod ct
    , "availableFor"    .= ctAvailableFor ct
    , "response"        .= ctResponse ct
    ]
