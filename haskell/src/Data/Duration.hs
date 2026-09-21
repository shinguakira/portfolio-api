{-# LANGUAGE OverloadedStrings #-}

-- | Hand-written helper (NOT emitted by ts/src/scripts/generateBackends.ts).
--
-- Skill durations that grow with the calendar are stored in the generated data
-- as an @\@since:YYYY-MM@ marker rather than a value, so nothing here freezes a
-- computed duration. 'resolveDurations' renders those markers against the
-- current date and should be called per request.
module Data.Duration
  ( resolveDurations
  , resolveDurationsAt
  , resolveDurationsAtStartup
  ) where

import Data.Text (Text)
import qualified Data.Text as T
import Data.Time.Calendar (toGregorian)
import Data.Time.Clock (addUTCTime, getCurrentTime, utctDay)
import System.IO.Unsafe (unsafePerformIO)
import Text.Read (readMaybe)

import Model.Skill (SkillItem (..))

sincePrefix :: Text
sincePrefix = "@since:"

-- | Resolves every @\@since:@ marker against the current date. Use this from
-- request handlers so the duration follows the calendar even when the process
-- outlives a month boundary.
resolveDurations :: [SkillItem] -> IO [SkillItem]
resolveDurations items = flip resolveDurationsAt items <$> jstYearMonth

-- | Pure variant taking the (year, month) to count up to, for callers that
-- already know "now".
resolveDurationsAt :: (Int, Int) -> [SkillItem] -> [SkillItem]
resolveDurationsAt now =
  map (\item -> item {skYears = resolveDuration now (skYears item)})

-- | Escape hatch for the pure PDF builders, which have no IO to hang the clock
-- read on. The clock is read once per process, so a PDF rendered by a process
-- that has been running across a month boundary can report the previous
-- month's duration. Prefer 'resolveDurations' anywhere IO is available.
resolveDurationsAtStartup :: [SkillItem] -> [SkillItem]
resolveDurationsAtStartup = resolveDurationsAt startupYearMonth

startupYearMonth :: (Int, Int)
startupYearMonth = unsafePerformIO jstYearMonth
{-# NOINLINE startupYearMonth #-}

-- Asia/Tokyo is a fixed +09:00 offset with no DST, so shifting UTC is exact.
jstYearMonth :: IO (Int, Int)
jstYearMonth = do
  now <- getCurrentTime
  let (y, m, _) = toGregorian (utctDay (addUTCTime (9 * 3600) now))
  pure (fromIntegral y, m)

-- | Renders @\@since:YYYY-MM@ as the whole months elapsed until now, in the
-- same style as the fixed durations ("6 months", "1 year", "1 year 6 months").
-- Any other value is already fixed and passes through.
resolveDuration :: (Int, Int) -> Text -> Text
resolveDuration (nowYear, nowMonth) years =
  case T.stripPrefix sincePrefix years >>= parseSince of
    Nothing -> years
    Just (year, month) ->
      formatDuration ((nowYear - year) * 12 + (nowMonth - month))

parseSince :: Text -> Maybe (Int, Int)
parseSince value = case T.splitOn "-" value of
  [y, m] -> do
    year <- readMaybe (T.unpack y)
    month <- readMaybe (T.unpack m)
    if month >= 1 && month <= 12 then Just (year, month) else Nothing
  _ -> Nothing

formatDuration :: Int -> Text
formatDuration months
  | months < 1 = "less than a month"
  | years == 0 = plural rest "month"
  | rest == 0 = plural years "year"
  | otherwise = plural years "year" <> " " <> plural rest "month"
  where
    (years, rest) = months `divMod` 12

plural :: Int -> Text -> Text
plural n unit = T.pack (show n) <> " " <> unit <> (if n == 1 then "" else "s")
