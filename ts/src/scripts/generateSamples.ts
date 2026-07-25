import {writeFile, mkdir} from 'fs/promises';
import {generatePortfolioPDF} from '../services/pdfService.js';

const OUTPUT_DIR = 'E:/tmp';

async function main() {
  await mkdir(OUTPUT_DIR, {recursive: true});
  console.log('Generating sample files to', OUTPUT_DIR);

  const buf = await generatePortfolioPDF({
    lang: 'en',
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
