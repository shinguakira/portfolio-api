module Model.Faq where

import Data.Aeson (ToJSON(..), object, (.=))
import Data.Text (Text)
import GHC.Generics (Generic)

data Faq = Faq
  { faqQuestion :: Text
  , faqAnswer   :: Text
  , faqSize     :: Text
  , faqCategory :: Text
  } deriving (Show, Generic)

instance ToJSON Faq where
  toJSON f = object
    [ "question" .= faqQuestion f
    , "answer"   .= faqAnswer f
    , "size"     .= faqSize f
    , "category" .= faqCategory f
    ]
