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
  startYear: string;
  endYear: string;
  school: string;
  department: string;
  description: string;
};
