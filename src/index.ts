import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {router as portfolioRoutes} from './routes/portfolio.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', portfolioRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({status: 'OK', timestamp: new Date().toISOString()});
});

// Start server only if not in a test environment
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;
