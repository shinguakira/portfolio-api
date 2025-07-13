# Deployment Information

This document contains information about the deployed endpoints and how to verify them.

## Deployed Endpoints

### AWS Lambda (Serverless Framework)
- **Base URL**: https://s55mfd704a.execute-api.us-east-1.amazonaws.com/dev
- **Important Note**: The `/dev` stage name is required for all AWS API Gateway endpoints

#### Available Endpoints
- Root Documentation: `https://s55mfd704a.execute-api.us-east-1.amazonaws.com/dev`
- Health Check: `https://s55mfd704a.execute-api.us-east-1.amazonaws.com/dev/health`
- API Base: `https://s55mfd704a.execute-api.us-east-1.amazonaws.com/dev/api`
- Profile Data: `https://s55mfd704a.execute-api.us-east-1.amazonaws.com/dev/api/profile`
- Skills: `https://s55mfd704a.execute-api.us-east-1.amazonaws.com/dev/api/skills`
- Projects: `https://s55mfd704a.execute-api.us-east-1.amazonaws.com/dev/api/projects`
- Experience: `https://s55mfd704a.execute-api.us-east-1.amazonaws.com/dev/api/experience`
- Education: `https://s55mfd704a.execute-api.us-east-1.amazonaws.com/dev/api/education`
- Certifications: `https://s55mfd704a.execute-api.us-east-1.amazonaws.com/dev/api/certifications`
- FAQs: `https://s55mfd704a.execute-api.us-east-1.amazonaws.com/dev/api/faqs`
- Links: `https://s55mfd704a.execute-api.us-east-1.amazonaws.com/dev/api/links`
- Strong Points: `https://s55mfd704a.execute-api.us-east-1.amazonaws.com/dev/api/strong-points`
- Changelogs: `https://s55mfd704a.execute-api.us-east-1.amazonaws.com/dev/api/changelogs`

### Vercel
- **Base URL**: https://portfolio-mifikniwe-akirashingus-projects.vercel.app

#### Available Endpoints
- Root Documentation: `https://portfolio-mifikniwe-akirashingus-projects.vercel.app`
- Health Check: `https://portfolio-mifikniwe-akirashingus-projects.vercel.app/health`
- API Base: `https://portfolio-mifikniwe-akirashingus-projects.vercel.app/api`
- Profile Data: `https://portfolio-mifikniwe-akirashingus-projects.vercel.app/api/profile`
- Skills: `https://portfolio-mifikniwe-akirashingus-projects.vercel.app/api/skills`
- Projects: `https://portfolio-mifikniwe-akirashingus-projects.vercel.app/api/projects`
- Experience: `https://portfolio-mifikniwe-akirashingus-projects.vercel.app/api/experience`
- Education: `https://portfolio-mifikniwe-akirashingus-projects.vercel.app/api/education`
- Certifications: `https://portfolio-mifikniwe-akirashingus-projects.vercel.app/api/certifications`
- FAQs: `https://portfolio-mifikniwe-akirashingus-projects.vercel.app/api/faqs`
- Links: `https://portfolio-mifikniwe-akirashingus-projects.vercel.app/api/links`
- Strong Points: `https://portfolio-mifikniwe-akirashingus-projects.vercel.app/api/strong-points`
- Changelogs: `https://portfolio-mifikniwe-akirashingus-projects.vercel.app/api/changelogs`

## Verifying Deployments

### Testing Endpoints
You can verify that your endpoints are working correctly using:

1. **Browser**: Visit the URLs directly in your browser (for GET requests)
2. **cURL**: 
   ```bash
   curl https://s55mfd704a.execute-api.us-east-1.amazonaws.com/dev/health
   curl https://portfolio-mifikniwe-akirashingus-projects.vercel.app/health
   ```
3. **Postman/Insomnia**: Import the URLs and test all endpoints

### Expected Response
A successful health check should return:
```json
{
  "status": "OK",
  "timestamp": "2025-07-13T01:33:10.000Z"
}
```

The root endpoint should return documentation about all available endpoints.

## Deployment Commands

### AWS Lambda (Serverless Framework)
```bash
# Build the application
npm run build

# Deploy to AWS
serverless deploy
```

### Vercel
```bash
# Build and deploy to Vercel
vercel --prod
```
