import {Document, Page, Text, View, StyleSheet, pdf, Link} from '@react-pdf/renderer';
import * as React from 'react';
import {
  profile,
  workExperiences_ja,
  workExperiences_en,
  projects,
  skills,
  educationHistory,
  contact,
  certifications,
  strongPoint,
  faqs,
} from '../constants/index.js';
import {StandardPDFOptions} from '../types/pdfTypes.js';
import {StrongPoint} from '../types/strongPoint.js';
import {WorkExperience} from '../types/workHistory.js';
import {Project} from '../types/projectItem.js';
import {EducationHistory} from '../types/educationHistory.js';
import {CertificationItem} from '../types/certificationItem.js';
import {SkillItem} from '../types/skillItem.js';

// Register fonts (optional - for better typography)
// Font.register({
//   family: 'Roboto',
//   src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf'
// });

// Groups a flat SkillItem[] by category, returning { category: skillNames[] }
const groupSkillsByCategory = (
  skillItems: SkillItem[]
): Record<string, string[]> =>
  skillItems.reduce<Record<string, string[]>>((acc, s) => {
    (acc[s.category] ??= []).push(s.name);
    return acc;
  }, {});

// Parse YYYYMM number from a period string (EN or JA)
const parseStartYM = (period: string): number => {
  const enMatch = period.match(/^(\d{4})-(\d{2})/);
  if (enMatch) return parseInt(enMatch[1]) * 100 + parseInt(enMatch[2]);
  const jaMatch = period.match(/^(\d{4})年(\d{1,2})月/);
  if (jaMatch) return parseInt(jaMatch[1]) * 100 + parseInt(jaMatch[2]);
  const yearMatch = period.match(/^(\d{4})/);
  if (yearMatch) return parseInt(yearMatch[1]) * 100 + 1;
  return 0;
};

// Unique color palette per customer
const getCompanyColor = (company: string): {bg: string; border: string; label: string} => {
  if (/Customer\s*1|お客さま1/i.test(company)) return {bg: '#F1F8E9', border: '#558B2F', label: '#1B5E20'};
  if (/Customer\s*2|お客さま2/i.test(company)) return {bg: '#EDE7F6', border: '#7B1FA2', label: '#4A148C'};
  if (/Customer\s*3|お客さま3/i.test(company)) return {bg: '#FFF3E0', border: '#E65100', label: '#BF360C'};
  if (/Customer\s*4|お客さま4/i.test(company)) return {bg: '#E3F2FD', border: '#1565C0', label: '#0D47A1'};
  if (/Customer\s*5|お客さま5/i.test(company)) return {bg: '#E0F2F1', border: '#00695C', label: '#004D40'};
  return {bg: '#FAFAFA', border: '#757575', label: '#424242'};
};

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30,
    fontSize: 11,
    lineHeight: 1.4,
  },
  header: {
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#0066cc',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0066cc',
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 10,
  },
  contactInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    fontSize: 10,
    color: '#666666',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0066cc',
    marginBottom: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  text: {
    fontSize: 11,
    color: '#333333',
    marginBottom: 5,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#333333',
  },
  projectItem: {
    marginBottom: 15,
    paddingLeft: 10,
  },
  experienceItem: {
    marginBottom: 15,
    paddingLeft: 10,
  },
  skillCategory: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  skillLabel: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#0066cc',
    width: 120,
  },
  skillList: {
    flex: 1,
    fontSize: 11,
    color: '#333333',
  },
  techBadge: {
    backgroundColor: '#f0f8ff',
    color: '#0066cc',
    padding: 2,
    borderRadius: 3,
    fontSize: 9,
    marginRight: 5,
    marginBottom: 3,
  },
  certificationItem: {
    marginBottom: 10,
    paddingLeft: 10,
  },
  educationItem: {
    marginBottom: 10,
    paddingLeft: 10,
  },
});

interface PDFGenerationOptions {
  lang?: string;
  includeProjects?: boolean;
  includeExperience?: boolean;
  includeCertifications?: boolean;
  includeEducation?: boolean;
}

// Standard format — full info, ordered: Summary → Skills → Experience → Education → Certifications → Strong Points → FAQ → Projects
const createStandardPDF = ({
  lang,
  profileData,
  localizedProjects,
  localizedExperience,
  localizedEducation,
  localizedCertifications,
  localizedStrongPoints,
}: StandardPDFOptions) => {
  const skillsByCategory = groupSkillsByCategory(skills);

  // Group experiences by same start year-month → newest first
  const expGroups: WorkExperience[][] = (() => {
    const map = new Map<number, WorkExperience[]>();
    for (const exp of localizedExperience) {
      const ym = parseStartYM(exp.period);
      if (!map.has(ym)) map.set(ym, []);
      map.get(ym)!.push(exp);
    }
    return Array.from(map.entries())
      .sort((a, b) => b[0] - a[0])
      .map(([, entries]) => entries);
  })();

  // ── local style helpers ──────────────────────────────────────────────────
  const sectionBar = (title: string) =>
    React.createElement(
      View,
      {
        minPresenceAhead: 60,
        style: {
          backgroundColor: '#0066cc',
          paddingTop: 5,
          paddingBottom: 5,
          paddingLeft: 10,
          paddingRight: 10,
          marginBottom: 10,
          borderRadius: 2,
        },
      },
      [
        React.createElement(
          Text,
          {style: {color: '#ffffff', fontSize: 11, fontWeight: 'bold'}},
          title
        ),
      ]
    );

  const metaBadge = (text: string, key: string) =>
    React.createElement(
      Text,
      {
        key,
        style: {
          fontSize: 9,
          color: '#444444',
          backgroundColor: '#E8EEF7',
          paddingTop: 2,
          paddingBottom: 2,
          paddingLeft: 6,
          paddingRight: 6,
          borderRadius: 3,
          marginRight: 6,
        },
      },
      text
    );

  // sectionBar has minPresenceAhead:60 built in — no outer minPresenceAhead needed
  // pass forceBreak:true to start section at top of a new page
  const sectionWithItems = (
    key: string,
    title: string,
    items: React.ReactElement[],
    forceBreak = false
  ): React.ReactElement =>
    React.createElement(View, {key, break: forceBreak, style: styles.section}, [
      sectionBar(title),
      ...items,
    ]);

  // ── document ──────────────────────────────────────────────────────────────
  return React.createElement(Document, {}, [
    React.createElement(Page, {key: 'page', size: 'A4', style: styles.page}, [

      // ── Header ──────────────────────────────────────────────────────────
      React.createElement(View, {key: 'header', style: styles.header}, [
        React.createElement(Text, {style: styles.name}, profile.name),
        React.createElement(Text, {style: styles.title}, profileData.title),
        React.createElement(
          View,
          {style: {flexDirection: 'row', flexWrap: 'wrap', marginTop: 6}},
          [
            metaBadge(contact.address, 'address'),
          ]
        ),
      ]),

      // ── Profile Summary ──────────────────────────────────────────────────
      React.createElement(View, {key: 'profile-summary', style: styles.section}, [
        sectionBar(lang === 'en' ? 'Profile Summary' : 'プロフィール概要'),
        React.createElement(
          Text,
          {style: {fontSize: 10, color: '#333333', lineHeight: 1.6}},
          profileData.summary
        ),
      ]),

      // ── Technical Skills ─────────────────────────────────────────────────
      React.createElement(View, {key: 'skills', style: styles.section}, [
        sectionBar(lang === 'en' ? 'Technical Skills' : '技術スキル'),
        React.createElement(
          View,
          {style: {flexDirection: 'row', flexWrap: 'wrap'}},
          Object.entries(skillsByCategory).map(([category, names]) =>
            React.createElement(
              View,
              {
                key: category,
                style: {
                  width: '33.33%',
                  paddingRight: 6,
                  marginBottom: 4,
                },
              },
              [
                React.createElement(
                  Text,
                  {
                    style: {
                      fontSize: 8,
                      fontWeight: 'bold',
                      color: '#0066cc',
                      marginBottom: 1,
                    },
                  },
                  category
                ),
                React.createElement(
                  Text,
                  {style: {fontSize: 8, color: '#333333', lineHeight: 1.3}},
                  names.join(', ')
                ),
              ]
            )
          )
        ),
      ]),

      // ── Work Experience — parallel timeline ─────────────────────────────
      // sectionWithItems locks sectionBar + legend together; each group has wrap:false
      (() => {
        const legend = React.createElement(
          View,
          {key: 'legend', style: {flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10}},
          (['Customer1', 'Customer2', 'Customer3', 'Customer4', 'Customer5'] as const).map((name) => {
            const cc = getCompanyColor(name);
            return React.createElement(View, {key: name, style: {flexDirection: 'row', alignItems: 'center', marginRight: 12, marginBottom: 3}}, [
              React.createElement(View, {style: {width: 10, height: 10, backgroundColor: cc.border, borderRadius: 2, marginRight: 4}}),
              React.createElement(Text, {style: {fontSize: 8, color: '#444444'}}, lang === 'en' ? name : name.replace('Customer', 'お客さま')),
            ]);
          })
        );

        // Build a single card element for one experience entry
        // Strip Japanese characters and parenthetical suffixes for display in EN PDF
        const safeCompanyName = (company: string): string => {
          // Replace known Japanese-only names
          if (/^ホテル$/.test(company)) return 'Hotel';
          if (/^家庭教師/.test(company)) return 'Private Tutor';
          // Strip Japanese parenthetical suffix e.g. "(アルバイト)" "(フリーランス)"
          return company.replace(/[（(][^\)）]*[)）]/g, '').replace(/[\u3000-\u9fff\uff00-\uffef]/g, '').trim() || company;
        };

        const expCard = (exp: WorkExperience, ci: number, _isParallel: boolean) => {
          const cc = getCompanyColor(exp.company);
          const displayCompany = safeCompanyName(exp.company);
          return React.createElement(
            View,
            {
              key: ci,
              style: {
                borderLeftWidth: 4,
                borderLeftColor: cc.border,
                backgroundColor: cc.bg,
                paddingTop: 7,
                paddingBottom: 7,
                paddingLeft: 8,
                paddingRight: 8,
                borderRadius: 2,
              },
            },
            [
              // Top row: company badge + period
              React.createElement(
                View,
                {style: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4}},
                [
                  React.createElement(
                    View,
                    {style: {backgroundColor: cc.border, paddingTop: 2, paddingBottom: 2, paddingLeft: 5, paddingRight: 5, borderRadius: 2}},
                    [React.createElement(Text, {style: {fontSize: 8, color: '#ffffff', fontWeight: 'bold'}}, displayCompany)]
                  ),
                  React.createElement(Text, {style: {fontSize: 8, color: '#555555'}}, exp.period),
                ]
              ),
              // Project title
              React.createElement(
                Text,
                {style: {fontSize: 11, fontWeight: 'bold', color: '#111111', marginBottom: 3}},
                exp.projectOverview
              ),
              // Role + meta
              React.createElement(
                View,
                {style: {flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', marginBottom: 4}},
                [
                  ...(exp.role ? [React.createElement(Text, {key: 'role', style: {fontSize: 8, color: '#777777', marginRight: 6}}, exp.role)] : []),
                  ...(exp.teamSize ? [metaBadge(`Team: ${exp.teamSize}`, 'team')] : []),
                  ...(exp.manMonth ? [metaBadge(exp.manMonth, 'mm')] : []),
                ]
              ),
              // Description
              ...exp.description.map((d: string, di: number) =>
                React.createElement(View, {key: di, style: {flexDirection: 'row', marginBottom: 2}}, [
                  React.createElement(Text, {style: {fontSize: 8, color: cc.border, width: 10}}, '\u2022'),
                  React.createElement(Text, {style: {flex: 1, fontSize: 8, color: '#333333', lineHeight: 1.3}}, d),
                ])
              ),
              // Achievements
              ...(exp.archivement.filter((a: string) => a.trim()).length > 0
                ? [
                    React.createElement(Text, {style: {fontSize: 8, fontWeight: 'bold', color: cc.label, marginTop: 3, marginBottom: 2}},
                      lang === 'en' ? 'Achievements:' : '実績:'),
                    ...exp.archivement
                      .filter((a: string) => a.trim())
                      .map((a: string, ai: number) =>
                        React.createElement(View, {key: ai, style: {flexDirection: 'row', marginBottom: 2}}, [
                          React.createElement(Text, {style: {fontSize: 8, color: cc.border, width: 10}}, '\u2713'),
                          React.createElement(Text, {style: {flex: 1, fontSize: 8, color: '#333333', lineHeight: 1.3}}, a),
                        ])
                      ),
                  ]
                : []),
              // Tech stack
              ...(exp.technologies.length > 0
                ? [
                    React.createElement(
                      View,
                      {style: {backgroundColor: '#F0F0F0', paddingTop: 3, paddingBottom: 3, paddingLeft: 5, paddingRight: 5, borderRadius: 2, marginTop: 4}},
                      [React.createElement(Text, {style: {fontSize: 7, color: cc.label}}, `Tech: ${exp.technologies.join(' · ')}`)]
                    ),
                  ]
                : []),
            ]
          );
        };

        // Flatten all groups into a single ordered list of cards
        const groupViews = expGroups.flatMap((group, gi) =>
          group.map((exp: WorkExperience, ci: number) =>
            React.createElement(
              View,
              {key: `${gi}-${ci}`, wrap: false, style: {marginBottom: 6}},
              [expCard(exp, ci, false)]
            )
          )
        );

        // Force Work Experience to always start at top of a new page
        return React.createElement(View, {key: 'experience', break: true, style: styles.section}, [
          sectionBar(lang === 'en' ? 'Work Experience' : '職務経歴'),
          legend,
          ...groupViews,
        ]);
      })(),

      // ── Education ────────────────────────────────────────────────────────
      sectionWithItems(
        'education',
        lang === 'en' ? 'Education' : '学歴',
        localizedEducation.map((edu: EducationHistory, index: number) =>
          React.createElement(
            View,
            {
              key: index,
              wrap: false,
              style: {
                borderLeftWidth: 3,
                borderLeftColor: '#2e7d32',
                backgroundColor: '#F6FBF6',
                paddingTop: 7,
                paddingBottom: 7,
                paddingLeft: 10,
                paddingRight: 10,
                marginBottom: 8,
                borderRadius: 2,
              },
            },
            [
              React.createElement(
                View,
                {style: {flexDirection: 'row', justifyContent: 'space-between', marginBottom: 3}},
                [
                  React.createElement(
                    Text,
                    {style: {fontSize: 11, fontWeight: 'bold', color: '#1a3a1a', flex: 1}},
                    edu.school
                  ),
                  React.createElement(
                    Text,
                    {style: {fontSize: 9, color: '#555555'}},
                    `${edu.startYear} – ${edu.endYear}`
                  ),
                ]
              ),
              React.createElement(
                Text,
                {style: {fontSize: 10, color: '#2e7d32', marginBottom: 4}},
                edu.department
              ),
              React.createElement(
                Text,
                {style: {fontSize: 10, color: '#444444', lineHeight: 1.4}},
                edu.description
              ),
            ]
          )
        )
      ),

      // ── Certifications — one line per cert, sorted newest first ──────────
      sectionWithItems(
        'certifications',
        lang === 'en' ? 'Certifications' : '資格・認定',
        [...localizedCertifications]
          .sort((a: CertificationItem, b: CertificationItem) =>
            b.date.localeCompare(a.date)
          )
          .map((cert: CertificationItem, index: number) =>
            React.createElement(
              View,
              {
                key: index,
                wrap: false,
                style: {
                  flexDirection: 'row',
                  paddingTop: 3,
                  paddingBottom: 3,
                  backgroundColor: index % 2 === 0 ? '#F8F8F8' : '#FFFFFF',
                  paddingLeft: 6,
                  paddingRight: 6,
                },
              },
              [
                React.createElement(
                  Text,
                  {style: {flex: 1, fontSize: 9, color: '#1a1a1a', fontWeight: 'bold'}},
                  cert.name
                ),
                React.createElement(
                  Text,
                  {style: {fontSize: 9, color: '#555555', marginLeft: 8}},
                  cert.organization
                ),
                React.createElement(
                  Text,
                  {style: {fontSize: 9, color: '#888888', marginLeft: 8, width: 60, textAlign: 'right'}},
                  cert.date
                ),
              ]
            )
          ),
        true
      ),

      // ── Key Strengths — each card a distinct color ───────────────────────
      sectionWithItems(
        'strong-points',
        lang === 'en' ? 'Key Strengths' : '強み',
        localizedStrongPoints.map((point: StrongPoint, index: number) => {
          const palette = [
            {border: '#C62828', bg: '#FFF5F5', label: '#7f1010'},
            {border: '#1565C0', bg: '#F0F6FF', label: '#0d3a7a'},
            {border: '#2E7D32', bg: '#F3FBF3', label: '#1a4d1c'},
            {border: '#6A1B9A', bg: '#FAF4FF', label: '#3d0f5c'},
            {border: '#E65100', bg: '#FFF8F2', label: '#8a2f00'},
            {border: '#00695C', bg: '#F0FAF8', label: '#003d35'},
            {border: '#AD1457', bg: '#FFF0F5', label: '#6b0c34'},
            {border: '#283593', bg: '#F2F4FF', label: '#131d5c'},
            {border: '#F57F17', bg: '#FFFDE7', label: '#7a4300'},
            {border: '#4527A0', bg: '#F5F2FF', label: '#28166b'},
            {border: '#00838F', bg: '#F0FBFC', label: '#00474f'},
          ];
          const c = palette[index % palette.length];
          return React.createElement(
            View,
            {
              key: index,
              wrap: false,
              style: {
                borderLeftWidth: 3,
                borderLeftColor: c.border,
                backgroundColor: c.bg,
                paddingTop: 7,
                paddingBottom: 7,
                paddingLeft: 10,
                paddingRight: 10,
                marginBottom: 8,
                borderRadius: 2,
              },
            },
            [
              React.createElement(
                Text,
                {style: {fontSize: 10, fontWeight: 'bold', color: c.label, marginBottom: 3}},
                point.question
              ),
              React.createElement(
                Text,
                {style: {fontSize: 10, color: '#333333', lineHeight: 1.5}},
                point.answer
              ),
            ]
          );
        }),
        true
      ),

      // ── FAQ ──────────────────────────────────────────────────────────────
      sectionWithItems(
        'faqs',
        lang === 'en' ? 'FAQ' : 'よくある質問',
        faqs.map((item, index: number) => {
          const faq = lang === 'en' ? item.en : item.ja;
          return React.createElement(
            View,
            {
              key: index,
              wrap: false,
              style: {
                borderLeftWidth: 3,
                borderLeftColor: '#6a0dad',
                backgroundColor: '#FAF6FF',
                paddingTop: 7,
                paddingBottom: 7,
                paddingLeft: 10,
                paddingRight: 10,
                marginBottom: 8,
                borderRadius: 2,
              },
            },
            [
              React.createElement(
                Text,
                {style: {fontSize: 10, fontWeight: 'bold', color: '#3a006a', marginBottom: 3}},
                faq.question
              ),
              React.createElement(
                Text,
                {style: {fontSize: 10, color: '#333333', lineHeight: 1.5}},
                faq.answer
              ),
            ]
          );
        }),
        true
      ),

      // ── Projects ─────────────────────────────────────────────────────────
      sectionWithItems(
        'projects',
        lang === 'en' ? 'Projects' : 'プロジェクト',
        localizedProjects.map((project: Project, index: number) =>
          React.createElement(
            View,
            {
              key: index,
              wrap: false,
              style: {
                borderLeftWidth: 3,
                borderLeftColor: '#4527a0',
                backgroundColor: '#F8F6FF',
                paddingTop: 8,
                paddingBottom: 8,
                paddingLeft: 10,
                paddingRight: 10,
                marginBottom: 8,
                borderRadius: 2,
              },
            },
            [
              React.createElement(
                Text,
                {style: {fontSize: 11, fontWeight: 'bold', color: '#1a0050', marginBottom: 4}},
                project.title
              ),
              React.createElement(
                Text,
                {style: {fontSize: 10, color: '#333333', lineHeight: 1.5, marginBottom: 5}},
                project.description
              ),
              React.createElement(
                View,
                {
                  style: {
                    backgroundColor: '#EEE8FF',
                    paddingTop: 3,
                    paddingBottom: 3,
                    paddingLeft: 6,
                    paddingRight: 6,
                    borderRadius: 2,
                    marginBottom: 4,
                  },
                },
                [
                  React.createElement(
                    Text,
                    {style: {fontSize: 9, color: '#3a006a'}},
                    `Tech: ${project.technologies.join(' · ')}`
                  ),
                ]
              ),
              ...(project.githubUrl
                ? [
                    React.createElement(Link, {
                      src: project.githubUrl,
                      style: {fontSize: 9, color: '#0044aa', textDecoration: 'underline'},
                    }, `GitHub: ${project.githubUrl}`),
                  ]
                : []),
              ...(project.liveUrl
                ? [
                    React.createElement(Link, {
                      src: project.liveUrl,
                      style: {fontSize: 9, color: '#0044aa', textDecoration: 'underline'},
                    }, `Live: ${project.liveUrl}`),
                  ]
                : []),
            ]
          )
        ),
        true
      ),

    ]),
  ]);
};

export const generatePortfolioPDF = async (
  options: PDFGenerationOptions = {}
): Promise<Uint8Array> => {
  const {
    lang = 'en',
    includeProjects = true,
    includeExperience = true,
    includeCertifications = true,
    includeEducation = true,
  } = options;

  const profileData = lang === 'en' ? profile.en : profile.ja;
  const localizedProjects = projects.map((project) => ({
    technologies: project.technologies,
    ...(lang === 'en' ? project.en : project.ja),
  }));
  const localizedExperience = lang === 'en' ? workExperiences_en : workExperiences_ja;
  const localizedEducation = educationHistory.map((item) => ({
    startYear: item.startYear,
    endYear: item.endYear,
    ...(lang === 'en' ? item.en : item.ja),
  }));
  const localizedCertifications = certifications.map((item) => ({
    id: item.id,
    organization: item.organization,
    date: item.date,
    verifyLink: item.verifyLink,
    ...(lang === 'en' ? item.en : item.ja),
  }));
  const localizedStrongPoints = strongPoint.map((item) => ({
    size: item.size,
    ...(lang === 'en' ? item.en : item.ja),
  }));

  const doc = createStandardPDF({
    lang,
    profileData,
    localizedProjects,
    localizedExperience,
    localizedEducation,
    localizedCertifications,
    localizedStrongPoints,
    includeProjects,
    includeExperience,
    includeCertifications,
    includeEducation,
  });

  const asPdf = pdf(doc);
  const stream = await asPdf.toBlob();
  const arrayBuffer = await stream.arrayBuffer();
  return new Uint8Array(arrayBuffer);
};
