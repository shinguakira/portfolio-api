module Model.Response where

import Data.Aeson (ToJSON(..), object, (.=))
import Data.Text (Text)
import GHC.Generics (Generic)

data ApiResponse a = ApiResponse
  { apiMessage :: Text
  , apiData    :: a
  } deriving (Show, Generic)

instance (ToJSON a) => ToJSON (ApiResponse a) where
  toJSON (ApiResponse msg d) = object
    [ "message" .= msg
    , "data"    .= d
    ]
