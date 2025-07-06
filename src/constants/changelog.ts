import {ChangelogProps} from '../type/changelog.js';

/**
 * constans for changelog history
 */
export const changelogs: ChangelogProps[] = [
  {
    version: '1.4.0',
    date: '2025-04-20',
    changes: [
      {
        type: 'feature',
        ja: {
          description: `プロジェクト追加
多言語対応（日本語・英語）の実装
動的ルーティングによる言語切り替え機能の追加
SEO対応のためのgenerateStaticParamsの実装
言語切替時に現在のページを維持する機能追加`,
        },
        en: {
          description: `Added projects
Implemented multilingual support (Japanese/English)
Added language switching functionality with dynamic routing
Implemented generateStaticParams for SEO optimization
Added functionality to maintain current page when switching languages`,
        },
      },
      {
        type: 'improvement',
        ja: {
          description: `Qiitaアイコン表示のためのAPIをLogo.devに変更
ページ構造の最適化とコード整理
資格証明書リンクの絶対パス参照に修正`,
        },
        en: {
          description: `Changed API to Logo.dev for Qiita icon display
Optimized page structure and code organization
Fixed certification links to use absolute path references`,
        },
      },
      {
        type: 'bugfix',
        ja: {
          description: 'Vercelデプロイメントエラーの修正',
        },
        en: {
          description: 'Fixed Vercel deployment errors',
        },
      },
    ],
  },
  {
    version: '1.3.0',
    date: '2025-04-06',
    changes: [
      {
        type: 'feature',
        ja: {
          description: `タイピングゲームプロジェクト追加
バンキングアプリのgithubURLおよび公開URL追加
サイト表示時、各ページに関する説明を表示
データベース制御アプリのgithubURLおよび公開URL追加`,
        },
        en: {
          description: `Added typing game project
Added GitHub URL and public URL for banking app
Display page descriptions when site is loaded
Added GitHub URL and public URL for database control app`,
        },
      },
      {
        type: 'improvement',
        ja: {
          description: `プロジェクトページにレインボーフレーム効果追加
資格ページのアイコン追加`,
        },
        en: {
          description: `Added rainbow frame effect to project pages
Added icons to certification page`,
        },
      },
      // {
      //   type: "bugfix",
      //   description: "ヘッダーのアイコン、履歴書ダウンロードリンクデザイン修正",
      // },
    ],
  },
  {
    version: '1.2.0',
    date: '2024-01-24',
    changes: [
      {
        type: 'feature',
        ja: {
          description: 'Qiita記事をArticleページに追加',
        },
        en: {
          description: 'Added Qiita articles to Article page',
        },
      },
      {
        type: 'improvement',
        ja: {
          description: 'スキルセットのアイコン追加',
        },
        en: {
          description: 'Added icons to skill sets',
        },
      },
      // {
      //   type: "bugfix",
      //   description: "ヘッダーのアイコン、履歴書ダウンロードリンクデザイン修正",
      // },
    ],
  },
  {
    version: '1.1.0',
    date: '2024-12-30',
    changes: [
      {
        type: 'feature',
        ja: {
          description: `EnglishCV追加。
Youtube検索プロジェクト追加。
取得資格追加(Google Cloud)。
アップデート履歴を追加`,
        },
        en: {
          description: `Added English CV.
Added YouTube search project.
Added certifications (Google Cloud).
Added update history`,
        },
      },
      {
        type: 'improvement',
        ja: {
          description: `ヘッダーのアイコン、履歴書ダウンロードリンクデザイン修正。
東京ガスに関するプロジェクトページの詳細リンク説明追加`,
        },
        en: {
          description: `Fixed header icon and resume download link design.
Added detailed link descriptions for Tokyo Gas project page`,
        },
      },
      // {
      //   type: "bugfix",
      //   description: "ヘッダーのアイコン、履歴書ダウンロードリンクデザイン修正",
      // },
    ],
  },
  {
    version: '1.0.0',
    date: '2024-12',
    changes: [{
      type: 'feature',
      ja: {
        description: 'サイト公開',
      },
      en: {
        description: 'Site launch',
      },
    }],
  },
];
