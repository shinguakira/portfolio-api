import type {Context} from 'elysia';
import type {
  ChangelogResponse,
  ArticlesResponse,
  WorkExperience,
  Project,
} from '@shinguakira/portfolio-api-types';
import {
  profile,
  workExperiences_ja,
  workExperiences_en,
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
  notifications,
} from '../constants/index.js';
import {generatePortfolioPDF} from '../services/pdfService.js';

// Get profile information
export const getProfile = ({query, set}: Context) => {
  try {
    const lang = query.lang as string;
    const localizedData = lang === 'en' ? profile.en : profile.ja;

    const profileData = {
      name: profile.name,
      location: profile.location,
      avatarUrl: profile.avatarUrl,
      socialLinks: profile.socialLinks,
      ...localizedData,
    };

    return {message: 'Profile data fetched successfully', data: profileData};
  } catch (error) {
    set.status = 500;
    return {message: 'Error fetching profile data', data: null};
  }
};

// Get professional experience
export const getExperience = ({query, set}: Context) => {
  try {
    const lang = query.lang as string;
    const localizedExperience: WorkExperience[] =
      lang === 'en' ? workExperiences_en : workExperiences_ja;
    return {
      message: 'Experience data fetched successfully',
      data: localizedExperience,
    };
  } catch (error) {
    set.status = 500;
    return {message: 'Error fetching experience data', data: null};
  }
};

// Get projects
export const getProjects = ({query, set}: Context) => {
  try {
    const lang = query.lang as string;
    const localizedProjects: Project[] = projects.map((project) => ({
      technologies: project.technologies,
      ...(lang === 'en' ? project.en : project.ja),
    }));
    return {
      message: 'Projects data fetched successfully',
      data: localizedProjects,
    };
  } catch (error) {
    set.status = 500;
    return {message: 'Error fetching projects data', data: null};
  }
};

// Get skills
export const getSkills = ({set}: Context) => {
  try {
    return {message: 'Skills data fetched successfully', data: skills};
  } catch (error) {
    set.status = 500;
    return {message: 'Error fetching skills data', data: null};
  }
};

export const getOtherSkills = ({set}: Context) => {
  try {
    return {
      message: 'Other skills data fetched successfully',
      data: otherSkills,
    };
  } catch (error) {
    set.status = 500;
    return {message: 'Error fetching skills data', data: null};
  }
};

// Get education
export const getEducation = ({query, set}: Context) => {
  try {
    const lang = query.lang as string;
    const localizedEducation = education.map((item) => ({
      startYear: item.startYear,
      endYear: item.endYear,
      ...(lang === 'en' ? item.en : item.ja),
    }));
    return {
      message: 'Education data fetched successfully',
      data: localizedEducation,
    };
  } catch (error) {
    set.status = 500;
    return {message: 'Error fetching education data', data: null};
  }
};

// Get contact information
export const getContact = ({set}: Context) => {
  try {
    return {message: 'Contact data fetched successfully', data: contact};
  } catch (error) {
    set.status = 500;
    return {message: 'Error fetching contact data', data: null};
  }
};

export const getCertifications = ({query, set}: Context) => {
  try {
    const lang = query.lang as string;
    const localizedCertifications = certifications.map((item) => ({
      id: item.id,
      organization: item.organization,
      date: item.date,
      verifyLink: item.verifyLink,
      ...(lang === 'en' ? item.en : item.ja),
    }));
    return {
      message: 'Certifications data fetched successfully',
      data: localizedCertifications,
    };
  } catch (error) {
    set.status = 500;
    return {message: 'Error fetching certifications data', data: null};
  }
};

export const getChangelogs = ({set}: Context) => {
  try {
    const localizedChangelogs: ChangelogResponse = changelogs.map((item) => ({
      version: item.version,
      date: item.date,
      changes: item.changes.map((change) => ({
        type: change.type,
        ja: change.ja,
        en: change.en,
      })),
    }));
    return {
      message: 'Changelogs data fetched successfully',
      data: localizedChangelogs,
    };
  } catch (error) {
    set.status = 500;
    return {message: 'Error fetching changelogs data', data: null};
  }
};

export const getFaqs = ({query, set}: Context) => {
  try {
    const lang = query.lang as string;
    const localizedFaqs = faqs.map((item) => ({
      size: item.size,
      category: item.category,
      ...(lang === 'en' ? item.en : item.ja),
    }));
    return {message: 'FAQs data fetched successfully', data: localizedFaqs};
  } catch (error) {
    set.status = 500;
    return {message: 'Error fetching FAQs data', data: null};
  }
};

export const getLinks = ({set}: Context) => {
  try {
    return {message: 'Links data fetched successfully', data: links};
  } catch (error) {
    set.status = 500;
    return {message: 'Error fetching links data', data: null};
  }
};

export const getStrongPoints = ({query, set}: Context) => {
  try {
    const lang = query.lang as string;
    const localizedStrongPoints = strongPoint.map((item) => ({
      size: item.size,
      ...(lang === 'en' ? item.en : item.ja),
    }));
    return {
      message: 'Strong points data fetched successfully',
      data: localizedStrongPoints,
    };
  } catch (error) {
    set.status = 500;
    return {message: 'Error fetching strong points data', data: null};
  }
};

export const getNotifications = ({query, set}: Context) => {
  try {
    const lang = query.lang as string;
    const localizedNotifications = notifications.map((item) => ({
      date: item.date,
      ...(lang === 'en' ? item.en : item.ja),
    }));
    return {
      message: 'Notifications data fetched successfully',
      data: localizedNotifications,
    };
  } catch (error) {
    set.status = 500;
    return {message: 'Error fetching notifications data', data: null};
  }
};

const QIITA_USER_ID = 'ShinguAkira';

export const getArticles = async ({set}: Context) => {
  try {
    const response = await fetch(
      `https://qiita.com/api/v2/users/${QIITA_USER_ID}/items?page=1&per_page=100`
    );
    if (!response.ok) {
      set.status = 500;
      return {message: 'Error fetching articles from Qiita', data: null};
    }
    const articles = await response.json();
    const mappedArticles = articles.map(
      (article: Record<string, unknown>) => ({
        id: article.id,
        title: article.title,
        url: article.url,
        created_at: article.created_at,
        updated_at: article.updated_at,
        likes_count: article.likes_count,
        comments_count: article.comments_count,
        stocks_count: article.stocks_count,
        reactions_count: article.reactions_count,
        tags: article.tags,
      })
    );
    const data: ArticlesResponse = {
      totalCount: mappedArticles.length,
      articles: mappedArticles,
    };
    return {message: 'Articles data fetched successfully', data};
  } catch (error) {
    set.status = 500;
    return {message: 'Error fetching articles data', data: null};
  }
};

export const downloadPortfolioPDF = async ({query, set}: Context) => {
  try {
    const lang = (query.lang as string) || 'en';
    const format = (query.format as string) || 'standard';
    const includeProjects = query.projects !== 'false';
    const includeExperience = query.experience !== 'false';
    const includeCertifications = query.certifications !== 'false';
    const includeEducation = query.education !== 'false';

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

    set.headers['content-type'] = 'application/pdf';
    set.headers['content-disposition'] = `attachment; filename="${filename}"`;
    set.headers['content-length'] = String(pdfBuffer.length);

    return new Response(Buffer.from(pdfBuffer));
  } catch (error) {
    console.error('PDF Generation Error:', error);
    set.status = 500;
    return {
      message: 'Error generating portfolio PDF',
      data: null,
    };
  }
};
