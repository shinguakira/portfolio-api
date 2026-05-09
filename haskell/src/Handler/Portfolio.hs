module Handler.Portfolio (routes) where

import Web.Scotty
import Data.Aeson (ToJSON(..), object, (.=), Value)
import qualified Data.Text as T
import qualified Data.Text.Lazy as TL
import Data.Text (Text)
import qualified Data.ByteString.Lazy as BL
import Data.Time.Clock (getCurrentTime)
import Data.Time.Format (formatTime, defaultTimeLocale)
import Network.HTTP.Types.Status (status200, status500)
import Network.HTTP.Types.Header (hContentType)

import Model.Response (ApiResponse(..))
import qualified Data.Profile as Profile
import qualified Data.Experience as Experience
import qualified Data.Project as Project
import qualified Data.Skill as Skill
import qualified Data.Education as Education
import qualified Data.Contact as Contact
import qualified Data.Certification as Certification
import qualified Data.Changelog as Changelog
import qualified Data.Faq as Faq
import qualified Data.Links as Links
import qualified Data.StrongPoint as StrongPoint
import Service.Pdf (generatePortfolioPdf, PDFOptions(..))

routes :: ScottyM ()
routes = do
  get "/health" healthHandler
  get "/" rootHandler
  get "/api/profile" getProfile
  get "/api/experience" getExperience
  get "/api/projects" getProjects
  get "/api/skills" getSkills
  get "/api/other-skills" getOtherSkills
  get "/api/education" getEducation
  get "/api/contact" getContact
  get "/api/certifications" getCertifications
  get "/api/changelogs" getChangelogs
  get "/api/faqs" getFaqs
  get "/api/links" getLinks
  get "/api/strong-points" getStrongPoints
  get "/api/download-pdf" downloadPdf

getLang :: ActionM Text
getLang = do
  lang <- queryParam "lang" `rescue` (\_ -> return ("" :: TL.Text))
  return $ TL.toStrict lang

healthHandler :: ActionM ()
healthHandler = do
  now <- liftIO getCurrentTime
  let ts = T.pack $ formatTime defaultTimeLocale "%Y-%m-%dT%H:%M:%S.%qZ" now
  json $ object
    [ "status" .= ("OK" :: Text)
    , "timestamp" .= ts
    ]

rootHandler :: ActionM ()
rootHandler = do
  json $ object
    [ "message" .= ("Welcome to Portfolio API" :: Text)
    , "version" .= ("1.0.0" :: Text)
    , "endpoints" .= (
        [ object ["path" .= ("/health" :: Text), "description" .= ("Health check endpoint" :: Text)]
        , object ["path" .= ("/api/profile" :: Text), "description" .= ("Get profile information" :: Text)]
        , object ["path" .= ("/api/skills" :: Text), "description" .= ("Get skills information" :: Text)]
        , object ["path" .= ("/api/projects" :: Text), "description" .= ("Get projects information" :: Text)]
        , object ["path" .= ("/api/experience" :: Text), "description" .= ("Get work experience information" :: Text)]
        , object ["path" .= ("/api/education" :: Text), "description" .= ("Get education history" :: Text)]
        , object ["path" .= ("/api/certifications" :: Text), "description" .= ("Get certification information" :: Text)]
        , object ["path" .= ("/api/faqs" :: Text), "description" .= ("Get FAQs" :: Text)]
        , object ["path" .= ("/api/links" :: Text), "description" .= ("Get important links" :: Text)]
        , object ["path" .= ("/api/strong-points" :: Text), "description" .= ("Get strong points information" :: Text)]
        , object ["path" .= ("/api/changelogs" :: Text), "description" .= ("Get changelog history" :: Text)]
        , object ["path" .= ("/api/download-pdf" :: Text), "description" .= ("Download portfolio as PDF (query: lang=en|ja, format=standard|compact|executive|technical|academic|modern, projects=true|false, experience=true|false, certifications=true|false, education=true|false)" :: Text)]
        ] :: [Value])
    ]

getProfile :: ActionM ()
getProfile = do
  lang <- getLang
  let profileData = if lang == "en" then Profile.profileEN else Profile.profileJA
  json $ ApiResponse "Profile data fetched successfully" profileData

getExperience :: ActionM ()
getExperience = do
  lang <- getLang
  let expData = if lang == "en" then Experience.workExperiencesEN else Experience.workExperiencesJA
  json $ ApiResponse "Experience data fetched successfully" expData

getProjects :: ActionM ()
getProjects = do
  lang <- getLang
  let projData = if lang == "en" then Project.projectsEN else Project.projectsJA
  json $ ApiResponse "Projects data fetched successfully" projData

getSkills :: ActionM ()
getSkills = do
  json $ ApiResponse "Skills data fetched successfully" Skill.skills

getOtherSkills :: ActionM ()
getOtherSkills = do
  json $ ApiResponse "Other skills data fetched successfully" Skill.otherSkills

getEducation :: ActionM ()
getEducation = do
  lang <- getLang
  let eduData = if lang == "en" then Education.educationEN else Education.educationJA
  json $ ApiResponse "Education data fetched successfully" eduData

getContact :: ActionM ()
getContact = do
  json $ ApiResponse "Contact data fetched successfully" Contact.contactData

getCertifications :: ActionM ()
getCertifications = do
  lang <- getLang
  let certData = if lang == "en" then Certification.certificationsEN else Certification.certificationsJA
  json $ ApiResponse "Certifications data fetched successfully" certData

getChangelogs :: ActionM ()
getChangelogs = do
  lang <- getLang
  let clData = if lang == "en" then Changelog.changelogsEN else Changelog.changelogsJA
  json $ ApiResponse "Changelogs data fetched successfully" clData

getFaqs :: ActionM ()
getFaqs = do
  lang <- getLang
  let faqData = if lang == "en" then Faq.faqsEN else Faq.faqsJA
  json $ ApiResponse "FAQs data fetched successfully" faqData

getLinks :: ActionM ()
getLinks = do
  json $ ApiResponse "Links data fetched successfully" Links.linksData

getStrongPoints :: ActionM ()
getStrongPoints = do
  lang <- getLang
  let spData = if lang == "en" then StrongPoint.strongPointsEN else StrongPoint.strongPointsJA
  json $ ApiResponse "Strong points data fetched successfully" spData

downloadPdf :: ActionM ()
downloadPdf = do
  langParam <- queryParam "lang" `rescue` (\_ -> return ("en" :: TL.Text))
  formatParam <- queryParam "format" `rescue` (\_ -> return ("standard" :: TL.Text))
  projectsParam <- queryParam "projects" `rescue` (\_ -> return ("" :: TL.Text))
  experienceParam <- queryParam "experience" `rescue` (\_ -> return ("" :: TL.Text))
  certificationsParam <- queryParam "certifications" `rescue` (\_ -> return ("" :: TL.Text))
  educationParam <- queryParam "education" `rescue` (\_ -> return ("" :: TL.Text))

  let lang = TL.toStrict langParam
      fmt = TL.toStrict formatParam
      inclProjects = projectsParam /= "false"
      inclExperience = experienceParam /= "false"
      inclCertifications = certificationsParam /= "false"
      inclEducation = educationParam /= "false"

  let opts = PDFOptions
        { pdfLang = lang
        , pdfFormat = fmt
        , includeProjects = inclProjects
        , includeExperience = inclExperience
        , includeCertifications = inclCertifications
        , includeEducation = inclEducation
        }

  now <- liftIO getCurrentTime
  let dateStr = T.pack $ formatTime defaultTimeLocale "%Y-%m-%d" now
      langLabel = if lang == "en" then "english" :: Text else "japanese"
      filename = "portfolio_" <> langLabel <> "_" <> dateStr <> ".pdf"

  case generatePortfolioPdf opts of
    Right pdfBytes -> do
      setHeader "Content-Type" "application/pdf"
      setHeader "Content-Disposition" $ TL.fromStrict $ "attachment; filename=\"" <> filename <> "\""
      setHeader "Content-Length" $ TL.pack $ show (BL.length pdfBytes)
      raw pdfBytes
    Left err -> do
      status status500
      json $ object ["error" .= (T.pack $ show err :: Text)]
