export type MultilingualStrongPointContent = {
  question: string;
  answer: string;
};

export type MultilingualStrongPoint = {
  size: string;
  ja: MultilingualStrongPointContent;
  en: MultilingualStrongPointContent;
};

export type StrongPoint = {
  size: string;
  ja: {
    question: string;
    answer: string;
  };
  en: {
    question: string;
    answer: string;
  };
};
