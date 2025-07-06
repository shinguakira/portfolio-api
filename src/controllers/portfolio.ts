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
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({message: 'Error fetching profile data', error});
  }
};

// Get professional experience
export const getExperience = (req: Request, res: Response) => {
  try {
    res.status(200).json(experience);
  } catch (error) {
    res.status(500).json({message: 'Error fetching experience data', error});
  }
};

// Get projects
export const getProjects = (req: Request, res: Response) => {
  try {
    res.status(200).json(projects);
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
    res.status(200).json(education);
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
