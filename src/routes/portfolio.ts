import {Router} from 'express';
import {
  getProfile,
  getExperience,
  getProjects,
  getSkills,
  getEducation,
  getContact,
  getCertifications,
  getChangelogs,
  getFaqs,
  getLinks,
  getStrongPoints,
  downloadPortfolioPDF,
} from '../controllers/portfolio.js';

const router = Router();

// Portfolio routes
router.get('/profile', getProfile);
router.get('/experience', getExperience);
router.get('/projects', getProjects);
router.get('/skills', getSkills);
router.get('/education', getEducation);
router.get('/contact', getContact);
router.get('/certifications', getCertifications);
router.get('/changelogs', getChangelogs);
router.get('/faqs', getFaqs);
router.get('/links', getLinks);
router.get('/strong-points', getStrongPoints);
router.get('/download-pdf', downloadPortfolioPDF);

export {router};
