import {describe, it, expect} from 'vitest';
import {existsSync, readdirSync} from 'fs';
import {join} from 'path';
import {skills, otherSkills} from '../constants/skill.js';

const publicDir = join(__dirname, '../../public');
const iconsDir = join(publicDir, 'icons');

describe('Skill picture files should exist', () => {
  skills
    .filter((s) => s.picture)
    .forEach((skill) => {
      it(`picture "${skill.picture}" for skill "${skill.name}" should exist`, () => {
        const filePath = join(publicDir, skill.picture!);
        expect(existsSync(filePath), `Missing file: ${filePath}`).toBe(true);
      });
    });

  otherSkills
    .filter((s) => s.picture)
    .forEach((skill) => {
      it(`picture "${skill.picture}" for otherSkill "${skill.name}" should exist`, () => {
        const filePath = join(publicDir, skill.picture!);
        expect(existsSync(filePath), `Missing file: ${filePath}`).toBe(true);
      });
    });
});

describe('Icon files in ts/public/icons should be referenced by a skill', () => {
  const referencedFiles = new Set(
    [...skills, ...otherSkills]
      .filter((s) => s.picture)
      .map((s) => s.picture!.replace(/^\/icons\//, ''))
  );
  const iconFiles = readdirSync(iconsDir);

  iconFiles.forEach((file) => {
    it(`"${file}" should be referenced by a skill`, () => {
      expect(
        referencedFiles.has(file),
        `Unreferenced icon file: ts/public/icons/${file}`
      ).toBe(true);
    });
  });
});
