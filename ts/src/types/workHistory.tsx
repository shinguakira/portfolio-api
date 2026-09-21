export type WorkExperienceContent = {
  projectOverview: string;
  role: string;
  description: string[];
  archivement: string[];
};

export type MultilingualWorkExperience = {
  company: string;
  period: string;
  teamSize: string;
  manMonth: string;
  technologies: string[];
  ja: WorkExperienceContent;
  en: WorkExperienceContent;
};

export type WorkExperience = {
  // id: number; exclude id for maintainability
  company: string; // comapny name
  projectOverview: string; // project name
  period: string; // period
  /**
   * Machine-readable start of the period: `YYYY-MM`, or `YYYY` when only the
   * year is known. Consumers sort and lay out on these, never by parsing the
   * localized `period` string.
   */
  startDate: string;
  /** Machine-readable end, same shape as `startDate`. Absent while ongoing. */
  endDate?: string;
  teamSize?: string; // teamSize include me, include unit
  role: string;
  manMonth: string;
  description: string[];
  archivement: string[]; // archivement
  technologies: string[];
};
