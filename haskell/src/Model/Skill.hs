module Model.Skill where

import Data.Aeson (ToJSON(..), object, (.=), Value(Null))
import Data.Maybe (catMaybes)
import Data.Text (Text)
import GHC.Generics (Generic)

data SkillItem = SkillItem
  { skName         :: Text
  , skCategory     :: Text
  , skYears        :: Text
  , skProficiency  :: Maybe Text
  , skPicture      :: Maybe Text
  , skPictureColor :: Maybe Text
  } deriving (Show, Generic)

instance ToJSON SkillItem where
  toJSON sk = object $ baseFields ++ optionalFields
    where
      baseFields =
        [ "name"     .= skName sk
        , "category" .= skCategory sk
        , "years"    .= skYears sk
        ]
      optionalFields = catMaybes
        [ fmap (\v -> "proficiency"  .= v) (skProficiency sk)
        , fmap (\v -> "picture"      .= v) (skPicture sk)
        , fmap (\v -> "pictureColor" .= v) (skPictureColor sk)
        ]
