module Data.Skill where

import Data.Text (Text)
import Model.Skill (SkillItem(..))

skills :: [SkillItem]
skills =
  [ SkillItem
      { skName = "TypeScript"
      , skCategory = "Language"
      , skYears = "1 year 6 months"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/TypeScript.svg"
      , skPictureColor = Just "#3178C6"
      }
  , SkillItem
      { skName = "JavaScript(include TypeScript)"
      , skCategory = "Language"
      , skYears = "2 years"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/JavaScript.svg"
      , skPictureColor = Just "#F7DF1E"
      }
  , SkillItem
      { skName = "Java"
      , skCategory = "Language"
      , skYears = "2 years"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/Java.svg"
      , skPictureColor = Just "#61DAFB"
      }
  , SkillItem
      { skName = "C,C++,C#"
      , skCategory = "Language"
      , skYears = "6 months"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/C-Cpp-CSharp.svg"
      , skPictureColor = Just "#00599C"
      }
  , SkillItem
      { skName = "Python"
      , skCategory = "Language"
      , skYears = "2 years"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/Python.svg"
      , skPictureColor = Just "#3776AB"
      }
  , SkillItem
      { skName = "Go"
      , skCategory = "Language"
      , skYears = "self-study"
      , skProficiency = Just "self-study"
      , skPicture = Just "/icons/Go.svg"
      , skPictureColor = Just "#00ADD8"
      }
  , SkillItem
      { skName = "Rust"
      , skCategory = "Language"
      , skYears = "self-study"
      , skProficiency = Just "self-study"
      , skPicture = Just "/icons/Rust.svg"
      , skPictureColor = Just "#DEA584"
      }
  , SkillItem
      { skName = "React"
      , skCategory = "Frontend"
      , skYears = "2 years"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/React.svg"
      , skPictureColor = Just "#61DAFB"
      }
  , SkillItem
      { skName = "Next.js"
      , skCategory = "Frontend"
      , skYears = "1 year"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/Next.js.svg"
      , skPictureColor = Just "#000000"
      }
  , SkillItem
      { skName = "Node.js"
      , skCategory = "Backend"
      , skYears = "2 years"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/Node.js.svg"
      , skPictureColor = Just "#5FA04E"
      }
  , SkillItem
      { skName = "Express.js"
      , skCategory = "Backend"
      , skYears = "self-study"
      , skProficiency = Just "self-study"
      , skPicture = Just "/icons/Express.js.svg"
      , skPictureColor = Just "#5FA04E"
      }
  , SkillItem
      { skName = "Hono.js"
      , skCategory = "Backend"
      , skYears = "1 year"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/Hono.js.svg"
      , skPictureColor = Just "#E36002"
      }
  , SkillItem
      { skName = "Springboot(Java)"
      , skCategory = "Backend"
      , skYears = "2 years"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/SpringBoot.svg"
      , skPictureColor = Just "#6DB33F"
      }
  , SkillItem
      { skName = "GraphQL"
      , skCategory = "API"
      , skYears = "2 years"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/GraphQL.svg"
      , skPictureColor = Just "#E10098"
      }
  , SkillItem
      { skName = "REST"
      , skCategory = "API"
      , skYears = "2 years"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/REST.svg"
      , skPictureColor = Just "#61DAFB"
      }
  , SkillItem
      { skName = "Redux"
      , skCategory = "State Management"
      , skYears = "self-study"
      , skProficiency = Just "self-study"
      , skPicture = Just "/icons/Redux.svg"
      , skPictureColor = Just "#764ABC"
      }
  , SkillItem
      { skName = "Prisma"
      , skCategory = "ORM"
      , skYears = "self-study"
      , skProficiency = Just "self-study"
      , skPicture = Just "/icons/Prisma.svg"
      , skPictureColor = Just "#2D3748"
      }
  , SkillItem
      { skName = "Selenium(Python)"
      , skCategory = "Testing"
      , skYears = "1 year"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/Selenium-Python.svg"
      , skPictureColor = Just "#43B02A"
      }
  , SkillItem
      { skName = "Playwright(TypeScript)"
      , skCategory = "Testing"
      , skYears = "1 year"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/Playwright.svg"
      , skPictureColor = Just "#C21325"
      }
  , SkillItem
      { skName = "Jest"
      , skCategory = "Testing"
      , skYears = "6 months"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/Jest.svg"
      , skPictureColor = Just "#C21325"
      }
  , SkillItem
      { skName = "Vitest"
      , skCategory = "Testing"
      , skYears = "6 months"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/Vitest.svg"
      , skPictureColor = Just "#C21325"
      }
  , SkillItem
      { skName = "BootStrap5"
      , skCategory = "CSS"
      , skYears = "1 year"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/BootStrap5.svg"
      , skPictureColor = Just "#7952B3"
      }
  , SkillItem
      { skName = "Tailwind CSS"
      , skCategory = "CSS"
      , skYears = "1 year"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/TailWindCSS.svg"
      , skPictureColor = Just "#06B6D4"
      }
  , SkillItem
      { skName = "MySQL"
      , skCategory = "Database"
      , skYears = "1 year"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/MySQL.svg"
      , skPictureColor = Just "#4479A1"
      }
  , SkillItem
      { skName = "PostgreSQL"
      , skCategory = "Database"
      , skYears = "1 year"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/PostgresSQL.svg"
      , skPictureColor = Just "#336791"
      }
  , SkillItem
      { skName = "Redis"
      , skCategory = "Database"
      , skYears = "1 year"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/Redis.svg"
      , skPictureColor = Just "#4479A1"
      }
  , SkillItem
      { skName = "Vercel"
      , skCategory = "Cloud"
      , skYears = "1 year"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/Vercel.svg"
      , skPictureColor = Just "#000000"
      }
  , SkillItem
      { skName = "AWS"
      , skCategory = "Cloud"
      , skYears = "3 months"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/AWS.svg"
      , skPictureColor = Just "#232F3E"
      }
  , SkillItem
      { skName = "Azure"
      , skCategory = "Cloud"
      , skYears = "2 years"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/Azure.svg"
      , skPictureColor = Just "#0089D6"
      }
  , SkillItem
      { skName = "Docker"
      , skCategory = "Others"
      , skYears = "1 year"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/Docker.svg"
      , skPictureColor = Just "#2496ED"
      }
  , SkillItem
      { skName = "shadcn"
      , skCategory = "Frontend"
      , skYears = "1 year"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/shadcn.svg"
      , skPictureColor = Just "#000000"
      }
  , SkillItem
      { skName = "Material UI"
      , skCategory = "Frontend"
      , skYears = "1 year"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/Material-UI.svg"
      , skPictureColor = Just "#007FFF"
      }
  , SkillItem
      { skName = "React Hook Form"
      , skCategory = "Frontend"
      , skYears = "2 years"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/ReactHookForm.svg"
      , skPictureColor = Just "#FF6B35"
      }
  , SkillItem
      { skName = "zod"
      , skCategory = "Frontend"
      , skYears = "1 year"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/Zod.svg"
      , skPictureColor = Just "#3E67B1"
      }
  , SkillItem
      { skName = "NextAuth"
      , skCategory = "Frontend"
      , skYears = "1 year"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/NextAuth.png"
      , skPictureColor = Just "#000000"
      }
  , SkillItem
      { skName = "vectorDB(pgvector)"
      , skCategory = "Database"
      , skYears = "3 months"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/AstraDB.svg"
      , skPictureColor = Just "#FF6B6B"
      }
  , SkillItem
      { skName = "Supabase"
      , skCategory = "Database"
      , skYears = "1 year"
      , skProficiency = Just "self-study"
      , skPicture = Just "/icons/Supabase.svg"
      , skPictureColor = Just "#3ECF8E"
      }
  , SkillItem
      { skName = "Drizzle"
      , skCategory = "ORM"
      , skYears = "1 year"
      , skProficiency = Just "self-study"
      , skPicture = Just "/icons/Drizzle.svg"
      , skPictureColor = Just "#C5F74F"
      }
  , SkillItem
      { skName = "Remix"
      , skCategory = "Frontend"
      , skYears = "self-study"
      , skProficiency = Just "self-study"
      , skPicture = Just "/icons/Remix.svg"
      , skPictureColor = Just "#000000"
      }
  , SkillItem
      { skName = "Electron"
      , skCategory = "Frontend"
      , skYears = "self-study"
      , skProficiency = Just "self-study"
      , skPicture = Just "/icons/Electron.svg"
      , skPictureColor = Just "#47848F"
      }
  , SkillItem
      { skName = "Tauri"
      , skCategory = "Frontend"
      , skYears = "self-study"
      , skProficiency = Just "self-study"
      , skPicture = Just "/icons/Tauri.svg"
      , skPictureColor = Just "#FFC131"
      }
  , SkillItem
      { skName = "Vite"
      , skCategory = "Others"
      , skYears = "1 year"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/Vite.svg"
      , skPictureColor = Just "#646CFF"
      }
  , SkillItem
      { skName = "Sentry"
      , skCategory = "Others"
      , skYears = "6 months"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/Sentry.svg"
      , skPictureColor = Just "#362D59"
      }
  , SkillItem
      { skName = "AWS Lambda"
      , skCategory = "Cloud"
      , skYears = "3 months"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/AWSLambda.svg"
      , skPictureColor = Just "#FF9900"
      }
  , SkillItem
      { skName = "AWS S3"
      , skCategory = "Cloud"
      , skYears = "3 months"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/AWSS3.svg"
      , skPictureColor = Just "#569A31"
      }
  , SkillItem
      { skName = "Azure DevOps"
      , skCategory = "Cloud"
      , skYears = "1 year"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/AzureDevOps.svg"
      , skPictureColor = Just "#0078D7"
      }
  , SkillItem
      { skName = "Azure Pipelines"
      , skCategory = "Cloud"
      , skYears = "1 year"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/AzurePipelines.svg"
      , skPictureColor = Just "#2560E0"
      }
  , SkillItem
      { skName = "Azure Repos"
      , skCategory = "Cloud"
      , skYears = "1 year"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/AzureRepos.svg"
      , skPictureColor = Just "#0078D7"
      }
  , SkillItem
      { skName = "Azure Web Apps"
      , skCategory = "Cloud"
      , skYears = "1 year"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/AzureWebApps.svg"
      , skPictureColor = Just "#0078D7"
      }
  , SkillItem
      { skName = "Cloudflare Workers"
      , skCategory = "Cloud"
      , skYears = "1 year"
      , skProficiency = Just "self-study"
      , skPicture = Just "/icons/CloudflareWorkers.svg"
      , skPictureColor = Just "#F38020"
      }
  , SkillItem
      { skName = "Ollama"
      , skCategory = "AI"
      , skYears = "self-study"
      , skProficiency = Just "self-study"
      , skPicture = Just "/icons/Ollama.svg"
      , skPictureColor = Just "#000000"
      }
  , SkillItem
      { skName = "RAG"
      , skCategory = "AI"
      , skYears = "3 months"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/RAG.svg"
      , skPictureColor = Just "#FF6B6B"
      }
  , SkillItem
      { skName = "STT"
      , skCategory = "AI"
      , skYears = "3 months"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/STT.svg"
      , skPictureColor = Just "#4A90D9"
      }
  , SkillItem
      { skName = "TTS"
      , skCategory = "AI"
      , skYears = "3 months"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/TTS.svg"
      , skPictureColor = Just "#4A90D9"
      }
  , SkillItem
      { skName = "Whisper(local)"
      , skCategory = "AI"
      , skYears = "3 months"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/Whisper.svg"
      , skPictureColor = Just "#000000"
      }
  , SkillItem
      { skName = "Cloudinary"
      , skCategory = "Others"
      , skYears = "6 months"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/Cloudinary.svg"
      , skPictureColor = Just "#3448C5"
      }
  , SkillItem
      { skName = "RSend"
      , skCategory = "Others"
      , skYears = "6 months"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/RSend.svg"
      , skPictureColor = Just "#000000"
      }
  , SkillItem
      { skName = "DICOM"
      , skCategory = "Others"
      , skYears = "6 months"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/DICOM.svg"
      , skPictureColor = Just "#1D4ED8"
      }
  , SkillItem
      { skName = "FHIR"
      , skCategory = "Others"
      , skYears = "6 months"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/FHIR.svg"
      , skPictureColor = Just "#E44D26"
      }
  ]

otherSkills :: [SkillItem]
otherSkills =
  [ SkillItem
      { skName = "VS Code(Typescript)"
      , skCategory = "Others"
      , skYears = "2 year"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/VSCode.svg"
      , skPictureColor = Just "#007ACC"
      }
  , SkillItem
      { skName = "IntelliJ IDEA(Typescript)"
      , skCategory = "Others"
      , skYears = "1 year"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/IntelliJIDEA.svg"
      , skPictureColor = Just "#000000"
      }
  , SkillItem
      { skName = "Eclipse(Java,Javascript)"
      , skCategory = "Others"
      , skYears = "1 year"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/Eclipse.svg"
      , skPictureColor = Just "#0089D6"
      }
  , SkillItem
      { skName = "Spring Tool Suite4(Java,Javascript)"
      , skCategory = "Others"
      , skYears = "4 months"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/SpringToolSuite.svg"
      , skPictureColor = Just "#6DB33F"
      }
  , SkillItem
      { skName = "Visual Studio(C,C++,C#)"
      , skCategory = "Others"
      , skYears = "8 months"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/Visual-Studio-C-Cpp-CSharp.svg"
      , skPictureColor = Just "#5C2D91"
      }
  , SkillItem
      { skName = "Git(Tortoise Git)"
      , skCategory = "Others"
      , skYears = "2 year"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/Git-Tortoise-Git.svg"
      , skPictureColor = Just "#F05032"
      }
  , SkillItem
      { skName = "Github"
      , skCategory = "Others"
      , skYears = "2 year"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/Github.svg"
      , skPictureColor = Just "#181717"
      }
  , SkillItem
      { skName = "Swagger"
      , skCategory = "Others"
      , skYears = "6 months"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/Swagger.svg"
      , skPictureColor = Just "#85EA2D"
      }
  , SkillItem
      { skName = "Backlog"
      , skCategory = "Others"
      , skYears = "1 year"
      , skProficiency = Just "onBusiness"
      , skPicture = Just "/icons/Backlog.svg"
      , skPictureColor = Just "#181717"
      }
  , SkillItem
      { skName = "Bun"
      , skCategory = "Others"
      , skYears = "self-study"
      , skProficiency = Just "self-study"
      , skPicture = Just "/icons/Bun.svg"
      , skPictureColor = Just "#000000"
      }
  ]
