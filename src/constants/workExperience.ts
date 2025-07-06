export type WorkExperienceContent = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
};

export type MultilingualWorkExperienceProps = {
  ja: WorkExperienceContent;
  en: WorkExperienceContent;
};

export const workExperience: MultilingualWorkExperienceProps[] = [
  {
    ja: {
      company: '株式会社テックカンパニー',
      position: 'フロントエンドエンジニア',
      startDate: '2022-04',
      endDate: '現在',
      description: 'Webアプリケーションのフロントエンド開発を担当し、ユーザーエクスペリエンスの向上に貢献しています。',
      responsibilities: [
        'React/Next.jsを使用したWebアプリケーション開発',
        'UIコンポーネントの設計・実装',
        'パフォーマンス最適化',
        'コードレビューとメンタリング'
      ],
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Vercel'
      ]
    },
    en: {
      company: 'Tech Company Inc.',
      position: 'Frontend Engineer',
      startDate: '2022-04',
      endDate: 'Present',
      description: 'Responsible for frontend development of web applications, contributing to improved user experience.',
      responsibilities: [
        'Web application development using React/Next.js',
        'UI component design and implementation',
        'Performance optimization',
        'Code reviews and mentoring'
      ],
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Vercel'
      ]
    }
  }
];
