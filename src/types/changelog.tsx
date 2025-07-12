/**
 * type for ChangelogComponent
 */
export type ChangelogProps = {
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
