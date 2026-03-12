module Main where

import Test.Hspec
import Test.Hspec.Wai
import Network.HTTP.Types (status200)
import Network.Wai (Application)
import Web.Scotty (scottyApp)
import Data.Aeson (Value(..), decode)
import qualified Data.ByteString.Lazy as BL
import qualified Data.HashMap.Strict as HM

import Handler.Portfolio (routes)

app :: IO Application
app = scottyApp routes

main :: IO ()
main = hspec spec

spec :: Spec
spec = with app $ do

  describe "GET /health" $ do
    it "returns 200" $ do
      get "/health" `shouldRespondWith` 200

    it "returns JSON with status OK" $ do
      resp <- get "/health"
      liftIO $ do
        let body = simpleBody resp
        case decode body :: Maybe Value of
          Just (Object obj) -> do
            HM.lookup "status" obj `shouldBe` Just (String "OK")
          _ -> expectationFailure "Expected JSON object with status field"

  describe "GET /" $ do
    it "returns 200" $ do
      get "/" `shouldRespondWith` 200

    it "returns JSON with endpoints array" $ do
      resp <- get "/"
      liftIO $ do
        let body = simpleBody resp
        case decode body :: Maybe Value of
          Just (Object obj) -> do
            case HM.lookup "endpoints" obj of
              Just (Array _) -> return ()
              _ -> expectationFailure "Expected endpoints array"
          _ -> expectationFailure "Expected JSON object"

  describe "GET /api/profile" $ do
    it "returns 200 with default lang" $ do
      get "/api/profile" `shouldRespondWith` 200

    it "returns 200 with lang=en" $ do
      get "/api/profile?lang=en" `shouldRespondWith` 200

    it "returns 200 with lang=ja" $ do
      get "/api/profile?lang=ja" `shouldRespondWith` 200

    it "returns correct message" $ do
      resp <- get "/api/profile"
      liftIO $ do
        let body = simpleBody resp
        case decode body :: Maybe Value of
          Just (Object obj) ->
            HM.lookup "message" obj `shouldBe` Just (String "Profile data fetched successfully")
          _ -> expectationFailure "Expected JSON object"

  describe "GET /api/experience" $ do
    it "returns 200" $ do
      get "/api/experience" `shouldRespondWith` 200

    it "returns correct message" $ do
      resp <- get "/api/experience"
      liftIO $ do
        let body = simpleBody resp
        case decode body :: Maybe Value of
          Just (Object obj) ->
            HM.lookup "message" obj `shouldBe` Just (String "Experience data fetched successfully")
          _ -> expectationFailure "Expected JSON object"

  describe "GET /api/projects" $ do
    it "returns 200" $ do
      get "/api/projects" `shouldRespondWith` 200

  describe "GET /api/skills" $ do
    it "returns 200" $ do
      get "/api/skills" `shouldRespondWith` 200

    it "returns correct message" $ do
      resp <- get "/api/skills"
      liftIO $ do
        let body = simpleBody resp
        case decode body :: Maybe Value of
          Just (Object obj) ->
            HM.lookup "message" obj `shouldBe` Just (String "Skills data fetched successfully")
          _ -> expectationFailure "Expected JSON object"

  describe "GET /api/other-skills" $ do
    it "returns 200" $ do
      get "/api/other-skills" `shouldRespondWith` 200

  describe "GET /api/education" $ do
    it "returns 200" $ do
      get "/api/education" `shouldRespondWith` 200

  describe "GET /api/contact" $ do
    it "returns 200" $ do
      get "/api/contact" `shouldRespondWith` 200

  describe "GET /api/certifications" $ do
    it "returns 200" $ do
      get "/api/certifications" `shouldRespondWith` 200

  describe "GET /api/changelogs" $ do
    it "returns 200" $ do
      get "/api/changelogs" `shouldRespondWith` 200

  describe "GET /api/faqs" $ do
    it "returns 200" $ do
      get "/api/faqs" `shouldRespondWith` 200

  describe "GET /api/links" $ do
    it "returns 200" $ do
      get "/api/links" `shouldRespondWith` 200

  describe "GET /api/strong-points" $ do
    it "returns 200" $ do
      get "/api/strong-points" `shouldRespondWith` 200

  describe "GET /api/download-pdf" $ do
    it "returns 200 with default format" $ do
      get "/api/download-pdf" `shouldRespondWith` 200

    it "returns PDF content-type" $ do
      resp <- get "/api/download-pdf"
      liftIO $ do
        let headers = simpleHeaders resp
        lookup "Content-Type" headers `shouldBe` Just "application/pdf"

    it "returns non-empty body" $ do
      resp <- get "/api/download-pdf"
      liftIO $ do
        BL.length (simpleBody resp) `shouldSatisfy` (> 0)

    it "returns valid PDF (magic bytes)" $ do
      resp <- get "/api/download-pdf"
      liftIO $ do
        let body = simpleBody resp
        BL.take 4 body `shouldBe` "%PDF"

    it "supports all PDF formats" $ do
      mapM_ (\fmt -> do
        let url = "/api/download-pdf?format=" <> fmt
        get url `shouldRespondWith` 200
        ) ["standard", "compact", "executive", "technical", "academic", "modern"]

    it "supports section filters" $ do
      get "/api/download-pdf?projects=false&experience=false" `shouldRespondWith` 200

  describe "Content-Type" $ do
    it "returns application/json for JSON endpoints" $ do
      resp <- get "/api/profile"
      liftIO $ do
        let headers = simpleHeaders resp
            contentType = lookup "Content-Type" headers
        case contentType of
          Just ct -> ct `shouldSatisfy` (\x -> "application/json" `BL.isPrefixOf` BL.fromStrict x)
          Nothing -> expectationFailure "Missing Content-Type header"
