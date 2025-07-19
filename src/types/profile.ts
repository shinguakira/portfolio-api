export type Profile = {
  name: string;
  location: string;
  avatarUrl: string;
  socialLinks: {
    platform: string;
    url: string;
    icon: string;
  }[];
  ja: LocalizedProfileData;
  en: LocalizedProfileData;
};

export type LocalizedProfileData = {
  title: string;
  summary: string;
  bio: string;
};
