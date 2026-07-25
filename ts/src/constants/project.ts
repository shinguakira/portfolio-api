import {nextjsSkillSet, T3StackSkillSet, S} from './skill.js';
import {links} from './links.js';

const tmpPic = '/images/profile/developer-pic-1.png'; // ポートフォリオサイトの画像
const chatBot3dPic = '/images/projects/3d-chatbot.png'; // 3Dチャットボットの画像
const onDevelopingPic = '/images/projects/onDeveloping.jpg'; // 開発中の画像
const advancedSearchYoutubePic = '/images/projects/advanced-search-youtube.png'; // picture for advanced search youtube
const restaurantAroundStationPic =
  '/images/projects/restaurant-around-station.png'; // picture for restaurant around station
const bankingAppPic = '/images/projects/banking-app.png'; // picture for banking app
const typingGamePic = '/images/projects/typing-game.png'; // picture for typing game
const ragChatBotPic = '/images/projects/rag-chatbot.jpg'; // picture for rag chatbot
const countryAppPic = '/images/projects/country-app.png'; // picture for country app
const portfolioApiPic = '/images/projects/portfolio-api.png'; // picture for portfolio api
const vscodePortfolioPic = '/images/projects/vscode-portfolio.png'; // picture for vscode portfolio
const connectFourPic = '/images/projects/3dConnectFour.png'; // picture for 3d connect four
const brightyPic = '/images/projects/brighty.png'; // picture for brighty
const designBookPic = '/images/projects/design-book.png';
const officeFileAppPic = '/images/projects/office-file-app.png';
const afkGamePic = '/images/projects/afk-game.png';
const rnOthelloPic = '/images/projects/rn-othello.png';
const pubmedSearchPic = '/images/projects/pubmed-search.png';
const videoCallPic = '/images/projects/video-call.png';
const zeroPocPic = '/images/projects/zero-poc.png';
const itLearnMaterialPic = '/images/projects/it-learn-material.png';
const keysoundPic = '/images/projects/keysound.png';

import {MultilingualProject} from '../types/projectItem.js';

export const projects: MultilingualProject[] = [
  {
    technologies: nextjsSkillSet,
    ja: {
      title: '開発予定を考えているアプリ',
      description: `[採用サイト間のプロフィール自動入力(データ連携)]
[画像認識を使用した何か]
[Visual Studioのプロジェクトファイル変換アプリ]
[何かのマッチングアプリ]
[タイピング×パワハラ3Dボット]
[タイピング×Google Map]
[タイピング×2Dゲーム]
`,
      image: onDevelopingPic,
      githubUrl: '',
      liveUrl: '',
    },
    en: {
      title: 'Planned Applications',
      description: `[Auto-fill Profile Data Across Recruitment Sites]
[Image Recognition Application]
[Visual Studio Project File Converter]
[Matching Application]
[Typing Game with 3D Harassment Bot]
[Typing Game with Google Map Integration]
[Typing Game with 2D Game Elements]
`,
      image: onDevelopingPic,
      githubUrl: '',
      liveUrl: '',
    },
  },
  {
    technologies: [S.nextJs, S.react, S.typescript, S.tailwind, S.lucideReact],
    ja: {
      title: 'Brighty コーチングマッチングアプリ',
      description: `Brighty コーチングマッチングアプリ
経歴に記載の元と同様のため、省略
`,
      image: brightyPic,
      githubUrl: '',
      liveUrl: 'https://www.brighty.site',
    },
    en: {
      title: 'Brighty Coaching Matching App',
      description: `Brighty Coaching Matching App
Same as the one in the history, so omitted
`,
      image: brightyPic,
      githubUrl: '',
      liveUrl: 'https://www.brighty.site',
    },
  },
  {
    technologies: [
      S.react,
      S.typescript,
      S.nextJs,
      S.tailwind,
      S.nextIntl,
      S.playwright,
      S.lucideReact,
      S.vercel,
    ],
    ja: {
      title: 'VSCode風ポートフォリオサイト',
      description: `Visual Studio Codeのエディタ画面を再現したポートフォリオサイト
タイトルバー、アクティビティバー、サイドバー、タブ、ターミナル、ステータスバーを忠実に再現。
プロフィール、プロジェクト、スキル等の8セクションをIDEのファイルのように閲覧可能。
3種類のビジュアルテーマ、日英バイリンガル対応、Playwrightによる184件のスナップショットテスト搭載。
`,
      image: vscodePortfolioPic,
      githubUrl: 'https://github.com/shinguakira/vscode-portfolio',
      liveUrl: 'https://v0-project-steel-nine.vercel.app/',
    },
    en: {
      title: 'VSCode-Style Portfolio Website',
      description: `A portfolio website that replicates the Visual Studio Code editor interface.
Faithfully reproduces title bar, activity bar, sidebar, tabs, terminal, and status bar.
Browse 8 portfolio sections (Profile, Projects, Skills, etc.) as if they were files in an IDE.
Features 3 visual themes, bilingual Japanese/English support, and 184 Playwright snapshot tests.
`,
      image: vscodePortfolioPic,
      githubUrl: 'https://github.com/shinguakira/vscode-portfolio',
      liveUrl: 'https://v0-project-steel-nine.vercel.app/',
    },
  },
  {
    technologies: [
      S.react,
      S.typescript,
      S.nextJs,
      S.tailwind,
      S.nextIntl,
      S.playwright,
      S.lucideReact,
      S.vercel,
    ],
    ja: {
      title: 'VSCode風ポートフォリオサイト（個人版）',
      description: `VSCode風ポートフォリオの個人カスタマイズ版
Next.js 16 + React 19 + Tailwind CSS v4へのアップグレード版。
セクションごとに3種類のビジュアルテーマ（Modern, Innovative, Professional）を搭載。
拡張機能ギャラリー、設定パネル、チュートリアルオーバーレイ、Git履歴パネル等の追加機能あり。
`,
      image: vscodePortfolioPic,
      githubUrl: 'https://github.com/shinguakira/my-vscode-portfolio',
      liveUrl: 'https://v0-project-steel-nine.vercel.app/',
    },
    en: {
      title: 'VSCode-Style Portfolio Website (Personal Edition)',
      description: `A personal customization of the VSCode-style portfolio.
Upgraded to Next.js 16 + React 19 + Tailwind CSS v4.
Features 3 visual theme variants (Modern, Innovative, Professional) per section.
Includes extensions gallery, settings panel, tutorial overlay, and git history panel.
`,
      image: vscodePortfolioPic,
      githubUrl: 'https://github.com/shinguakira/my-vscode-portfolio',
      liveUrl: 'https://v0-project-steel-nine.vercel.app/',
    },
  },
  {
    technologies: [
      S.electron,
      S.vite,
      S.react,
      S.typescript,
      S.tailwind,
      S.lucideReact,
    ],
    ja: {
      title: 'Electron Vite Reactアプリ',
      description: `Electron Vite Reactアプリ
Python、exeなどを実行。Electronの一通りの機能を搭載したアプリ。
インストール用のexeファイル作成予定。
`,
      image: connectFourPic,
      githubUrl: 'https://github.com/shinguakira/electronSample',
      liveUrl: '',
    },
    en: {
      title: 'Electron Vite React App',
      description: `An Electron Vite React app.
You can run Python and exe files. It is an app that has all the features of Electron.
Installable exe file creation is planned.`,
      image: connectFourPic,
      githubUrl: 'https://github.com/shinguakira/electronSample',
      liveUrl: '',
    },
  },
  {
    technologies: [S.react, S.typescript, S.nextJs, S.tailwind, S.lucideReact],
    ja: {
      title: '3D4目並べ',
      description: `3D4目並べ
ルームマッチングまで実装。実際の対戦は実装予定。
AIとの対戦、同画面での2人対戦、ルームマッチング(予定)が可能。
タイトル画面がランダムに変わる。使用するオブジェクトも選択可能。
`,
      image: connectFourPic,
      githubUrl: 'https://github.com/shinguakira/3d-connect-four',
      liveUrl: 'https://3d-connect-four-vfpy.vercel.app/',
    },
    en: {
      title: '3D Connect Four',
      description: `A 3D Connect Four game using the KaPlay library.
Room matching is implemented. Actual play is planned.
One-on-one play with AI, same-screen two-player play, and room matching (planned).
The title screen changes randomly. The objects used can also be selected.
`,
      image: connectFourPic,
      githubUrl: 'https://github.com/shinguakira/3d-connect-four',
      liveUrl: 'https://3d-connect-four-vfpy.vercel.app/',
    },
  },
  {
    technologies: [S.typescript, S.expressJs, S.awsLambda],
    ja: {
      title: 'ポートフォリオ情報取得API',
      description: `ポートフォリオ情報取得API
ポートフォリオを別パターン作成や、履歴書作成処理のために、メンテナンス時間削減のため、共通に使用できるAPI
データはDBなしでjsonで定義。
`,
      image: portfolioApiPic,
      githubUrl: 'https://github.com/shinguakira/portfolio-api',
      liveUrl: 'https://portfolio-api-ten-delta.vercel.app/',
    },
    en: {
      title: 'Portfolio Information API',
      description: `An API for retrieving portfolio information.
Created to reduce maintenance time for portfolio creation and resume processing.
Data is defined in JSON without a database.
`,
      image: portfolioApiPic,
      githubUrl: 'https://github.com/shinguakira/portfolio-api',
      liveUrl: 'https://portfolio-api-ten-delta.vercel.app/',
    },
  },
  {
    technologies: [
      S.react,
      S.typescript,
      S.remix,
      S.contextApi,
      S.tailwind,
      S.lucideReact,
    ],
    ja: {
      title: '国検索アプリ',
      description: `国検索アプリ
公開APIを使用して国情報を取得し、国名を検索するアプリ。
タイピングゲームと紐づけたり、国名検索だけでなくより細かい、州や県、市などを検索する実装も検討中
`,
      image: countryAppPic,
      githubUrl: 'https://github.com/shinguakira/country-app-remix',
      liveUrl: 'https://country-app-remix.vercel.app/',
    },
    en: {
      title: 'Country Search App',
      description: `An application that retrieves and searches for country information using a public API.
Considering implementations to link with typing games and search for more detailed information such as states, prefectures, and cities.
`,
      image: countryAppPic,
      githubUrl: 'https://github.com/shinguakira/country-app-remix',
      liveUrl: 'https://country-app-remix.vercel.app/',
    },
  },
  {
    technologies: [
      ...nextjsSkillSet,
      'AstraDB(Apache Cassandra)',
      '@ai-sdk/react',
      'OpenAI API',
      S.lucideReact,
    ],
    ja: {
      title: 'ポートフォリオ情報用RAGチャットボット',
      description: `ポートフォリオ情報用RAGチャットボット
読み込ませたベクトル情報からポートフォリオに関する情報を取得するRAGチャットボット
精度向上のためベクトルの近似の調整や、データの区切りの適切かが必要そう。
Amazon Kendraを使ったRAGチャットボットに似た挙動
`,
      image: ragChatBotPic,
      githubUrl: 'https://github.com/shinguakira/rag-skill-match',
      liveUrl: '',
    },
    en: {
      title: 'Portfolio Information RAG Chatbot',
      description: `A RAG chatbot that retrieves portfolio information from loaded vector data.
Requires adjustment of vector approximation and appropriate data segmentation for accuracy improvement.
Similar behavior to an Amazon Kendra-based RAG chatbot.
`,
      image: ragChatBotPic,
      githubUrl: 'https://github.com/shinguakira/rag-skill-match',
      liveUrl: '',
    },
  },
  {
    technologies: [...nextjsSkillSet, S.honoJs, S.redis, S.bun, S.lucideReact],
    ja: {
      title: 'タイピングゲーム',
      description: `タイピングゲーム
様々なモードを実装。tailWindCSSやshadcnなどのコードを練習できるモードあり
効果音を選択できることによって好きな効果音でプレイできます
`,
      image: typingGamePic,
      githubUrl: 'https://github.com/shinguakira/typing-game-hono',
      liveUrl: 'https://typing-game-hono.vercel.app/',
    },
    en: {
      title: 'Typing Game',
      description: `A typing game with various modes.
Includes modes for practicing Tailwind CSS and shadcn code.
You can select different sound effects to play with your preferred audio feedback.
`,
      image: typingGamePic,
      githubUrl: 'https://github.com/shinguakira/typing-game-hono',
      liveUrl: 'https://typing-game-hono.vercel.app/',
    },
  },
  {
    technologies: [
      ...nextjsSkillSet,
      S.sentry,
      'Appwrite',
      'Dwolla',
      S.lucideReact,
    ],
    ja: {
      title: 'バンキングアプリ',
      description: `バンキングアプリ、Sentryによるエラーログ、エラー発生時のリプレイ機能付き
`,
      image: bankingAppPic,
      githubUrl: 'https://github.com/shinguakira/banking-nextjs',
      liveUrl: 'https://banking-horizon-sooty.vercel.app/sign-in',
    },
    en: {
      title: 'Banking App',
      description: `A banking application with Sentry error logging and replay functionality when errors occur.
`,
      image: bankingAppPic,
      githubUrl: 'https://github.com/shinguakira/banking-nextjs',
      liveUrl: 'https://banking-horizon-sooty.vercel.app/sign-in',
    },
  },
  {
    technologies: [
      ...T3StackSkillSet,
      'Google Map API',
      S.shadcn,
      S.lucideReact,
    ],
    ja: {
      title: '現在いる最寄り駅の飲食店情報リスト表示アプリ',
      description: `最寄りの駅の飲食店情報リストをGooogle Mapで表示するアプリ
`,
      image: restaurantAroundStationPic,
      githubUrl: '',
      liveUrl: links.restaurantAroundStationLink,
    },
    en: {
      title: 'Restaurant Information App for Nearby Stations',
      description: `An application that displays restaurant information for the nearest station on Google Maps.
`,
      image: restaurantAroundStationPic,
      githubUrl: '',
      liveUrl: links.restaurantAroundStationLink,
    },
  },
  {
    technologies: [...nextjsSkillSet, 'Youtube Data API', S.lucideReact],
    ja: {
      title: 'Youtube動画のadvanced検索(随時更新中)',
      description: `Youtubeの詳細検索サイト
公式のYoutubeではできない詳細な検索によって効率よく目的の動画を探すことができるサイト
検索条件を随時更新いたしますので、ご要望お問い合わせお待ちしております。
他のサービスのバージョンも開発予定です。`,
      image: advancedSearchYoutubePic,
      githubUrl: '',
      liveUrl: links.advancedSearchYoutubeLink,
    },
    en: {
      title: 'Advanced YouTube Video Search (Regularly Updated)',
      description: `A detailed search site for YouTube.
Efficiently find the videos you're looking for with detailed search options not available on the official YouTube site.
Search conditions are regularly updated. Please feel free to contact us with your requests.
Planning to develop versions for other services as well.`,
      image: advancedSearchYoutubePic,
      githubUrl: '',
      liveUrl: links.advancedSearchYoutubeLink,
    },
  },
  {
    technologies: [
      S.react,
      S.typescript,
      S.nextJs,
      'Styled Components',
      S.vercel,
      'Google Text-to-Speech API',
      'OpenAI API',
      S.babylonJs,
    ],
    ja: {
      title: 'パワハラ訓練3Dチャットボット',
      description: `パワハラ気質の上司になりきったチャットボットと会話ができるアプリ
※開発者は考案者ではありません。
会話の内容は、OpenAIのGPT-4を使用しています。
他のリポジトリをfolkして、要件に合うようにカスタマイズしています。
元のソースとの変更点
・パワハラ上司っぽい会話内容
・一定の期間(30秒)ごとに特定の音声付きチャットをボットが送信する。十数パターンあります。`,
      image: chatBot3dPic,
      githubUrl: 'https://github.com/shinguakira/3d-chatbot-power',
      liveUrl: 'https://3d-chatbot-power.vercel.app/',
    },
    en: {
      title: 'Workplace Harassment Training 3D Chatbot',
      description: `An application where you can converse with a chatbot that acts like a boss with harassment tendencies.
*Note: I am not the original creator of this concept.
The conversation content uses OpenAI's GPT-4.
I forked another repository and customized it to meet the requirements.
Changes from the original source:
- Conversation content mimicking a harassing boss
- The bot sends specific voice-enabled chats at regular intervals (30 seconds). There are over a dozen patterns.`,
      image: chatBot3dPic,
      githubUrl: 'https://github.com/shinguakira/3d-chatbot-power',
      liveUrl: 'https://3d-chatbot-power.vercel.app/',
    },
  },
  {
    technologies: [...nextjsSkillSet, S.lucideReact],
    ja: {
      title: 'ポートフォリオWebサイト',
      description: '経歴、職務経歴等の情報を記載',
      image: `${tmpPic}?height=400&width=600`,
      githubUrl: '',
      liveUrl: '/',
    },
    en: {
      title: 'Portfolio Website',
      description:
        'A website showcasing my background, work history, and other professional information',
      image: `${tmpPic}?height=400&width=600`,
      githubUrl: '',
      liveUrl: '/',
    },
  },
  {
    technologies: [S.react, S.typescript, S.tailwind, S.vite, S.vercel],
    ja: {
      title: 'デザイン見本帳',
      description: '実際に動くUIで見比べて選べる、個人用のデザイン見本帳。',
      image: designBookPic,
      githubUrl: 'https://github.com/shinguakira/design-book',
      liveUrl: 'https://design-book-sepia.vercel.app',
    },
    en: {
      title: 'Design Book',
      description:
        'A personal reference book of live, interactive UI you can compare at a glance.',
      image: designBookPic,
      githubUrl: 'https://github.com/shinguakira/design-book',
      liveUrl: 'https://design-book-sepia.vercel.app',
    },
  },
  {
    technologies: [S.go, S.react, S.typescript, S.vite],
    ja: {
      title: 'Officeファイルプレビュー',
      description: 'Word/PDF をブラウザ上でプレビューする PoC。',
      image: officeFileAppPic,
      githubUrl: 'https://github.com/shinguakira/office-file-app',
      liveUrl: '',
    },
    en: {
      title: 'Office File Preview',
      description:
        'A PoC for previewing Office files (Word/PDF) in the browser.',
      image: officeFileAppPic,
      githubUrl: 'https://github.com/shinguakira/office-file-app',
      liveUrl: '',
    },
  },
  {
    technologies: [S.react, S.typescript, S.vite, S.expressJs, S.tauri],
    ja: {
      title: 'AFK Engineer（放置RPG）',
      description: 'エンジニアモチーフのインクリメンタル（放置）RPG。',
      image: afkGamePic,
      githubUrl: 'https://github.com/shinguakira/afk-game',
      liveUrl: '',
    },
    en: {
      title: 'AFK Engineer',
      description: 'An incremental (idle) RPG with a software-engineer theme.',
      image: afkGamePic,
      githubUrl: 'https://github.com/shinguakira/afk-game',
      liveUrl: '',
    },
  },
  {
    technologies: ['React Native', 'Expo', S.typescript],
    ja: {
      title: 'オセロ（React Native）',
      description: '通信対戦に対応したオセロ（リバーシ）。',
      image: rnOthelloPic,
      githubUrl: 'https://github.com/shinguakira/rn-othello',
      liveUrl: '',
    },
    en: {
      title: 'Othello (React Native)',
      description: 'An Othello (Reversi) game with online multiplayer.',
      image: rnOthelloPic,
      githubUrl: 'https://github.com/shinguakira/rn-othello',
      liveUrl: '',
    },
  },
  {
    technologies: [
      S.react,
      S.typescript,
      S.vite,
      S.tailwind,
      S.rust,
      S.docker,
      'PubMed API',
    ],
    ja: {
      title: 'The PubMed Gazette（PubMed検索）',
      description:
        '新聞風UIのPubMed論文検索リーダー。共有URL・ローカル保存・引用に対応。',
      image: pubmedSearchPic,
      githubUrl: 'https://github.com/shinguakira/pubmed-search',
      liveUrl: '',
    },
    en: {
      title: 'The PubMed Gazette',
      description:
        'A newspaper-styled PubMed search reader with shareable URLs, saves, and citations.',
      image: pubmedSearchPic,
      githubUrl: 'https://github.com/shinguakira/pubmed-search',
      liveUrl: '',
    },
  },
  {
    technologies: [
      S.nextJs,
      S.react,
      S.typescript,
      'WebRTC',
      'Socket.IO',
      S.tailwind,
      S.shadcn,
    ],
    ja: {
      title: 'ビデオ通話（WebRTC PoC）',
      description: 'ブラウザ間の P2P ビデオ通話 PoC。',
      image: videoCallPic,
      githubUrl: 'https://github.com/shinguakira/video-call',
      liveUrl: '',
    },
    en: {
      title: 'Video Call (WebRTC PoC)',
      description: 'A browser-to-browser P2P video call PoC.',
      image: videoCallPic,
      githubUrl: 'https://github.com/shinguakira/video-call',
      liveUrl: '',
    },
  },
  {
    technologies: ['Zero (zerolang.ai)', S.rest, S.vercel],
    ja: {
      title: 'ポートフォリオAPI（Zero言語版）',
      description:
        '既存のマルチバックエンドAPI（TS/Go/Rust/Haskell）を Zero言語(zerolang.ai) で実装した版。',
      image: zeroPocPic,
      githubUrl: 'https://github.com/shinguakira/zero-poc',
      liveUrl: 'https://zero-poc.vercel.app',
    },
    en: {
      title: 'Portfolio API (Zero lang)',
      description:
        'A Zero-language (zerolang.ai) reimplementation of the existing multi-backend portfolio API (TS/Go/Rust/Haskell).',
      image: zeroPocPic,
      githubUrl: 'https://github.com/shinguakira/zero-poc',
      liveUrl: 'https://zero-poc.vercel.app',
    },
  },
  {
    technologies: ['JavaScript'],
    ja: {
      title: 'IT学習教材',
      description: '多言語対応（英/日/比）のWeb開発 学習教材。',
      image: itLearnMaterialPic,
      githubUrl: 'https://github.com/shinguakira/it-learn-material',
      liveUrl: '',
    },
    en: {
      title: 'IT Learning Material',
      description:
        'A multilingual (EN/JA/PH) web-development learning resource.',
      image: itLearnMaterialPic,
      githubUrl: 'https://github.com/shinguakira/it-learn-material',
      liveUrl: '',
    },
  },
  {
    technologies: [S.tauri, S.rust, 'SvelteKit', S.typescript, S.vite],
    ja: {
      title: 'KeySound（打鍵音アプリ）',
      description:
        'キー入力ごとに効果音を鳴らすデスクトップアプリ（非フォーカス時も動作）。',
      image: keysoundPic,
      githubUrl: 'https://github.com/shinguakira/keysound',
      liveUrl: '',
    },
    en: {
      title: 'KeySound',
      description:
        'A desktop app that plays a sound on every keypress, even when unfocused.',
      image: keysoundPic,
      githubUrl: 'https://github.com/shinguakira/keysound',
      liveUrl: '',
    },
  },
];
