#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoDir = path.resolve(scriptDir, '..');
const sourceDir = process.argv[2] || path.resolve(repoDir, '..', 'calc', 'data', 'calculators');
if (!fs.existsSync(sourceDir)) {
  console.error(`Calculator source directory not found: ${sourceDir}`);
  process.exit(1);
}

const records = fs.readdirSync(sourceDir)
  .filter(name => name.endsWith('.json'))
  .map(name => {
    const source = JSON.parse(fs.readFileSync(path.join(sourceDir, name), 'utf8'));
    const english = source.i18n?.en || {};
    return {
      slug: source.slug,
      category: source.category,
      title: english.title || source.slug,
      description: english.description || english.intro || '',
      url: `https://calcdelta.com/${source.slug}/`,
      inputs: (source.inputs || []).length
    };
  })
  .sort((a, b) => a.title.localeCompare(b.title, 'en'));

const output = path.join(repoDir, 'data', 'calculators.json');
fs.writeFileSync(output, `${JSON.stringify(records)}\n`);
console.log(`Updated ${records.length} calculator records in ${path.relative(repoDir, output)}`);
