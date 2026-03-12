{-# LANGUAGE OverloadedStrings #-}

module Data.Changelog
  ( changelogsJA
  , changelogsEN
  ) where

import Model.Changelog (ChangelogItem(..), ChangelogChange(..))

changelogsJA :: [ChangelogItem]
changelogsJA =
  [ ChangelogItem
      { clVersion = "1.4.0"
      , clDate = "2025-04-20"
      , clChanges =
          [ ChangelogChange
              { ccType = "feature"
              , ccDescription = "プロジェクト追加\n多言語対応（日本語・英語）の実装\n動的ルーティングによる言語切り替え機能の追加\nSEO対応のためのgenerateStaticParamsの実装\n言語切替時に現在のページを維持する機能追加"
              }
          , ChangelogChange
              { ccType = "improvement"
              , ccDescription = "Qiitaアイコン表示のためのAPIをLogo.devに変更\nページ構造の最適化とコード整理\n資格証明書リンクの絶対パス参照に修正"
              }
          , ChangelogChange
              { ccType = "bugfix"
              , ccDescription = "Vercelデプロイメントエラーの修正"
              }
          ]
      }
  , ChangelogItem
      { clVersion = "1.3.0"
      , clDate = "2025-04-06"
      , clChanges =
          [ ChangelogChange
              { ccType = "feature"
              , ccDescription = "タイピングゲームプロジェクト追加\nバンキングアプリのgithubURLおよび公開URL追加\nサイト表示時、各ページに関する説明を表示\nデータベース制御アプリのgithubURLおよび公開URL追加"
              }
          , ChangelogChange
              { ccType = "improvement"
              , ccDescription = "プロジェクトページにレインボーフレーム効果追加\n資格ページのアイコン追加"
              }
          ]
      }
  , ChangelogItem
      { clVersion = "1.2.0"
      , clDate = "2024-01-24"
      , clChanges =
          [ ChangelogChange
              { ccType = "feature"
              , ccDescription = "Qiita記事をArticleページに追加"
              }
          , ChangelogChange
              { ccType = "improvement"
              , ccDescription = "スキルセットのアイコン追加"
              }
          ]
      }
  , ChangelogItem
      { clVersion = "1.1.0"
      , clDate = "2024-12-30"
      , clChanges =
          [ ChangelogChange
              { ccType = "feature"
              , ccDescription = "EnglishCV追加。\nYoutube検索プロジェクト追加。\n取得資格追加(Google Cloud)。\nアップデート履歴を追加"
              }
          , ChangelogChange
              { ccType = "improvement"
              , ccDescription = "ヘッダーのアイコン、履歴書ダウンロードリンクデザイン修正。\n東京ガスに関するプロジェクトページの詳細リンク説明追加"
              }
          ]
      }
  , ChangelogItem
      { clVersion = "1.0.0"
      , clDate = "2024-12"
      , clChanges =
          [ ChangelogChange
              { ccType = "feature"
              , ccDescription = "サイト公開"
              }
          ]
      }
  ]

changelogsEN :: [ChangelogItem]
changelogsEN =
  [ ChangelogItem
      { clVersion = "1.4.0"
      , clDate = "2025-04-20"
      , clChanges =
          [ ChangelogChange
              { ccType = "feature"
              , ccDescription = "Added new projects.\nImplemented multilingual support (Japanese and English).\nAdded dynamic routing for language switching.\nImplemented generateStaticParams for SEO.\nAdded functionality to maintain the current page when switching languages."
              }
          , ChangelogChange
              { ccType = "improvement"
              , ccDescription = "Changed API for Qiita icon display to Logo.dev.\nOptimized page structure and refactored code.\nFixed absolute path reference for certification links."
              }
          , ChangelogChange
              { ccType = "bugfix"
              , ccDescription = "Fixed Vercel deployment error."
              }
          ]
      }
  , ChangelogItem
      { clVersion = "1.3.0"
      , clDate = "2025-04-06"
      , clChanges =
          [ ChangelogChange
              { ccType = "feature"
              , ccDescription = "Added typing game project.\nAdded GitHub URL and public URL for banking app.\nDisplayed descriptions for each page when the site is viewed.\nAdded GitHub URL and public URL for database control app."
              }
          , ChangelogChange
              { ccType = "improvement"
              , ccDescription = "Added rainbow frame effect to project pages.\nAdded icons to certification pages."
              }
          ]
      }
  , ChangelogItem
      { clVersion = "1.2.0"
      , clDate = "2024-01-24"
      , clChanges =
          [ ChangelogChange
              { ccType = "feature"
              , ccDescription = "Added Qiita articles to the Article page."
              }
          , ChangelogChange
              { ccType = "improvement"
              , ccDescription = "Added skill set icons."
              }
          ]
      }
  , ChangelogItem
      { clVersion = "1.1.0"
      , clDate = "2024-12-30"
      , clChanges =
          [ ChangelogChange
              { ccType = "feature"
              , ccDescription = "Added English CV.\nAdded YouTube search project.\nAdded Google Cloud certification.\nAdded update history."
              }
          , ChangelogChange
              { ccType = "improvement"
              , ccDescription = "Fixed header icon and resume download link design.\nAdded detailed link descriptions to Tokyo Gas project page."
              }
          ]
      }
  , ChangelogItem
      { clVersion = "1.0.0"
      , clDate = "2024-12"
      , clChanges =
          [ ChangelogChange
              { ccType = "feature"
              , ccDescription = "Site published."
              }
          ]
      }
  ]
