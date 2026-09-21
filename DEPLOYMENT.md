# Deployment Information

This document contains information about the deployed endpoints and how to verify them.

## Deployed Endpoints

### Vercel (live)

- **Base URL**: https://portfolio-api-ten-delta.vercel.app
- This is the deployment the portfolio front-ends call. `my-vscode-portfolio`
  falls back to this URL in `lib/api/client.ts` when
  `NEXT_PUBLIC_PORTFOLIO_API_URL` is unset.

#### Available Endpoints

All verified to return 200 on the live deployment.

| Endpoint | Description |
|---|---|
| `/` | Root documentation listing the endpoints |
| `/health` | Health check |
| `/api/profile` | Profile information |
| `/api/skills` | Main skills |
| `/api/other-skills` | Other skills (IDEs, tools) |
| `/api/projects` | Projects |
| `/api/experience` | Work experience |
| `/api/education` | Education history |
| `/api/certifications` | Certifications |
| `/api/faqs` | FAQs |
| `/api/links` | Important links |
| `/api/strong-points` | Strong points |
| `/api/changelogs` | Changelog history |
| `/api/notifications` | Notifications |
| `/api/articles` | Articles |
| `/api/contact` | Contact information |
| `/api/download-pdf` | Portfolio as PDF (`application/pdf`) |
| `/api/download-excel` | Portfolio as XLSX |

Localized endpoints take `?lang=ja` (default) or `?lang=en`.

`/api/download-pdf` also takes a `format` of `standard`, `compact`, `executive`,
`technical`, `academic` or `modern`, plus the section toggles `projects`,
`experience`, `certifications` and `education` (`true` / `false`).

### AWS Lambda (Serverless Framework) — currently down

- **Base URL**: https://s55mfd704a.execute-api.us-east-1.amazonaws.com/dev
- **Status**: every path returns 502. The API Gateway stage still resolves, but
  the function behind it does not. Redeploy before quoting this URL anywhere.
- **Note**: the `/dev` stage name is part of the path for all AWS API Gateway
  endpoints.

## Verifying Deployments

### Testing Endpoints

1. **Browser**: open the URLs directly (GET requests only)
2. **cURL**:
   ```bash
   curl https://portfolio-api-ten-delta.vercel.app/health
   ```
3. **Postman/Insomnia**: import the URLs and test all endpoints

### Expected Response

A successful health check returns:

```json
{
  "status": "OK",
  "timestamp": "2026-09-21T23:48:52.559Z"
}
```

The root endpoint returns documentation about all available endpoints.

## Deployment Commands

### Vercel

```bash
vercel --prod
```

### AWS Lambda (Serverless Framework)

```bash
npm run build
serverless deploy
```
