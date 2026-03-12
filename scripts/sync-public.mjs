#!/usr/bin/env node
// Sync images between root public/images/ and ts/public/images/
// Root public/images/ is the source of truth (used by Vercel production)
// ts/public/images/ is used for local dev via express.static('public')
//
// Usage: node scripts/sync-public.mjs [--dry-run] [--reverse]

import { readdirSync, statSync, copyFileSync, unlinkSync, mkdirSync, rmdirSync, readFileSync } from 'fs';
import { join, relative, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const reverse = args.includes('--reverse');

const source = reverse
  ? join(rootDir, 'ts/public/images')
  : join(rootDir, 'public/images');
const target = reverse
  ? join(rootDir, 'public/images')
  : join(rootDir, 'ts/public/images');

console.log(`Syncing images: ${source} -> ${target}`);

let changes = 0;

function getAllFiles(dir, base = dir) {
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getAllFiles(full, base));
    } else {
      files.push(relative(base, full));
    }
  }
  return files;
}

function filesEqual(a, b) {
  try {
    return Buffer.compare(readFileSync(a), readFileSync(b)) === 0;
  } catch {
    return false;
  }
}

// Copy new/updated files
for (const rel of getAllFiles(source)) {
  const src = join(source, rel);
  const dst = join(target, rel);

  try {
    statSync(dst);
    if (!filesEqual(src, dst)) {
      console.log(`  [UPDATE] ${rel}`);
      if (!dryRun) copyFileSync(src, dst);
      changes++;
    }
  } catch {
    console.log(`  [NEW] ${rel}`);
    if (!dryRun) {
      mkdirSync(dirname(dst), { recursive: true });
      copyFileSync(src, dst);
    }
    changes++;
  }
}

// Delete files in target that don't exist in source
const sourceFiles = new Set(getAllFiles(source));
for (const rel of getAllFiles(target)) {
  if (!sourceFiles.has(rel)) {
    console.log(`  [DELETE] ${rel}`);
    if (!dryRun) unlinkSync(join(target, rel));
    changes++;
  }
}

// Remove empty directories
if (!dryRun) {
  function removeEmptyDirs(dir) {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) removeEmptyDirs(join(dir, entry.name));
    }
    try {
      if (readdirSync(dir).length === 0) rmdirSync(dir);
    } catch { /* ignore */ }
  }
  removeEmptyDirs(target);
}

if (changes === 0) {
  console.log('Already in sync.');
} else {
  console.log(`${changes} file(s) ${dryRun ? 'would be ' : ''}synced.`);
}
