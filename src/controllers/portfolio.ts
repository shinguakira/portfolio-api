import {Request, Response} from 'express';
import {
  profile,
  workExperiences as experience,
  projects,
  skills,
  educationHistory as education,
  contact,
} from '../constants/index.js';

// Get profile information
export const getProfile = (req: Request, res: Response) => {
  try {
    const lang = req.query.lang as string;
    if (lang === 'en') {
      res.status(200).json(profile.en);
    } else {
      res.status(200).json(profile.ja);
    }
  } catch (error) {
    res.status(500).json({message: 'Error fetching profile data', error});
  }
};

// Get professional experience
export const getExperience = (req: Request, res: Response) => {
  try {
    const lang = req.query.lang as string;
    const localizedExperience = experience.map((item) => ({
      company: item.company,
      period: item.period,
      teamSize: item.teamSize,
      manMonth: item.manMonth,
      technologies: item.technologies,
      ...(lang === 'en' ? item.en : item.ja),
    }));
    res.status(200).json(localizedExperience);
  } catch (error) {
    res.status(500).json({message: 'Error fetching experience data', error});
  }
};

// Get projects
export const getProjects = (req: Request, res: Response) => {
  try {
    const lang = req.query.lang as string;
    const localizedProjects = projects.map((project) => ({
      technologies: project.technologies,
      ...(lang === 'en' ? project.en : project.ja),
    }));
    res.status(200).json(localizedProjects);
  } catch (error) {
    res.status(500).json({message: 'Error fetching projects data', error});
  }
};

// Get skills
export const getSkills = (req: Request, res: Response) => {
  try {
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({message: 'Error fetching skills data', error});
  }
};

// Get education
export const getEducation = (req: Request, res: Response) => {
  try {
    const lang = req.query.lang as string;
    const localizedEducation = education.map((item) => ({
      startYear: item.startYear,
      endYear: item.endYear,
      ...(lang === 'en' ? item.en : item.ja),
    }));
    res.status(200).json(localizedEducation);
  } catch (error) {
    res.status(500).json({message: 'Error fetching education data', error});
  }
};

// Get contact information
export const getContact = (req: Request, res: Response) => {
  try {
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({message: 'Error fetching contact data', error});
  }
};
