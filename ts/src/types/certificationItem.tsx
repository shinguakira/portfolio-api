export type MultilingualCertificationItem = {
  id: number;
  organization: string;
  date: string;
  verifyLink: string;
  ja: {
    name: string;
  };
  en: {
    name: string;
  };
};

export type CertificationItem = {
  id: number; // index of certification list
  name: string; // name of certification
  organization: string; // organization name
  date: string; // date of certified
  verifyLink: string; // link to verify certification
};
