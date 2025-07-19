export type ProjectContent = {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
};

export type MultilingualProject = {
  technologies: string[];
  ja: ProjectContent;
  en: ProjectContent;
};

export type Project = {
  // id: string; exclude id for maintainability
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
};
