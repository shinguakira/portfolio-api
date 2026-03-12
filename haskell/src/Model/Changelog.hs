module Model.Changelog where

import Data.Aeson (ToJSON(..), object, (.=))
import Data.Text (Text)
import GHC.Generics (Generic)

data ChangelogChange = ChangelogChange
  { ccType        :: Text
  , ccDescription :: Text
  } deriving (Show, Generic)

instance ToJSON ChangelogChange where
  toJSON cc = object
    [ "type"        .= ccType cc
    , "description" .= ccDescription cc
    ]

data ChangelogItem = ChangelogItem
  { clVersion :: Text
  , clDate    :: Text
  , clChanges :: [ChangelogChange]
  } deriving (Show, Generic)

instance ToJSON ChangelogItem where
  toJSON cl = object
    [ "version" .= clVersion cl
    , "date"    .= clDate cl
    , "changes" .= clChanges cl
    ]
