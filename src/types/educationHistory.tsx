export type MultilingualEducationHistory = {
  startYear: string;
  endYear: string;
  ja: {
    school: string;
    department: string;
    description: string;
  };
  en: {
    school: string;
    department: string;
    description: string;
  };
};

export type EducationHistory = {
  school: string;
  department: string;
  startYear: string;
  endYear: string;
  description: string;
};
