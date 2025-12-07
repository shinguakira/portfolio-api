/**
 * Portfolio API Types
 * TypeScript types for Shingu Akira Portfolio API responses.
 *
 * Usage in consuming projects:
 * ```typescript
 * import type { ProfileResponse, ApiResponse } from '@shinguakira/portfolio-api-types';
 *
 * const response = await fetch('/api/profile?lang=en');
 * const data: ApiResponse<ProfileResponse> = await response.json();
 * ```
 */

// ============================================
// Generic API Response Wrapper
// ============================================

export interface ApiResponse<T> {
  message: string;
  data?: T | null;
}

// ============================================
// Profile Types
// ============================================

export type SocialLink = {
  platform: string;
  url: string;
  icon: string;
};

export type LocalizedProfileData = {
  title: string;
  summary: string;
  bio: string;
};

/** Response from GET /api/profile?lang=ja|en */
export type ProfileResponse = {
  name: string;
  location: string;
  avatarUrl: string;
  socialLinks: SocialLink[];
} & LocalizedProfileData;

// ============================================
// Work Experience Types
// ============================================

export type WorkExperience = {
  company: string;
  projectOverview: string;
  period: string;
  teamSize?: string;
  role: string;
  manMonth: string;
  description: string[];
  archivement: string[];
  technologies: string[];
};

/** Response from GET /api/experience?lang=ja|en */
export type ExperienceResponse = WorkExperience[];

// ============================================
// Project Types
// ============================================

export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
};

/** Response from GET /api/projects?lang=ja|en */
export type ProjectsResponse = Project[];

// ============================================
// Skill Types
// ============================================

export type SkillItem = {
  name: string;
  category: string;
  years: string;
  proficiency?: string;
  picture?: string;
  pictureColor?: string;
};

/** Response from GET /api/skills */
export type SkillsResponse = SkillItem[];

// ============================================
// Education Types
// ============================================

export type EducationHistory = {
  startYear: string;
  endYear: string;
  school: string;
  department: string;
  description: string;
};

/** Response from GET /api/education?lang=ja|en */
export type EducationResponse = EducationHistory[];

// ============================================
// Certification Types
// ============================================

export type CertificationItem = {
  id: number;
  name: string;
  organization: string;
  date: string;
  verifyLink: string;
};

/** Response from GET /api/certifications?lang=ja|en */
export type CertificationsResponse = CertificationItem[];

// ============================================
// FAQ Types
// ============================================

export type Faq = {
  question: string;
  answer: string;
  size: string;
  category: string;
};

/** Response from GET /api/faq?lang=ja|en */
export type FaqResponse = Faq[];

// ============================================
// Strong Points Types
// ============================================

export type StrongPoint = {
  size: string;
  question: string;
  answer: string;
};

/** Response from GET /api/strong-points?lang=ja|en */
export type StrongPointsResponse = StrongPoint[];

// ============================================
// Changelog Types
// ============================================

export type ChangelogItem = {
  version: string;
  date: string;
  changes: {
    type: 'feature' | 'improvement' | 'bugfix';
    description: string;
  }[];
};

/** Response from GET /api/changelog?lang=ja|en */
export type ChangelogResponse = ChangelogItem[];

// ============================================
// Contact Types
// ============================================

export type Contact = {
  email: string;
  phone: string;
  address: string;
};

/** Response from GET /api/contact */
export type ContactResponse = Contact;

// ============================================
// Links Types
// ============================================

export type Links = {
  creadlyLink: string;
  restaurantAroundStationLink: string;
  advancedSearchYoutubeLink: string;
};

/** Response from GET /api/links */
export type LinksResponse = Links;
