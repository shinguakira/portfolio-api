package data

import "github.com/shinguakira/portfolio-api-go/model"

var ChangelogsJA = []model.ChangelogItem{
	{
		Version: "1.4.0",
		Date:    "2025-04-20",
		Changes: []model.ChangelogChange{
			{Type: "feature", Description: "プロジェクト追加\n多言語対応（日本語・英語）の実装\n動的ルーティングによる言語切り替え機能の追加\nSEO対応のためのgenerateStaticParamsの実装\n言語切替時に現在のページを維持する機能追加"},
			{Type: "improvement", Description: "Qiitaアイコン表示のためのAPIをLogo.devに変更\nページ構造の最適化とコード整理\n資格証明書リンクの絶対パス参照に修正"},
			{Type: "bugfix", Description: "Vercelデプロイメントエラーの修正"},
		},
	},
	{
		Version: "1.3.0",
		Date:    "2025-04-06",
		Changes: []model.ChangelogChange{
			{Type: "feature", Description: "タイピングゲームプロジェクト追加\nバンキングアプリのgithubURLおよび公開URL追加\nサイト表示時、各ページに関する説明を表示\nデータベース制御アプリのgithubURLおよび公開URL追加"},
			{Type: "improvement", Description: "プロジェクトページにレインボーフレーム効果追加\n資格ページのアイコン追加"},
		},
	},
	{
		Version: "1.2.0",
		Date:    "2024-01-24",
		Changes: []model.ChangelogChange{
			{Type: "feature", Description: "Qiita記事をArticleページに追加"},
			{Type: "improvement", Description: "スキルセットのアイコン追加"},
		},
	},
	{
		Version: "1.1.0",
		Date:    "2024-12-30",
		Changes: []model.ChangelogChange{
			{Type: "feature", Description: "EnglishCV追加。\nYoutube検索プロジェクト追加。\n取得資格追加(Google Cloud)。\nアップデート履歴を追加"},
			{Type: "improvement", Description: "ヘッダーのアイコン、履歴書ダウンロードリンクデザイン修正。\n東京ガスに関するプロジェクトページの詳細リンク説明追加"},
		},
	},
	{
		Version: "1.0.0",
		Date:    "2024-12",
		Changes: []model.ChangelogChange{
			{Type: "feature", Description: "サイト公開"},
		},
	},
}

var ChangelogsEN = []model.ChangelogItem{
	{
		Version: "1.4.0",
		Date:    "2025-04-20",
		Changes: []model.ChangelogChange{
			{Type: "feature", Description: "Added new projects.\nImplemented multilingual support (Japanese and English).\nAdded dynamic routing for language switching.\nImplemented generateStaticParams for SEO.\nAdded functionality to maintain the current page when switching languages."},
			{Type: "improvement", Description: "Changed API for Qiita icon display to Logo.dev.\nOptimized page structure and refactored code.\nFixed absolute path reference for certification links."},
			{Type: "bugfix", Description: "Fixed Vercel deployment error."},
		},
	},
	{
		Version: "1.3.0",
		Date:    "2025-04-06",
		Changes: []model.ChangelogChange{
			{Type: "feature", Description: "Added typing game project.\nAdded GitHub URL and public URL for banking app.\nDisplayed descriptions for each page when the site is viewed.\nAdded GitHub URL and public URL for database control app."},
			{Type: "improvement", Description: "Added rainbow frame effect to project pages.\nAdded icons to certification pages."},
		},
	},
	{
		Version: "1.2.0",
		Date:    "2024-01-24",
		Changes: []model.ChangelogChange{
			{Type: "feature", Description: "Added Qiita articles to the Article page."},
			{Type: "improvement", Description: "Added skill set icons."},
		},
	},
	{
		Version: "1.1.0",
		Date:    "2024-12-30",
		Changes: []model.ChangelogChange{
			{Type: "feature", Description: "Added English CV.\nAdded YouTube search project.\nAdded Google Cloud certification.\nAdded update history."},
			{Type: "improvement", Description: "Fixed header icon and resume download link design.\nAdded detailed link descriptions to Tokyo Gas project page."},
		},
	},
	{
		Version: "1.0.0",
		Date:    "2024-12",
		Changes: []model.ChangelogChange{
			{Type: "feature", Description: "Site published."},
		},
	},
}
