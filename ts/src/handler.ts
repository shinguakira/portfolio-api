import {configure} from '@vendia/serverless-express';
import app from './index.js';

// Configure serverless-express
const serverlessExpress = configure({app});

// Export the handler function
export const handler = serverlessExpress;
