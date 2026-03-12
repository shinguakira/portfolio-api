module Model.StrongPoint where

import Data.Aeson (ToJSON(..), object, (.=))
import Data.Text (Text)
import GHC.Generics (Generic)

data StrongPoint = StrongPoint
  { spSize     :: Text
  , spQuestion :: Text
  , spAnswer   :: Text
  } deriving (Show, Generic)

instance ToJSON StrongPoint where
  toJSON sp = object
    [ "size"     .= spSize sp
    , "question" .= spQuestion sp
    , "answer"   .= spAnswer sp
    ]
