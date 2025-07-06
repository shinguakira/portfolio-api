export type EducationContent = {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type MultilingualEducationProps = {
  ja: EducationContent;
  en: EducationContent;
};

export const educationHistory: MultilingualEducationProps[] = [
  {
    ja: {
      institution: '大学名',
      degree: '学士',
      field: '情報工学',
      startDate: '2018-04',
      endDate: '2022-03',
      description: '情報工学を専攻し、プログラミングとソフトウェア開発の基礎を学びました。'
    },
    en: {
      institution: 'University Name',
      degree: 'Bachelor',
      field: 'Information Engineering',
      startDate: '2018-04',
      endDate: '2022-03',
      description: 'Majored in Information Engineering, learning the fundamentals of programming and software development.'
    }
  }
];
