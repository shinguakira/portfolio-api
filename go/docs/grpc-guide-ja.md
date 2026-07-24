# gRPC 入門ガイド(Portfolio API / Go)

このドキュメントは **gRPC 初心者向け**の解説です。
「gRPC とは何か」「REST と何が違うのか」「このプロジェクトではどう組んであるか」
「どうやって動かして確認するか」を、用語の説明つきでまとめています。

> 前提: このリポジトリの Go API は、もともと REST(chi ルータ)だけでした。
> 今回、**REST はそのまま残したうえで**、同じデータを配る gRPC サーバを
> 追加しました。REST と gRPC は**別ポートで同時に起動**します。

---

## 1. gRPC とは(ざっくり)

**gRPC** = Google 製の RPC(Remote Procedure Call)フレームワーク。
「リモートにある関数を、ローカルの関数みたいに呼ぶ」ための仕組みです。

- クライアントは `client.GetProfile(req)` のように**メソッドを呼ぶ**だけ。
  裏で通信していることを意識しなくてよい。
- やり取りするデータの形は **Protocol Buffers(protobuf)** という
  スキーマ言語(`.proto` ファイル)で**先に厳密に定義**する。
- 通信は **HTTP/2** の上で、**バイナリ**でやり取りする(JSON より小さく速い)。

REST が「URL とHTTPメソッドで**リソース**を操作する」考え方なのに対し、
gRPC は「**関数(手続き)を呼ぶ**」考え方です。

---

## 2. REST と gRPC の違い(対比表)

| 観点 | REST(このAPIの従来方式) | gRPC(今回追加) |
|---|---|---|
| 発想 | リソース指向(URL + GET/POST…) | 手続き指向(メソッドを呼ぶ) |
| 呼び出しの単位 | エンドポイント `GET /api/profile` | メソッド `GetProfile()` |
| データ形式 | JSON(テキスト) | Protocol Buffers(バイナリ) |
| スキーマ | 任意(OpenAPI等は別途) | **必須**(`.proto` が契約) |
| 転送 | 主に HTTP/1.1 | **HTTP/2**(多重化・双方向) |
| コード生成 | 基本なし(手書き) | **自動生成**(型安全なクライアント/サーバ) |
| ストリーミング | 苦手(SSE等で工夫) | **標準対応**(4種類、後述) |
| ブラウザから直接 | そのまま可能 | 直接は不可(grpc-web / gateway が必要) |
| 人間が目で読む | しやすい(curl で見える) | しづらい(バイナリ。ツールで見る) |
| 速度・サイズ | ふつう | 速い・小さい傾向 |
| 得意な場面 | 公開 API、ブラウザ向け | 内部のサービス間通信、低遅延、型安全重視 |

**ひとことで言うと**:
- 外部公開・ブラウザから直接叩く → **REST** が楽。
- サーバ同士の通信・速度と型安全が欲しい → **gRPC** が強い。

---

## 3. 覚えておきたい用語(gRPC / protobuf)

| 用語 | 読み/意味 | REST でいうと |
|---|---|---|
| **Protocol Buffers(protobuf)** | データ構造を定義するスキーマ言語＆バイナリ形式 | JSON + そのスキーマ |
| **`.proto` ファイル** | サービスとメッセージを定義する「契約書」 | OpenAPI 仕様書に近い |
| **`message`** | データの型(構造体)。フィールドに**番号**を振る | JSON オブジェクトの型 |
| **フィールド番号** | `= 1` などの数字。バイナリ上の識別子。**変更禁止** | (JSON にはない概念) |
| **`service`** | 呼べるメソッドの集合 | ルータ / コントローラ |
| **`rpc`** | 1 つのメソッド(API) | 1 エンドポイント |
| **`repeated`** | 配列/スライスを表す修飾子 | JSON の配列 |
| **スタブ(stub)** | 自動生成されるクライアント。呼ぶだけで通信してくれる | HTTP クライアント + 型 |
| **チャネル(channel)** | クライアントとサーバ間の接続(コネクション) | HTTP コネクション |
| **メタデータ(metadata)** | リクエストに付ける key-value | HTTP ヘッダ |
| **ステータスコード** | `OK` / `NOT_FOUND` / `INVALID_ARGUMENT` 等 | HTTP ステータス(404等) |
| **リフレクション(reflection)** | サーバが自分の定義を教える機能。`.proto` 無しで探索できる | (近いものはない) |
| **ヘルスチェック** | `grpc.health.v1.Health` という標準サービス | `GET /health` |
| **unary / streaming** | 通信の型(後述の4種) | 通常のリクエスト/レスポンス |

---

## 4. RPC の 4 種類(通信パターン)

gRPC は HTTP/2 の多重化を活かして、次の 4 パターンを標準サポートします。

1. **Unary(単発)**: リクエスト 1 → レスポンス 1。REST と同じ形。
   → **このプロジェクトの RPC は全部これ**。
   ```proto
   rpc GetProfile(GetProfileRequest) returns (GetProfileResponse);
   ```
2. **Server streaming(サーバ→複数)**: リクエスト 1 → レスポンス複数(逐次)。
   例: 検索結果を少しずつ流す。
   ```proto
   rpc ListEvents(Req) returns (stream Event);
   ```
3. **Client streaming(クライアント→複数)**: リクエスト複数 → レスポンス 1。
   例: ログを連続アップロードして最後に集計を受け取る。
   ```proto
   rpc UploadLogs(stream LogLine) returns (Summary);
   ```
4. **Bidirectional streaming(双方向)**: 両方が同時にストリーム。
   例: チャット、リアルタイム同期。
   ```proto
   rpc Chat(stream Msg) returns (stream Msg);
   ```

> 今回は入門なので **Unary のみ**にしています。REST の各エンドポイントを
> そのまま 1 メソッドに写しているので、対応が分かりやすいはずです。

---

## 5. このプロジェクトの gRPC 構成

### 5.1 ファイル配置

```
go/
├── proto/portfolio/v1/portfolio.proto   ← ★契約(手書きするのはここ)
├── buf.yaml                             ← buf のワークスペース設定
├── buf.gen.yaml                         ← コード生成の設定
├── gen/portfolio/v1/                    ← ★自動生成(手で編集しない)
│   ├── portfolio.pb.go                  ←  message(構造体)+ シリアライズ
│   └── portfolio_grpc.pb.go             ←  service のサーバ/クライアント
├── grpcserver/server.go                 ← ★gRPC 実装(model→pb 詰め替え)
├── main.go                              ← REST と gRPC を両方起動
├── data/                                ← データ本体(REST と gRPC で共有)
├── model/                               ← Go の構造体(REST と gRPC で共有)
├── handler/                             ← REST ハンドラ(従来どおり)
└── service/pdf.go                       ← PDF 生成(REST/gRPC 両方から利用)
```

★ が付いているのが今回追加/手で触るファイル。`gen/` は生成物です。

### 5.2 データは REST と共有

重要な設計ポイント: **gRPC は新しいデータを持ちません**。
`grpcserver/server.go` は REST ハンドラと**同じ `data` パッケージ**を読み、
`model.*` の構造体を、生成された `pb.*` 型へ**詰め替える**だけです。

```
data.ProfileEN (model.ProfileResponse)
        │  toPBProfile() で詰め替え
        ▼
pb.Profile  ──(gRPC で送信)──▶ クライアント
```

なので **REST と gRPC は必ず同じ中身**を返します(配り方だけが違う)。

### 5.3 コード生成の流れ

```
portfolio.proto ──[ buf generate ]──▶ portfolio.pb.go / portfolio_grpc.pb.go
     (人が書く)                              (自動生成・編集しない)
```

`.proto` を変更したら、必ず `buf generate` で再生成します(手順は §7)。

---

## 6. 事前準備(ツール導入)

`buf` は `protoc` の代わりになるツールで、**protoc バイナリ無し**で生成できます。
必要なのは `buf` 本体と、Go 用の生成プラグイン 2 つ(どちらも `go install` で入る)。

```bash
# 生成ツール一式(初回のみ)
go install github.com/bufbuild/buf/cmd/buf@latest
go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest

# 動作確認用の gRPC クライアント(任意だが便利)
go install github.com/fullstorydev/grpcurl/cmd/grpcurl@latest
```

> これらは `GOPATH/bin`(例: `C:\Users\<you>\go\bin`)に入ります。
> このフォルダが PATH に含まれていることを確認してください。

Go の依存(サーバ側ライブラリ)は既に `go.mod` に追加済みです:
`google.golang.org/grpc`, `google.golang.org/protobuf`。

---

## 7. コード生成のしかた

`.proto` を編集したら、`go/` ディレクトリで:

```bash
cd go
buf lint      # 命名規則などの静的チェック(任意)
buf generate  # gen/ 以下に Go コードを再生成
```

`buf.gen.yaml` の設定により、`gen/portfolio/v1/` に 2 ファイルが出力されます。
生成物は**手で編集しない**でください(次回生成で上書きされます)。

---

## 8. 起動と動作確認

### 8.1 サーバ起動(REST と gRPC が同時に立つ)

```bash
cd go
go run .
```

起動ログ:

```
Portfolio API Server (Go / REST) running on port 3005
Portfolio API Server (Go / gRPC) running on port 50051
gRPC:   localhost:50051 (reflection + health enabled)
```

ポートは環境変数で変更可能:
- REST: `PORT`(既定 `3005`)
- gRPC: `GRPC_PORT`(既定 `50051`)

### 8.2 gRPC を叩く(grpcurl)

**リフレクションを有効にしてある**ので、クライアント側に `.proto` が無くても
サービス一覧やメソッドを探索できます。`-plaintext` は TLS 無し(ローカル用)の意味。

```bash
# サービス一覧
grpcurl -plaintext localhost:50051 list

# メソッド一覧
grpcurl -plaintext localhost:50051 list portfolio.v1.PortfolioService

# メソッドの入出力スキーマを見る
grpcurl -plaintext localhost:50051 describe portfolio.v1.PortfolioService.GetProfile

# 実際に呼ぶ(引数は JSON で渡す。protobuf に自動変換される)
grpcurl -plaintext -d '{"lang":"en"}' \
  localhost:50051 portfolio.v1.PortfolioService.GetProfile

# 引数なしの RPC
grpcurl -plaintext -d '{}' \
  localhost:50051 portfolio.v1.PortfolioService.GetSkills

# ヘルスチェック(標準サービス)
grpcurl -plaintext -d '{"service":"portfolio.v1.PortfolioService"}' \
  localhost:50051 grpc.health.v1.Health/Check
```

### 8.3 REST と見比べる

同じデータが返ることを確認できます。

```bash
# gRPC
grpcurl -plaintext -d '{"lang":"en"}' localhost:50051 portfolio.v1.PortfolioService.GetProfile
# REST
curl "http://localhost:3005/api/profile?lang=en"
```

> grpcurl の出力が JSON なのは「人間に見せるため」で、実際の通信路は
> バイナリ(protobuf)です。JSON はあくまで表示用の変換結果です。

---

## 9. REST エンドポイント ↔ gRPC メソッド 対応表

| REST | gRPC メソッド | 引数 |
|---|---|---|
| `GET /health` | `HealthCheck` | なし |
| `GET /api/profile` | `GetProfile` | `lang` |
| `GET /api/experience` | `GetExperience` | `lang` |
| `GET /api/projects` | `GetProjects` | `lang` |
| `GET /api/skills` | `GetSkills` | なし |
| `GET /api/other-skills` | `GetOtherSkills` | なし |
| `GET /api/education` | `GetEducation` | `lang` |
| `GET /api/contact` | `GetContact` | なし |
| `GET /api/certifications` | `GetCertifications` | `lang` |
| `GET /api/changelogs` | `GetChangelogs` | `lang` |
| `GET /api/faqs` | `GetFaqs` | `lang` |
| `GET /api/links` | `GetLinks` | なし |
| `GET /api/strong-points` | `GetStrongPoints` | `lang` |
| `GET /api/download-pdf` | `DownloadPortfolioPDF` | `lang`,`format`,`include_*` |

> `lang` は `"en"` のときだけ英語、それ以外(空含む)は日本語。REST と同じ挙動です。

---

## 10. 設計上のポイント / 慣習

- **リクエスト型は RPC ごとに専用**にしています(引数が無い場合も `GetSkillsRequest {}`)。
  こうすると、後から引数を足しても**後方互換を壊さない**(Google の API 設計指針)。
- **フィールド番号は一度決めたら変えない**。番号を付け替えると、
  古いクライアントが別フィールドとして誤解読します。フィールド削除時は
  番号を `reserved` にして再利用を防ぐのが安全。
- **`UnimplementedPortfolioServiceServer` を埋め込む**(`grpcserver/server.go`)。
  `.proto` に新しい `rpc` を足しても、未実装分は自動で埋まりビルドが壊れません。
- **エラーは HTTP ステータスではなく gRPC の status コードで返す**のが作法
  (`codes.NotFound` など)。今回のサーバは静的データなので基本 `OK` のみ。

---

## 11. よくあるハマりどころ

- **`buf: command not found`** → `go install` 後、`GOPATH/bin` が PATH に無い。
- **生成コードを手で直した** → 次の `buf generate` で消える。`.proto` を直す。
- **フィールド名が Go で変わって見える** → `.proto` は `snake_case`、Go は
  `CamelCase`、JSON 表示は `camelCase`。同じフィールドの表記違いなので混乱しない。
- **ブラウザ(fetch)から直接呼べない** → gRPC は HTTP/2 バイナリのため。
  ブラウザから使うなら **grpc-web** か、REST に変換する **grpc-gateway** を挟む。
  今回は REST を残してあるので、ブラウザは従来どおり REST を使えばOK。
- **`-plaintext` を付け忘れて接続エラー** → ローカルは TLS 無しなので必要。

---

## 12. 次に進むなら(発展)

- **ストリーミング RPC** を 1 つ作ってみる(例: `changelogs` を server streaming に)。
- **grpc-gateway** を導入し、1 つの `.proto` から REST も自動生成する。
- **TLS** を有効化して `-plaintext` 無しで接続する。
- **インターセプタ**(REST でいうミドルウェア)でロギング/認証を共通化する。
- **CI に `buf lint` / `buf breaking`** を組み込み、破壊的変更を自動検出する。

---

### 参考

- Protocol Buffers: https://protobuf.dev/
- gRPC(Go): https://grpc.io/docs/languages/go/
- buf: https://buf.build/docs/
- grpcurl: https://github.com/fullstorydev/grpcurl
