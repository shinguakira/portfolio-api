module Model.Links where

import Data.Aeson (ToJSON(..), object, (.=))
import Data.Text (Text)
import GHC.Generics (Generic)

data Links = Links
  { lnCreadlyLink                :: Text
  , lnRestaurantAroundStationLink :: Text
  , lnAdvancedSearchYoutubeLink  :: Text
  } deriving (Show, Generic)

instance ToJSON Links where
  toJSON ln = object
    [ "creadlyLink"                .= lnCreadlyLink ln
    , "restaurantAroundStationLink" .= lnRestaurantAroundStationLink ln
    , "advancedSearchYoutubeLink"  .= lnAdvancedSearchYoutubeLink ln
    ]
