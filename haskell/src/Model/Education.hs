module Model.Education where

import Data.Aeson (ToJSON(..), object, (.=))
import Data.Text (Text)
import GHC.Generics (Generic)

data EducationHistory = EducationHistory
  { eduStartYear   :: Text
  , eduEndYear     :: Text
  , eduSchool      :: Text
  , eduDepartment  :: Text
  , eduDescription :: Text
  } deriving (Show, Generic)

instance ToJSON EducationHistory where
  toJSON e = object
    [ "startYear"   .= eduStartYear e
    , "endYear"     .= eduEndYear e
    , "school"      .= eduSchool e
    , "department"  .= eduDepartment e
    , "description" .= eduDescription e
    ]
