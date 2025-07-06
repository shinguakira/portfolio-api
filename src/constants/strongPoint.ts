export type StrongPointContent = {
  title: string;
  description: string;
  examples: string[];
};

export type MultilingualStrongPointProps = {
  ja: StrongPointContent;
  en: StrongPointContent;
};

export const strongPoints: MultilingualStrongPointProps[] = [
  {
    ja: {
      title: '問題解決能力',
      description: '複雑な技術的課題に対して論理的にアプローチし、効率的な解決策を見つけることができます。',
      examples: [
        'パフォーマンス最適化',
        'バグの根本原因分析',
        'アーキテクチャ設計'
      ]
    },
    en: {
      title: 'Problem Solving',
      description: 'I can logically approach complex technical challenges and find efficient solutions.',
      examples: [
        'Performance optimization',
        'Root cause analysis of bugs',
        'Architecture design'
      ]
    }
  },
  {
    ja: {
      title: '学習意欲',
      description: '新しい技術やフレームワークを積極的に学び、プロジェクトに活用することができます。',
      examples: [
        '最新技術のキャッチアップ',
        '継続的なスキル向上',
        '技術文書の作成'
      ]
    },
    en: {
      title: 'Learning Enthusiasm',
      description: 'I actively learn new technologies and frameworks and can apply them to projects.',
      examples: [
        'Keeping up with latest technologies',
        'Continuous skill improvement',
        'Technical documentation'
      ]
    }
  },
  {
    ja: {
      title: 'チームワーク',
      description: 'チームメンバーと効果的にコミュニケーションを取り、協力してプロジェクトを成功に導くことができます。',
      examples: [
        'コードレビュー',
        '技術的な議論',
        'メンタリング'
      ]
    },
    en: {
      title: 'Teamwork',
      description: 'I can communicate effectively with team members and collaborate to lead projects to success.',
      examples: [
        'Code reviews',
        'Technical discussions',
        'Mentoring'
      ]
    }
  }
];
