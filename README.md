# Portfolio API

A multi-backend RESTful API that serves portfolio data for the portfolio website. Implemented in four languages — TypeScript, Go, Rust, and Haskell — all returning identical JSON responses. Bilingual (Japanese/English) support via `?lang=en` query parameter.

## Backends

| Backend | Framework | Port | Directory |
|---------|-----------|------|-----------|
| TypeScript | Express.js | 3004 | `ts/` |
| Go | Chi | 3005 | `go/` |
| Rust | Actix Web | 3006 | `rust/` |
| Haskell | Scotty | 3007 | `haskell/` |

TypeScript is the source of truth. All other backends mirror its data and response format.

## API Endpoints

All endpoints are under `/api/` and return JSON. Most support `?lang=en` for English (default: Japanese).

| Endpoint | Description |
|----------|-------------|
| `GET /` | Welcome message with endpoint list |
| `GET /health` | Health check |
| `GET /api/profile` | Personal profile |
| `GET /api/experience` | Professional experience |
| `GET /api/projects` | Project portfolio |
| `GET /api/skills` | Technical skills |
| `GET /api/other-skills` | Other skills |
| `GET /api/education` | Educational background |
| `GET /api/contact` | Contact information |
| `GET /api/certifications` | Certifications |
| `GET /api/changelogs` | Changelogs |
| `GET /api/faqs` | FAQs |
| `GET /api/links` | External links |
| `GET /api/strong-points` | Strong points |
| `GET /api/notifications` | Notifications |
| `GET /api/articles` | Articles (fetched from Qiita) |
| `GET /api/download-pdf` | Download resume as PDF (`?format=compact\|executive\|technical\|academic\|modern`) |

## Project Structure

```
portfolio-api/
├── ts/                  # TypeScript backend (source of truth)
├── go/                  # Go backend
├── rust/                # Rust backend
├── haskell/             # Haskell backend
├── packages/            # Shared type package (@shinguakira/portfolio-api-types)
├── public/images/       # Production images (served by Vercel)
├── scripts/             # Utility scripts (image sync, etc.)
└── vercel.json          # Vercel deployment config
```

## Getting Started

### TypeScript

```bash
cd ts
npm install
npm run dev        # Start dev server on port 3004
npm test           # Run tests (vitest)
npm run build      # Compile TypeScript
```

### Go

```bash
cd go
go mod tidy
go run .           # Start server on port 3005
go test ./...      # Run tests
```

### Rust

```bash
cd rust
cargo run          # Start server on port 3006
cargo test         # Run tests
```

### Haskell

```bash
cd haskell
stack build
stack exec portfolio-api-haskell  # Start server on port 3007
stack test                         # Run tests
```

## Deployment

Deployed on Vercel. The `vercel.json` routes:
- `/images/*` → `public/images/` (static assets)
- `/icons/*` → `ts/public/icons/` (static assets)
- `/api/*` and `/` → TypeScript backend

## Image Sync

Root `public/images/` is the production source of truth. Use the sync script to keep `ts/public/images/` in sync for local dev:

```bash
node scripts/sync-public.mjs             # Sync root → ts
node scripts/sync-public.mjs --reverse   # Sync ts → root
node scripts/sync-public.mjs --dry-run   # Preview changes
```

## License

MIT
