import {Links} from '../types/links.js';
import {StrongPoint} from '../types/strongPoint.js';
import {Faq} from '../types/faq.js';
import {Changelog} from '../types/changelog.js';
import {CertificationItem} from '../types/certificationItem.js';
import {Contact} from '../types/contact.js';
import {EducationHistory} from '../types/educationHistory.js';
import {Project} from '../types/projectItem.js';
import {WorkExperience} from '../types/workHistory.js';
import {Request, Response as ExpressResponse} from 'express';
import {Response} from '../types/response.js';
import {LocalizedProfileData} from '../types/profile.js';
import {
  profile,
  workExperiences as experience,
  projects,
  skills,
  educationHistory as education,
  contact,
  certifications,
  changelogs,
  faqs,
  links,
  strongPoint,
  otherSkills,
} from '../constants/index.js';
import {generatePortfolioPDF} from '../services/pdfService.js';
import {SkillItem} from '@/types/skillItem.js';

// Get profile information
export const getProfile = (
  req: Request,
  res: ExpressResponse<Response<LocalizedProfileData>>
) => {
  try {
    const lang = req.query.lang as string;
    const localizedData = lang === 'en' ? profile.en : profile.ja;

    // Combine base profile data with localized content
    const profileData = {
      name: profile.name,
      location: profile.location,
      avatarUrl: profile.avatarUrl,
      socialLinks: profile.socialLinks,
      ...localizedData,
    };

    res
      .status(200)
      .json({message: 'Profile data fetched successfully', data: profileData});
  } catch (error) {
    res.status(500).json({message: 'Error fetching profile data', data: null});
  }
};

// Get professional experience
export const getExperience = (
  req: Request,
  res: ExpressResponse<Response<WorkExperience[]>>
) => {
  try {
    const lang = req.query.lang as string;
    const localizedExperience: WorkExperience[] = experience.map((item) => ({
      company: item.company,
      period: item.period,
      teamSize: item.teamSize,
      manMonth: item.manMonth,
      technologies: item.technologies,
      ...(lang === 'en' ? item.en : item.ja),
    }));
    res.status(200).json({
      message: 'Experience data fetched successfully',
      data: localizedExperience,
    });
  } catch (error) {
    res
      .status(500)
      .json({message: 'Error fetching experience data', data: null});
  }
};

// Get projects
export const getProjects = (
  req: Request,
  res: ExpressResponse<Response<Project[]>>
) => {
  try {
    const lang = req.query.lang as string;
    const localizedProjects: Project[] = projects.map((project) => ({
      technologies: project.technologies,
      ...(lang === 'en' ? project.en : project.ja),
    }));
    res.status(200).json({
      message: 'Projects data fetched successfully',
      data: localizedProjects,
    });
  } catch (error) {
    res.status(500).json({message: 'Error fetching projects data', data: null});
  }
};

// Get skills
export const getSkills = (
  req: Request,
  res: ExpressResponse<Response<SkillItem[]>>
) => {
  try {
    res
      .status(200)
      .json({message: 'Skills data fetched successfully', data: skills});
  } catch (error) {
    res.status(500).json({message: 'Error fetching skills data', data: null});
  }
};
export const getOtherSkills = (
  req: Request,
  res: ExpressResponse<Response<SkillItem[]>>
) => {
  try {
    res
      .status(200)
      .json({
        message: 'Other skills data fetched successfully',
        data: otherSkills,
      });
  } catch (error) {
    res.status(500).json({message: 'Error fetching skills data', data: null});
  }
};

// Get education
export const getEducation = (
  req: Request,
  res: ExpressResponse<Response<EducationHistory[]>>
) => {
  try {
    const lang = req.query.lang as string;
    const localizedEducation = education.map((item) => ({
      startYear: item.startYear,
      endYear: item.endYear,
      ...(lang === 'en' ? item.en : item.ja),
    }));
    res.status(200).json({
      message: 'Education data fetched successfully',
      data: localizedEducation,
    });
  } catch (error) {
    res
      .status(500)
      .json({message: 'Error fetching education data', data: null});
  }
};

// Get contact information
export const getContact = (
  req: Request,
  res: ExpressResponse<Response<Contact>>
) => {
  try {
    res
      .status(200)
      .json({message: 'Contact data fetched successfully', data: contact});
  } catch (error) {
    res.status(500).json({message: 'Error fetching contact data', data: null});
  }
};

export const getCertifications = (
  req: Request,
  res: ExpressResponse<Response<CertificationItem[]>>
) => {
  try {
    const lang = req.query.lang as string;
    const localizedCertifications = certifications.map((item) => ({
      id: item.id,
      organization: item.organization,
      date: item.date,
      verifyLink: item.verifyLink,
      ...(lang === 'en' ? item.en : item.ja),
    }));
    res.status(200).json({
      message: 'Certifications data fetched successfully',
      data: localizedCertifications,
    });
  } catch (error) {
    res
      .status(500)
      .json({message: 'Error fetching certifications data', data: null});
  }
};

export const getChangelogs = (
  req: Request,
  res: ExpressResponse<Response<Changelog[]>>
) => {
  try {
    const localizedChangelogs = changelogs.map((item) => ({
      version: item.version,
      date: item.date,
      changes: item.changes.map((change) => ({
        type: change.type,
        ja: change.ja,
        en: change.en,
      })),
    }));
    res.status(200).json({
      message: 'Changelogs data fetched successfully',
      data: localizedChangelogs,
    });
  } catch (error) {
    res
      .status(500)
      .json({message: 'Error fetching changelogs data', data: null});
  }
};

export const getFaqs = (
  req: Request,
  res: ExpressResponse<Response<Faq[]>>
) => {
  try {
    const lang = req.query.lang as string;
    const localizedFaqs = faqs.map((item) => ({
      size: item.size,
      category: item.category,
      ...(lang === 'en' ? item.en : item.ja),
    }));
    res
      .status(200)
      .json({message: 'FAQs data fetched successfully', data: localizedFaqs});
  } catch (error) {
    res.status(500).json({message: 'Error fetching FAQs data', data: null});
  }
};

export const getLinks = (
  req: Request,
  res: ExpressResponse<Response<Links>>
) => {
  try {
    res
      .status(200)
      .json({message: 'Links data fetched successfully', data: links});
  } catch (error) {
    res.status(500).json({message: 'Error fetching links data', data: null});
  }
};

export const getStrongPoints = (
  req: Request,
  res: ExpressResponse<Response<StrongPoint[]>>
) => {
  try {
    const lang = req.query.lang as string;
    const localizedStrongPoints = strongPoint.map((item) => ({
      size: item.size,
      ...(lang === 'en' ? item.en : item.ja),
    }));
    res.status(200).json({
      message: 'Strong points data fetched successfully',
      data: localizedStrongPoints,
    });
  } catch (error) {
    res
      .status(500)
      .json({message: 'Error fetching strong points data', data: null});
  }
};

export const downloadPortfolioPDF = async (
  req: Request,
  res: ExpressResponse
) => {
  try {
    const lang = (req.query.lang as string) || 'en';
    const format = (req.query.format as string) || 'standard';
    const includeProjects = req.query.projects !== 'false';
    const includeExperience = req.query.experience !== 'false';
    const includeCertifications = req.query.certifications !== 'false';
    const includeEducation = req.query.education !== 'false';

    const pdfBuffer = await generatePortfolioPDF({
      lang,
      format: format as
        | 'standard'
        | 'compact'
        | 'executive'
        | 'technical'
        | 'academic'
        | 'modern',
      includeProjects,
      includeExperience,
      includeCertifications,
      includeEducation,
    });

    const filename = `portfolio_${lang === 'en' ? 'english' : 'japanese'}_${new Date().toISOString().split('T')[0]}.pdf`;

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-Length', pdfBuffer.length);

    res.send(Buffer.from(pdfBuffer));
  } catch (error) {
    console.error('PDF Generation Error:', error);
    res.status(500).json({
      message: 'Error generating portfolio PDF',
      data: null,
    });
  }
};
