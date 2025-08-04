import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {router as portfolioRoutes} from './routes/portfolio.js';

// Load environment variables
dotenv.config();

const app = express();

// CORS Configuration
const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 86400 // 24 hours in seconds
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Serve static files from public directory
app.use(express.static('public'));

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
if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 3004;
  app.listen(PORT, () => {
    console.log(`🚀 Portfolio API Server running on port ${PORT}`);
    console.log(`📍 Local: http://localhost:${PORT}`);
    console.log(`🏥 Health: http://localhost:${PORT}/health`);
  });
}

export default app;
