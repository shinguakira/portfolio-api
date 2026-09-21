module Model.Experience where

import Data.Aeson (ToJSON(..), object, (.=), Value(Null))
import Data.Text (Text)
import qualified Data.Text as T
import GHC.Generics (Generic)

data WorkExperience = WorkExperience
  { weCompany         :: Text
  , weProjectOverview :: Text
  , wePeriod          :: Text
  , weStartDate       :: Text
  , weEndDate         :: Text
  , weTeamSize        :: Text
  , weRole            :: Text
  , weManMonth        :: Text
  , weDescription     :: [Text]
  , weArchivement     :: [Text]
  , weTechnologies    :: [Text]
  } deriving (Show, Generic)

instance ToJSON WorkExperience where
  toJSON we = object $ baseFields ++ endDateField ++ teamSizeField
    where
      baseFields =
        [ "company"         .= weCompany we
        , "projectOverview" .= weProjectOverview we
        , "period"          .= wePeriod we
        , "startDate"       .= weStartDate we
        , "role"            .= weRole we
        , "manMonth"        .= weManMonth we
        , "description"     .= weDescription we
        , "archivement"     .= weArchivement we
        , "technologies"    .= weTechnologies we
        ]
      endDateField =
        if T.null (weEndDate we)
          then []
          else ["endDate" .= weEndDate we]
      teamSizeField =
        if T.null (weTeamSize we)
          then []
          else ["teamSize" .= weTeamSize we]
