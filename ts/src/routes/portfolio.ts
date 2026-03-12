import {Elysia} from 'elysia';
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
  getOtherSkills,
  getNotifications,
  getArticles,
  downloadPortfolioPDF,
} from '../controllers/portfolio.js';

export const portfolioRoutes = new Elysia()
  .get('/profile', getProfile)
  .get('/experience', getExperience)
  .get('/projects', getProjects)
  .get('/skills', getSkills)
  .get('/education', getEducation)
  .get('/contact', getContact)
  .get('/certifications', getCertifications)
  .get('/changelogs', getChangelogs)
  .get('/faqs', getFaqs)
  .get('/links', getLinks)
  .get('/strong-points', getStrongPoints)
  .get('/other-skills', getOtherSkills)
  .get('/notifications', getNotifications)
  .get('/articles', getArticles)
  .get('/download-pdf', downloadPortfolioPDF);
