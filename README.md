# Portfolio API

A RESTful API built with Express.js and TypeScript that serves portfolio data for Shingu Akira's portfolio website.

## Features

- Express.js backend with TypeScript
- RESTful API endpoints for portfolio data
- CORS enabled
- Environment variable configuration
- Ready for deployment to serverless platforms (Vercel, AWS Lambda, Azure Functions)

## API Endpoints

- `GET /api/profile`: Get personal profile information
- `GET /api/experience`: Get professional experience
- `GET /api/projects`: Get project portfolio (add `?featured=true` to filter featured projects)
- `GET /api/skills`: Get skills (add `?category=frontend` to filter by category)
- `GET /api/education`: Get educational background
- `GET /api/contact`: Get contact information
- `GET /health`: Health check endpoint

## Getting Started

### Prerequisites

- Node.js 14+ 
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/shinguakira/portfolio-api.git
   cd portfolio-api
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Create a `.env` file by copying the example
   ```
   cp .env.example .env
   ```

4. Start the development server
   ```
   npm run dev
   ```

### Building for Production

```
npm run build
npm start
```

## Deployment

### Vercel

Create a `vercel.json` file:

```json
{
  "version": 2,
  "builds": [{ "src": "dist/index.js", "use": "@vercel/node" }],
  "routes": [{ "src": "/(.*)", "dest": "/dist/index.js" }]
}
```

Then deploy:

```
vercel deploy --prod
```

### AWS Lambda

Follow the serverless framework guide for AWS Lambda deployment.

### Azure Functions

Follow the Azure Functions deployment guide using the Azure CLI.

## License

MIT
