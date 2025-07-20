export type MultilingualFaqContent = {
  question: string;
  answer: string;
};

export type MultilingualFaq = {
  size: string;
  category: string;
  ja: MultilingualFaqContent;
  en: MultilingualFaqContent;
};

export type Faq = {
  // id: number; exclude id for maintainability
  question: string;
  answer: string;
  size: string;
  category: string;
};
