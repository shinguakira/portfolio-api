export const APP_NAME = 'My Portfolio API';
export const API_VERSION = '1.0.0';

export const onBusiness = 'onBusiness';
export const selfStudy = 'self-study';

// company names that I worked for
export const company = {
  eastCoast: 'お客さま2',
  staffService: 'お客さま1',
  higashiTechLab: 'A社の子会社',
  hotelTerrace: 'ホテル',
};

// type for links
type Links = Record<string, string>;

export const links: Links = {
  // Creadly link for certifications object. refer env otherwise use default link
  creadlyLink:
    process.env.NEXT_PUBLIC_CREADLY_LINK ||
    'https://www.credly.com/users/username.aff80586',
  // Link for Resume.
  resumeLink:
    process.env.NEXT_PUBLIC_RESUME_LINK ||
    'https://drive.google.com/file/d/1FD0CRnMbGqFSo9L3fgp4RWmUnlwUlHby/view?usp=drive_link',
  // Link for Job History
  jobResumeLink:
    process.env.NEXT_PUBLIC_JOB_RESUME_LINK ||
    'https://drive.google.com/file/d/1scas644V4i6Qg1iHah4M5G4wkfBQDG4u/view?usp=sharing',
  // Link for ENGLISH Job Resume
  EnglishResumeLink:
    process.env.NEXT_PUBLIC_ENGLISH_RESUME_LINK ||
    'https://drive.google.com/file/d/1ENqBoJCbPwzS07l7Yl3cK-LNhXdld_V4/view?usp=sharing',
  // Link for advanced Search Youtube Website
  advancedSearchYoutubeLink:
    process.env.NEXT_PUBLIC_ADVANCED_SEARCH_YOUTUBE_LINK ||
    'https://youtube-advanced-search-five.vercel.app/',
  restaurantAroundStationLink:
    process.env.NEXT_PUBLIC_RESTAURANT_AROUND_STATION_LINK ||
    'https://restaurant-around-station.vercel.app/',
};

/**
 *  need to add more URLs for each links and refer env variables
 */
