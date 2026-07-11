# TypeScript 7 (tsgo) — type-check upgrade & optimization analysis

Adopted the TypeScript 7 native (Go) compiler for the standalone type-check step in
the `portfolio-api-ts` workspace. TS 7 ships as `@typescript/native-preview`, exposing
the `tsgo` binary. Classic `tsc` is retained for emit (`build`) and as a cross-check.

## Environment

| | |
|---|---|
| Workspace | `ts/` (`portfolio-api-ts`) — Elysia + @react-pdf + exceljs |
| Size | 69 files, ~8,180 LOC (`src/**/*.{ts,tsx}`) |
| Node | v23.4.0 |
| Classic compiler | tsc 5.9.3 |
| Native compiler | tsgo 7.0.0-dev.20260707.2 (`@typescript/native-preview`) |
| tsconfig | `module`/`moduleResolution`: NodeNext, `strict`, `jsx: react-jsx` |

## Results

Direct-binary timing (no `npx`/shim overhead), 3 runs each, `--noEmit`:

| Compiler | Mode | Run 1 | Run 2 | Run 3 | Avg |
|---|---|---:|---:|---:|---:|
| tsc 5.9.3 | cold (no cache) | 2984 | 3065 | 2877 | **2975 ms** |
| tsc 5.9.3 | warm (`--incremental`) | 1948 | 2078 | 1815 | **1947 ms** |
| tsgo 7.0 | full, every run (no cache) | 519 | 508 | 555 | **527 ms** |

- **≈5.6× faster** than cold `tsc`.
- **≈3.7× faster** than warm/incremental `tsc`.
- tsgo keeps no `.tsbuildinfo` cache, so ~527 ms is the *every-run* cost — there is no
  cold/warm split. The current tsconfig isn't `incremental`/`composite`, so the honest
  day-to-day baseline is cold tsc (~2975 ms) → tsgo wins ~5.6×.

Parity verified: on identical code, tsc and tsgo emit **byte-identical diagnostics**
(same file:line:col, same error codes) and both now exit `0`.

## Changes made

1. `pnpm`/`npm add -D @typescript/native-preview` in the `ts` workspace
   (pinned `7.0.0-dev.20260707.2`).
2. `ts/package.json`: added `"type-check": "tsgo --noEmit"` and
   `"type-check:tsc": "tsc --noEmit"` (fallback). `build` still uses classic `tsc` (emit).
3. `ts/tsconfig.json`: removed `baseUrl` (removed in TS 7 → **TS5102**).
   No import rewrites were needed — the repo has **zero `@/` alias imports**, and the
   unused `paths` mapping resolves relative to `tsconfig.json` in TS 7, so it was kept
   as-is for future use.

### Incidental fixes (surfaced by the clean type-check)

- **Stale workspace symlink** — `node_modules/@shinguakira/portfolio-api-types` pointed at
  the old `E:\workspace\portfolio-api\…` path (repo was moved under `portfolio-stuff/`),
  causing a spurious `TS2307 Cannot find module`. Re-running `npm install` from the repo
  root relinked it.
- **`portfolio.ts:313`** — `new Response(buf)` with a Node `Buffer<ArrayBufferLike>` is not
  assignable to `BodyInit` (a SharedArrayBuffer-backed view is rejected). Wrapped in
  `Buffer.from(buf)` to match the existing working pattern at line 289 (`Buffer<ArrayBuffer>`).
- **`generateSamples.ts`** — removed the obsolete `format: 'standard'` option and the dead
  `pdfFormats` array, both leftovers from the "PDF standard-only" refactor (commit 68fa547);
  `format` no longer exists on `PDFGenerationOptions`.

## TS 7 gotchas to expect on this config style

- **`baseUrl` is gone** (TS5102). Rewrite bare-root imports to a `paths` alias, or drop it
  outright if unused (this repo). The TS5102 message suggests `"paths": {"*": ["./*"]}` if
  you relied on baseUrl for bare-root resolution.
- Global side-effect imports (e.g. `import "./x.css"`) throw **TS2882** under tsgo
  (`noUncheckedSideEffectImports` defaults `true` vs `false` in classic tsc). Not hit here
  (no CSS/asset side-effect imports), but relevant on front-end configs.

## How to run

```bash
npm run type-check          # tsgo (fast, primary)
npm run type-check:tsc      # classic tsc (cross-check / fallback)
```

## Caveats

- tsgo is a **dev preview** (stable ~Q3 2026). Keep `type-check:tsc` as a cross-check.
- The emit path (`npm run build`) still uses classic `tsc`, so produced JS/`.d.ts` is
  unchanged — the speedup applies only to the standalone type-check step.
- `@types/node` is pinned to `^18`; the `Buffer`/`BodyInit` friction above is a symptom of
  that lib version, not of tsgo.

## Replicate on another workspace

1. `npm add -D @typescript/native-preview` in the workspace.
2. Point `type-check` at `tsgo --noEmit`; keep `type-check:tsc` fallback.
3. Run `tsgo`; fix **TS5102** (`baseUrl`) and **TS2882** (side-effect imports) as above.
4. Confirm diagnostic parity against `tsc --noEmit`.
