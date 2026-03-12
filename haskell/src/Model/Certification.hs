module Model.Certification where

import Data.Aeson (ToJSON(..), object, (.=))
import Data.Text (Text)
import GHC.Generics (Generic)

data CertificationItem = CertificationItem
  { certId           :: Int
  , certName         :: Text
  , certOrganization :: Text
  , certDate         :: Text
  , certVerifyLink   :: Text
  } deriving (Show, Generic)

instance ToJSON CertificationItem where
  toJSON c = object
    [ "id"           .= certId c
    , "name"         .= certName c
    , "organization" .= certOrganization c
    , "date"         .= certDate c
    , "verifyLink"   .= certVerifyLink c
    ]
