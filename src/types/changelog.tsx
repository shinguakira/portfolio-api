/**
 * type for ChangelogComponent
 */
export type Changelog = {
  version: string;
  date: string;
  changes: {
    type: ChangeType;
    ja: {
      description: string;
    };
    en: {
      description: string;
    };
  }[];
};

type ChangeType = 'feature' | 'improvement' | 'bugfix';
