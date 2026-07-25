{-# LANGUAGE OverloadedStrings #-}

module Data.Project where

import Model.Project (Project(..))

projectsJA :: [Project]
projectsJA =
  [ Project
      { projTitle = "開発予定を考えているアプリ"
      , projDescription = "[採用サイト間のプロフィール自動入力(データ連携)]\n[画像認識を使用した何か]\n[Visual Studioのプロジェクトファイル変換アプリ]\n[何かのマッチングアプリ]\n[タイピング×パワハラ3Dボット]\n[タイピング×Google Map]\n[タイピング×2Dゲーム]\n"
      , projImage = "/images/projects/onDeveloping.jpg"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Tailwind CSS", "shadcn", "Vercel"]
      , projGithubUrl = ""
      , projLiveUrl = ""
      }
  , Project
      { projTitle = "Brighty コーチングマッチングアプリ"
      , projDescription = "Brighty コーチングマッチングアプリ\n経歴に記載の元と同様のため、省略\n"
      , projImage = "/images/projects/brighty.png"
      , projTechnologies = ["Next.js", "React", "TypeScript", "Tailwind CSS", "lucide-react"]
      , projGithubUrl = ""
      , projLiveUrl = "https://www.brighty.site"
      }
  , Project
      { projTitle = "VSCode風ポートフォリオサイト"
      , projDescription = "Visual Studio Codeのエディタ画面を再現したポートフォリオサイト\nタイトルバー、アクティビティバー、サイドバー、タブ、ターミナル、ステータスバーを忠実に再現。\nプロフィール、プロジェクト、スキル等の8セクションをIDEのファイルのように閲覧可能。\n3種類のビジュアルテーマ、日英バイリンガル対応、Playwrightによる184件のスナップショットテスト搭載。\n"
      , projImage = "/images/projects/vscode-portfolio.png"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Tailwind CSS", "next-intl", "Playwright(TypeScript)", "lucide-react", "Vercel"]
      , projGithubUrl = "https://github.com/shinguakira/vscode-portfolio"
      , projLiveUrl = "https://v0-project-steel-nine.vercel.app/"
      }
  , Project
      { projTitle = "VSCode風ポートフォリオサイト（個人版）"
      , projDescription = "VSCode風ポートフォリオの個人カスタマイズ版\nNext.js 16 + React 19 + Tailwind CSS v4へのアップグレード版。\nセクションごとに3種類のビジュアルテーマ（Modern, Innovative, Professional）を搭載。\n拡張機能ギャラリー、設定パネル、チュートリアルオーバーレイ、Git履歴パネル等の追加機能あり。\n"
      , projImage = "/images/projects/vscode-portfolio.png"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Tailwind CSS", "next-intl", "Playwright(TypeScript)", "lucide-react", "Vercel"]
      , projGithubUrl = "https://github.com/shinguakira/my-vscode-portfolio"
      , projLiveUrl = "https://v0-project-steel-nine.vercel.app/"
      }
  , Project
      { projTitle = "Electron Vite Reactアプリ"
      , projDescription = "Electron Vite Reactアプリ\nPython、exeなどを実行。Electronの一通りの機能を搭載したアプリ。\nインストール用のexeファイル作成予定。\n"
      , projImage = "/images/projects/3dConnectFour.png"
      , projTechnologies = ["Electron", "Vite", "React", "TypeScript", "Tailwind CSS", "lucide-react"]
      , projGithubUrl = "https://github.com/shinguakira/electronSample"
      , projLiveUrl = ""
      }
  , Project
      { projTitle = "3D4目並べ"
      , projDescription = "3D4目並べ\nルームマッチングまで実装。実際の対戦は実装予定。\nAIとの対戦、同画面での2人対戦、ルームマッチング(予定)が可能。\nタイトル画面がランダムに変わる。使用するオブジェクトも選択可能。\n"
      , projImage = "/images/projects/3dConnectFour.png"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Tailwind CSS", "lucide-react"]
      , projGithubUrl = "https://github.com/shinguakira/3d-connect-four"
      , projLiveUrl = "https://3d-connect-four-vfpy.vercel.app/"
      }
  , Project
      { projTitle = "ポートフォリオ情報取得API"
      , projDescription = "ポートフォリオ情報取得API\nポートフォリオを別パターン作成や、履歴書作成処理のために、メンテナンス時間削減のため、共通に使用できるAPI\nデータはDBなしでjsonで定義。\n"
      , projImage = "/images/projects/portfolio-api.png"
      , projTechnologies = ["TypeScript", "Express.js", "AWS Lambda"]
      , projGithubUrl = "https://github.com/shinguakira/portfolio-api"
      , projLiveUrl = "https://portfolio-api-ten-delta.vercel.app/"
      }
  , Project
      { projTitle = "国検索アプリ"
      , projDescription = "国検索アプリ\n公開APIを使用して国情報を取得し、国名を検索するアプリ。\nタイピングゲームと紐づけたり、国名検索だけでなくより細かい、州や県、市などを検索する実装も検討中\n"
      , projImage = "/images/projects/country-app.png"
      , projTechnologies = ["React", "TypeScript", "Remix", "Context API", "Tailwind CSS", "lucide-react"]
      , projGithubUrl = "https://github.com/shinguakira/country-app-remix"
      , projLiveUrl = "https://country-app-remix.vercel.app/"
      }
  , Project
      { projTitle = "ポートフォリオ情報用RAGチャットボット"
      , projDescription = "ポートフォリオ情報用RAGチャットボット\n読み込ませたベクトル情報からポートフォリオに関する情報を取得するRAGチャットボット\n精度向上のためベクトルの近似の調整や、データの区切りの適切かが必要そう。\nAmazon Kendraを使ったRAGチャットボットに似た挙動\n"
      , projImage = "/images/projects/rag-chatbot.jpg"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Tailwind CSS", "shadcn", "Vercel", "AstraDB(Apache Cassandra)", "@ai-sdk/react", "OpenAI API", "lucide-react"]
      , projGithubUrl = "https://github.com/shinguakira/rag-skill-match"
      , projLiveUrl = ""
      }
  , Project
      { projTitle = "タイピングゲーム"
      , projDescription = "タイピングゲーム\n様々なモードを実装。tailWindCSSやshadcnなどのコードを練習できるモードあり\n効果音を選択できることによって好きな効果音でプレイできます\n"
      , projImage = "/images/projects/typing-game.png"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Tailwind CSS", "shadcn", "Vercel", "Hono.js", "Redis", "Bun", "lucide-react"]
      , projGithubUrl = "https://github.com/shinguakira/typing-game-hono"
      , projLiveUrl = "https://typing-game-hono.vercel.app/"
      }
  , Project
      { projTitle = "バンキングアプリ"
      , projDescription = "バンキングアプリ、Sentryによるエラーログ、エラー発生時のリプレイ機能付き\n"
      , projImage = "/images/projects/banking-app.png"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Tailwind CSS", "shadcn", "Vercel", "Sentry", "Appwrite", "Dwolla", "lucide-react"]
      , projGithubUrl = "https://github.com/shinguakira/banking-nextjs"
      , projLiveUrl = "https://banking-horizon-sooty.vercel.app/sign-in"
      }
  , Project
      { projTitle = "現在いる最寄り駅の飲食店情報リスト表示アプリ"
      , projDescription = "最寄りの駅の飲食店情報リストをGooogle Mapで表示するアプリ\n"
      , projImage = "/images/projects/restaurant-around-station.png"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Prisma(or Drizzle)", "tRPC", "Tailwind CSS", "Google Map API", "shadcn", "lucide-react"]
      , projGithubUrl = ""
      , projLiveUrl = "https://restaurant-around-station.vercel.app/"
      }
  , Project
      { projTitle = "Youtube動画のadvanced検索(随時更新中)"
      , projDescription = "Youtubeの詳細検索サイト\n公式のYoutubeではできない詳細な検索によって効率よく目的の動画を探すことができるサイト\n検索条件を随時更新いたしますので、ご要望お問い合わせお待ちしております。\n他のサービスのバージョンも開発予定です。"
      , projImage = "/images/projects/advanced-search-youtube.png"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Tailwind CSS", "shadcn", "Vercel", "Youtube Data API", "lucide-react"]
      , projGithubUrl = ""
      , projLiveUrl = "https://advanced-search-youtube.vercel.app/"
      }
  , Project
      { projTitle = "パワハラ訓練3Dチャットボット"
      , projDescription = "パワハラ気質の上司になりきったチャットボットと会話ができるアプリ\n※開発者は考案者ではありません。\n会話の内容は、OpenAIのGPT-4を使用しています。\n他のリポジトリをfolkして、要件に合うようにカスタマイズしています。\n元のソースとの変更点\n・パワハラ上司っぽい会話内容\n・一定の期間(30秒)ごとに特定の音声付きチャットをボットが送信する。十数パターンあります。"
      , projImage = "/images/projects/3d-chatbot.png"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Styled Components", "Vercel", "Google Text-to-Speech API", "OpenAI API", "babylon.js"]
      , projGithubUrl = "https://github.com/shinguakira/3d-chatbot-power"
      , projLiveUrl = "https://3d-chatbot-power.vercel.app/"
      }
  , Project
      { projTitle = "ポートフォリオWebサイト"
      , projDescription = "経歴、職務経歴等の情報を記載"
      , projImage = "/images/profile/developer-pic-1.png?height=400&width=600"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Tailwind CSS", "shadcn", "Vercel", "lucide-react"]
      , projGithubUrl = ""
      , projLiveUrl = "/"
      }
  , Project
      { projTitle = "デザイン見本帳"
      , projDescription = "実際に動くUIで見比べて選べる、個人用のデザイン見本帳。"
      , projImage = "/images/projects/design-book.png"
      , projTechnologies = ["React", "TypeScript", "Tailwind CSS", "Vite", "Vercel"]
      , projGithubUrl = "https://github.com/shinguakira/design-book"
      , projLiveUrl = "https://design-book-sepia.vercel.app"
      }
  , Project
      { projTitle = "Officeファイルプレビュー"
      , projDescription = "Word/PDF をブラウザ上でプレビューする PoC。"
      , projImage = "/images/projects/office-file-app.png"
      , projTechnologies = ["Go", "React", "TypeScript", "Vite"]
      , projGithubUrl = "https://github.com/shinguakira/office-file-app"
      , projLiveUrl = ""
      }
  , Project
      { projTitle = "AFK Engineer（放置RPG）"
      , projDescription = "エンジニアモチーフのインクリメンタル（放置）RPG。"
      , projImage = "/images/projects/afk-game.png"
      , projTechnologies = ["React", "TypeScript", "Vite", "Express.js", "Tauri"]
      , projGithubUrl = "https://github.com/shinguakira/afk-game"
      , projLiveUrl = ""
      }
  , Project
      { projTitle = "オセロ（React Native）"
      , projDescription = "通信対戦に対応したオセロ（リバーシ）。"
      , projImage = "/images/projects/rn-othello.png"
      , projTechnologies = ["React Native", "Expo", "TypeScript"]
      , projGithubUrl = "https://github.com/shinguakira/rn-othello"
      , projLiveUrl = ""
      }
  , Project
      { projTitle = "The PubMed Gazette（PubMed検索）"
      , projDescription = "新聞風UIのPubMed論文検索リーダー。共有URL・ローカル保存・引用に対応。"
      , projImage = "/images/projects/pubmed-search.png"
      , projTechnologies = ["React", "TypeScript", "Vite", "Tailwind CSS", "Rust", "Docker", "PubMed API"]
      , projGithubUrl = "https://github.com/shinguakira/pubmed-search"
      , projLiveUrl = ""
      }
  , Project
      { projTitle = "ビデオ通話（WebRTC PoC）"
      , projDescription = "ブラウザ間の P2P ビデオ通話 PoC。"
      , projImage = "/images/projects/video-call.png"
      , projTechnologies = ["Next.js", "React", "TypeScript", "WebRTC", "Socket.IO", "Tailwind CSS", "shadcn"]
      , projGithubUrl = "https://github.com/shinguakira/video-call"
      , projLiveUrl = ""
      }
  , Project
      { projTitle = "ポートフォリオAPI（Zero言語版）"
      , projDescription = "既存のマルチバックエンドAPI（TS/Go/Rust/Haskell）を Zero言語(zerolang.ai) で実装した版。"
      , projImage = "/images/projects/zero-poc.png"
      , projTechnologies = ["Zero (zerolang.ai)", "REST", "Vercel"]
      , projGithubUrl = "https://github.com/shinguakira/zero-poc"
      , projLiveUrl = "https://zero-poc.vercel.app"
      }
  , Project
      { projTitle = "IT学習教材"
      , projDescription = "多言語対応（英/日/比）のWeb開発 学習教材。"
      , projImage = "/images/projects/it-learn-material.png"
      , projTechnologies = ["JavaScript"]
      , projGithubUrl = "https://github.com/shinguakira/it-learn-material"
      , projLiveUrl = ""
      }
  , Project
      { projTitle = "KeySound（打鍵音アプリ）"
      , projDescription = "キー入力ごとに効果音を鳴らすデスクトップアプリ（非フォーカス時も動作）。"
      , projImage = "/images/projects/keysound.png"
      , projTechnologies = ["Tauri", "Rust", "SvelteKit", "TypeScript", "Vite"]
      , projGithubUrl = "https://github.com/shinguakira/keysound"
      , projLiveUrl = ""
      }
  ]

projectsEN :: [Project]
projectsEN =
  [ Project
      { projTitle = "Planned Applications"
      , projDescription = "[Auto-fill Profile Data Across Recruitment Sites]\n[Image Recognition Application]\n[Visual Studio Project File Converter]\n[Matching Application]\n[Typing Game with 3D Harassment Bot]\n[Typing Game with Google Map Integration]\n[Typing Game with 2D Game Elements]\n"
      , projImage = "/images/projects/onDeveloping.jpg"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Tailwind CSS", "shadcn", "Vercel"]
      , projGithubUrl = ""
      , projLiveUrl = ""
      }
  , Project
      { projTitle = "Brighty Coaching Matching App"
      , projDescription = "Brighty Coaching Matching App\nSame as the one in the history, so omitted\n"
      , projImage = "/images/projects/brighty.png"
      , projTechnologies = ["Next.js", "React", "TypeScript", "Tailwind CSS", "lucide-react"]
      , projGithubUrl = ""
      , projLiveUrl = "https://www.brighty.site"
      }
  , Project
      { projTitle = "VSCode-Style Portfolio Website"
      , projDescription = "A portfolio website that replicates the Visual Studio Code editor interface.\nFaithfully reproduces title bar, activity bar, sidebar, tabs, terminal, and status bar.\nBrowse 8 portfolio sections (Profile, Projects, Skills, etc.) as if they were files in an IDE.\nFeatures 3 visual themes, bilingual Japanese/English support, and 184 Playwright snapshot tests.\n"
      , projImage = "/images/projects/vscode-portfolio.png"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Tailwind CSS", "next-intl", "Playwright(TypeScript)", "lucide-react", "Vercel"]
      , projGithubUrl = "https://github.com/shinguakira/vscode-portfolio"
      , projLiveUrl = "https://v0-project-steel-nine.vercel.app/"
      }
  , Project
      { projTitle = "VSCode-Style Portfolio Website (Personal Edition)"
      , projDescription = "A personal customization of the VSCode-style portfolio.\nUpgraded to Next.js 16 + React 19 + Tailwind CSS v4.\nFeatures 3 visual theme variants (Modern, Innovative, Professional) per section.\nIncludes extensions gallery, settings panel, tutorial overlay, and git history panel.\n"
      , projImage = "/images/projects/vscode-portfolio.png"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Tailwind CSS", "next-intl", "Playwright(TypeScript)", "lucide-react", "Vercel"]
      , projGithubUrl = "https://github.com/shinguakira/my-vscode-portfolio"
      , projLiveUrl = "https://v0-project-steel-nine.vercel.app/"
      }
  , Project
      { projTitle = "Electron Vite React App"
      , projDescription = "An Electron Vite React app.\nYou can run Python and exe files. It is an app that has all the features of Electron.\nInstallable exe file creation is planned."
      , projImage = "/images/projects/3dConnectFour.png"
      , projTechnologies = ["Electron", "Vite", "React", "TypeScript", "Tailwind CSS", "lucide-react"]
      , projGithubUrl = "https://github.com/shinguakira/electronSample"
      , projLiveUrl = ""
      }
  , Project
      { projTitle = "3D Connect Four"
      , projDescription = "A 3D Connect Four game using the KaPlay library.\nRoom matching is implemented. Actual play is planned.\nOne-on-one play with AI, same-screen two-player play, and room matching (planned).\nThe title screen changes randomly. The objects used can also be selected.\n"
      , projImage = "/images/projects/3dConnectFour.png"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Tailwind CSS", "lucide-react"]
      , projGithubUrl = "https://github.com/shinguakira/3d-connect-four"
      , projLiveUrl = "https://3d-connect-four-vfpy.vercel.app/"
      }
  , Project
      { projTitle = "Portfolio Information API"
      , projDescription = "An API for retrieving portfolio information.\nCreated to reduce maintenance time for portfolio creation and resume processing.\nData is defined in JSON without a database.\n"
      , projImage = "/images/projects/portfolio-api.png"
      , projTechnologies = ["TypeScript", "Express.js", "AWS Lambda"]
      , projGithubUrl = "https://github.com/shinguakira/portfolio-api"
      , projLiveUrl = "https://portfolio-api-ten-delta.vercel.app/"
      }
  , Project
      { projTitle = "Country Search App"
      , projDescription = "An application that retrieves and searches for country information using a public API.\nConsidering implementations to link with typing games and search for more detailed information such as states, prefectures, and cities.\n"
      , projImage = "/images/projects/country-app.png"
      , projTechnologies = ["React", "TypeScript", "Remix", "Context API", "Tailwind CSS", "lucide-react"]
      , projGithubUrl = "https://github.com/shinguakira/country-app-remix"
      , projLiveUrl = "https://country-app-remix.vercel.app/"
      }
  , Project
      { projTitle = "Portfolio Information RAG Chatbot"
      , projDescription = "A RAG chatbot that retrieves portfolio information from loaded vector data.\nRequires adjustment of vector approximation and appropriate data segmentation for accuracy improvement.\nSimilar behavior to an Amazon Kendra-based RAG chatbot.\n"
      , projImage = "/images/projects/rag-chatbot.jpg"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Tailwind CSS", "shadcn", "Vercel", "AstraDB(Apache Cassandra)", "@ai-sdk/react", "OpenAI API", "lucide-react"]
      , projGithubUrl = "https://github.com/shinguakira/rag-skill-match"
      , projLiveUrl = ""
      }
  , Project
      { projTitle = "Typing Game"
      , projDescription = "A typing game with various modes.\nIncludes modes for practicing Tailwind CSS and shadcn code.\nYou can select different sound effects to play with your preferred audio feedback.\n"
      , projImage = "/images/projects/typing-game.png"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Tailwind CSS", "shadcn", "Vercel", "Hono.js", "Redis", "Bun", "lucide-react"]
      , projGithubUrl = "https://github.com/shinguakira/typing-game-hono"
      , projLiveUrl = "https://typing-game-hono.vercel.app/"
      }
  , Project
      { projTitle = "Banking App"
      , projDescription = "A banking application with Sentry error logging and replay functionality when errors occur.\n"
      , projImage = "/images/projects/banking-app.png"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Tailwind CSS", "shadcn", "Vercel", "Sentry", "Appwrite", "Dwolla", "lucide-react"]
      , projGithubUrl = "https://github.com/shinguakira/banking-nextjs"
      , projLiveUrl = "https://banking-horizon-sooty.vercel.app/sign-in"
      }
  , Project
      { projTitle = "Restaurant Information App for Nearby Stations"
      , projDescription = "An application that displays restaurant information for the nearest station on Google Maps.\n"
      , projImage = "/images/projects/restaurant-around-station.png"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Prisma(or Drizzle)", "tRPC", "Tailwind CSS", "Google Map API", "shadcn", "lucide-react"]
      , projGithubUrl = ""
      , projLiveUrl = "https://restaurant-around-station.vercel.app/"
      }
  , Project
      { projTitle = "Advanced YouTube Video Search (Regularly Updated)"
      , projDescription = "A detailed search site for YouTube.\nEfficiently find the videos you're looking for with detailed search options not available on the official YouTube site.\nSearch conditions are regularly updated. Please feel free to contact us with your requests.\nPlanning to develop versions for other services as well."
      , projImage = "/images/projects/advanced-search-youtube.png"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Tailwind CSS", "shadcn", "Vercel", "Youtube Data API", "lucide-react"]
      , projGithubUrl = ""
      , projLiveUrl = "https://advanced-search-youtube.vercel.app/"
      }
  , Project
      { projTitle = "Workplace Harassment Training 3D Chatbot"
      , projDescription = "An application where you can converse with a chatbot that acts like a boss with harassment tendencies.\n*Note: I am not the original creator of this concept.\nThe conversation content uses OpenAI's GPT-4.\nI forked another repository and customized it to meet the requirements.\nChanges from the original source:\n- Conversation content mimicking a harassing boss\n- The bot sends specific voice-enabled chats at regular intervals (30 seconds). There are over a dozen patterns."
      , projImage = "/images/projects/3d-chatbot.png"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Styled Components", "Vercel", "Google Text-to-Speech API", "OpenAI API", "babylon.js"]
      , projGithubUrl = "https://github.com/shinguakira/3d-chatbot-power"
      , projLiveUrl = "https://3d-chatbot-power.vercel.app/"
      }
  , Project
      { projTitle = "Portfolio Website"
      , projDescription = "A website showcasing my background, work history, and other professional information"
      , projImage = "/images/profile/developer-pic-1.png?height=400&width=600"
      , projTechnologies = ["React", "TypeScript", "Next.js", "Tailwind CSS", "shadcn", "Vercel", "lucide-react"]
      , projGithubUrl = ""
      , projLiveUrl = "/"
      }
  , Project
      { projTitle = "Design Book"
      , projDescription = "A personal reference book of live, interactive UI you can compare at a glance."
      , projImage = "/images/projects/design-book.png"
      , projTechnologies = ["React", "TypeScript", "Tailwind CSS", "Vite", "Vercel"]
      , projGithubUrl = "https://github.com/shinguakira/design-book"
      , projLiveUrl = "https://design-book-sepia.vercel.app"
      }
  , Project
      { projTitle = "Office File Preview"
      , projDescription = "A PoC for previewing Office files (Word/PDF) in the browser."
      , projImage = "/images/projects/office-file-app.png"
      , projTechnologies = ["Go", "React", "TypeScript", "Vite"]
      , projGithubUrl = "https://github.com/shinguakira/office-file-app"
      , projLiveUrl = ""
      }
  , Project
      { projTitle = "AFK Engineer"
      , projDescription = "An incremental (idle) RPG with a software-engineer theme."
      , projImage = "/images/projects/afk-game.png"
      , projTechnologies = ["React", "TypeScript", "Vite", "Express.js", "Tauri"]
      , projGithubUrl = "https://github.com/shinguakira/afk-game"
      , projLiveUrl = ""
      }
  , Project
      { projTitle = "Othello (React Native)"
      , projDescription = "An Othello (Reversi) game with online multiplayer."
      , projImage = "/images/projects/rn-othello.png"
      , projTechnologies = ["React Native", "Expo", "TypeScript"]
      , projGithubUrl = "https://github.com/shinguakira/rn-othello"
      , projLiveUrl = ""
      }
  , Project
      { projTitle = "The PubMed Gazette"
      , projDescription = "A newspaper-styled PubMed search reader with shareable URLs, saves, and citations."
      , projImage = "/images/projects/pubmed-search.png"
      , projTechnologies = ["React", "TypeScript", "Vite", "Tailwind CSS", "Rust", "Docker", "PubMed API"]
      , projGithubUrl = "https://github.com/shinguakira/pubmed-search"
      , projLiveUrl = ""
      }
  , Project
      { projTitle = "Video Call (WebRTC PoC)"
      , projDescription = "A browser-to-browser P2P video call PoC."
      , projImage = "/images/projects/video-call.png"
      , projTechnologies = ["Next.js", "React", "TypeScript", "WebRTC", "Socket.IO", "Tailwind CSS", "shadcn"]
      , projGithubUrl = "https://github.com/shinguakira/video-call"
      , projLiveUrl = ""
      }
  , Project
      { projTitle = "Portfolio API (Zero lang)"
      , projDescription = "A Zero-language (zerolang.ai) reimplementation of the existing multi-backend portfolio API (TS/Go/Rust/Haskell)."
      , projImage = "/images/projects/zero-poc.png"
      , projTechnologies = ["Zero (zerolang.ai)", "REST", "Vercel"]
      , projGithubUrl = "https://github.com/shinguakira/zero-poc"
      , projLiveUrl = "https://zero-poc.vercel.app"
      }
  , Project
      { projTitle = "IT Learning Material"
      , projDescription = "A multilingual (EN/JA/PH) web-development learning resource."
      , projImage = "/images/projects/it-learn-material.png"
      , projTechnologies = ["JavaScript"]
      , projGithubUrl = "https://github.com/shinguakira/it-learn-material"
      , projLiveUrl = ""
      }
  , Project
      { projTitle = "KeySound"
      , projDescription = "A desktop app that plays a sound on every keypress, even when unfocused."
      , projImage = "/images/projects/keysound.png"
      , projTechnologies = ["Tauri", "Rust", "SvelteKit", "TypeScript", "Vite"]
      , projGithubUrl = "https://github.com/shinguakira/keysound"
      , projLiveUrl = ""
      }
  ]
