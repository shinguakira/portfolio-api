export type MultilingualEducationHistoryProps = {
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

export type EducationHistoryProps = {
  school: string;
  department: string;
  startYear: string;
  endYear: string;
  description: string;
};
