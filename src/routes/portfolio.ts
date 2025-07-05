import { Router } from 'express';
import {
  getProfile,
  getExperience,
  getProjects,
  getSkills,
  getEducation,
  getContact,
} from '../controllers/portfolio.js';

const router = Router();

// Portfolio routes
router.get('/profile', getProfile);
router.get('/experience', getExperience);
router.get('/projects', getProjects);
router.get('/skills', getSkills);
router.get('/education', getEducation);
router.get('/contact', getContact);

export { router };
