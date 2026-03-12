module Data.Skill where

import Data.Text (Text)
import Model.Skill (SkillItem(..))

skills :: [SkillItem]
skills =
  [ SkillItem
      { skName         = "TypeScript"
      , skCategory     = "Language"
      , skYears        = "1 year 6 months"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/TypeScript.svg"
      , skPictureColor = Just "#3178C6"
      }
  , SkillItem
      { skName         = "JavaScript(include TypeScript)"
      , skCategory     = "Language"
      , skYears        = "2 years"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/JavaScript.svg"
      , skPictureColor = Just "#F7DF1E"
      }
  , SkillItem
      { skName         = "Java"
      , skCategory     = "Language"
      , skYears        = "2 years"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/Java.svg"
      , skPictureColor = Just "#61DAFB"
      }
  , SkillItem
      { skName         = "C,C++,C#"
      , skCategory     = "Language"
      , skYears        = "6 months"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/C-Cpp-CSharp.svg"
      , skPictureColor = Just "#00599C"
      }
  , SkillItem
      { skName         = "Python"
      , skCategory     = "Language"
      , skYears        = "2 years"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/Python.svg"
      , skPictureColor = Just "#3776AB"
      }
  , SkillItem
      { skName         = "React"
      , skCategory     = "Frontend"
      , skYears        = "2 years"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/React.svg"
      , skPictureColor = Just "#61DAFB"
      }
  , SkillItem
      { skName         = "Next.js"
      , skCategory     = "Frontend"
      , skYears        = "1 year"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/Next.js.svg"
      , skPictureColor = Just "#000000"
      }
  , SkillItem
      { skName         = "Node.js"
      , skCategory     = "Backend"
      , skYears        = "2 years"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/Node.js.svg"
      , skPictureColor = Just "#5FA04E"
      }
  , SkillItem
      { skName         = "Express.js"
      , skCategory     = "Backend"
      , skYears        = "self-study"
      , skProficiency  = Just "self-study"
      , skPicture      = Just "/icons/Express.js.svg"
      , skPictureColor = Just "#5FA04E"
      }
  , SkillItem
      { skName         = "Hono.js"
      , skCategory     = "Backend"
      , skYears        = "6 months"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/Hono.js.svg"
      , skPictureColor = Just "#E36002"
      }
  , SkillItem
      { skName         = "Springboot(Java)"
      , skCategory     = "Backend"
      , skYears        = "2 years"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/SpringBoot.svg"
      , skPictureColor = Just "#6DB33F"
      }
  , SkillItem
      { skName         = "GraphQL"
      , skCategory     = "API"
      , skYears        = "2 years"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/GraphQL.svg"
      , skPictureColor = Just "#E10098"
      }
  , SkillItem
      { skName         = "REST"
      , skCategory     = "API"
      , skYears        = "2 years"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/REST.svg"
      , skPictureColor = Just "#61DAFB"
      }
  , SkillItem
      { skName         = "Redux"
      , skCategory     = "State Management"
      , skYears        = "self-study"
      , skProficiency  = Just "self-study"
      , skPicture      = Just "/icons/Redux.svg"
      , skPictureColor = Just "#764ABC"
      }
  , SkillItem
      { skName         = "Context API"
      , skCategory     = "State Management"
      , skYears        = "1 year"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/Redux.svg"
      , skPictureColor = Just "#764ABC"
      }
  , SkillItem
      { skName         = "Prisma"
      , skCategory     = "ORM"
      , skYears        = "self-study"
      , skProficiency  = Just "self-study"
      , skPicture      = Just "/icons/Prisma.svg"
      , skPictureColor = Just "#2D3748"
      }
  , SkillItem
      { skName         = "Selenium(Python)"
      , skCategory     = "Testing"
      , skYears        = "1 year"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/Selenium-Python.svg"
      , skPictureColor = Just "#43B02A"
      }
  , SkillItem
      { skName         = "Playwright(TypeScript)"
      , skCategory     = "Testing"
      , skYears        = "1 year"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/Playwright.svg"
      , skPictureColor = Just "#C21325"
      }
  , SkillItem
      { skName         = "Jest"
      , skCategory     = "Testing"
      , skYears        = "6 months"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/Jest.svg"
      , skPictureColor = Just "#C21325"
      }
  , SkillItem
      { skName         = "Vitest"
      , skCategory     = "Testing"
      , skYears        = "6 months"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/Vitest.svg"
      , skPictureColor = Just "#C21325"
      }
  , SkillItem
      { skName         = "BootStrap5"
      , skCategory     = "CSS"
      , skYears        = "1 year"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/BootStrap5.svg"
      , skPictureColor = Just "#7952B3"
      }
  , SkillItem
      { skName         = "TailWindCSS"
      , skCategory     = "CSS"
      , skYears        = "1 year"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/TailWindCSS.svg"
      , skPictureColor = Just "#06B6D4"
      }
  , SkillItem
      { skName         = "MySQL"
      , skCategory     = "Database"
      , skYears        = "1 year"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/MySQL.svg"
      , skPictureColor = Just "#4479A1"
      }
  , SkillItem
      { skName         = "PostgresSQL"
      , skCategory     = "Database"
      , skYears        = "1 year"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/PostgresSQL.svg"
      , skPictureColor = Just "#336791"
      }
  , SkillItem
      { skName         = "Redis"
      , skCategory     = "Database"
      , skYears        = "1 year"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/Redis.svg"
      , skPictureColor = Just "#4479A1"
      }
  , SkillItem
      { skName         = "Vercel"
      , skCategory     = "Database"
      , skYears        = "1 year"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/Vercel.svg"
      , skPictureColor = Just "#000000"
      }
  , SkillItem
      { skName         = "AWS"
      , skCategory     = "Cloud"
      , skYears        = "3 months"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/AWS.svg"
      , skPictureColor = Just "#232F3E"
      }
  , SkillItem
      { skName         = "Azure"
      , skCategory     = "Cloud"
      , skYears        = "2 years"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/Azure.svg"
      , skPictureColor = Just "#0089D6"
      }
  , SkillItem
      { skName         = "Docker"
      , skCategory     = "Others"
      , skYears        = "1 year"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/Docker.svg"
      , skPictureColor = Just "#2496ED"
      }
  , SkillItem
      { skName         = "shadcn"
      , skCategory     = "Frontend"
      , skYears        = "1 year"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/shadcn.svg"
      , skPictureColor = Just "#000000"
      }
  , SkillItem
      { skName         = "Material UI"
      , skCategory     = "Frontend"
      , skYears        = "1 year"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/Material-UI.svg"
      , skPictureColor = Just "#007FFF"
      }
  , SkillItem
      { skName         = "React Hook Form"
      , skCategory     = "Frontend"
      , skYears        = "2 years"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/ReactHookForm.svg"
      , skPictureColor = Just "#FF6B35"
      }
  , SkillItem
      { skName         = "zod"
      , skCategory     = "Frontend"
      , skYears        = "1 year"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/Zod.svg"
      , skPictureColor = Just "#3E67B1"
      }
  , SkillItem
      { skName         = "NextAuth"
      , skCategory     = "Frontend"
      , skYears        = "1 year"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/NextAuth.png"
      , skPictureColor = Just "#000000"
      }
  , SkillItem
      { skName         = "codegen"
      , skCategory     = "Frontend"
      , skYears        = "1 year"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/Codegen.svg"
      , skPictureColor = Just "#E10098"
      }
  , SkillItem
      { skName         = "babylon.js"
      , skCategory     = "Frontend"
      , skYears        = "self-study"
      , skProficiency  = Just "self-study"
      , skPicture      = Just "/icons/BabylonJS.svg"
      , skPictureColor = Just "#BB464B"
      }
  , SkillItem
      { skName         = "kaPlay"
      , skCategory     = "Frontend"
      , skYears        = "self-study"
      , skProficiency  = Just "self-study"
      , skPicture      = Just "/icons/KaPlay.svg"
      , skPictureColor = Just "#4CAF50"
      }
  , SkillItem
      { skName         = "vectorDB(pgvector)"
      , skCategory     = "Database"
      , skYears        = "3 months"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/AstraDB.svg"
      , skPictureColor = Just "#FF6B6B"
      }
  ]

otherSkills :: [SkillItem]
otherSkills =
  [ SkillItem
      { skName         = "VS Code(Typescript)"
      , skCategory     = "Others"
      , skYears        = "2 year"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/VSCode.svg"
      , skPictureColor = Just "#007ACC"
      }
, SkillItem
      { skName         = "IntelliJ IDEA(Typescript)"
      , skCategory     = "Others"
      , skYears        = "1 year"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/IntelliJIDEA.svg"
      , skPictureColor = Just "#000000"
      }
  , SkillItem
      { skName         = "Eclipse(Java,Javascript)"
      , skCategory     = "Others"
      , skYears        = "1 year"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/Eclipse.svg"
      , skPictureColor = Just "#0089D6"
      }
  , SkillItem
      { skName         = "Spring Tool Suite4(Java,Javascript)"
      , skCategory     = "Others"
      , skYears        = "4 months"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/SpringToolSuite.svg"
      , skPictureColor = Just "#6DB33F"
      }
  , SkillItem
      { skName         = "StackBlitz(React)"
      , skCategory     = "Others"
      , skYears        = "self-study"
      , skProficiency  = Just "self-study"
      , skPicture      = Just "/icons/StackBlitz.svg"
      , skPictureColor = Just "#1269D3"
      }
  , SkillItem
      { skName         = "Visual Studio(C,C++,C#)"
      , skCategory     = "Others"
      , skYears        = "8 months"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/Visual-Studio-C-Cpp-CSharp.svg"
      , skPictureColor = Just "#5C2D91"
      }
  , SkillItem
      { skName         = "Git(Tortoise Git)"
      , skCategory     = "Others"
      , skYears        = "2 year"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/Git-Tortoise-Git.svg"
      , skPictureColor = Just "#F05032"
      }
  , SkillItem
      { skName         = "Github"
      , skCategory     = "Others"
      , skYears        = "2 year"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/Github.svg"
      , skPictureColor = Just "#181717"
      }
  , SkillItem
      { skName         = "Swagger"
      , skCategory     = "Others"
      , skYears        = "6 months"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/Swagger.svg"
      , skPictureColor = Just "#85EA2D"
      }
  , SkillItem
      { skName         = "Backlog"
      , skCategory     = "Others"
      , skYears        = "1 year"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/Backlog.svg"
      , skPictureColor = Just "#181717"
      }
, SkillItem
      { skName         = "A5:SQL Mk-2"
      , skCategory     = "Others"
      , skYears        = "1 year"
      , skProficiency  = Just "onBusiness"
      , skPicture      = Just "/icons/A5SQLMk2.svg"
      , skPictureColor = Just "#336791"
      }
  , SkillItem
      { skName         = "Bun"
      , skCategory     = "Others"
      , skYears        = "self-study"
      , skProficiency  = Just "self-study"
      , skPicture      = Just "/icons/Bun.svg"
      , skPictureColor = Just "#000000"
      }
  ]
