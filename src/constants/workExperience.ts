export type WorkExperienceContent = {
  position: string;
  description: string;
  responsibilities: string[];
};

export type MultilingualWorkExperienceProps = {
  company: string;
  period: string;
  teamSize: string;
  manMonth: string;
  technologies: string[];
  ja: WorkExperienceContent;
  en: WorkExperienceContent;
};

export const workExperience: MultilingualWorkExperienceProps[] = [];
