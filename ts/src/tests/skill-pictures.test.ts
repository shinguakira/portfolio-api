import {describe, it, expect} from 'vitest';
import {existsSync} from 'fs';
import {join} from 'path';
import {skills, otherSkills} from '../constants/skill';

const publicDir = join(__dirname, '../../public');

describe('Skill picture files should exist', () => {
  skills.forEach(skill => {
    it(`picture "${skill.picture}" for skill "${skill.name}" should exist`, () => {
      const filePath = join(publicDir, skill.picture);
      expect(existsSync(filePath), `Missing file: ${filePath}`).toBe(true);
    });
  });

  otherSkills.forEach(skill => {
    it(`picture "${skill.picture}" for otherSkill "${skill.name}" should exist`, () => {
      const filePath = join(publicDir, skill.picture);
      expect(existsSync(filePath), `Missing file: ${filePath}`).toBe(true);
    });
  });
});
