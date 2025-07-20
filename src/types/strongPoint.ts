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
  question: string;
  answer: string;
};
