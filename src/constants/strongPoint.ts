export type StrongPointContent = {
  title: string;
  description: string;
  examples: string[];
};

export type MultilingualStrongPointProps = {
  ja: StrongPointContent;
  en: StrongPointContent;
};

export const strongPoints: MultilingualStrongPointProps[] = [];
