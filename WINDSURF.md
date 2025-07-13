# Portfolio API - Windsurf Deployment Documentation

## Deployment Overview

This TypeScript Express.js API has been successfully deployed to multiple serverless platforms to provide maximum availability and flexibility.

## Deployment URLs

### AWS Lambda (via Serverless Framework)
- **Base URL**: https://s55mfd704a.execute-api.us-east-1.amazonaws.com/dev
- **Note**: The `/dev` stage name is required in all URLs
- **API Root**: https://s55mfd704a.execute-api.us-east-1.amazonaws.com/dev/api

### Vercel
- **Base URL**: https://portfolio-mifikniwe-akirashingus-projects.vercel.app
- **API Root**: https://portfolio-mifikniwe-akirashingus-projects.vercel.app/api

## Testing Endpoints

You can verify the deployment is working by accessing these key endpoints:

### Health Check
```
https://s55mfd704a.execute-api.us-east-1.amazonaws.com/dev/health
https://portfolio-mifikniwe-akirashingus-projects.vercel.app/health
```

### API Documentation (Root Path)
```
https://s55mfd704a.execute-api.us-east-1.amazonaws.com/dev
https://portfolio-mifikniwe-akirashingus-projects.vercel.app
```

### Sample Data Endpoint
```
https://s55mfd704a.execute-api.us-east-1.amazonaws.com/dev/api/profile
https://portfolio-mifikniwe-akirashingus-projects.vercel.app/api/profile
```

## Configuration Files

### AWS Lambda (Serverless Framework)
- **Configuration**: `serverless.yml`
- **Handler**: `src/handler.ts` using `@vendia/serverless-express`

### Vercel
- **Configuration**: `vercel.json`
- **Entry Point**: `src/index.ts`

## Cross-Platform Compatibility

This project demonstrates successful cross-platform TypeScript compatibility:
- ES Module configuration (`"type": "module"` in package.json)
- Proper module resolution with `"moduleResolution": "NodeNext"` in tsconfig.json
- Explicit file extensions in imports (`.js` extension required for TypeScript files)
- Properly exported TypeScript types

## Deployment Commands

### AWS Lambda
```bash
# Build project
npm run build

# Deploy to AWS
serverless deploy
```

### Vercel
```bash
# Build and deploy
vercel --prod
```

## Troubleshooting

### AWS Lambda
- If you encounter "Missing Authentication Token", make sure to include the `/dev` stage name in your URL path
- Check CloudWatch Logs for detailed error information

### Vercel
- Check the Vercel deployment logs in the Vercel dashboard
- Use `vercel logs` command to view recent logs

For a complete list of all available API endpoints, refer to the `DEPLOYMENT.md` file.
