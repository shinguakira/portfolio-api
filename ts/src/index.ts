import {Elysia} from 'elysia';
import {node} from '@elysiajs/node';
import {cors} from '@elysiajs/cors';
import {staticPlugin} from '@elysiajs/static';
import dotenv from 'dotenv';
import {portfolioRoutes} from './routes/portfolio';

// Load environment variables
dotenv.config();

const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',')
  : ['*'];

const app = new Elysia({adapter: node()})
  .use(
    cors({
      origin: allowedOrigins.length === 1 && allowedOrigins[0] === '*'
        ? true
        : allowedOrigins,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true,
      maxAge: 86400,
    })
  )
  .use(staticPlugin({assets: 'public', prefix: '/'}))
  .get('/health', () => ({
    status: 'OK',
    timestamp: new Date().toISOString(),
  }))
  .get('/', () => ({
    message: 'Welcome to Shingu Akira Portfolio API',
    version: process.env.npm_package_version || '1.0.0',
    endpoints: [
      {path: '/health', description: 'Health check endpoint'},
      {path: '/api/profile', description: 'Get profile information'},
      {path: '/api/skills', description: 'Get skills information'},
      {path: '/api/projects', description: 'Get projects information'},
      {
        path: '/api/experience',
        description: 'Get work experience information',
      },
      {path: '/api/education', description: 'Get education history'},
      {
        path: '/api/certifications',
        description: 'Get certification information',
      },
      {path: '/api/faqs', description: 'Get FAQs'},
      {path: '/api/links', description: 'Get important links'},
      {
        path: '/api/strong-points',
        description: 'Get strong points information',
      },
      {path: '/api/changelogs', description: 'Get changelog history'},
      {
        path: '/api/download-pdf',
        description:
          'Download portfolio as PDF (query: lang=en|ja, format=standard|compact|executive|technical|academic|modern, projects=true|false, experience=true|false, certifications=true|false, education=true|false)',
      },
    ],
  }))
  .group('/api', (app) => app.use(portfolioRoutes));

export default app;
