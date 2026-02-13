# Portfolio API - Agent Reference

## Project Overview

A RESTful API built with Express.js and TypeScript that serves portfolio data for a web front-end. Deployed to multiple serverless platforms for availability and flexibility.

## Core Technologies

- Node.js (>=14.0.0)
- Express.js
- TypeScript (ES Modules with `"type": "module"`)
- AWS Lambda (Serverless Framework via `@vendia/serverless-express`)
- Vercel
- Vitest (testing)
- ESLint + Prettier (linting/formatting)

## Directory Structure

- `src/` - Main source code
  - `constants/` - Hardcoded portfolio data (profile, projects, skills, etc.)
  - `controllers/` - Route handlers / business logic
  - `routes/` - API route definitions mapped to controllers
  - `services/` - Service layer (e.g., PDF generation via `@react-pdf/renderer`)
  - `types/` - TypeScript type definitions (published as `@shinguakira/portfolio-api-types`)
  - `tests/` - Vitest test files and expected test data
  - `assets/` - Static assets
  - `handler.ts` - AWS Lambda entry point using `@vendia/serverless-express`
  - `index.ts` - Main Express server entry point
- `dist/` - (Generated on build) Compiled JavaScript output

## Key Files

- `src/index.ts` - Express server setup, middleware, and route mounting
- `src/routes/portfolio.ts` - All API route definitions
- `src/controllers/portfolio.ts` - Controller logic for each endpoint
- `src/handler.ts` - AWS Lambda handler wrapping Express app
- `serverless.yml` - AWS Serverless Framework configuration
- `vercel.json` - Vercel deployment configuration
- `package.json` - Dependencies and NPM scripts
- `tsconfig.json` - TypeScript compiler configuration

## NPM Scripts

- `npm run dev` - Start dev server with `tsx`
- `npm run dev:watch` - Start dev server with live reload (`tsx watch`)
- `npm run build` - Compile TypeScript to `dist/`
- `npm run start` - Run production server from `dist/`
- `npm run test` - Run tests with Vitest
- `npm run test:coverage` - Run tests with coverage report
- `npm run lint` / `npm run lint:fix` - Lint with ESLint
- `npm run format` / `npm run format:check` - Format with Prettier
- `npm run fix` - Run format + lint fix

## API Endpoints

All data endpoints are mounted under `/api`:

| Endpoint | Description |
|---|---|
| `/health` | Health check |
| `/api/profile` | Profile data |
| `/api/experience` | Work experience |
| `/api/projects` | Projects |
| `/api/skills` | Skills |
| `/api/other-skills` | Other/additional skills |
| `/api/education` | Education history |
| `/api/contact` | Contact information |
| `/api/certifications` | Certifications |
| `/api/changelogs` | Changelogs |
| `/api/faqs` | FAQs |
| `/api/links` | Links |
| `/api/strong-points` | Strong points |
| `/api/download-pdf` | Download portfolio as PDF |

## Deployment

### AWS Lambda (Serverless Framework)

- **Base URL**: `https://s55mfd704a.execute-api.us-east-1.amazonaws.com/dev`
- The `/dev` stage prefix is required in all URLs

```bash
npm run build
serverless deploy
```

### Vercel

- **Base URL**: `https://portfolio-mifikniwe-akirashingus-projects.vercel.app`

```bash
vercel --prod
```

## Cross-Platform Compatibility Notes

- ES Module configuration (`"type": "module"` in package.json)
- Module resolution: `"moduleResolution": "NodeNext"` in tsconfig.json
- Explicit `.js` extensions required in TypeScript imports
- Types are published as a separate package: `@shinguakira/portfolio-api-types`

## Troubleshooting

- **AWS "Missing Authentication Token"** - Ensure the `/dev` stage name is in the URL path
- **AWS logs** - Check CloudWatch Logs
- **Vercel logs** - Use `vercel logs` or the Vercel dashboard

See `DEPLOYMENT.md` for full endpoint URLs and verification steps.
