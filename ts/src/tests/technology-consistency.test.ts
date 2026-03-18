import {describe, it, expect} from 'vitest';
import {skills, otherSkills} from '../constants/skill';
import {projects} from '../constants/project';
import {
  workExperiences_ja,
  workExperiences_en,
} from '../constants/workExperience';

const allSkillNames = [
  ...skills.map(s => s.name),
  ...otherSkills.map(s => s.name),
];

describe('Project technologies should reference existing skills', () => {
  projects.forEach((project, index) => {
    const title = project.en.title || project.ja.title;
    project.technologies.forEach(tech => {
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
    exp.technologies.forEach(tech => {
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
    exp.technologies.forEach(tech => {
      it(`"${tech}" in experience "${label}" (index ${index}) should exist in skills`, () => {
        expect(
          allSkillNames,
          `Technology "${tech}" used in experience "${label}" is not defined in skills or otherSkills`
        ).toContain(tech);
      });
    });
  });
});
