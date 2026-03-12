module Model.Project where

import Data.Aeson (ToJSON(..), object, (.=))
import Data.Text (Text)
import GHC.Generics (Generic)

data Project = Project
  { projTitle        :: Text
  , projDescription  :: Text
  , projImage        :: Text
  , projTechnologies :: [Text]
  , projGithubUrl    :: Text
  , projLiveUrl      :: Text
  } deriving (Show, Generic)

instance ToJSON Project where
  toJSON p = object
    [ "title"        .= projTitle p
    , "description"  .= projDescription p
    , "image"        .= projImage p
    , "technologies" .= projTechnologies p
    , "githubUrl"    .= projGithubUrl p
    , "liveUrl"      .= projLiveUrl p
    ]
