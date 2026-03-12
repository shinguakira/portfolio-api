use lazy_static::lazy_static;
use crate::model::changelog::{ChangelogItem, ChangelogChange};

lazy_static! {
    pub static ref CHANGELOGS_JA: Vec<ChangelogItem> = vec![
        ChangelogItem {
            version: "1.4.0".to_string(),
            date: "2025-04-20".to_string(),
            changes: vec![
                ChangelogChange {
                    change_type: "feature".to_string(),
                    description: "プロジェクト追加\n多言語対応（日本語・英語）の実装\n動的ルーティングによる言語切り替え機能の追加\nSEO対応のためのgenerateStaticParamsの実装\n言語切替時に現在のページを維持する機能追加".to_string(),
                },
                ChangelogChange {
                    change_type: "improvement".to_string(),
                    description: "Qiitaアイコン表示のためのAPIをLogo.devに変更\nページ構造の最適化とコード整理\n資格証明書リンクの絶対パス参照に修正".to_string(),
                },
                ChangelogChange {
                    change_type: "bugfix".to_string(),
                    description: "Vercelデプロイメントエラーの修正".to_string(),
                },
            ],
        },
        ChangelogItem {
            version: "1.3.0".to_string(),
            date: "2025-04-06".to_string(),
            changes: vec![
                ChangelogChange {
                    change_type: "feature".to_string(),
                    description: "タイピングゲームプロジェクト追加\nバンキングアプリのgithubURLおよび公開URL追加\nサイト表示時、各ページに関する説明を表示\nデータベース制御アプリのgithubURLおよび公開URL追加".to_string(),
                },
                ChangelogChange {
                    change_type: "improvement".to_string(),
                    description: "プロジェクトページにレインボーフレーム効果追加\n資格ページのアイコン追加".to_string(),
                },
            ],
        },
        ChangelogItem {
            version: "1.2.0".to_string(),
            date: "2024-01-24".to_string(),
            changes: vec![
                ChangelogChange {
                    change_type: "feature".to_string(),
                    description: "Qiita記事をArticleページに追加".to_string(),
                },
                ChangelogChange {
                    change_type: "improvement".to_string(),
                    description: "スキルセットのアイコン追加".to_string(),
                },
            ],
        },
        ChangelogItem {
            version: "1.1.0".to_string(),
            date: "2024-12-30".to_string(),
            changes: vec![
                ChangelogChange {
                    change_type: "feature".to_string(),
                    description: "EnglishCV追加。\nYoutube検索プロジェクト追加。\n取得資格追加(Google Cloud)。\nアップデート履歴を追加".to_string(),
                },
                ChangelogChange {
                    change_type: "improvement".to_string(),
                    description: "ヘッダーのアイコン、履歴書ダウンロードリンクデザイン修正。\n東京ガスに関するプロジェクトページの詳細リンク説明追加".to_string(),
                },
            ],
        },
        ChangelogItem {
            version: "1.0.0".to_string(),
            date: "2024-12".to_string(),
            changes: vec![
                ChangelogChange {
                    change_type: "feature".to_string(),
                    description: "サイト公開".to_string(),
                },
            ],
        },
    ];

    pub static ref CHANGELOGS_EN: Vec<ChangelogItem> = vec![
        ChangelogItem {
            version: "1.4.0".to_string(),
            date: "2025-04-20".to_string(),
            changes: vec![
                ChangelogChange {
                    change_type: "feature".to_string(),
                    description: "Added new projects.\nImplemented multilingual support (Japanese and English).\nAdded dynamic routing for language switching.\nImplemented generateStaticParams for SEO.\nAdded functionality to maintain the current page when switching languages.".to_string(),
                },
                ChangelogChange {
                    change_type: "improvement".to_string(),
                    description: "Changed API for Qiita icon display to Logo.dev.\nOptimized page structure and refactored code.\nFixed absolute path reference for certification links.".to_string(),
                },
                ChangelogChange {
                    change_type: "bugfix".to_string(),
                    description: "Fixed Vercel deployment error.".to_string(),
                },
            ],
        },
        ChangelogItem {
            version: "1.3.0".to_string(),
            date: "2025-04-06".to_string(),
            changes: vec![
                ChangelogChange {
                    change_type: "feature".to_string(),
                    description: "Added typing game project.\nAdded GitHub URL and public URL for banking app.\nDisplayed descriptions for each page when the site is viewed.\nAdded GitHub URL and public URL for database control app.".to_string(),
                },
                ChangelogChange {
                    change_type: "improvement".to_string(),
                    description: "Added rainbow frame effect to project pages.\nAdded icons to certification pages.".to_string(),
                },
            ],
        },
        ChangelogItem {
            version: "1.2.0".to_string(),
            date: "2024-01-24".to_string(),
            changes: vec![
                ChangelogChange {
                    change_type: "feature".to_string(),
                    description: "Added Qiita articles to the Article page.".to_string(),
                },
                ChangelogChange {
                    change_type: "improvement".to_string(),
                    description: "Added skill set icons.".to_string(),
                },
            ],
        },
        ChangelogItem {
            version: "1.1.0".to_string(),
            date: "2024-12-30".to_string(),
            changes: vec![
                ChangelogChange {
                    change_type: "feature".to_string(),
                    description: "Added English CV.\nAdded YouTube search project.\nAdded Google Cloud certification.\nAdded update history.".to_string(),
                },
                ChangelogChange {
                    change_type: "improvement".to_string(),
                    description: "Fixed header icon and resume download link design.\nAdded detailed link descriptions to Tokyo Gas project page.".to_string(),
                },
            ],
        },
        ChangelogItem {
            version: "1.0.0".to_string(),
            date: "2024-12".to_string(),
            changes: vec![
                ChangelogChange {
                    change_type: "feature".to_string(),
                    description: "Site published.".to_string(),
                },
            ],
        },
    ];
}
