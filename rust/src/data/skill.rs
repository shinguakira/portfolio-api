use crate::model::skill::SkillItem;
use lazy_static::lazy_static;

lazy_static! {
    pub static ref SKILL_DEFS: Vec<SkillItem> = vec![
        SkillItem {
            name: "TypeScript".to_string(),
            years: "1 year 6 months".to_string(),
            category: "Language".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/TypeScript.svg".to_string()),
            picture_color: Some("#3178C6".to_string())
        },
        SkillItem {
            name: "JavaScript(include TypeScript)".to_string(),
            years: "2 years".to_string(),
            category: "Language".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/JavaScript.svg".to_string()),
            picture_color: Some("#F7DF1E".to_string())
        },
        SkillItem {
            name: "Java".to_string(),
            years: "2 years".to_string(),
            category: "Language".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/Java.svg".to_string()),
            picture_color: Some("#61DAFB".to_string())
        },
        SkillItem {
            name: "C,C++,C#".to_string(),
            years: "6 months".to_string(),
            category: "Language".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/C-Cpp-CSharp.svg".to_string()),
            picture_color: Some("#00599C".to_string())
        },
        SkillItem {
            name: "Python".to_string(),
            years: "2 years".to_string(),
            category: "Language".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/Python.svg".to_string()),
            picture_color: Some("#3776AB".to_string())
        },
        SkillItem {
            name: "Go".to_string(),
            years: "@since:2026-08".to_string(),
            category: "Language".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/Go.svg".to_string()),
            picture_color: Some("#00ADD8".to_string())
        },
        SkillItem {
            name: "Rust".to_string(),
            years: "self-study".to_string(),
            category: "Language".to_string(),
            proficiency: Some("self-study".to_string()),
            picture: Some("/icons/Rust.svg".to_string()),
            picture_color: Some("#DEA584".to_string())
        },
        SkillItem {
            name: "React".to_string(),
            years: "2 years".to_string(),
            category: "Frontend".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/React.svg".to_string()),
            picture_color: Some("#61DAFB".to_string())
        },
        SkillItem {
            name: "Next.js".to_string(),
            years: "1 year".to_string(),
            category: "Frontend".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/Next.js.svg".to_string()),
            picture_color: Some("#000000".to_string())
        },
        SkillItem {
            name: "Node.js".to_string(),
            years: "2 years".to_string(),
            category: "Backend".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/Node.js.svg".to_string()),
            picture_color: Some("#5FA04E".to_string())
        },
        SkillItem {
            name: "Express.js".to_string(),
            years: "self-study".to_string(),
            category: "Backend".to_string(),
            proficiency: Some("self-study".to_string()),
            picture: Some("/icons/Express.js.svg".to_string()),
            picture_color: Some("#5FA04E".to_string())
        },
        SkillItem {
            name: "Hono.js".to_string(),
            years: "1 year".to_string(),
            category: "Backend".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/Hono.js.svg".to_string()),
            picture_color: Some("#E36002".to_string())
        },
        SkillItem {
            name: "Springboot(Java)".to_string(),
            years: "2 years".to_string(),
            category: "Backend".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/SpringBoot.svg".to_string()),
            picture_color: Some("#6DB33F".to_string())
        },
        SkillItem {
            name: "Microservices".to_string(),
            years: "@since:2026-08".to_string(),
            category: "Backend".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/Microservices.svg".to_string()),
            picture_color: Some("#5C7CFA".to_string())
        },
        SkillItem {
            name: "GraphQL".to_string(),
            years: "2 years".to_string(),
            category: "API".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/GraphQL.svg".to_string()),
            picture_color: Some("#E10098".to_string())
        },
        SkillItem {
            name: "REST".to_string(),
            years: "2 years".to_string(),
            category: "API".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/REST.svg".to_string()),
            picture_color: Some("#61DAFB".to_string())
        },
        SkillItem {
            name: "Prisma".to_string(),
            years: "self-study".to_string(),
            category: "ORM".to_string(),
            proficiency: Some("self-study".to_string()),
            picture: Some("/icons/Prisma.svg".to_string()),
            picture_color: Some("#2D3748".to_string())
        },
        SkillItem {
            name: "Selenium(Python)".to_string(),
            years: "1 year".to_string(),
            category: "Testing".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/Selenium-Python.svg".to_string()),
            picture_color: Some("#43B02A".to_string())
        },
        SkillItem {
            name: "Playwright(TypeScript)".to_string(),
            years: "1 year".to_string(),
            category: "Testing".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/Playwright.svg".to_string()),
            picture_color: Some("#C21325".to_string())
        },
        SkillItem {
            name: "Jest".to_string(),
            years: "6 months".to_string(),
            category: "Testing".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/Jest.svg".to_string()),
            picture_color: Some("#C21325".to_string())
        },
        SkillItem {
            name: "Vitest".to_string(),
            years: "6 months".to_string(),
            category: "Testing".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/Vitest.svg".to_string()),
            picture_color: Some("#C21325".to_string())
        },
        SkillItem {
            name: "BootStrap5".to_string(),
            years: "1 year".to_string(),
            category: "CSS".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/BootStrap5.svg".to_string()),
            picture_color: Some("#7952B3".to_string())
        },
        SkillItem {
            name: "Tailwind CSS".to_string(),
            years: "1 year".to_string(),
            category: "CSS".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/TailWindCSS.svg".to_string()),
            picture_color: Some("#06B6D4".to_string())
        },
        SkillItem {
            name: "MySQL".to_string(),
            years: "1 year".to_string(),
            category: "Database".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/MySQL.svg".to_string()),
            picture_color: Some("#4479A1".to_string())
        },
        SkillItem {
            name: "PostgreSQL".to_string(),
            years: "1 year".to_string(),
            category: "Database".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/PostgresSQL.svg".to_string()),
            picture_color: Some("#336791".to_string())
        },
        SkillItem {
            name: "Redis".to_string(),
            years: "1 year".to_string(),
            category: "Database".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/Redis.svg".to_string()),
            picture_color: Some("#4479A1".to_string())
        },
        SkillItem {
            name: "Vercel".to_string(),
            years: "1 year".to_string(),
            category: "Cloud".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/Vercel.svg".to_string()),
            picture_color: Some("#000000".to_string())
        },
        SkillItem {
            name: "AWS".to_string(),
            years: "3 months".to_string(),
            category: "Cloud".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/AWS.svg".to_string()),
            picture_color: Some("#232F3E".to_string())
        },
        SkillItem {
            name: "Azure".to_string(),
            years: "2 years".to_string(),
            category: "Cloud".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/Azure.svg".to_string()),
            picture_color: Some("#0089D6".to_string())
        },
        SkillItem {
            name: "Docker".to_string(),
            years: "1 year".to_string(),
            category: "Others".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/Docker.svg".to_string()),
            picture_color: Some("#2496ED".to_string())
        },
        SkillItem {
            name: "shadcn".to_string(),
            years: "1 year".to_string(),
            category: "Frontend".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/shadcn.svg".to_string()),
            picture_color: Some("#000000".to_string())
        },
        SkillItem {
            name: "Material UI".to_string(),
            years: "1 year".to_string(),
            category: "Frontend".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/Material-UI.svg".to_string()),
            picture_color: Some("#007FFF".to_string())
        },
        SkillItem {
            name: "React Hook Form".to_string(),
            years: "2 years".to_string(),
            category: "Frontend".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/ReactHookForm.svg".to_string()),
            picture_color: Some("#FF6B35".to_string())
        },
        SkillItem {
            name: "zod".to_string(),
            years: "1 year".to_string(),
            category: "Frontend".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/Zod.svg".to_string()),
            picture_color: Some("#3E67B1".to_string())
        },
        SkillItem {
            name: "vectorDB(pgvector)".to_string(),
            years: "3 months".to_string(),
            category: "Database".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/AstraDB.svg".to_string()),
            picture_color: Some("#FF6B6B".to_string())
        },
        SkillItem {
            name: "Supabase".to_string(),
            years: "1 year".to_string(),
            category: "Database".to_string(),
            proficiency: Some("self-study".to_string()),
            picture: Some("/icons/Supabase.svg".to_string()),
            picture_color: Some("#3ECF8E".to_string())
        },
        SkillItem {
            name: "Drizzle".to_string(),
            years: "1 year".to_string(),
            category: "ORM".to_string(),
            proficiency: Some("self-study".to_string()),
            picture: Some("/icons/Drizzle.svg".to_string()),
            picture_color: Some("#C5F74F".to_string())
        },
        SkillItem {
            name: "Electron".to_string(),
            years: "self-study".to_string(),
            category: "Frontend".to_string(),
            proficiency: Some("self-study".to_string()),
            picture: Some("/icons/Electron.svg".to_string()),
            picture_color: Some("#47848F".to_string())
        },
        SkillItem {
            name: "Tauri".to_string(),
            years: "self-study".to_string(),
            category: "Frontend".to_string(),
            proficiency: Some("self-study".to_string()),
            picture: Some("/icons/Tauri.svg".to_string()),
            picture_color: Some("#FFC131".to_string())
        },
        SkillItem {
            name: "Vite".to_string(),
            years: "1 year".to_string(),
            category: "Others".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/Vite.svg".to_string()),
            picture_color: Some("#646CFF".to_string())
        },
        SkillItem {
            name: "Sentry".to_string(),
            years: "6 months".to_string(),
            category: "Others".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/Sentry.svg".to_string()),
            picture_color: Some("#362D59".to_string())
        },
        SkillItem {
            name: "AWS Lambda".to_string(),
            years: "3 months".to_string(),
            category: "Cloud".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/AWSLambda.svg".to_string()),
            picture_color: Some("#FF9900".to_string())
        },
        SkillItem {
            name: "AWS S3".to_string(),
            years: "3 months".to_string(),
            category: "Cloud".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/AWSS3.svg".to_string()),
            picture_color: Some("#569A31".to_string())
        },
        SkillItem {
            name: "Azure DevOps".to_string(),
            years: "1 year".to_string(),
            category: "Cloud".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/AzureDevOps.svg".to_string()),
            picture_color: Some("#0078D7".to_string())
        },
        SkillItem {
            name: "Azure Pipelines".to_string(),
            years: "1 year".to_string(),
            category: "Cloud".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/AzurePipelines.svg".to_string()),
            picture_color: Some("#2560E0".to_string())
        },
        SkillItem {
            name: "Azure Repos".to_string(),
            years: "1 year".to_string(),
            category: "Cloud".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/AzureRepos.svg".to_string()),
            picture_color: Some("#0078D7".to_string())
        },
        SkillItem {
            name: "Azure Web Apps".to_string(),
            years: "1 year".to_string(),
            category: "Cloud".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/AzureWebApps.svg".to_string()),
            picture_color: Some("#0078D7".to_string())
        },
        SkillItem {
            name: "Cloudflare Workers".to_string(),
            years: "1 year".to_string(),
            category: "Cloud".to_string(),
            proficiency: Some("self-study".to_string()),
            picture: Some("/icons/CloudflareWorkers.svg".to_string()),
            picture_color: Some("#F38020".to_string())
        },
        SkillItem {
            name: "Ollama".to_string(),
            years: "self-study".to_string(),
            category: "AI".to_string(),
            proficiency: Some("self-study".to_string()),
            picture: Some("/icons/Ollama.svg".to_string()),
            picture_color: Some("#000000".to_string())
        },
        SkillItem {
            name: "RAG".to_string(),
            years: "3 months".to_string(),
            category: "AI".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/RAG.svg".to_string()),
            picture_color: Some("#FF6B6B".to_string())
        },
        SkillItem {
            name: "STT".to_string(),
            years: "3 months".to_string(),
            category: "AI".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/STT.svg".to_string()),
            picture_color: Some("#4A90D9".to_string())
        },
        SkillItem {
            name: "TTS".to_string(),
            years: "3 months".to_string(),
            category: "AI".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/TTS.svg".to_string()),
            picture_color: Some("#4A90D9".to_string())
        },
        SkillItem {
            name: "Whisper(local)".to_string(),
            years: "3 months".to_string(),
            category: "AI".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/Whisper.svg".to_string()),
            picture_color: Some("#000000".to_string())
        },
        SkillItem {
            name: "Cloudinary".to_string(),
            years: "6 months".to_string(),
            category: "Others".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/Cloudinary.svg".to_string()),
            picture_color: Some("#3448C5".to_string())
        },
        SkillItem {
            name: "RSend".to_string(),
            years: "6 months".to_string(),
            category: "Others".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/RSend.svg".to_string()),
            picture_color: Some("#000000".to_string())
        },
        SkillItem {
            name: "DICOM".to_string(),
            years: "6 months".to_string(),
            category: "Others".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/DICOM.svg".to_string()),
            picture_color: Some("#1D4ED8".to_string())
        },
        SkillItem {
            name: "FHIR".to_string(),
            years: "6 months".to_string(),
            category: "Others".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/FHIR.svg".to_string()),
            picture_color: Some("#E44D26".to_string())
        },
    ];
    pub static ref OTHER_SKILL_DEFS: Vec<SkillItem> = vec![
        SkillItem {
            name: "VS Code(Typescript)".to_string(),
            years: "2 year".to_string(),
            category: "Others".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/VSCode.svg".to_string()),
            picture_color: Some("#007ACC".to_string())
        },
        SkillItem {
            name: "IntelliJ IDEA(Typescript)".to_string(),
            years: "1 year".to_string(),
            category: "Others".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/IntelliJIDEA.svg".to_string()),
            picture_color: Some("#000000".to_string())
        },
        SkillItem {
            name: "Eclipse(Java,Javascript)".to_string(),
            years: "1 year".to_string(),
            category: "Others".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/Eclipse.svg".to_string()),
            picture_color: Some("#0089D6".to_string())
        },
        SkillItem {
            name: "Spring Tool Suite4(Java,Javascript)".to_string(),
            years: "4 months".to_string(),
            category: "Others".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/SpringToolSuite.svg".to_string()),
            picture_color: Some("#6DB33F".to_string())
        },
        SkillItem {
            name: "Visual Studio(C,C++,C#)".to_string(),
            years: "8 months".to_string(),
            category: "Others".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/Visual-Studio-C-Cpp-CSharp.svg".to_string()),
            picture_color: Some("#5C2D91".to_string())
        },
        SkillItem {
            name: "Git(Tortoise Git)".to_string(),
            years: "2 year".to_string(),
            category: "Others".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/Git-Tortoise-Git.svg".to_string()),
            picture_color: Some("#F05032".to_string())
        },
        SkillItem {
            name: "Github".to_string(),
            years: "2 year".to_string(),
            category: "Others".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/Github.svg".to_string()),
            picture_color: Some("#181717".to_string())
        },
        SkillItem {
            name: "Swagger".to_string(),
            years: "6 months".to_string(),
            category: "Others".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/Swagger.svg".to_string()),
            picture_color: Some("#85EA2D".to_string())
        },
        SkillItem {
            name: "Backlog".to_string(),
            years: "1 year".to_string(),
            category: "Others".to_string(),
            proficiency: Some("onBusiness".to_string()),
            picture: Some("/icons/Backlog.svg".to_string()),
            picture_color: Some("#181717".to_string())
        },
        SkillItem {
            name: "Bun".to_string(),
            years: "self-study".to_string(),
            category: "Others".to_string(),
            proficiency: Some("self-study".to_string()),
            picture: Some("/icons/Bun.svg".to_string()),
            picture_color: Some("#000000".to_string())
        },
    ];
}
