export type EducationContent = {
  institution: string;
  degree: string;
  field: string;
  description: string;
};

export type MultilingualEducationProps = {
  startYear: string;
  endYear: string;
  ja: EducationContent;
  en: EducationContent;
};

export const educationHistory: MultilingualEducationProps[] = [];
