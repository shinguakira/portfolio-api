package data

import "github.com/shinguakira/portfolio-api-go/model"

var WorkExperiencesJA = []model.WorkExperience{
	{
		Company:  "お客さま5",
		Period:   "2025年10月 - 現在",
		TeamSize: "4人",
		ManMonth: "",
		Technologies: []string{
			"TypeScript", "React", "Next.js", "Hono", "Drizzle", "Turborepo", "Zod", "React Hook Form",
			"Vercel", "Cloudflare Workers", "PostgreSQL", "Supabase", "Github",
		},
		ProjectOverview: "人材系プラットフォーム開発",
		Role:            "フルスタック開発者",
		Description: []string{
			"社内運用の人材系プラットフォーム開発",
		},
		Archivement: []string{
			"未定",
		},
	},
	{
		Company:  "お客さま4",
		Period:   "2025年10月 - 現在",
		TeamSize: "4人",
		ManMonth: "",
		Technologies: []string{
			"TypeScript", "React", "Vite", "Java", "Spring Boot", "Python", "FastAPI",
			"Azure", "Azure Web Apps", "Azure DevOps", "Azure Pipelines", "Azure Repos",
			"Whisper(local)", "Ollama", "TTS", "STT", "RAG", "pgvector", "FHIR", "DICOM",
		},
		ProjectOverview: "世界規模の眼科医療業務支援アプリ",
		Role:            "フルスタック開発者",
		Description: []string{
			"アメリカ、ヨーロッパなどの世界規模で展開する眼科医療向けアプリ。AIを使った業務の補助も含む",
		},
		Archivement: []string{
			"subversionからgitへの移行",
			"CI/CDパイプラインの構築",
			"開発環境の改善",
			"kiroなどを使ったAIエージェントを使ったAI駆動開発の導入と整備",
			"仕様駆動開発の導入",
		},
	},
	{
		Company:  "お客さま4",
		Period:   "2025年10月 - 現在",
		TeamSize: "4人",
		ManMonth: "",
		Technologies: []string{
			"TypeScript", "React", "Vite", "Java", "Spring Boot", "Python", "FastAPI",
			"Azure", "Azure Web Apps", "Azure DevOps", "Azure Pipelines", "Azure Repos",
			"Whisper(local)", "Ollama", "TTS", "STT", "RAG", "pgvector",
		},
		ProjectOverview: "社内ツール開発（AI業務効率化・チャットボット）",
		Role:            "フルスタック開発者",
		Description: []string{
			"AIを使った業務効率化ツール、チャットボットの開発",
		},
		Archivement: []string{
			"subversionからgitへの移行",
			"CI/CDパイプラインの構築",
			"開発環境の改善",
			"kiroなどを使ったAIエージェントを使ったAI駆動開発の導入と整備",
			"仕様駆動開発の導入",
		},
	},
	{
		Company:  "お客さま5",
		Period:   "2025年3月 - (現在)",
		TeamSize: "10人",
		ManMonth: "",
		Technologies: []string{
			"React", "TypeScript", "Next.js", "(Ruby)", "Material UI", "React Hook Form",
			"GraphQL", "PostgreSQL", "zod", "NextAuth0", "codegen",
			"Cloudinary", "Vercel", "Github", "RSend", "Metabase", "Redis",
			"Sentry", "Figma", "Slack", "CodeRabbit",
		},
		ProjectOverview: "コーチングマッチングサービスの開発",
		Role:            "フルスタック開発者",
		Description: []string{
			"コーチングマッチングサービスの開発",
			"Next.jsでのフロントエンド開発",
			"デザイナーの方が作ったFigmaのデザインを元にページ作成",
			"Figmaなしデザインでのモック提案からのフロントエンド開発",
			"実際にサービスを使用した上で不便な場合があればIssue作成改善着手提案",
		},
		Archivement: []string{
			"Sentryを使った監視、Github Actionsで呼ばれるCodeRabbitによるCI/CD上でのコードレビュー、metabaseでのユーザーの傾向調査など様々なライブラリ、ツールを使った環境での開発を行いました。",
			"toCサービスとしてSEO観点にも考慮したNext.jsの実装を経験することができました。",
			"初のデザイナーがいる環境での開発でしたが、色の名前などはFigmaに定義されているもので会話したりなど、認識齟齬を減らしながら開発を行いました。",
			"また、すべてのページ、すべての箇所についてデザイン案があるわけではないため、自身でいくつかのパターンでモックを作成したりしてデザイナーさんや、マネージャーの方にデザイン提案を行いました。",
		},
	},
	{
		Company:  "お客さま4",
		Period:   "2025年7月 - 現在",
		TeamSize: "2人",
		ManMonth: "3人月",
		Technologies: []string{
			"React", "TypeScript", "tailwindcss", "shadcn", "Electron",
			"Node.js", "vite", "vitest", "Python",
		},
		ProjectOverview: "医療ステレオカメラ自動評定システム",
		Role:            "フルスタック開発者",
		Description: []string{
			"ReactベースでのElectronでのデスクトップ開発",
			"外部のPythonモジュールおよび、exeモジュールを実行するためのインターフェース開発",
		},
		Archivement: []string{
			"未定",
		},
	},
	{
		Company:  "お客さま3",
		Period:   "2025年3月 - 2025年6月",
		TeamSize: "10人",
		ManMonth: "",
		Technologies: []string{
			"Angular", "TypeScript", "PostgreSQL", "Oracle Cloud",
			"AWS S3", "AWS Lambda", "Python", "Kubernetes",
		},
		ProjectOverview: "住宅ローンシステムのOracleクラウド移行",
		Role:            "フルスタック開発者",
		Description: []string{
			"Oracleクラウド移行および諸改善",
			"認証方式変更",
			"OracleDB→PostgresSQL移行",
			"共通モジュール使用",
		},
		Archivement: []string{
			"既存の仕様の理解と共に、新規環境の仕様の理解を行い膨大な資料と有識者に確認を取りながら移行のための調査及び設計書作成を行いました。同時期に入ったメンバーで、現場に依存しない技術面での困りごとなどをフォローし、プロジェクトを円滑に進めるのに貢献しました。",
		},
	},
	{
		Company:         "お客さま2",
		Period:          "2024年10月 - 2025年2月",
		TeamSize:        "3人",
		ManMonth:        "3,4人月",
		Technologies:    []string{},
		ProjectOverview: "お客さま情報検索、取得、特定APIの改修",
		Role:            "フルスタック(基本詳細仕様書作成、開発、テスト)",
		Description: []string{
			"一般の人がアクセスできる、某ガス会社に登録した会員情報に関する名義変更、支払い変更等を受け付けるシステムの改修",
			"BtoC",
			"リリースは1月現在、結合テストおよびペネトレーションテスト期間中。12/1時点では特に問題なし",
		},
		Archivement: []string{
			"前プロジェクト同様、仕様を理解し、各人の能力に合わせたタスク割り振りおよび、開発に携わった。",
		},
	},
	{
		Company:  "お客さま2",
		Period:   "2024年10月 - 2024年11月(20日)",
		TeamSize: "3人",
		ManMonth: "3,4人月",
		Technologies: []string{
			"Java", "Springboot", "TypeScript", "React", "Git", "Github", "Swagger",
		},
		ProjectOverview: "お客さまの声のシステム追加改修",
		Role:            "フルスタック(基本詳細仕様書作成、開発、テスト)",
		Description: []string{
			"2024年4月に納品、リリースしたシステムの追加改修",
		},
		Archivement: []string{
			"見積もりも合わせて必要だったため、見積もりを行い、見積もりより少し、早く完了し、リリース。特に問題の問い合わせ等なく、現在稼働中",
		},
	},
	{
		Company:  "お客さま2",
		Period:   "2024年5月 - 2025年2月",
		TeamSize: "7-8人",
		ManMonth: "15+人月",
		Technologies: []string{
			"Java", "Springboot", "TypeScript", "React", "Git", "Github", "Swagger",
		},
		ProjectOverview: "受付革新プロジェクト",
		Role:            "フルスタック(基本詳細仕様書作成、開発、テスト)",
		Description: []string{
			"一般の人がアクセスできる、某ガス会社に登録した会員情報に関する名義変更、支払い変更等を受け付けるシステムの改修",
			"BtoC",
			"リリースは1月現在、結合テストおよびペネトレーションテスト期間中。12/1時点では特に問題なし",
		},
		Archivement: []string{
			"前プロジェクト同様、仕様を理解し、各人の能力に合わせたタスク割り振りおよび、開発に携わった。",
		},
	},
	{
		Company:  "お客さま2",
		Period:   "2024年1月 - 2024年4月(4か月)",
		TeamSize: "3-4人",
		ManMonth: "15人月",
		Technologies: []string{
			"Java", "Springboot", "TypeScript", "React", "Git", "Github", "Swagger",
		},
		ProjectOverview: "お客さまの声システムの改修リプレイス",
		Role:            "フルスタック(基本詳細仕様書作成、開発、テスト)",
		Description: []string{
			"感謝やご不満といったお客様の声を社内のシステムに記録し、某ガス会社のグループで記録を参照、修正を行うことができるシステム。",
			"法的な情報遮断に対応し、権限や所属に応じた厳格な情報遮断機能を有したシステム。",
			"BtoB",
		},
		Archivement: []string{
			"チームの初期メンバーであり、社内に該当の技術スタックおよび業務知識を持つものがいない状態で、15 人月で見積もられた当プロジェクトを 2 人でこなし、軽微な問題はあれど、大きな問題もなく、不必要な増員もなくプロジェクトを終えることができた。工数に余裕ができたことで、1 か月後にプロジェクト加入したメンバーが、予定になかった追加の機能、画面の開発に着手、同時期に完了、リリースまで行うことができ、プロジェクトに貢献できた。取引先に、質問することでいち早く、某ガス会社の業務の流れを理解し、追加で要件定義が必要なものを洗い出したり、各人の能力を把握し、要望に対してのタスクの割り振りを行った。",
		},
	},
	{
		Company:  "お客さま1",
		Period:   "2023年6月 - 2023年12月(6か月)",
		TeamSize: "4-10人",
		ManMonth: "不明(2021年頃スタート)",
		Technologies: []string{
			"C", "C++", "C#", "Java", "JavaScript", "Springboot",
			"Visual Studio 2010,2015,2019", "PDB", "HDB",
		},
		ProjectOverview: "空港の電力監視制御システム MISE の改造",
		Role:            "フルスタック(仕様書作成、開発、テスト、テスト環境構築)",
		Description: []string{
			"計12以上の各空港や性能評価センターなどの電力監視制御システムの改造",
			"一部灯電の制御ソフトウェア(滑走路の点滅)の改修",
			"航空局での結合テスト時の現地での問題対応",
			"日立、東芝、富士電機、NEC、沖電気の複数の会社で構成されるプロジェクト",
			"担当空港(官署)は、成田、札幌、長崎、南紀白浜、奄美大島、松山、岡山など",
			"株式会社日立産業制御ソリューションズの作業場にて共同開発",
		},
		Archivement: []string{
			"プロジェクトに途中参加にも関わらず、ソフトのソース、仕様を理解し、開発に貢献。プロジェクトの是非が決まる、技術管理センター(TMC)でのソフトウェア品質チェックにソフト側の代表として参加し、現地にて起こった問題を解決しました。",
		},
	},
	{
		Company:  "お客さま1",
		Period:   "2023年4月 - 2023年6月(2ヶ月)",
		TeamSize: "1人",
		ManMonth: "9人月",
		Technologies: []string{
			"C#", "Visual Studio2017", "Windows Form", "Modbus", "Omron製PLC",
		},
		ProjectOverview: "PLC通信TCP/IPプログラム",
		Role:            "フルスタック(仕様書作成、開発、テスト)",
		Description: []string{
			"電力監視のための PLC などの機器と Modbus というプロトコルで通信するプログラムの開発 ",
			"ソケット通信をベースに作成",
		},
		Archivement: []string{
			"本来は、コンソールでのプログラムの開発だったが、時間に余裕があったため、Window Form を使ってGUI の画面があるプログラムを改めて作成",
		},
	},
	{
		Company:         "株式会社ホテルテラスザスクエア日立",
		Period:          "2022年1月 - 2023年3月",
		TeamSize:        "",
		ManMonth:        "",
		Technologies:    []string{},
		ProjectOverview: "フロント(アルバイト)",
		Role:            "",
		Description: []string{
			"フロントでのお客さま対応(海外のお客さま含む)",
			"お客さまデータの管理",
			"より良いサービスを目指すためのアイデア提案または試作作成",
		},
		Archivement: []string{
			"",
		},
	},
	{
		Company:         "iMobilePhoneX(アルバイト)",
		Period:          "2019- 約1年",
		TeamSize:        "",
		ManMonth:        "",
		Technologies:    []string{},
		ProjectOverview: "英語日本語翻訳(アルバイト)",
		Role:            "",
		Description: []string{
			"Amazonや他のネットショッピングでスマートフォンの並行輸入品を販売している会社のお客さまのメッセージを翻訳",
			"不具合品があった場合の、検品、一時的な保管",
			"日本語返信テンプレートの作成",
			"電話対応、Amazonの出品者の代表番号にかかってくる電話を対応",
		},
		Archivement: []string{
			"",
		},
	},
	{
		Company:         "Freelancer.com(フリーランス)",
		Period:          "2019- ",
		TeamSize:        "",
		ManMonth:        "",
		Technologies:    []string{},
		ProjectOverview: "翻訳フリーランス",
		Role:            "",
		Description: []string{
			"英語日本語翻訳",
			"動画、Webサイト、軍事はがきなどの翻訳",
		},
		Archivement: []string{
			"",
		},
	},
	{
		Company:         "家庭教師(アルバイト)",
		Period:          "2019 -",
		TeamSize:        "",
		ManMonth:        "",
		Technologies:    []string{},
		ProjectOverview: "数学、英語中心の家庭教師",
		Role:            "",
		Description: []string{
			"小学生、中学生一人ずつ指導",
			"小学生は私立の中学受験を控えていた",
		},
		Archivement: []string{
			"割り算にも苦戦していた生徒を私立の中学の受験に合格させた",
		},
	},
}

var WorkExperiencesEN = []model.WorkExperience{
	{
		Company:  "Customer5",
		Period:   "2025-10 - current",
		TeamSize: "4",
		ManMonth: "",
		Technologies: []string{
			"TypeScript", "React", "Next.js", "Hono", "Drizzle", "Turborepo", "Zod", "React Hook Form",
			"Vercel", "Cloudflare Workers", "PostgreSQL", "Supabase", "Github",
		},
		ProjectOverview: "HR Platform Development",
		Role:            "Full Stack Developer",
		Description: []string{
			"Development of an internal HR platform",
		},
		Archivement: []string{
			"TBD",
		},
	},
	{
		Company:  "Customer4",
		Period:   "2025-10 - current",
		TeamSize: "4",
		ManMonth: "",
		Technologies: []string{
			"TypeScript", "React", "Vite", "Java", "Spring Boot", "Python", "FastAPI",
			"Azure", "Azure Web Apps", "Azure DevOps", "Azure Pipelines", "Azure Repos",
			"Whisper(local)", "Ollama", "TTS", "STT", "RAG", "pgvector", "FHIR", "DICOM",
		},
		ProjectOverview: "Global Ophthalmology Medical Practice Support Application",
		Role:            "Full Stack Developer",
		Description: []string{
			"Application for ophthalmology medical practices deployed globally in the US, Europe, and other regions. Includes AI-powered business assistance",
		},
		Archivement: []string{
			"Migration from Subversion to Git",
			"CI/CD pipeline construction",
			"Development environment improvement",
			"Introduction and setup of AI-driven development using AI agents such as Kiro",
			"Introduction of specification-driven development",
		},
	},
	{
		Company:  "Customer4",
		Period:   "2025-10 - current",
		TeamSize: "4",
		ManMonth: "",
		Technologies: []string{
			"TypeScript", "React", "Vite", "Java", "Spring Boot", "Python", "FastAPI",
			"Azure", "Azure Web Apps", "Azure DevOps", "Azure Pipelines", "Azure Repos",
			"Whisper(local)", "Ollama", "TTS", "STT", "RAG", "pgvector",
		},
		ProjectOverview: "Internal Tools Development (AI Business Efficiency & Chatbot)",
		Role:            "Full Stack Developer",
		Description: []string{
			"Development of AI-powered business efficiency tools and chatbots",
		},
		Archivement: []string{
			"Migration from Subversion to Git",
			"CI/CD pipeline construction",
			"Development environment improvement",
			"Introduction and setup of AI-driven development using AI agents such as Kiro",
			"Introduction of specification-driven development",
		},
	},
	{
		Company:  "Customer5",
		Period:   "2025-03 - current",
		TeamSize: "10",
		ManMonth: "",
		Technologies: []string{
			"React", "TypeScript", "Next.js", "(Ruby)", "Material UI", "React Hook Form",
			"GraphQL", "PostgreSQL", "zod", "NextAuth0", "codegen",
			"Cloudinary", "Vercel", "Github", "RSend", "Metabase", "Redis",
			"Sentry", "Figma", "Slack", "CodeRabbit",
		},
		ProjectOverview: "Development of Coaching Matching Service",
		Role:            "Full Stack Developer",
		Description: []string{
			"Development of a coaching matching service",
			"Frontend development with Next.js",
			"Creating pages based on designs made by designers in Figma",
			"Frontend development from mock proposals for designs without Figma",
			"Creating issues and suggesting improvements after using the service to identify inconveniences",
		},
		Archivement: []string{
			"I worked in an environment using various libraries and tools, including Sentry for monitoring, CodeRabbit for code reviews in CI/CD called by GitHub Actions, and Metabase for analyzing user trends.",
			"I gained experience implementing Next.js with SEO considerations for a B2C service.",
			"This was my first time working in an environment with designers, and I reduced misunderstandings by communicating using color names defined in Figma.",
			"Since design proposals weren't available for all pages and sections, I created multiple mock patterns and proposed designs to designers and managers.",
		},
	},
	{
		Company:  "Customer4",
		Period:   "2025-07 - current",
		TeamSize: "2",
		ManMonth: "3 person-month",
		Technologies: []string{
			"React", "TypeScript", "tailwindcss", "shadcn", "Electron",
			"Node.js", "vite", "vitest", "Python",
		},
		ProjectOverview: "Medical Stereo Camera Automatic Evaluation System",
		Role:            "Full Stack Developer",
		Description: []string{
			"Desktop development with React",
			"Development of interfaces to run external Python modules and exe modules",
		},
		Archivement: []string{
			"未定",
		},
	},
	{
		Company:  "Customer3",
		Period:   "2025-03 - 2025-06",
		TeamSize: "10",
		ManMonth: "",
		Technologies: []string{
			"Angular", "TypeScript", "PostgreSQL", "Oracle Cloud",
			"AWS S3", "AWS Lambda", "Python", "Kubernetes",
		},
		ProjectOverview: "Mortgage System Migration to Oracle Cloud",
		Role:            "Full Stack Developer",
		Description: []string{
			"Oracle Cloud migration and various improvements",
			"Authentication method changes",
			"Migration from OracleDB to PostgreSQL",
			"Implementation of common modules",
		},
		Archivement: []string{
			"I understood both existing and new environment specifications while conducting research and creating design documents for migration by consulting extensive documentation and subject matter experts. I also supported team members who joined at the same time with technical issues, contributing to the smooth progress of the project.",
		},
	},
	{
		Company:         "Customer2",
		Period:          "2024-10 - 2025-02",
		TeamSize:        "3",
		ManMonth:        "3,4 person-month",
		Technologies:    []string{},
		ProjectOverview: "Customer Information Search and API Modification",
		Role:            "Full Stack Developer (Specification, Development, Testing)",
		Description: []string{
			"Modification of a system that allows general users to request name changes and payment method changes for member information registered with a gas company",
			"B2C service",
			"Release is currently in integration testing and penetration testing phase. No issues as of December 1",
		},
		Archivement: []string{
			"Similar to the previous project, understood the specifications, assigned tasks according to each person's abilities, and contributed to development",
		},
	},
	{
		Company:  "Customer2",
		Period:   "2024-10 - 2024-11(20 days)",
		TeamSize: "3",
		ManMonth: "3,4 person-month",
		Technologies: []string{
			"Java", "Springboot", "TypeScript", "React", "Git", "Github", "Swagger",
		},
		ProjectOverview: "Voice of Customer System Additional Modifications",
		Role:            "Full Stack Developer (Specification, Development, Testing)",
		Description: []string{
			"Additional modifications to the system delivered and released in April 2024",
		},
		Archivement: []string{
			"Completed the project ahead of the estimated schedule, including the estimation work that was required. Released without issues and currently in operation",
		},
	},
	{
		Company:  "Customer2",
		Period:   "2024-05 - 2025-02",
		TeamSize: "7-8",
		ManMonth: "15+ person-month",
		Technologies: []string{
			"Java", "Springboot", "TypeScript", "React", "Git", "Github", "Swagger",
		},
		ProjectOverview: "Reception Innovation Project",
		Role:            "Full Stack Developer (Specification, Development, Testing)",
		Description: []string{
			"Modification of a system that allows general users to request name changes and payment method changes for member information registered with a gas company",
			"B2C service",
			"Release is currently in integration testing and penetration testing phase. No issues as of December 1",
		},
		Archivement: []string{
			"Similar to the previous project, understood the specifications, assigned tasks according to each person's abilities, and contributed to development",
		},
	},
	{
		Company:  "Customer2",
		Period:   "2024-01 - 2024-04(4 months)",
		TeamSize: "3-4",
		ManMonth: "15 person-month",
		Technologies: []string{
			"Java", "Springboot", "TypeScript", "React", "Git", "Github", "Swagger",
		},
		ProjectOverview: "Voice of Customer System Renovation and Replacement",
		Role:            "Full Stack Developer (Specification, Development, Testing)",
		Description: []string{
			"A system that records customer feedback, both appreciation and complaints, in an internal system, allowing a gas company group to reference and modify records",
			"System with strict information segregation features according to authority and affiliation, complying with legal information barriers",
			"B2B service",
		},
		Archivement: []string{
			"As an initial team member, completed a project estimated at 15 person-months with just 2 people, despite no one in the company having the relevant technology stack or business knowledge. Finished with only minor issues and without unnecessary additional staffing. The efficiency created capacity for a member who joined a month later to develop additional unplanned features and screens, completing and releasing them simultaneously, contributing to the project's success. Quickly understood the gas company's business flow by asking questions to the client, identified additional requirements, assessed each person's abilities, and assigned tasks according to requests.",
		},
	},
	{
		Company:  "Customer1",
		Period:   "2023-06 - 2023-12(6 months)",
		TeamSize: "4-10",
		ManMonth: "Unknown(2021 started)",
		Technologies: []string{
			"C", "C++", "C#", "Java", "JavaScript", "Springboot",
			"Visual Studio 2010,2015,2019", "PDB", "HDB",
		},
		ProjectOverview: "Airport Power Monitoring and Control System (MISE) Modification",
		Role:            "Full Stack Developer (Specification, Development, Testing, Test Environment Setup)",
		Description: []string{
			"Modification of power monitoring and control systems for more than 12 airports and performance evaluation centers",
			"Modification of lighting control software (runway flashing lights)",
			"On-site problem resolution during integration testing at the Civil Aviation Bureau",
			"Project involving multiple companies including Hitachi, Toshiba, Fuji Electric, NEC, and Oki Electric",
			"Responsible for airports including Narita, Sapporo, Nagasaki, Nanki-Shirahama, Amami Oshima, Matsuyama, and Okayama",
			"Collaborative development at Hitachi Industry & Control Solutions, Ltd. workplace",
		},
		Archivement: []string{
			"Despite joining the project midway, understood the software source code and specifications, contributing to development. Participated as a software representative in the Technical Management Center (TMC) software quality check, which determined the project's approval, and resolved issues that occurred on-site.",
		},
	},
	{
		Company:  "Customer1",
		Period:   "2023-04 - 2023-06(2 months)",
		TeamSize: "1",
		ManMonth: "9 person-month",
		Technologies: []string{
			"C#", "Visual Studio2017", "Windows Form", "Modbus", "Omron製PLC",
		},
		ProjectOverview: "PLC Communication TCP/IP Program",
		Role:            "Full Stack Developer (Specification, Development, Testing)",
		Description: []string{
			"Development of a program that communicates with devices such as PLCs for power monitoring using the Modbus protocol",
			"Created based on socket communication",
		},
		Archivement: []string{
			"Originally planned as a console program development, but due to having extra time, created a program with a GUI screen using Windows Forms",
		},
	},
	{
		Company:         "株式会社ホテルテラスザスクエア日立",
		Period:          "2022-01 - 2023-03",
		TeamSize:        "",
		ManMonth:        "",
		Technologies:    []string{},
		ProjectOverview: "Hotel Front Desk (Part-time)",
		Role:            "",
		Description: []string{
			"Customer service at the front desk (including international guests)",
			"Management of customer data",
			"Proposal of ideas or creation of prototypes to improve service",
		},
		Archivement: []string{
			"Improved efficiency of document creation using Excel. Created manuals for handling English-speaking customers and managed system migration, completing the tasks without issues",
		},
	},
	{
		Company:         "iMobilePhoneX(アルバイト)",
		Period:          "2019- 約1年",
		TeamSize:        "",
		ManMonth:        "",
		Technologies:    []string{},
		ProjectOverview: "English-Japanese Translation (Part-time)",
		Role:            "",
		Description: []string{
			"Translated customer messages for a company selling parallel imported smartphones on Amazon and other online shopping platforms",
			"Inspection and temporary storage of defective products",
			"Creation of Japanese reply templates",
			"Phone support, handling calls to the Amazon seller's representative number",
		},
		Archivement: []string{
			"",
		},
	},
	{
		Company:         "Freelancer.com(フリーランス)",
		Period:          "2019- ",
		TeamSize:        "",
		ManMonth:        "",
		Technologies:    []string{},
		ProjectOverview: "Freelance Translator",
		Role:            "",
		Description: []string{
			"English-Japanese translation",
			"Translation of videos, websites, military postcards, etc.",
		},
		Archivement: []string{
			"",
		},
	},
	{
		Company:         "家庭教師(アルバイト)",
		Period:          "2019 -",
		TeamSize:        "",
		ManMonth:        "",
		Technologies:    []string{},
		ProjectOverview: "Math and English Tutor (Part-time)",
		Role:            "",
		Description: []string{
			"Tutored one elementary school student and one junior high school student",
			"The elementary school student was preparing for a private junior high school entrance exam",
		},
		Archivement: []string{
			"Helped a student who was struggling with division to pass the entrance exam for a private junior high school",
		},
	},
}
