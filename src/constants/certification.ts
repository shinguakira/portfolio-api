import {links} from './links.js';

const creadlyLink = links.creadlyLink;
// object for certifications
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

export const certifications: MultilingualCertificationItem[] = [
  {
    id: 1,
    ja: {name: '基本情報技術者試験'},
    en: {name: 'Fundamental Information Technology Engineer Examination'},
    organization: 'IPA',
    date: '2023-05',
    verifyLink: '/images/certification/kihonInfoCert.pdf',
  },
  {
    id: 2,
    ja: {name: 'ドットコムマスターアドバンス シングルスター'},
    en: {name: 'Dot Com Master Advance Single Star'},
    organization: '.com',
    date: '2023-5',
    verifyLink: '/images/certification/comMasterAdvenceOneCert.pdhow f',
  },
  {
    id: 3,
    ja: {name: '情報セキュリティマネジメント'},
    en: {name: 'Information Security Management'},
    organization: 'IPA',
    date: '2023-06',
    verifyLink: '/images/certification/securityManagementCert.pdf',
  },
  {
    id: 4,
    ja: {name: 'ディジタル技術検定 2級 情報'},
    en: {name: 'Digital Technology Test Level 2 Information'},
    organization: '',
    date: '2023-07',
    verifyLink: 'https://www.sgec.or.jp/kentei/de_kentei/',
  },
  {
    id: 5,
    ja: {name: '組み込みソフトウェア技術者クラス2 グレードB'},
    en: {name: 'Embedded Software Engineer Class 2 Grade B'},
    organization: '',
    date: '2023-07',
    verifyLink: 'https://www.jasa.or.jp/etec/',
  },
  {
    id: 6,
    ja: {name: 'Oracle Certified Java Programmer, Gold SE 11'},
    en: {name: 'Oracle Certified Java Programmer, Gold SE 11'},
    organization: 'Oracle',
    date: '2024-02',
    verifyLink: '/images/certification/javaGoldCert.pdf',
  },
  {
    id: 7,
    ja: {name: 'Python3 エンジニア認定基礎試験'},
    en: {name: 'Python3 Engineer Certification Basic Exam'},
    organization: 'Python',
    date: '2023-02',
    verifyLink: '/images/certification/pythonBasicCert.pdf',
  },
  {
    id: 8,
    ja: {name: 'Python3 エンジニア認定データ分析試験'},
    en: {name: 'Python3 Engineer Certification Data Analysis Exam'},
    organization: 'Python',
    date: '2024-02',
    verifyLink: '/images/certification/pythonDataBaseCert.pdf',
  },
  {
    id: 9,
    ja: {name: 'Python3 エンジニア認定実践試験'},
    en: {name: 'Python3 Engineer Certification Practical Exam'},
    organization: 'Python',
    date: '2024-02',
    verifyLink: '/images/certification/pythonPracticalCert.pdf',
  },
  {
    id: 10,
    ja: {name: 'AZ-900 Microsoft Azure Fundamentals'},
    en: {name: 'AZ-900 Microsoft Azure Fundamentals'},
    organization: 'Microsoft',
    date: '2024-03',
    verifyLink:
      'https://learn.microsoft.com/en-us/certifications/azure-fundamentals/',
  },
  {
    id: 11,
    ja: {name: 'HTML5プロフェッショナル認定試験レベル1'},
    en: {name: 'HTML5 Professional Certification Level 1'},
    organization: 'LPI-Japan',
    date: '2024-03',
    verifyLink: 'https://ma.educo-j.or.jp/h/EID900045390/qntzzbkx3h',
  },
  {
    id: 12,
    ja: {name: 'AWS Certified Solutions Architect – Associate'},
    en: {name: 'AWS Certified Solutions Architect – Associate'},
    organization: 'AWS',
    date: '2024-03',
    verifyLink: creadlyLink,
  },
  {
    id: 13,
    ja: {name: 'HTML5プロフェッショナル認定試験レベル2'},
    en: {name: 'HTML5 Professional Certification Level 2'},
    organization: 'LPI-Japan',
    date: '2024-04',
    verifyLink: 'https://ma.educo-j.or.jp/h/EID900045390/qntzzbkx3h',
  },
  {
    id: 40,
    ja: {name: 'AWS Certified SysOps Administrator – Associate'},
    en: {name: 'AWS Certified SysOps Administrator – Associate'},
    organization: 'AWS',
    date: '2024-04',
    verifyLink: creadlyLink,
  },
  {
    id: 14,
    ja: {name: 'AWS Certified Developer – Associate'},
    en: {name: 'AWS Certified Developer – Associate'},
    organization: 'AWS',
    date: '2024-05',
    verifyLink: creadlyLink,
  },
  {
    id: 15,
    ja: {name: 'AWS Certified DevOpes Engineer – Professional'},
    en: {name: 'AWS Certified DevOpes Engineer – Professional'},
    organization: 'AWS',
    date: '2024-05',
    verifyLink: creadlyLink,
  },
  {
    id: 16,
    ja: {name: 'AWS Certified Machine Learning – Specialty'},
    en: {name: 'AWS Certified Machine Learning – Specialty'},
    organization: 'AWS',
    date: '2024-06',
    verifyLink: creadlyLink,
  },
  {
    id: 17,
    ja: {name: 'AWS Certified Data Enginner - Associate'},
    en: {name: 'AWS Certified Data Enginner - Associate'},
    organization: 'AWS',
    date: '2024-06',
    verifyLink: creadlyLink,
  },
  {
    id: 18,
    ja: {name: 'AWS Certified Solutions Architect – Professional'},
    en: {name: 'AWS Certified Solutions Architect – Professional'},
    organization: 'AWS',
    date: '2024-07',
    verifyLink: creadlyLink,
  },
  {
    id: 19,
    ja: {name: 'AZ-204 Developing Solutions for Microsoft Azure'},
    en: {name: 'AZ-204 Developing Solutions for Microsoft Azure'},
    organization: 'Microsoft',
    date: '2024-07',
    verifyLink:
      'https://learn.microsoft.com/api/credentials/share/ja-jp/08201797/8238075B8F146208?sharingId=EC8829B80AA18FB2',
  },
  {
    id: 20,
    ja: {name: 'OSS DB Silver'},
    en: {name: 'OSS DB Silver'},
    organization: 'LPI-Japan',
    date: '2024-07',
    verifyLink: 'https://ma.educo-j.or.jp/d/EID900045390/unpqcjywm8',
  },
  {
    id: 21,
    ja: {name: 'AWS Certified Advanced Networking – Specialty'},
    en: {name: 'AWS Certified Advanced Networking – Specialty'},
    organization: 'AWS',
    date: '2024-08',
    verifyLink: creadlyLink,
  },
  {
    id: 22,
    ja: {name: 'REACT DEVELOPER CERTIED LEVEL 1'},
    en: {name: 'REACT DEVELOPER CERTIED LEVEL 1'},
    organization: 'Certificates.dev',
    date: '2024-08',
    verifyLink: 'https://interstate21.com/certificate/?code=5H11TDN',
  },
  {
    id: 23,
    ja: {name: 'Certified Junior Angular Developer'},
    en: {name: 'Certified Junior Angular Developer'},
    organization: 'Certificates.dev Angular Traning',
    date: '2024-09',
    verifyLink:
      '	https://certificates.dev/c/9cea8a10-14d5-44e4-9343-70c02f44c9b7',
  },
  {
    id: 24,
    ja: {name: 'Certified Typescript Developer Professional'},
    en: {name: 'Certified Typescript Developer Professional'},
    organization: 'w3schools',
    date: '2024-09',
    verifyLink: 'https://verify.w3schools.com/1P5VV1GZ0S',
  },
  {
    id: 25,
    ja: {name: 'AZ-104 Microsoft Azure Administrator'},
    en: {name: 'AZ-104 Microsoft Azure Administrator'},
    organization: 'Microsoft',
    date: '2024-10',
    verifyLink:
      'https://learn.microsoft.com/api/credentials/share/ja-jp/08201797/5656C6EBDF249EA9?sharingId=EC8829B80AA18FB2',
  },
  {
    id: 26,
    ja: {name: 'AWS Certified AI Practitioner'},
    en: {name: 'AWS Certified AI Practitioner'},
    organization: 'AWS',
    date: '2024-10',
    verifyLink: creadlyLink,
  },
  {
    id: 27,
    ja: {name: 'AWS Certified Machine Learning - Associate'},
    en: {name: 'AWS Certified Machine Learning - Associate'},
    organization: 'AWS',
    date: '2024-11',
    verifyLink: creadlyLink,
  },
  {
    id: 28,
    ja: {name: 'Certified Sass Developer Professional'},
    en: {name: 'Certified Sass Developer Professional'},
    organization: 'w3schools',
    date: '2024-11',
    verifyLink: 'https://verify.w3schools.com/1PD7RE2K1Y',
  },
  {
    id: 29,
    ja: {name: 'Certified Node.js Developer Professional'},
    en: {name: 'Certified Node.js Developer Professional'},
    organization: 'w3schools',
    date: '2024-11',
    verifyLink: 'https://verify.w3schools.com/1PES45GB6N',
  },
  {
    id: 30,
    ja: {name: 'Professional Cloud Architect Certification'},
    en: {name: 'Professional Cloud Architect Certification'},
    organization: 'Google Cloud',
    date: '2024-12',
    verifyLink:
      'https://www.credly.com/badges/c84a1a87-76b7-4df6-bba5-7c76dc336dc4/public_url',
  },
  {
    id: 31,
    ja: {name: 'Certified Junior JavaScript Developer'},
    en: {name: 'Certified Junior JavaScript Developer'},
    organization: 'Certificates.dev',
    date: '2025-02',
    verifyLink:
      'https://certificates.dev/c/9e27f955-22c7-4412-89ce-c90c2c47ebd7',
  },
  {
    id: 32,
    ja: {name: 'Meta Front-End Developer Certificate'},
    en: {name: 'Meta Front-End Developer Certificate'},
    organization: 'Meta',
    date: '2025-02',
    verifyLink:
      'https://www.credly.com/badges/d93bc926-790d-467b-90c4-06797bcd3084',
  },
  {
    id: 33,
    ja: {name: 'Principles of UX/UI Design'},
    en: {name: 'Principles of UX/UI Design'},
    organization: 'Meta',
    date: '2025-02',
    verifyLink: 'https://coursera.org/share/f11392407270a0c8e14f8f7f57c4fe8d',
  },
  {
    id: 34,
    ja: {name: 'Advanced React'},
    en: {name: 'Advanced React'},
    organization: 'Meta',
    date: '2025-02',
    verifyLink: 'https://coursera.org/share/37486ef3a07ab9a0d83115e92f620164',
  },
];
