import {writeFile, mkdir} from 'fs/promises';
import {generatePortfolioPDF} from '../services/pdfService.js';
import {generatePortfolioExcel} from '../services/excelService.js';

const OUTPUT_DIR = 'E:/tmp';

async function main() {
  await mkdir(OUTPUT_DIR, {recursive: true});
  console.log('Generating sample files to', OUTPUT_DIR);

  const pdfFormats = [
    'standard',
    'compact',
    'executive',
    'technical',
    'academic',
    'modern',
    'timeline',
  ] as const;

  const buf = await generatePortfolioPDF({
    lang: 'en',
    format: 'standard',
    includeProjects: true,
    includeExperience: true,
    includeCertifications: true,
    includeEducation: true,
  });
  await writeFile(`${OUTPUT_DIR}/portfolio_standard_en.pdf`, buf);
  console.log('  Written:', `${OUTPUT_DIR}/portfolio_standard_en.pdf`);

  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
