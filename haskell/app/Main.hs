module Main where

import System.Environment (lookupEnv)
import Web.Scotty (scotty)
import Network.Wai.Middleware.Cors (simpleCorsResourcePolicy, cors, corsRequestHeaders, corsMethods, corsOrigins, CorsResourcePolicy(..))
import Network.HTTP.Types.Method (methodGet, methodPost, methodPut, methodDelete, methodOptions)

import Handler.Portfolio (routes)

main :: IO ()
main = do
    portStr <- lookupEnv "PORT"
    let port = maybe 3007 read portStr :: Int
    putStrLn $ "Portfolio API Server (Haskell) running on port " ++ show port
    putStrLn $ "Local: http://localhost:" ++ show port
    putStrLn $ "Health: http://localhost:" ++ show port ++ "/health"
    scotty port $ do
        middleware corsMiddleware
        routes
  where
    corsMiddleware = cors $ const $ Just CorsResourcePolicy
        { corsOrigins = Nothing -- Allow all origins
        , corsMethods = [methodGet, methodPost, methodPut, methodDelete, methodOptions]
        , corsRequestHeaders = ["Content-Type", "Authorization"]
        , corsExposedHeaders = Nothing
        , corsMaxAge = Just 86400
        , corsVaryOrigin = False
        , corsRequireOrigin = False
        , corsIgnoreFailures = False
        }
