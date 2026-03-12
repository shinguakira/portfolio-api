module Service.Pdf
  ( generatePortfolioPdf
  , PDFOptions(..)
  ) where

import Data.Text (Text)
import qualified Data.Text as T
import qualified Data.ByteString.Lazy as BL
import Graphics.PDF

import Model.Profile (ProfileResponse(..))
import Model.Experience (WorkExperience(..))
import Model.Project (Project(..))
import Model.Skill (SkillItem(..))
import Model.Education (EducationHistory(..))
import Model.Certification (CertificationItem(..))
import Model.StrongPoint (StrongPoint(..))

import qualified Data.Profile as ProfileData
import qualified Data.Experience as ExperienceData
import qualified Data.Project as ProjectData
import qualified Data.Skill as SkillData
import qualified Data.Education as EducationData
import qualified Data.Certification as CertificationData
import qualified Data.Contact as ContactData
import qualified Data.StrongPoint as StrongPointData
import Model.Contact (Contact(..), SocialMedia(..))

data PDFOptions = PDFOptions
  { pdfLang              :: Text
  , pdfFormat            :: Text
  , includeProjects      :: Bool
  , includeExperience    :: Bool
  , includeCertifications :: Bool
  , includeEducation     :: Bool
  }

generatePortfolioPdf :: PDFOptions -> Either String BL.ByteString
generatePortfolioPdf opts =
  case pdfFormat opts of
    "compact"   -> createCompactPdf opts
    "executive" -> createExecutivePdf opts
    "technical" -> createTechnicalPdf opts
    "academic"  -> createAcademicPdf opts
    "modern"    -> createModernPdf opts
    _           -> createStandardPdf opts

-- Helper functions
getProfile :: Text -> ProfileResponse
getProfile lang = if lang == "en" then ProfileData.profileEN else ProfileData.profileJA

getExperiences :: Text -> [WorkExperience]
getExperiences lang = if lang == "en" then ExperienceData.workExperiencesEN else ExperienceData.workExperiencesJA

getProjects :: Text -> [Project]
getProjects lang = if lang == "en" then ProjectData.projectsEN else ProjectData.projectsJA

getEducations :: Text -> [EducationHistory]
getEducations lang = if lang == "en" then EducationData.educationEN else EducationData.educationJA

getCertifications :: Text -> [CertificationItem]
getCertifications lang = if lang == "en" then CertificationData.certificationsEN else CertificationData.certificationsJA

getStrongPoints :: Text -> [StrongPoint]
getStrongPoints lang = if lang == "en" then StrongPointData.strongPointsEN else StrongPointData.strongPointsJA

getSkills :: [SkillItem]
getSkills = SkillData.skills

getContactData :: Contact
getContactData = ContactData.contactData

truncateText :: Int -> Text -> Text
truncateText n t = if T.length t > n then T.take n t <> "..." else t

localizedText :: Text -> Text -> Text -> Text
localizedText lang en ja = if lang == "en" then en else ja

-- PDF generation helpers
a4Rect :: PDFRect
a4Rect = PDFRect 0 0 595.28 841.89  -- A4 in points

helvetica :: PDFFont
helvetica = PDFFont Helvetica 11

helveticaBold :: PDFFont
helveticaBold = PDFFont Helvetica_Bold 11

withFontSize :: Int -> PDFFont -> PDFFont
withFontSize sz (PDFFont f _) = PDFFont f sz

drawText :: PDFFont -> PDFFloat -> PDFFloat -> Text -> Draw ()
drawText font x y txt = do
  drawTextAt (x :+ y) $ do
    setFont font
    displayText (toPDFString $ T.unpack txt)

-- Standard format - 2 pages
createStandardPdf :: PDFOptions -> Either String BL.ByteString
createStandardPdf opts = Right $ pdfByteString standardDocInfo a4Rect $ do
  let profile = getProfile (pdfLang opts)
      contact = getContactData

  -- Page 1
  page1 <- addPage Nothing
  drawWithPage page1 $ do
    let y0 = 800.0
    -- Header
    drawText (withFontSize 24 helveticaBold) 15 y0 (prName profile)
    drawText (withFontSize 16 helvetica) 15 (y0 - 30) (prTitle profile)
    let contactLine = ctEmail contact <> " | " <> smGithub (ctSocialMedia contact) <> " | " <> ctAddress contact
    drawText (withFontSize 10 helvetica) 15 (y0 - 50) contactLine

    -- Profile Summary
    drawText (withFontSize 14 helveticaBold) 15 (y0 - 80) (localizedText (pdfLang opts) "Profile Summary" "Profile Summary")
    drawText (withFontSize 11 helvetica) 15 (y0 - 100) (prSummary profile)

    -- Strong Points
    let sps = getStrongPoints (pdfLang opts)
    drawText (withFontSize 14 helveticaBold) 15 (y0 - 130) (localizedText (pdfLang opts) "Key Strengths" "Key Strengths")
    mapM_ (\(i, sp) -> do
      let yp = y0 - 155 - fromIntegral (i * 40)
      drawText (withFontSize 11 helveticaBold) 15 yp (spQuestion sp)
      drawText (withFontSize 10 helvetica) 15 (yp - 15) (truncateText 100 $ spAnswer sp)
      ) (zip [0..2] sps)

    -- Skills
    drawText (withFontSize 14 helveticaBold) 15 (y0 - 290) (localizedText (pdfLang opts) "Technical Skills" "Technical Skills")
    let skills = getSkills
    mapM_ (\(i, sk) -> do
      let yp = y0 - 310 - fromIntegral (i * 15)
      drawText (withFontSize 10 helvetica) 15 yp (skName sk <> " (" <> skYears sk <> ")")
      ) (zip [0..min 15 (length skills - 1)] skills)

  -- Page 2
  page2 <- addPage Nothing
  drawWithPage page2 $ do
    let y0 = 800.0

    -- Projects
    when (includeProjects opts) $ do
      let projs = getProjects (pdfLang opts)
      drawText (withFontSize 14 helveticaBold) 15 y0 (localizedText (pdfLang opts) "Key Projects" "Key Projects")
      mapM_ (\(i, proj) -> do
        let yp = y0 - 25 - fromIntegral (i * 50)
        drawText (withFontSize 11 helveticaBold) 15 yp (projTitle proj)
        drawText (withFontSize 10 helvetica) 15 (yp - 15) (truncateText 120 $ projDescription proj)
        let techs = T.intercalate ", " (projTechnologies proj)
        drawText (withFontSize 10 helvetica) 15 (yp - 30) ("Technologies: " <> techs)
        ) (zip [0..min 3 (length projs - 1)] projs)

    -- Education
    when (includeEducation opts) $ do
      let edus = getEducations (pdfLang opts)
      drawText (withFontSize 14 helveticaBold) 15 (y0 - 230) (localizedText (pdfLang opts) "Education" "Education")
      mapM_ (\(i, edu) -> do
        let yp = y0 - 255 - fromIntegral (i * 50)
        drawText (withFontSize 11 helveticaBold) 15 yp (eduSchool edu <> " - " <> eduDepartment edu)
        drawText (withFontSize 10 helvetica) 15 (yp - 15) ("(" <> eduStartYear edu <> " - " <> eduEndYear edu <> ")")
        drawText (withFontSize 10 helvetica) 15 (yp - 30) (eduDescription edu)
        ) (zip [0..] edus)

    -- Certifications
    when (includeCertifications opts) $ do
      let certs = getCertifications (pdfLang opts)
      drawText (withFontSize 14 helveticaBold) 15 (y0 - 370) (localizedText (pdfLang opts) "Certifications" "Certifications")
      mapM_ (\(i, cert) -> do
        let yp = y0 - 395 - fromIntegral (i * 25)
        drawText (withFontSize 11 helveticaBold) 15 yp (certName cert)
        drawText (withFontSize 10 helvetica) 15 (yp - 12) (certOrganization cert <> " | " <> certDate cert)
        ) (zip [0..min 9 (length certs - 1)] certs)

  where
    standardDocInfo = standardDocumentInfo { author = toPDFString "Portfolio API", compressed = False }
    when True action = action
    when False _ = return ()

-- Compact format - single page
createCompactPdf :: PDFOptions -> Either String BL.ByteString
createCompactPdf opts = Right $ pdfByteString standardDocInfo a4Rect $ do
  let profile = getProfile (pdfLang opts)
      contact = getContactData

  page1 <- addPage Nothing
  drawWithPage page1 $ do
    let y0 = 810.0
    drawText (withFontSize 16 helveticaBold) 15 y0 (prName profile)
    drawText (withFontSize 12 helvetica) 15 (y0 - 20) (prTitle profile)
    let contactLine = ctEmail contact <> " | " <> smGithub (ctSocialMedia contact) <> " | " <> smLinkedin (ctSocialMedia contact)
    drawText (withFontSize 9 helvetica) 15 (y0 - 35) contactLine

    -- Summary
    drawText (withFontSize 12 helveticaBold) 15 (y0 - 60) (localizedText (pdfLang opts) "Summary" "Summary")
    drawText (withFontSize 9 helvetica) 15 (y0 - 75) (truncateText 200 $ prSummary profile)

    -- Experience
    let exps = getExperiences (pdfLang opts)
    drawText (withFontSize 12 helveticaBold) 15 (y0 - 105) (localizedText (pdfLang opts) "Experience" "Experience")
    mapM_ (\(i, ex) -> do
      let yp = y0 - 120 - fromIntegral (i * 15)
      drawText (withFontSize 9 helvetica) 15 yp (weRole ex <> " at " <> weCompany ex <> " (" <> wePeriod ex <> ")")
      ) (zip [0..min 2 (length exps - 1)] exps)

    -- Projects
    let projs = getProjects (pdfLang opts)
    drawText (withFontSize 12 helveticaBold) 15 (y0 - 175) (localizedText (pdfLang opts) "Key Projects" "Key Projects")
    mapM_ (\(i, proj) -> do
      let yp = y0 - 190 - fromIntegral (i * 15)
          techs = T.intercalate ", " (take 3 $ projTechnologies proj)
      drawText (withFontSize 9 helvetica) 15 yp (projTitle proj <> " - " <> techs)
      ) (zip [0..min 2 (length projs - 1)] projs)

    -- Certifications
    let certs = getCertifications (pdfLang opts)
    drawText (withFontSize 12 helveticaBold) 15 (y0 - 245) (localizedText (pdfLang opts) "Certifications" "Certifications")
    mapM_ (\(i, cert) -> do
      let yp = y0 - 260 - fromIntegral (i * 15)
      drawText (withFontSize 9 helvetica) 15 yp (certName cert <> " (" <> certOrganization cert <> ", " <> certDate cert <> ")")
      ) (zip [0..min 4 (length certs - 1)] certs)

  where
    standardDocInfo = standardDocumentInfo { author = toPDFString "Portfolio API", compressed = False }

-- Executive format
createExecutivePdf :: PDFOptions -> Either String BL.ByteString
createExecutivePdf opts = Right $ pdfByteString standardDocInfo a4Rect $ do
  let profile = getProfile (pdfLang opts)
      contact = getContactData

  page1 <- addPage Nothing
  drawWithPage page1 $ do
    let y0 = 800.0
    drawText (withFontSize 18 helveticaBold) 15 y0 (prName profile)
    drawText (withFontSize 14 helveticaBold) 15 (y0 - 25) (prTitle profile)
    let contactLine = ctEmail contact <> " | " <> smLinkedin (ctSocialMedia contact)
    drawText (withFontSize 11 helvetica) 15 (y0 - 45) contactLine

    -- Executive Summary
    drawText (withFontSize 14 helveticaBold) 15 (y0 - 80) (localizedText (pdfLang opts) "Executive Summary" "Executive Summary")
    drawText (withFontSize 12 helvetica) 15 (y0 - 100) (prSummary profile)

    -- Key Achievements
    let exps = getExperiences (pdfLang opts)
    drawText (withFontSize 14 helveticaBold) 15 (y0 - 140) (localizedText (pdfLang opts) "Key Achievements" "Key Achievements")
    mapM_ (\(i, ex) -> do
      let yp = y0 - 165 - fromIntegral (i * 55)
      drawText (withFontSize 12 helveticaBold) 15 yp (weRole ex <> " - " <> weCompany ex)
      drawText (withFontSize 11 helvetica) 15 (yp - 18) (wePeriod ex)
      let desc = truncateText 150 $ T.intercalate "\n" (weDescription ex)
      drawText (withFontSize 11 helvetica) 15 (yp - 33) desc
      ) (zip [0..min 1 (length exps - 1)] exps)

    -- Core Technologies
    drawText (withFontSize 14 helveticaBold) 15 (y0 - 290) (localizedText (pdfLang opts) "Core Technologies" "Core Technologies")
    let skills = getSkills
    mapM_ (\(i, sk) -> do
      let yp = y0 - 310 - fromIntegral (i * 15)
      drawText (withFontSize 11 helvetica) 15 yp (skCategory sk <> ": " <> skName sk)
      ) (zip [0..min 15 (length skills - 1)] skills)

  where
    standardDocInfo = standardDocumentInfo { author = toPDFString "Portfolio API", compressed = False }

-- Technical format
createTechnicalPdf :: PDFOptions -> Either String BL.ByteString
createTechnicalPdf opts = Right $ pdfByteString standardDocInfo a4Rect $ do
  let profile = getProfile (pdfLang opts)
      contact = getContactData

  page1 <- addPage Nothing
  drawWithPage page1 $ do
    let y0 = 800.0
    drawText (withFontSize 24 helveticaBold) 15 y0 (prName profile)
    drawText (withFontSize 16 helvetica) 15 (y0 - 30) (prTitle profile)
    let contactLine = ctEmail contact <> " | " <> smGithub (ctSocialMedia contact)
    drawText (withFontSize 10 helvetica) 15 (y0 - 50) contactLine

    -- Technical Skills grouped by category
    drawText (withFontSize 14 helveticaBold) 15 (y0 - 80) (localizedText (pdfLang opts) "Technical Expertise" "Technical Expertise")
    let skills = getSkills
    mapM_ (\(i, sk) -> do
      let yp = y0 - 100 - fromIntegral (i * 15)
      drawText (withFontSize 11 helvetica) 15 yp ("  " <> skName sk <> " (" <> skYears sk <> ")")
      ) (zip [0..min 20 (length skills - 1)] skills)

    -- Technical Projects
    let projs = getProjects (pdfLang opts)
    drawText (withFontSize 14 helveticaBold) 15 (y0 - 430) (localizedText (pdfLang opts) "Technical Projects" "Technical Projects")
    mapM_ (\(i, proj) -> do
      let yp = y0 - 455 - fromIntegral (i * 55)
      drawText (withFontSize 12 helveticaBold) 15 yp (projTitle proj)
      let techs = T.intercalate ", " (projTechnologies proj)
      drawText (withFontSize 10 helvetica) 15 (yp - 15) ("Technologies: " <> techs)
      drawText (withFontSize 11 helvetica) 15 (yp - 30) (truncateText 120 $ projDescription proj)
      ) (zip [0..min 3 (length projs - 1)] projs)

  where
    standardDocInfo = standardDocumentInfo { author = toPDFString "Portfolio API", compressed = False }

-- Academic format
createAcademicPdf :: PDFOptions -> Either String BL.ByteString
createAcademicPdf opts = Right $ pdfByteString standardDocInfo a4Rect $ do
  let profile = getProfile (pdfLang opts)
      contact = getContactData

  page1 <- addPage Nothing
  drawWithPage page1 $ do
    let y0 = 800.0
    drawText (withFontSize 24 helveticaBold) 15 y0 (prName profile)
    drawText (withFontSize 16 helvetica) 15 (y0 - 30) (prTitle profile)
    drawText (withFontSize 10 helvetica) 15 (y0 - 50) (ctEmail contact)

    -- Education first
    let edus = getEducations (pdfLang opts)
    drawText (withFontSize 14 helveticaBold) 15 (y0 - 80) (localizedText (pdfLang opts) "Education" "Education")
    mapM_ (\(i, edu) -> do
      let yp = y0 - 105 - fromIntegral (i * 55)
      drawText (withFontSize 12 helveticaBold) 15 yp (eduSchool edu <> " - " <> eduDepartment edu)
      drawText (withFontSize 11 helvetica) 15 (yp - 18) ("(" <> eduStartYear edu <> " - " <> eduEndYear edu <> ")")
      drawText (withFontSize 10 helvetica) 15 (yp - 33) (eduDescription edu)
      ) (zip [0..] edus)

    -- Certifications
    let certs = getCertifications (pdfLang opts)
    drawText (withFontSize 14 helveticaBold) 15 (y0 - 230) (localizedText (pdfLang opts) "Certifications & Licenses" "Certifications & Licenses")
    mapM_ (\(i, cert) -> do
      let yp = y0 - 255 - fromIntegral (i * 25)
      drawText (withFontSize 12 helveticaBold) 15 yp (certName cert)
      drawText (withFontSize 11 helvetica) 15 (yp - 12) (certOrganization cert <> " | " <> certDate cert)
      ) (zip [0..min 10 (length certs - 1)] certs)

    -- Skills
    drawText (withFontSize 14 helveticaBold) 15 (y0 - 540) (localizedText (pdfLang opts) "Technical Skills" "Technical Skills")
    let skills = getSkills
    mapM_ (\(i, sk) -> do
      let yp = y0 - 560 - fromIntegral (i * 15)
      drawText (withFontSize 11 helvetica) 15 yp (skCategory sk <> ": " <> skName sk)
      ) (zip [0..min 10 (length skills - 1)] skills)

  where
    standardDocInfo = standardDocumentInfo { author = toPDFString "Portfolio API", compressed = False }

-- Modern format
createModernPdf :: PDFOptions -> Either String BL.ByteString
createModernPdf opts = Right $ pdfByteString standardDocInfo a4Rect $ do
  let profile = getProfile (pdfLang opts)
      contact = getContactData

  page1 <- addPage Nothing
  drawWithPage page1 $ do
    -- Blue header banner
    fillColor (Rgb 0.0 0.4 0.8)
    fill $ Rectangle (0 :+ 800) (595.28 :+ 841.89)

    -- Header text (white on blue)
    fillColor (Rgb 1.0 1.0 1.0)
    drawText (withFontSize 18 helveticaBold) 70 825 (prName profile)
    drawText (withFontSize 13 helvetica) 60 810 (prTitle profile)
    let contactLine = ctEmail contact <> " | " <> smLinkedin (ctSocialMedia contact) <> " | " <> smGithub (ctSocialMedia contact)
    drawText (withFontSize 10 helvetica) 30 797 contactLine

    -- Reset to black text
    fillColor (Rgb 0.0 0.0 0.0)

    let y0 = 775.0

    -- Professional Summary
    drawText (withFontSize 13 helveticaBold) 15 y0 (localizedText (pdfLang opts) "Professional Summary" "Professional Summary")
    drawText (withFontSize 11 helvetica) 15 (y0 - 20) (prSummary profile)

    -- Experience highlights
    let exps = getExperiences (pdfLang opts)
    drawText (withFontSize 13 helveticaBold) 15 (y0 - 55) (localizedText (pdfLang opts) "Experience Highlights" "Experience Highlights")
    mapM_ (\(i, ex) -> do
      let yp = y0 - 80 - fromIntegral (i * 55)
      drawText (withFontSize 12 helveticaBold) 20 yp (weRole ex <> " @ " <> weCompany ex)
      drawText (withFontSize 10 helvetica) 20 (yp - 18) (wePeriod ex)
      let desc = truncateText 100 $ T.intercalate "\n" (weDescription ex)
      drawText (withFontSize 10 helvetica) 20 (yp - 33) desc
      ) (zip [0..min 1 (length exps - 1)] exps)

    -- Skills with tags
    drawText (withFontSize 13 helveticaBold) 15 (y0 - 200) (localizedText (pdfLang opts) "Technical Expertise" "Technical Expertise")
    let skills = getSkills
        curCat = ""
    mapM_ (\(i, sk) -> do
      let yp = y0 - 220 - fromIntegral (i * 12)
      drawText (withFontSize 10 helvetica) 15 yp ("  " <> skName sk)
      ) (zip [0..min 25 (length skills - 1)] skills)

  where
    standardDocInfo = standardDocumentInfo { author = toPDFString "Portfolio API", compressed = False }

-- Helper for drawing with page
drawTextAt :: Point -> Draw () -> Draw ()
drawTextAt pt action = withNewContext $ do
  applyMatrix $ translate pt
  action

displayText :: PDFString -> Draw ()
displayText = renderMode FillText
