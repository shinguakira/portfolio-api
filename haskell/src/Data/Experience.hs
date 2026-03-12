{-# LANGUAGE OverloadedStrings #-}

module Data.Experience where

import Model.Experience (WorkExperience(..))

workExperiencesJA :: [WorkExperience]
workExperiencesJA =
  [ WorkExperience
      { weCompany = "お客さま5"
      , weProjectOverview = "人材系プラットフォーム開発"
      , wePeriod = "2025年10月 - 現在"
      , weTeamSize = "4人"
      , weRole = "フルスタック開発者"
      , weManMonth = ""
      , weDescription =
          [ "社内運用の人材系プラットフォーム開発"
          ]
      , weArchivement =
          [ "未定"
          ]
      , weTechnologies =
          [ "TypeScript", "React", "Next.js", "Hono", "Drizzle", "Turborepo", "Zod"
          , "React Hook Form", "Vercel", "Cloudflare Workers", "PostgreSQL", "Supabase", "Github"
          ]
      }
  , WorkExperience
      { weCompany = "お客さま4"
      , weProjectOverview = "世界規模の眼科医療業務支援アプリ"
      , wePeriod = "2025年10月 - 現在"
      , weTeamSize = "4人"
      , weRole = "フルスタック開発者"
      , weManMonth = ""
      , weDescription =
          [ "アメリカ、ヨーロッパなどの世界規模で展開する眼科医療向けアプリ。AIを使った業務の補助も含む"
          ]
      , weArchivement =
          [ "subversionからgitへの移行"
          , "CI/CDパイプラインの構築"
          , "開発環境の改善"
          , "kiroなどを使ったAIエージェントを使ったAI駆動開発の導入と整備"
          , "仕様駆動開発の導入"
          ]
      , weTechnologies =
          [ "TypeScript", "React", "Vite", "Java", "Spring Boot", "Python", "FastAPI"
          , "Azure", "Azure Web Apps", "Azure DevOps", "Azure Pipelines", "Azure Repos"
          , "Whisper(local)", "Ollama", "TTS", "STT", "RAG", "pgvector", "FHIR", "DICOM"
          ]
      }
  , WorkExperience
      { weCompany = "お客さま4"
      , weProjectOverview = "社内ツール開発（AI業務効率化・チャットボット）"
      , wePeriod = "2025年10月 - 現在"
      , weTeamSize = "4人"
      , weRole = "フルスタック開発者"
      , weManMonth = ""
      , weDescription =
          [ "AIを使った業務効率化ツール、チャットボットの開発"
          ]
      , weArchivement =
          [ "subversionからgitへの移行"
          , "CI/CDパイプラインの構築"
          , "開発環境の改善"
          , "kiroなどを使ったAIエージェントを使ったAI駆動開発の導入と整備"
          , "仕様駆動開発の導入"
          ]
      , weTechnologies =
          [ "TypeScript", "React", "Vite", "Java", "Spring Boot", "Python", "FastAPI"
          , "Azure", "Azure Web Apps", "Azure DevOps", "Azure Pipelines", "Azure Repos"
          , "Whisper(local)", "Ollama", "TTS", "STT", "RAG", "pgvector"
          ]
      }
  , WorkExperience
      { weCompany = "お客さま5"
      , weProjectOverview = "コーチングマッチングサービスの開発"
      , wePeriod = "2025年3月 - (現在)"
      , weTeamSize = "10人"
      , weRole = "フロントエンド開発者"
      , weManMonth = ""
      , weDescription =
          [ "コーチングマッチングサービスの開発"
          , "Next.jsでのフロントエンド開発"
          , "デザイナーの方が作ったFigmaのデザインを元にページ作成"
          , "Figmaなしデザインでのモック提案からのフロントエンド開発"
          , "実際にサービスを使用した上で不備な箇合があればIssue作成改善提案"
          ]
      , weArchivement =
          [ "Sentryを使った監視、Github Actionsで呼ばれるCodeRabbitによるCI/CD上でのコードレビュー、metabaseでのユーザーの傾向調査など様々なライブラリ、ツールを使った環境での開発を行いました。"
          , "toCサービスとしてSEO観点にも考慮したNext.jsの実装を経験することができました。"
          , "初のデザイナーがいる環境での開発でしたが、色の名前などはFigmaに定義されているもので会話したりなど、誤解齟齬を減らしながら開発を行いました。"
          , "また、すべてのページ、すべての箇所についてデザイン案があるわけではないため、自身でいくつかのパターンでモックを作成したりしてデザイナーさんや、マネージャーの方にデザイン提案を行いました。"
          , "MUIからshadcn移行"
          ]
      , weTechnologies =
          [ "React", "TypeScript", "Next.js", "(Ruby)", "Material UI", "React Hook Form"
          , "GraphQL", "PostgreSQL", "zod", "NextAuth0", "codegen"
          , "Cloudinary", "Vercel", "Github", "RSend", "Metabase", "Redis"
          , "Sentry", "Figma", "Slack", "CodeRabbit"
          ]
      }
  , WorkExperience
      { weCompany = "お客さま4"
      , weProjectOverview = "医療ステレオカメラ自動評定システム"
      , wePeriod = "2025年7月 - 2025年9月"
      , weTeamSize = "2人"
      , weRole = "フルスタック開発者"
      , weManMonth = "3人月"
      , weDescription =
          [ "Reactベースでの Electronでのデスクトップ開発"
          , "外部のPythonモジュールおよび、exeモジュールを実行するためのインターフェース開発"
          ]
      , weArchivement = ["モダンなデザインや、新機能について積極的に提案しました。"]
      , weTechnologies =
          [ "React", "TypeScript", "tailwindcss", "shadcn", "Electron"
          , "Node.js", "vite", "vitest", "Python"
          ]
      }
  , WorkExperience
      { weCompany = "お客さま3"
      , weProjectOverview = "住宅ローンシステムのOracle クラウド移行"
      , wePeriod = "2025年3月 - 2025年6月"
      , weTeamSize = "10人"
      , weRole = "フルスタック開発者"
      , weManMonth = ""
      , weDescription =
          [ "Oracleクラウド移行および諸改善"
          , "認証方式変更"
          , "OracleDB→PostgresSQL移行"
          , "共通モジュール使用"
          ]
      , weArchivement =
          [ "既存の仕様の理解と共に、新規環境の仕様の理解を行い膨大な資料と有識者に確認を取りながら移行のための調査及び設計書作成を行いました。同時期に入ったメンバーで、現場に慣れしない技術面での困りごとなどをフォローし、プロジェクトを円滑に進めるのに貢献しました。"
          ]
      , weTechnologies =
          [ "Angular", "TypeScript", "PostgreSQL", "Oracle Cloud"
          , "AWS S3", "AWS Lambda", "Python", "Kubernetes"
          ]
      }
  , WorkExperience
      { weCompany = "お客さま2"
      , weProjectOverview = "お客さま情報検索、取得、確定APIの改修"
      , wePeriod = "2024年10月 - 2025年2月"
      , weTeamSize = "3人"
      , weRole = "フルスタック(基本設計仕様書作成、開発、テスト)"
      , weManMonth = "3,4人月"
      , weDescription =
          [ "一般の人がアクセスできる、某ガス会社に登録した会員情報に対する名義変更、支払い変更等を受け付けるシステムの改修"
          , "BtoC"
          , "リリースは1月現在、結合テストおよびペネトレーションテスト期間中、12/1時点では特に問題なし"
          ]
      , weArchivement =
          [ "前プロジェクト同様、仕様を理解し、各人の能力に合わせたタスク割り振りおよび、開発に携わった。"
          ]
      , weTechnologies = []
      }
  , WorkExperience
      { weCompany = "お客さま2"
      , weProjectOverview = "お客さまの声のシステム追加改修"
      , wePeriod = "2024年10月 - 2024年11月(20日)"
      , weTeamSize = "3人"
      , weRole = "フルスタック(基本設計仕様書作成、開発、テスト)"
      , weManMonth = "3,4人月"
      , weDescription =
          [ "2024年4月に納品、リリースしたシステムの追加改修"
          ]
      , weArchivement =
          [ "見積もりよりも合わせて必要だったため、見積もりを行い、見積もりより少し、早く完了し、リリース。特に問題の問い合わせ等なく、現在稼働中"
          ]
      , weTechnologies =
          [ "Java", "Springboot", "TypeScript", "React", "Git", "Github", "Swagger"
          ]
      }
  , WorkExperience
      { weCompany = "お客さま2"
      , weProjectOverview = "受付革新プロジェクト"
      , wePeriod = "2024年5月 - 2025年2月"
      , weTeamSize = "7-8"
      , weRole = "フルスタック(基本設計仕様書作成、開発、テスト)"
      , weManMonth = "15+人月"
      , weDescription =
          [ "一般の人がアクセスできる、某ガス会社に登録した会員情報に対する名義変更、支払い変更等を受け付けるシステムの改修"
          , "BtoC"
          , "リリースは1月現在、結合テストおよびペネトレーションテスト期間中、12/1時点では特に問題なし"
          ]
      , weArchivement =
          [ "前プロジェクト同様、仕様を理解し、各人の能力に合わせたタスク割り振りおよび、開発に携わった。"
          ]
      , weTechnologies =
          [ "Java", "Springboot", "TypeScript", "React", "Git", "Github", "Swagger"
          ]
      }
  , WorkExperience
      { weCompany = "お客さま2"
      , weProjectOverview = "お客さまの声システムの改修リプレイス"
      , wePeriod = "2024年1月 - 2024年4月(4か月)"
      , weTeamSize = "3-4"
      , weRole = "フルスタック(基本設計仕様書作成、開発、テスト)"
      , weManMonth = "15人月"
      , weDescription =
          [ "感謝やご不満といったお客様の声を社内のシステムに記録し、某ガス会社のグループで記録を参照、修正を行うことができるシステム。"
          , "法的な情報障壁に対応し、権限や所属に応じた複雑な情報障壁機能を有してシステム。"
          , "BtoB"
          ]
      , weArchivement =
          [ "チームの初期メンバーであり、社内に該当の技術スタックおよび業務知識を持つものがいない状態で、15 人月で見積もられた当プロジェクトを 2 人でこなし、軽微な問題はあれど、大きな問題もなく、不必要な増員もなくプロジェクトを終えることができた。工数に余裕ができたことで、1 か月後にプロジェクト加入したメンバーが、予定になかった追加の機能、画面の開発に着手、同時期に完了、リリースまで行うことができ、プロジェクトに貢献できた。取引先に、質問することでいち早く、某ガス会社の業務の流れを理解し、追加で要件定義が必要なものを洗い出したり、各人の能力を把握し、要望に対してのタスクの割り振りを行った。"
          ]
      , weTechnologies =
          [ "Java", "Springboot", "TypeScript", "React", "Git", "Github", "Swagger"
          ]
      }
  , WorkExperience
      { weCompany = "お客さま1"
      , weProjectOverview = "空港の電力監視制御システム MISE の改造"
      , wePeriod = "2023年6月 - 2023年12月(6か月)"
      , weTeamSize = "4-10"
      , weRole = "フルスタック(仕様書作成、開発、テスト、テスト環境構築)"
      , weManMonth = "不明(2021年頃スタート)"
      , weDescription =
          [ "計12以上の各空港や能力評価センターなどの電力監視制御システムの改造"
          , "一部滑走路の制御ソフトウェア(滑走路の点滅)の改修"
          , "航空局での結合テスト時の現地での問題対応"
          , "日立、東芝、富士電機、NEC、沖電気の複数の会社で構成されるプロジェクト"
          , "担当空港(宝港)は、成田、札幌、長崎、南紀白浜、奄美大島、松山、岡山など"
          , "株式会社日立産業制御ソリューションズの作業場にて共同開発"
          ]
      , weArchivement =
          [ "プロジェクトに途中参加にも関わらず、ソフトのソース、仕様を理解し、開発に貢献。プロジェクトの承認が決まる、技術管理センター(TMC)でのソフトウェア品質チェックにソフト側の代表として参加し、現地にて起こった問題を解決しました。"
          ]
      , weTechnologies =
          [ "C", "C++", "C#", "Java", "JavaScript", "Springboot"
          , "Visual Studio 2010,2015,2019", "PDB", "HDB"
          ]
      }
  , WorkExperience
      { weCompany = "お客さま1"
      , weProjectOverview = "PLC通信TCP/IPプログラム"
      , wePeriod = "2023年4月 - 2023年6月(2ヶ月)"
      , weTeamSize = "1"
      , weRole = "フルスタック(仕様書作成、開発、テスト)"
      , weManMonth = "9人月"
      , weDescription =
          [ "電力監視のための PLC などの機器と Modbus というプロトコルで通信するプログラムの開発 "
          , "ソケット通信をベースに作成"
          ]
      , weArchivement =
          [ "本来は、コンソールでのプログラムの開発だったが、時間に余裕があったため、Window Form を使ってGUI の画面があるプログラムを改めて作成"
          ]
      , weTechnologies =
          [ "C#", "Visual Studio2017", "Windows Form", "Modbus", "Omron製PLC"
          ]
      }
  , WorkExperience
      { weCompany = "株式会社ホテルテラスザスクエア日立"
      , weProjectOverview = "フロント(アルバイト)"
      , wePeriod = "2022年1月 - 2023年3月"
      , weTeamSize = ""
      , weRole = ""
      , weManMonth = ""
      , weDescription =
          [ "フロントでのお客さま対応(海外のお客さま含む)"
          , "お客さまデータの管理"
          , "より良いサービスを目指すためのアイデア提案または試作作成"
          ]
      , weArchivement = [""]
      , weTechnologies = []
      }
  , WorkExperience
      { weCompany = "iMobilePhoneX(アルバイト)"
      , weProjectOverview = "英語日本語翻訳(アルバイト)"
      , wePeriod = "2019年 - 2020年"
      , weTeamSize = ""
      , weRole = ""
      , weManMonth = ""
      , weDescription =
          [ "Amazonや他のネットショッピングでスマートフォンの並行輸入品を販売している会社のお客さまのメッセージを翻訳"
          , "不具合品があった場合の、検品、一時的な保管"
          , "日本語返信テンプレートの作成"
          , "電話対応、Amazonの出品者の代表番号にかかってくる電話を対応"
          ]
      , weArchivement = [""]
      , weTechnologies = []
      }
  , WorkExperience
      { weCompany = "Freelancer.com(フリーランス)"
      , weProjectOverview = "翻訳フリーランス"
      , wePeriod = "2019年 - 2020年"
      , weTeamSize = ""
      , weRole = ""
      , weManMonth = ""
      , weDescription =
          [ "英語日本語翻訳"
          , "動画、Webサイト、軍事はがきなどの翻訳"
          ]
      , weArchivement = [""]
      , weTechnologies = []
      }
  , WorkExperience
      { weCompany = "家庭教師(アルバイト)"
      , weProjectOverview = "数学、英語中心の家庭教師"
      , wePeriod = "2019年 - 2021年"
      , weTeamSize = ""
      , weRole = ""
      , weManMonth = ""
      , weDescription =
          [ "小学生、中学生一人ずつ指導"
          , "小学生は私立の中学受験を教えていた"
          ]
      , weArchivement =
          [ "割り算にも苦戦していた生徒を私立の中学の受験に合格させた"
          ]
      , weTechnologies = []
      }
  ]

workExperiencesEN :: [WorkExperience]
workExperiencesEN =
  [ WorkExperience
      { weCompany = "Customer5"
      , weProjectOverview = "HR Platform Development"
      , wePeriod = "2025-10 - current"
      , weTeamSize = "4"
      , weRole = "Full Stack Developer"
      , weManMonth = ""
      , weDescription =
          [ "Development of an internal HR platform"
          ]
      , weArchivement =
          [ "TBD"
          ]
      , weTechnologies =
          [ "TypeScript", "React", "Next.js", "Hono", "Drizzle", "Turborepo", "Zod"
          , "React Hook Form", "Vercel", "Cloudflare Workers", "PostgreSQL", "Supabase", "Github"
          ]
      }
  , WorkExperience
      { weCompany = "Customer4"
      , weProjectOverview = "Global Ophthalmology Medical Practice Support Application"
      , wePeriod = "2025-10 - current"
      , weTeamSize = "4"
      , weRole = "Full Stack Developer"
      , weManMonth = ""
      , weDescription =
          [ "Application for ophthalmology medical practices deployed globally in the US, Europe, and other regions. Includes AI-powered business assistance"
          ]
      , weArchivement =
          [ "Migration from Subversion to Git"
          , "CI/CD pipeline construction"
          , "Development environment improvement"
          , "Introduction and setup of AI-driven development using AI agents such as Kiro"
          , "Introduction of specification-driven development"
          ]
      , weTechnologies =
          [ "TypeScript", "React", "Vite", "Java", "Spring Boot", "Python", "FastAPI"
          , "Azure", "Azure Web Apps", "Azure DevOps", "Azure Pipelines", "Azure Repos"
          , "Whisper(local)", "Ollama", "TTS", "STT", "RAG", "pgvector", "FHIR", "DICOM"
          ]
      }
  , WorkExperience
      { weCompany = "Customer4"
      , weProjectOverview = "Internal Tools Development (AI Business Efficiency & Chatbot)"
      , wePeriod = "2025-10 - current"
      , weTeamSize = "4"
      , weRole = "Full Stack Developer"
      , weManMonth = ""
      , weDescription =
          [ "Development of AI-powered business efficiency tools and chatbots"
          ]
      , weArchivement =
          [ "Migration from Subversion to Git"
          , "CI/CD pipeline construction"
          , "Development environment improvement"
          , "Introduction and setup of AI-driven development using AI agents such as Kiro"
          , "Introduction of specification-driven development"
          ]
      , weTechnologies =
          [ "TypeScript", "React", "Vite", "Java", "Spring Boot", "Python", "FastAPI"
          , "Azure", "Azure Web Apps", "Azure DevOps", "Azure Pipelines", "Azure Repos"
          , "Whisper(local)", "Ollama", "TTS", "STT", "RAG", "pgvector"
          ]
      }
  , WorkExperience
      { weCompany = "Customer5"
      , weProjectOverview = "Development of Coaching Matching Service"
      , wePeriod = "2025-03 - current"
      , weTeamSize = "10"
      , weRole = "Frontend Developer"
      , weManMonth = ""
      , weDescription =
          [ "Development of a coaching matching service"
          , "Frontend development with Next.js"
          , "Creating pages based on designs made by designers in Figma"
          , "Frontend development from mock proposals for designs without Figma"
          , "Creating issues and suggesting improvements after using the service to identify inconveniences"
          ]
      , weArchivement =
          [ "I worked in an environment using various libraries and tools, including Sentry for monitoring, CodeRabbit for code reviews in CI/CD called by GitHub Actions, and Metabase for analyzing user trends."
          , "I gained experience implementing Next.js with SEO considerations for a B2C service."
          , "This was my first time working in an environment with designers, and I reduced misunderstandings by communicating using color names defined in Figma."
          , "Since design proposals weren't available for all pages and sections, I created multiple mock patterns and proposed designs to designers and managers."
          , "Migration from MUI to shadcn"
          ]
      , weTechnologies =
          [ "React", "TypeScript", "Next.js", "(Ruby)", "Material UI", "React Hook Form"
          , "GraphQL", "PostgreSQL", "zod", "NextAuth0", "codegen"
          , "Cloudinary", "Vercel", "Github", "RSend", "Metabase", "Redis"
          , "Sentry", "Figma", "Slack", "CodeRabbit"
          ]
      }
  , WorkExperience
      { weCompany = "Customer4"
      , weProjectOverview = "Medical Stereo Camera Automatic Evaluation System"
      , wePeriod = "2025-07 - 2025-09"
      , weTeamSize = "2"
      , weRole = "Full Stack Developer"
      , weManMonth = "3 person-month"
      , weDescription =
          [ "Desktop development with React"
          , "Development of interfaces to run external Python modules and exe modules"
          ]
      , weArchivement = ["Actively proposed modern designs and new features."]
      , weTechnologies =
          [ "React", "TypeScript", "tailwindcss", "shadcn", "Electron"
          , "Node.js", "vite", "vitest", "Python"
          ]
      }
  , WorkExperience
      { weCompany = "Customer3"
      , weProjectOverview = "Mortgage System Migration to Oracle Cloud"
      , wePeriod = "2025-03 - 2025-06"
      , weTeamSize = "10"
      , weRole = "Full Stack Developer"
      , weManMonth = ""
      , weDescription =
          [ "Oracle Cloud migration and various improvements"
          , "Authentication method changes"
          , "Migration from OracleDB to PostgreSQL"
          , "Implementation of common modules"
          ]
      , weArchivement =
          [ "I understood both existing and new environment specifications while conducting research and creating design documents for migration by consulting extensive documentation and subject matter experts. I also supported team members who joined at the same time with technical issues, contributing to the smooth progress of the project."
          ]
      , weTechnologies =
          [ "Angular", "TypeScript", "PostgreSQL", "Oracle Cloud"
          , "AWS S3", "AWS Lambda", "Python", "Kubernetes"
          ]
      }
  , WorkExperience
      { weCompany = "Customer2"
      , weProjectOverview = "Customer Information Search and API Modification"
      , wePeriod = "2024-10 - 2025-02"
      , weTeamSize = "3"
      , weRole = "Full Stack Developer (Specification, Development, Testing)"
      , weManMonth = "3,4 person-month"
      , weDescription =
          [ "Modification of a system that allows general users to request name changes and payment method changes for member information registered with a gas company"
          , "B2C service"
          , "Release is currently in integration testing and penetration testing phase. No issues as of December 1"
          ]
      , weArchivement =
          [ "Similar to the previous project, understood the specifications, assigned tasks according to each person's abilities, and contributed to development"
          ]
      , weTechnologies = []
      }
  , WorkExperience
      { weCompany = "Customer2"
      , weProjectOverview = "Voice of Customer System Additional Modifications"
      , wePeriod = "2024-10 - 2024-11(20 days)"
      , weTeamSize = "3"
      , weRole = "Full Stack Developer (Specification, Development, Testing)"
      , weManMonth = "3,4 person-month"
      , weDescription =
          [ "Additional modifications to the system delivered and released in April 2024"
          ]
      , weArchivement =
          [ "Completed the project ahead of the estimated schedule, including the estimation work that was required. Released without issues and currently in operation"
          ]
      , weTechnologies =
          [ "Java", "Springboot", "TypeScript", "React", "Git", "Github", "Swagger"
          ]
      }
  , WorkExperience
      { weCompany = "Customer2"
      , weProjectOverview = "Reception Innovation Project"
      , wePeriod = "2024-05 - 2025-02"
      , weTeamSize = "7-8"
      , weRole = "Full Stack Developer (Specification, Development, Testing)"
      , weManMonth = "15+ person-month"
      , weDescription =
          [ "Modification of a system that allows general users to request name changes and payment method changes for member information registered with a gas company"
          , "B2C service"
          , "Release is currently in integration testing and penetration testing phase. No issues as of December 1"
          ]
      , weArchivement =
          [ "Similar to the previous project, understood the specifications, assigned tasks according to each person's abilities, and contributed to development"
          ]
      , weTechnologies =
          [ "Java", "Springboot", "TypeScript", "React", "Git", "Github", "Swagger"
          ]
      }
  , WorkExperience
      { weCompany = "Customer2"
      , weProjectOverview = "Voice of Customer System Renovation and Replacement"
      , wePeriod = "2024-01 - 2024-04(4 months)"
      , weTeamSize = "3-4"
      , weRole = "Full Stack Developer (Specification, Development, Testing)"
      , weManMonth = "15 person-month"
      , weDescription =
          [ "A system that records customer feedback, both appreciation and complaints, in an internal system, allowing a gas company group to reference and modify records"
          , "System with strict information segregation features according to authority and affiliation, complying with legal information barriers"
          , "B2B service"
          ]
      , weArchivement =
          [ "As an initial team member, completed a project estimated at 15 person-months with just 2 people, despite no one in the company having the relevant technology stack or business knowledge. Finished with only minor issues and without unnecessary additional staffing. The efficiency created capacity for a member who joined a month later to develop additional unplanned features and screens, completing and releasing them simultaneously, contributing to the project's success. Quickly understood the gas company's business flow by asking questions to the client, identified additional requirements, assessed each person's abilities, and assigned tasks according to requests."
          ]
      , weTechnologies =
          [ "Java", "Springboot", "TypeScript", "React", "Git", "Github", "Swagger"
          ]
      }
  , WorkExperience
      { weCompany = "Customer1"
      , weProjectOverview = "Airport Power Monitoring and Control System (MISE) Modification"
      , wePeriod = "2023-06 - 2023-12(6 months)"
      , weTeamSize = "4-10"
      , weRole = "Full Stack Developer (Specification, Development, Testing, Test Environment Setup)"
      , weManMonth = "Unknown(2021 started)"
      , weDescription =
          [ "Modification of power monitoring and control systems for more than 12 airports and performance evaluation centers"
          , "Modification of lighting control software (runway flashing lights)"
          , "On-site problem resolution during integration testing at the Civil Aviation Bureau"
          , "Project involving multiple companies including Hitachi, Toshiba, Fuji Electric, NEC, and Oki Electric"
          , "Responsible for airports including Narita, Sapporo, Nagasaki, Nanki-Shirahama, Amami Oshima, Matsuyama, and Okayama"
          , "Collaborative development at Hitachi Industry & Control Solutions, Ltd. workplace"
          ]
      , weArchivement =
          [ "Despite joining the project midway, understood the software source code and specifications, contributing to development. Participated as a software representative in the Technical Management Center (TMC) software quality check, which determined the project's approval, and resolved issues that occurred on-site."
          ]
      , weTechnologies =
          [ "C", "C++", "C#", "Java", "JavaScript", "Springboot"
          , "Visual Studio 2010,2015,2019", "PDB", "HDB"
          ]
      }
  , WorkExperience
      { weCompany = "Customer1"
      , weProjectOverview = "PLC Communication TCP/IP Program"
      , wePeriod = "2023-04 - 2023-06(2 months)"
      , weTeamSize = "1"
      , weRole = "Full Stack Developer (Specification, Development, Testing)"
      , weManMonth = "9 person-month"
      , weDescription =
          [ "Development of a program that communicates with devices such as PLCs for power monitoring using the Modbus protocol"
          , "Created based on socket communication"
          ]
      , weArchivement =
          [ "Originally planned as a console program development, but due to having extra time, created a program with a GUI screen using Windows Forms"
          ]
      , weTechnologies =
          [ "C#", "Visual Studio2017", "Windows Form", "Modbus", "Omron製PLC"
          ]
      }
  , WorkExperience
      { weCompany = "株式会社ホテルテラスザスクエア日立"
      , weProjectOverview = "Hotel Front Desk (Part-time)"
      , wePeriod = "2022-01 - 2023-03"
      , weTeamSize = ""
      , weRole = ""
      , weManMonth = ""
      , weDescription =
          [ "Customer service at the front desk (including international guests)"
          , "Management of customer data"
          , "Proposal of ideas or creation of prototypes to improve service"
          ]
      , weArchivement =
          [ "Improved efficiency of document creation using Excel. Created manuals for handling English-speaking customers and managed system migration, completing the tasks without issues"
          ]
      , weTechnologies = []
      }
  , WorkExperience
      { weCompany = "iMobilePhoneX(アルバイト)"
      , weProjectOverview = "English-Japanese Translation (Part-time)"
      , wePeriod = "2019 - 2020"
      , weTeamSize = ""
      , weRole = ""
      , weManMonth = ""
      , weDescription =
          [ "Translated customer messages for a company selling parallel imported smartphones on Amazon and other online shopping platforms"
          , "Inspection and temporary storage of defective products"
          , "Creation of Japanese reply templates"
          , "Phone support, handling calls to the Amazon seller's representative number"
          ]
      , weArchivement = [""]
      , weTechnologies = []
      }
  , WorkExperience
      { weCompany = "Freelancer.com(フリーランス)"
      , weProjectOverview = "Freelance Translator"
      , wePeriod = "2019 - 2020"
      , weTeamSize = ""
      , weRole = ""
      , weManMonth = ""
      , weDescription =
          [ "English-Japanese translation"
          , "Translation of videos, websites, military postcards, etc."
          ]
      , weArchivement = [""]
      , weTechnologies = []
      }
  , WorkExperience
      { weCompany = "家庭教師(アルバイト)"
      , weProjectOverview = "Math and English Tutor (Part-time)"
      , wePeriod = "2019 - 2021"
      , weTeamSize = ""
      , weRole = ""
      , weManMonth = ""
      , weDescription =
          [ "Tutored one elementary school student and one junior high school student"
          , "The elementary school student was preparing for a private junior high school entrance exam"
          ]
      , weArchivement =
          [ "Helped a student who was struggling with division to pass the entrance exam for a private junior high school"
          ]
      , weTechnologies = []
      }
  ]
