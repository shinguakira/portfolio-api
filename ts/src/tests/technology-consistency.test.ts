import {describe, it, expect} from 'vitest';
import {skills, otherSkills} from '../constants/skill.js';
import {projects} from '../constants/project.js';
import {
  workExperiences_ja,
  workExperiences_en,
} from '../constants/workExperience.js';

const allSkillNames = [
  ...skills.map((s) => s.name),
  ...otherSkills.map((s) => s.name),
];

// Techs used in projects/experiences that are intentionally not tracked in skills/otherSkills
// NOTE: Do NOT add to this list unless explicitly instructed by the user.
const excludedTechs = new Set([
  // Category 2: projects
  'Appwrite',
  'Dwolla',
  'OpenAI API',
  'Google Map API',
  'Google Text-to-Speech API',
  'Youtube Data API',
  '@ai-sdk/react',
  'AstraDB(Apache Cassandra)',
  'Styled Components',
  'tRPC',
  'DB(未定)',
  'Prisma(or Drizzle)',
  // Category 3: experiences
  'Angular',
  'FastAPI',
  'Kubernetes',
  'Figma',
  'Slack',
  'CodeRabbit',
  'Metabase',
  'Oracle Cloud',
  'Modbus',
  'Omron製PLC',
  'Windows Form',
  'HDB',
  'PDB',
  'Visual Studio 2010,2015,2019',
  'Visual Studio2017',
  '(Ruby)',
  'マイナンバー',
  'AzureFunctions',
]);

describe('Project technologies should reference existing skills', () => {
  projects.forEach((project, index) => {
    const title = project.en.title || project.ja.title;
    project.technologies
      .filter((t) => !excludedTechs.has(t))
      .forEach((tech) => {
        it(`"${tech}" in project "${title}" (index ${index}) should exist in skills`, () => {
          expect(
            allSkillNames,
            `Technology "${tech}" used in project "${title}" is not defined in skills or otherSkills`
          ).toContain(tech);
        });
      });
  });
});

describe('Work experience (JA) technologies should reference existing skills', () => {
  workExperiences_ja.forEach((exp, index) => {
    if (exp.technologies.length === 0) return;
    const label = `${exp.company} - ${exp.projectOverview}`;
    exp.technologies
      .filter((t) => !excludedTechs.has(t))
      .forEach((tech) => {
        it(`"${tech}" in experience "${label}" (index ${index}) should exist in skills`, () => {
          expect(
            allSkillNames,
            `Technology "${tech}" used in experience "${label}" is not defined in skills or otherSkills`
          ).toContain(tech);
        });
      });
  });
});

describe('Work experience (EN) technologies should reference existing skills', () => {
  workExperiences_en.forEach((exp, index) => {
    if (exp.technologies.length === 0) return;
    const label = `${exp.company} - ${exp.projectOverview}`;
    exp.technologies
      .filter((t) => !excludedTechs.has(t))
      .forEach((tech) => {
        it(`"${tech}" in experience "${label}" (index ${index}) should exist in skills`, () => {
          expect(
            allSkillNames,
            `Technology "${tech}" used in experience "${label}" is not defined in skills or otherSkills`
          ).toContain(tech);
        });
      });
  });
});
