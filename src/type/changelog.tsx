/**
 * type for ChangelogComponent
 */
export type ChangelogContent = {
  description: string;
};

export type MultilingualChangelogChange = {
  type: ChangeType;
  ja: ChangelogContent;
  en: ChangelogContent;
};

export type ChangelogProps = {
  version: string;
  date: string;
  changes: MultilingualChangelogChange[];
};

export type ChangeType = "feature" | "improvement" | "bugfix";
