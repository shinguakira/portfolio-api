import {describe, it, expect} from 'vitest';
import {readdirSync, readFileSync, statSync} from 'fs';
import {join, relative} from 'path';

const rootDir = join(__dirname, '../../..');
const sourceDir = join(rootDir, 'public/images');
const targetDir = join(rootDir, 'ts/public/images');

function getAllFiles(dir: string, base = dir): string[] {
  const files: string[] = [];
  for (const entry of readdirSync(dir, {withFileTypes: true})) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getAllFiles(full, base));
    } else {
      files.push(relative(base, full));
    }
  }
  return files;
}

describe('public/images and ts/public/images should be in sync', () => {
  const sourceFiles = getAllFiles(sourceDir);
  const targetFiles = new Set(getAllFiles(targetDir));

  sourceFiles.forEach(rel => {
    it(`"${rel}" from public/images should exist in ts/public/images`, () => {
      expect(targetFiles.has(rel), `Missing in ts/public/images: ${rel}`).toBe(true);
    });

    it(`"${rel}" should have identical content in both directories`, () => {
      const src = readFileSync(join(sourceDir, rel));
      const dst = readFileSync(join(targetDir, rel));
      expect(Buffer.compare(src, dst), `Content mismatch: ${rel}`).toBe(0);
    });
  });

  const sourceSet = new Set(sourceFiles);
  getAllFiles(targetDir).forEach(rel => {
    it(`"${rel}" in ts/public/images should also exist in public/images`, () => {
      expect(sourceSet.has(rel), `Extra file in ts/public/images not in source: ${rel}`).toBe(true);
    });
  });
});
