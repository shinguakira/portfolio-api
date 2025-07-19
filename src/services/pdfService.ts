import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  pdf,
} from '@react-pdf/renderer';
import * as React from 'react';
import {
  profile,
  workExperiences,
  projects,
  skills,
  educationHistory,
  contact,
  certifications,
  strongPoint,
} from '../constants/index.js';

// Register fonts (optional - for better typography)
// Font.register({
//   family: 'Roboto',
//   src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf'
// });

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

type PDFFormatType =
  | 'standard'
  | 'compact'
  | 'executive'
  | 'technical'
  | 'academic'
  | 'modern';

interface PDFGenerationOptions {
  lang?: string;
  format?: PDFFormatType;
  includeProjects?: boolean;
  includeExperience?: boolean;
  includeCertifications?: boolean;
  includeEducation?: boolean;
}

const createPortfolioPDF = ({
  lang = 'en',
  format = 'standard',
  includeProjects = true,
  includeExperience = true,
  includeCertifications = true,
  includeEducation = true,
}: PDFGenerationOptions) => {
  const profileData = lang === 'en' ? profile.en : profile.ja;

  const localizedProjects = projects.map((project) => ({
    technologies: project.technologies,
    ...(lang === 'en' ? project.en : project.ja),
  }));

  const localizedExperience = workExperiences.map((item) => ({
    company: item.company,
    period: item.period,
    teamSize: item.teamSize,
    manMonth: item.manMonth,
    technologies: item.technologies,
    ...(lang === 'en' ? item.en : item.ja),
  }));

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

  // Switch between different format patterns
  switch (format) {
  case 'compact':
    return createCompactPDF({
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
  case 'executive':
    return createExecutivePDF({
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
  case 'technical':
    return createTechnicalPDF({
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
  case 'academic':
    return createAcademicPDF({
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
  case 'modern':
    return createModernPDF({
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
  case 'standard':
  default:
    return createStandardPDF({
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
  }
};

// Standard format (current format)
const createStandardPDF = ({
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
}: any) => {
  return React.createElement(Document, {}, [
    // First Page - Profile and Basic Info
    React.createElement(Page, {key: 'page-1', size: 'A4', style: styles.page}, [
      // Header Section
      React.createElement(View, {key: 'header', style: styles.header}, [
        React.createElement(Text, {style: styles.name}, profile.name),
        React.createElement(Text, {style: styles.title}, profileData.title),
        React.createElement(View, {style: styles.contactInfo}, [
          React.createElement(Text, {key: 'email'}, contact.email),
          React.createElement(
            Text,
            {key: 'github'},
            contact.socialMedia.github
          ),
          React.createElement(Text, {key: 'address'}, contact.address),
          React.createElement(
            Text,
            {key: 'linkedin'},
            contact.socialMedia.linkedin
          ),
        ]),
      ]),

      // Profile Summary
      React.createElement(
        View,
        {key: 'profile-summary', style: styles.section},
        [
          React.createElement(
            Text,
            {style: styles.sectionTitle},
            lang === 'en' ? 'Profile Summary' : 'プロフィール概要'
          ),
          React.createElement(Text, {style: styles.text}, profileData.summary),
        ]
      ),

      // Strong Points
      React.createElement(View, {key: 'strong-points', style: styles.section}, [
        React.createElement(
          Text,
          {style: styles.sectionTitle},
          lang === 'en' ? 'Key Strengths' : '強み'
        ),
        ...localizedStrongPoints.map((point: any, index: number) =>
          React.createElement(View, {key: index, style: {marginBottom: 8}}, [
            React.createElement(Text, {style: styles.boldText}, point.question),
            React.createElement(Text, {style: styles.text}, point.answer),
          ])
        ),
      ]),

      // Skills
      React.createElement(View, {key: 'skills', style: styles.section}, [
        React.createElement(
          Text,
          {style: styles.sectionTitle},
          lang === 'en' ? 'Technical Skills' : '技術スキル'
        ),
        ...Object.entries(skills).map(([category, skillList]) =>
          React.createElement(
            View,
            {key: category, style: styles.skillCategory},
            [
              React.createElement(
                Text,
                {style: styles.skillLabel},
                `${category.charAt(0).toUpperCase() + category.slice(1)}:`
              ),
              React.createElement(
                Text,
                {style: styles.skillList},
                Array.isArray(skillList)
                  ? skillList.join(', ')
                  : String(skillList)
              ),
            ]
          )
        ),
      ]),

      // Professional Experience (if enabled)
      ...(includeExperience
        ? [
          React.createElement(
            View,
            {key: 'experience', style: styles.section},
            [
              React.createElement(
                Text,
                {style: styles.sectionTitle},
                lang === 'en' ? 'Professional Experience' : '職務経歴'
              ),
              ...localizedExperience
                .slice(0, 2)
                .map((exp: any, index: number) =>
                  React.createElement(
                    View,
                    {key: index, style: styles.experienceItem},
                    [
                      React.createElement(
                        Text,
                        {style: styles.boldText},
                        `${exp.role} at ${exp.company}`
                      ),
                      React.createElement(
                        Text,
                        {style: styles.text},
                        `${exp.period} | Team: ${exp.teamSize} | ${exp.manMonth} months`
                      ),
                      React.createElement(
                        Text,
                        {style: styles.text},
                        exp.projectOverview
                      ),
                      React.createElement(
                        Text,
                        {style: styles.text},
                        `Technologies: ${exp.technologies.join(', ')}`
                      ),
                    ]
                  )
                ),
            ]
          ),
        ]
        : []),
    ]),

    // Second Page - Projects and Certifications
    React.createElement(Page, {key: 'page-2', size: 'A4', style: styles.page}, [
      // Projects (if enabled)
      ...(includeProjects
        ? [
          React.createElement(View, {style: styles.section}, [
            React.createElement(
              Text,
              {style: styles.sectionTitle},
              lang === 'en' ? 'Key Projects' : '主要プロジェクト'
            ),
            ...localizedProjects
              .slice(0, 4)
              .map((project: any, index: number) =>
                React.createElement(
                  View,
                  {key: index, style: styles.projectItem},
                  [
                    React.createElement(
                      Text,
                      {style: styles.boldText},
                      project.title
                    ),
                    React.createElement(
                      Text,
                      {style: styles.text},
                      project.description
                    ),
                    React.createElement(
                      Text,
                      {style: styles.text},
                      `Technologies: ${project.technologies.join(', ')}`
                    ),
                  ]
                )
              ),
          ]),
        ]
        : []),

      // Education (if enabled)
      ...(includeEducation
        ? [
          React.createElement(View, {style: styles.section}, [
            React.createElement(
              Text,
              {style: styles.sectionTitle},
              lang === 'en' ? 'Education' : '学歴'
            ),
            ...localizedEducation.map((edu: any, index: number) =>
              React.createElement(
                View,
                {key: index, style: styles.educationItem},
                [
                  React.createElement(
                    Text,
                    {style: styles.boldText},
                    `${edu.school} - ${edu.department}`
                  ),
                  React.createElement(
                    Text,
                    {style: styles.text},
                    `(${edu.startYear} - ${edu.endYear})`
                  ),
                  React.createElement(
                    Text,
                    {style: styles.text},
                    edu.description
                  ),
                ]
              )
            ),
          ]),
        ]
        : []),

      // Certifications (if enabled)
      ...(includeCertifications
        ? [
          React.createElement(View, {style: styles.section}, [
            React.createElement(
              Text,
              {style: styles.sectionTitle},
              lang === 'en' ? 'Certifications' : '資格・認定'
            ),
            ...localizedCertifications.map((cert: any, index: number) =>
              React.createElement(
                View,
                {key: index, style: styles.certificationItem},
                [
                  React.createElement(
                    Text,
                    {style: styles.boldText},
                    cert.name
                  ),
                  React.createElement(
                    Text,
                    {style: styles.text},
                    `${cert.organization} | ${cert.date}`
                  ),
                  ...(cert.verifyLink
                    ? [
                      React.createElement(
                        Text,
                        {style: styles.text},
                        cert.verifyLink
                      ),
                    ]
                    : []),
                ]
              )
            ),
          ]),
        ]
        : []),
    ]),
  ]);
};

// Compact format - Single page condensed version
const createCompactPDF = ({
  lang,
  profileData,
  localizedProjects,
  localizedExperience,
  localizedCertifications,
  includeProjects,
  includeExperience,
  includeCertifications,
}: any) => {
  return React.createElement(Document, {}, [
    React.createElement(
      Page,
      {key: 'compact-page', size: 'A4', style: {...styles.page, fontSize: 10}},
      [
        // Compact Header
        React.createElement(
          View,
          {key: 'compact-header', style: {...styles.header, marginBottom: 15}},
          [
            React.createElement(
              Text,
              {style: {...styles.name, fontSize: 16}},
              profile.name
            ),
            React.createElement(
              Text,
              {style: {...styles.title, fontSize: 12}},
              profileData.title
            ),
            React.createElement(
              Text,
              {style: {fontSize: 9, color: '#666'}},
              `${contact.email} | ${contact.socialMedia.github} | ${contact.socialMedia.linkedin}`
            ),
          ]
        ),

        // Compact Profile Summary
        React.createElement(
          View,
          {key: 'compact-summary', style: {marginBottom: 10}},
          [
            React.createElement(
              Text,
              {style: {...styles.sectionTitle, fontSize: 12, marginBottom: 5}},
              lang === 'en' ? 'Summary' : '概要'
            ),
            React.createElement(
              Text,
              {style: {fontSize: 9, lineHeight: 1.3}},
              profileData.summary.length > 200
                ? profileData.summary.substring(0, 200) + '...'
                : profileData.summary
            ),
          ]
        ),

        // Compact Skills
        React.createElement(
          View,
          {key: 'compact-skills', style: {marginBottom: 10}},
          [
            React.createElement(
              Text,
              {style: {...styles.sectionTitle, fontSize: 12, marginBottom: 5}},
              lang === 'en' ? 'Key Skills' : '主要スキル'
            ),
            React.createElement(
              Text,
              {style: {fontSize: 9, lineHeight: 1.3}},
              Object.entries(skills)
                .map(
                  ([category, skillList]) =>
                    `${category.charAt(0).toUpperCase() + category.slice(1)}: ${Array.isArray(skillList) ? skillList.slice(0, 5).join(', ') : skillList}`
                )
                .join(' | ')
            ),
          ]
        ),

        // Compact Experience (if enabled)
        ...(includeExperience
          ? [
            React.createElement(
              View,
              {key: 'compact-experience', style: {marginBottom: 10}},
              [
                React.createElement(
                  Text,
                  {
                    style: {
                      ...styles.sectionTitle,
                      fontSize: 12,
                      marginBottom: 5,
                    },
                  },
                  lang === 'en' ? 'Experience' : '経験'
                ),
                ...localizedExperience
                  .slice(0, 3)
                  .map((exp: any, index: number) =>
                    React.createElement(
                      Text,
                      {key: index, style: {fontSize: 9, marginBottom: 3}},
                      `${exp.role} at ${exp.company} (${exp.period})`
                    )
                  ),
              ]
            ),
          ]
          : []),

        // Compact Projects (if enabled)
        ...(includeProjects
          ? [
            React.createElement(
              View,
              {key: 'compact-projects', style: {marginBottom: 10}},
              [
                React.createElement(
                  Text,
                  {
                    style: {
                      ...styles.sectionTitle,
                      fontSize: 12,
                      marginBottom: 5,
                    },
                  },
                  lang === 'en' ? 'Key Projects' : '主要プロジェクト'
                ),
                ...localizedProjects
                  .slice(0, 3)
                  .map((project: any, index: number) =>
                    React.createElement(
                      Text,
                      {key: index, style: {fontSize: 9, marginBottom: 3}},
                      `${project.title} - ${project.technologies.slice(0, 3).join(', ')}`
                    )
                  ),
              ]
            ),
          ]
          : []),

        // Compact Certifications (if enabled)
        ...(includeCertifications
          ? [
            React.createElement(View, {key: 'compact-certifications'}, [
              React.createElement(
                Text,
                {
                  style: {
                    ...styles.sectionTitle,
                    fontSize: 12,
                    marginBottom: 5,
                  },
                },
                lang === 'en' ? 'Certifications' : '資格'
              ),
              ...localizedCertifications
                .slice(0, 5)
                .map((cert: any, index: number) =>
                  React.createElement(
                    Text,
                    {key: index, style: {fontSize: 9, marginBottom: 2}},
                    `${cert.name} (${cert.organization}, ${cert.date})`
                  )
                ),
            ]),
          ]
          : []),
      ]
    ),
  ]);
};

// Executive format - High-level overview
const createExecutivePDF = ({
  lang,
  profileData,
  localizedProjects,
  localizedExperience,
  localizedCertifications,
}: any) => {
  return React.createElement(Document, {}, [
    React.createElement(
      Page,
      {key: 'executive-page', size: 'A4', style: styles.page},
      [
        // Executive Header
        React.createElement(
          View,
          {
            key: 'exec-header',
            style: {
              ...styles.header,
              backgroundColor: '#f8f9fa',
              padding: 20,
              marginBottom: 20,
            },
          },
          [
            React.createElement(
              Text,
              {style: {...styles.name, fontSize: 18, color: '#0066cc'}},
              profile.name
            ),
            React.createElement(
              Text,
              {style: {...styles.title, fontSize: 14, fontWeight: 'bold'}},
              profileData.title
            ),
            React.createElement(
              Text,
              {style: {fontSize: 11, color: '#666', marginTop: 5}},
              `${contact.email} | ${contact.socialMedia.linkedin}`
            ),
          ]
        ),

        // Executive Summary
        React.createElement(
          View,
          {key: 'exec-summary', style: {marginBottom: 20}},
          [
            React.createElement(
              Text,
              {
                style: {
                  ...styles.sectionTitle,
                  fontSize: 14,
                  color: '#0066cc',
                  marginBottom: 10,
                },
              },
              lang === 'en' ? 'Executive Summary' : 'エグゼクティブサマリー'
            ),
            React.createElement(
              Text,
              {style: {fontSize: 12, lineHeight: 1.5}},
              profileData.summary
            ),
          ]
        ),

        // Key Achievements (Experience Highlights)
        React.createElement(
          View,
          {key: 'exec-achievements', style: {marginBottom: 20}},
          [
            React.createElement(
              Text,
              {
                style: {
                  ...styles.sectionTitle,
                  fontSize: 14,
                  color: '#0066cc',
                  marginBottom: 10,
                },
              },
              lang === 'en' ? 'Key Achievements' : '主な実績'
            ),
            ...localizedExperience
              .slice(0, 2)
              .map((exp: any, index: number) =>
                React.createElement(
                  View,
                  {key: index, style: {marginBottom: 12, paddingLeft: 10}},
                  [
                    React.createElement(
                      Text,
                      {style: {fontSize: 12, fontWeight: 'bold'}},
                      `${exp.role} - ${exp.company}`
                    ),
                    React.createElement(
                      Text,
                      {style: {fontSize: 11, color: '#666'}},
                      exp.period
                    ),
                    React.createElement(
                      Text,
                      {style: {fontSize: 11, marginTop: 3}},
                      exp.description.length > 150
                        ? exp.description.substring(0, 150) + '...'
                        : exp.description
                    ),
                  ]
                )
              ),
          ]
        ),

        // Core Technologies
        React.createElement(
          View,
          {key: 'exec-tech', style: {marginBottom: 20}},
          [
            React.createElement(
              Text,
              {
                style: {
                  ...styles.sectionTitle,
                  fontSize: 14,
                  color: '#0066cc',
                  marginBottom: 10,
                },
              },
              lang === 'en' ? 'Core Technologies' : 'コア技術'
            ),
            React.createElement(
              Text,
              {style: {fontSize: 11, lineHeight: 1.4}},
              Object.entries(skills)
                .map(
                  ([category, skillList]) =>
                    `${category.charAt(0).toUpperCase() + category.slice(1)}: ${Array.isArray(skillList) ? skillList.slice(0, 4).join(', ') : skillList}`
                )
                .join('\n')
            ),
          ]
        ),
      ]
    ),
  ]);
};

// Technical format - Focus on technical skills and projects
const createTechnicalPDF = ({
  lang,
  profileData,
  localizedProjects,
  localizedExperience,
}: any) => {
  return React.createElement(Document, {}, [
    React.createElement(
      Page,
      {key: 'tech-page', size: 'A4', style: styles.page},
      [
        // Technical Header
        React.createElement(View, {key: 'tech-header', style: styles.header}, [
          React.createElement(Text, {style: styles.name}, profile.name),
          React.createElement(Text, {style: styles.title}, profileData.title),
          React.createElement(
            Text,
            {style: {fontSize: 10, color: '#666'}},
            `${contact.email} | ${contact.socialMedia.github}`
          ),
        ]),

        // Technical Skills (Detailed)
        React.createElement(
          View,
          {key: 'tech-skills', style: {marginBottom: 20}},
          [
            React.createElement(
              Text,
              {style: {...styles.sectionTitle, fontSize: 14, color: '#0066cc'}},
              lang === 'en' ? 'Technical Expertise' : '技術的専門知識'
            ),
            ...Object.entries(skills).map(([category, skillList]) =>
              React.createElement(
                View,
                {key: category, style: {marginBottom: 8}},
                [
                  React.createElement(
                    Text,
                    {
                      style: {
                        fontSize: 12,
                        fontWeight: 'bold',
                        color: '#0066cc',
                      },
                    },
                    `${category.charAt(0).toUpperCase() + category.slice(1)}:`
                  ),
                  React.createElement(
                    Text,
                    {style: {fontSize: 11, marginTop: 2}},
                    Array.isArray(skillList)
                      ? skillList.join(' • ')
                      : String(skillList)
                  ),
                ]
              )
            ),
          ]
        ),

        // Technical Projects
        React.createElement(View, {key: 'tech-projects'}, [
          React.createElement(
            Text,
            {
              style: {
                ...styles.sectionTitle,
                fontSize: 14,
                color: '#0066cc',
                marginBottom: 10,
              },
            },
            lang === 'en' ? 'Technical Projects' : '技術プロジェクト'
          ),
          ...localizedProjects
            .slice(0, 4)
            .map((project: any, index: number) =>
              React.createElement(
                View,
                {key: index, style: {marginBottom: 15, paddingLeft: 10}},
                [
                  React.createElement(
                    Text,
                    {style: {fontSize: 12, fontWeight: 'bold'}},
                    project.title
                  ),
                  React.createElement(
                    Text,
                    {style: {fontSize: 10, color: '#666', marginBottom: 3}},
                    `Technologies: ${project.technologies.join(', ')}`
                  ),
                  React.createElement(
                    Text,
                    {style: {fontSize: 11}},
                    project.description.length > 120
                      ? project.description.substring(0, 120) + '...'
                      : project.description
                  ),
                ]
              )
            ),
        ]),
      ]
    ),
  ]);
};

// Academic format - Focus on education and certifications
const createAcademicPDF = ({
  lang,
  profileData,
  localizedEducation,
  localizedCertifications,
}: any) => {
  return React.createElement(Document, {}, [
    React.createElement(
      Page,
      {key: 'academic-page', size: 'A4', style: styles.page},
      [
        // Academic Header
        React.createElement(
          View,
          {key: 'academic-header', style: styles.header},
          [
            React.createElement(Text, {style: styles.name}, profile.name),
            React.createElement(Text, {style: styles.title}, profileData.title),
            React.createElement(
              Text,
              {style: {fontSize: 10, color: '#666'}},
              contact.email
            ),
          ]
        ),

        // Education
        React.createElement(
          View,
          {key: 'academic-education', style: {marginBottom: 25}},
          [
            React.createElement(
              Text,
              {
                style: {
                  ...styles.sectionTitle,
                  fontSize: 14,
                  color: '#0066cc',
                  marginBottom: 10,
                },
              },
              lang === 'en' ? 'Education' : '学歴'
            ),
            ...localizedEducation.map((edu: any, index: number) =>
              React.createElement(
                View,
                {key: index, style: {marginBottom: 12, paddingLeft: 10}},
                [
                  React.createElement(
                    Text,
                    {style: {fontSize: 12, fontWeight: 'bold'}},
                    edu.degree
                  ),
                  React.createElement(
                    Text,
                    {style: {fontSize: 11, color: '#666'}},
                    `${edu.institution} | ${edu.startYear} - ${edu.endYear}`
                  ),
                  ...(edu.description
                    ? [
                      React.createElement(
                        Text,
                        {style: {fontSize: 11, marginTop: 3}},
                        edu.description
                      ),
                    ]
                    : []),
                ]
              )
            ),
          ]
        ),

        // Certifications
        React.createElement(
          View,
          {key: 'academic-certifications', style: {marginBottom: 25}},
          [
            React.createElement(
              Text,
              {
                style: {
                  ...styles.sectionTitle,
                  fontSize: 14,
                  color: '#0066cc',
                  marginBottom: 10,
                },
              },
              lang === 'en' ? 'Certifications & Licenses' : '資格・免許'
            ),
            ...localizedCertifications.map((cert: any, index: number) =>
              React.createElement(
                View,
                {key: index, style: {marginBottom: 10, paddingLeft: 10}},
                [
                  React.createElement(
                    Text,
                    {style: {fontSize: 12, fontWeight: 'bold'}},
                    cert.name
                  ),
                  React.createElement(
                    Text,
                    {style: {fontSize: 11, color: '#666'}},
                    `${cert.organization} | ${cert.date}`
                  ),
                  ...(cert.verifyLink
                    ? [
                      React.createElement(
                        Text,
                        {style: {fontSize: 10, color: '#0066cc'}},
                        cert.verifyLink
                      ),
                    ]
                    : []),
                ]
              )
            ),
          ]
        ),

        // Academic Skills
        React.createElement(View, {key: 'academic-skills'}, [
          React.createElement(
            Text,
            {
              style: {
                ...styles.sectionTitle,
                fontSize: 14,
                color: '#0066cc',
                marginBottom: 10,
              },
            },
            lang === 'en' ? 'Technical Skills' : '技術スキル'
          ),
          React.createElement(
            Text,
            {style: {fontSize: 11, lineHeight: 1.4}},
            Object.entries(skills)
              .map(
                ([category, skillList]) =>
                  `${category.charAt(0).toUpperCase() + category.slice(1)}: ${Array.isArray(skillList) ? skillList.join(', ') : skillList}`
              )
              .join('\n')
          ),
        ]),
      ]
    ),
  ]);
};

// Modern format - Contemporary design with better visual hierarchy
const createModernPDF = ({
  lang,
  profileData,
  localizedProjects,
  localizedExperience,
  localizedCertifications,
}: any) => {
  return React.createElement(Document, {}, [
    React.createElement(
      Page,
      {
        key: 'modern-page',
        size: 'A4',
        style: {...styles.page, backgroundColor: '#fafafa'},
      },
      [
        // Modern Header with accent
        React.createElement(
          View,
          {
            key: 'modern-header',
            style: {
              backgroundColor: '#0066cc',
              color: 'white',
              padding: 20,
              marginBottom: 20,
            },
          },
          [
            React.createElement(
              Text,
              {style: {fontSize: 18, fontWeight: 'bold', marginBottom: 5}},
              profile.name
            ),
            React.createElement(
              Text,
              {style: {fontSize: 13, opacity: 0.9}},
              profileData.title
            ),
            React.createElement(
              Text,
              {style: {fontSize: 10, opacity: 0.8, marginTop: 8}},
              `${contact.email} • ${contact.socialMedia.linkedin} • ${contact.socialMedia.github}`
            ),
          ]
        ),

        // Modern Profile with card-like design
        React.createElement(
          View,
          {
            key: 'modern-profile',
            style: {
              backgroundColor: 'white',
              padding: 15,
              marginBottom: 15,
              borderRadius: 5,
            },
          },
          [
            React.createElement(
              Text,
              {
                style: {
                  fontSize: 13,
                  fontWeight: 'bold',
                  color: '#0066cc',
                  marginBottom: 8,
                },
              },
              lang === 'en'
                ? 'Professional Summary'
                : 'プロフェッショナルサマリー'
            ),
            React.createElement(
              Text,
              {style: {fontSize: 11, lineHeight: 1.5, color: '#333'}},
              profileData.summary
            ),
          ]
        ),

        // Modern Experience with timeline-like design
        React.createElement(
          View,
          {
            key: 'modern-experience',
            style: {
              backgroundColor: 'white',
              padding: 15,
              marginBottom: 15,
              borderRadius: 5,
            },
          },
          [
            React.createElement(
              Text,
              {
                style: {
                  fontSize: 13,
                  fontWeight: 'bold',
                  color: '#0066cc',
                  marginBottom: 10,
                },
              },
              lang === 'en' ? 'Experience Highlights' : '経験ハイライト'
            ),
            ...localizedExperience.slice(0, 2).map((exp: any, index: number) =>
              React.createElement(
                View,
                {
                  key: index,
                  style: {
                    marginBottom: 12,
                    borderLeft: '3 solid #0066cc',
                    paddingLeft: 10,
                  },
                },
                [
                  React.createElement(
                    Text,
                    {
                      style: {
                        fontSize: 12,
                        fontWeight: 'bold',
                        color: '#333',
                      },
                    },
                    `${exp.role} @ ${exp.company}`
                  ),
                  React.createElement(
                    Text,
                    {style: {fontSize: 10, color: '#666', marginBottom: 4}},
                    exp.period
                  ),
                  React.createElement(
                    Text,
                    {style: {fontSize: 10, color: '#555'}},
                    exp.description.length > 100
                      ? exp.description.substring(0, 100) + '...'
                      : exp.description
                  ),
                ]
              )
            ),
          ]
        ),

        // Modern Skills with tags
        React.createElement(
          View,
          {
            key: 'modern-skills',
            style: {backgroundColor: 'white', padding: 15, borderRadius: 5},
          },
          [
            React.createElement(
              Text,
              {
                style: {
                  fontSize: 13,
                  fontWeight: 'bold',
                  color: '#0066cc',
                  marginBottom: 10,
                },
              },
              lang === 'en' ? 'Technical Expertise' : '技術的専門知識'
            ),
            ...Object.entries(skills).map(([category, skillList]) =>
              React.createElement(
                View,
                {key: category, style: {marginBottom: 8}},
                [
                  React.createElement(
                    Text,
                    {
                      style: {
                        fontSize: 11,
                        fontWeight: 'bold',
                        color: '#0066cc',
                        marginBottom: 3,
                      },
                    },
                    category.charAt(0).toUpperCase() + category.slice(1)
                  ),
                  React.createElement(
                    Text,
                    {style: {fontSize: 10, color: '#555'}},
                    Array.isArray(skillList)
                      ? skillList.join(' • ')
                      : String(skillList)
                  ),
                ]
              )
            ),
          ]
        ),
      ]
    ),
  ]);
};

export const generatePortfolioPDF = async (
  options: PDFGenerationOptions = {}
): Promise<Uint8Array> => {
  const doc = createPortfolioPDF(options);
  const asPdf = pdf(doc);

  // Convert the PDF stream to buffer
  const stream = await asPdf.toBlob();
  const arrayBuffer = await stream.arrayBuffer();

  return new Uint8Array(arrayBuffer);
};
