export type MultilingualNotificationContent = {
  title: string;
  content: string;
};

export type MultilingualNotification = {
  date: string;
  ja: MultilingualNotificationContent;
  en: MultilingualNotificationContent;
};
