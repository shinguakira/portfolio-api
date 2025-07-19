import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {router as portfolioRoutes} from './routes/portfolio.js';

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', portfolioRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({status: 'OK', timestamp: new Date().toISOString()});
});

// Root path handler
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Shingu Akira Portfolio API',
    version: process.env.npm_package_version || '1.0.0',
    endpoints: [
      {path: '/health', description: 'Health check endpoint'},
      {path: '/api/profile', description: 'Get profile information'},
      {path: '/api/skills', description: 'Get skills information'},
      {path: '/api/projects', description: 'Get projects information'},
      {path: '/api/experience', description: 'Get work experience information'},
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
  });
});

// Start server only if not in a test environment

export default app;
