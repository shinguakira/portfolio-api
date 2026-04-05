import {describe, it, expect} from 'vitest';
import {generatePortfolioPDF} from '../services/pdfService.js';

describe('generatePortfolioPDF', () => {
  it('returns a non-empty Uint8Array', async () => {
    const result = await generatePortfolioPDF();
    expect(result).toBeInstanceOf(Uint8Array);
    expect(result.length).toBeGreaterThan(0);
  });

  it('starts with PDF magic bytes %PDF-', async () => {
    const result = await generatePortfolioPDF();
    const header = String.fromCharCode(...result.slice(0, 5));
    expect(header).toBe('%PDF-');
  });

  it('generates for lang=en', async () => {
    const result = await generatePortfolioPDF({lang: 'en'});
    expect(result).toBeInstanceOf(Uint8Array);
    expect(result.length).toBeGreaterThan(0);
  });

  it('generates for lang=ja', async () => {
    const result = await generatePortfolioPDF({lang: 'ja'});
    expect(result).toBeInstanceOf(Uint8Array);
    expect(result.length).toBeGreaterThan(0);
  });

  it('generates with all sections disabled', async () => {
    const result = await generatePortfolioPDF({
      lang: 'en',
      includeProjects: false,
      includeExperience: false,
      includeCertifications: false,
      includeEducation: false,
    });
    expect(result).toBeInstanceOf(Uint8Array);
    expect(result.length).toBeGreaterThan(0);
  });

  it('EN output is larger than a minimal threshold (has real content)', async () => {
    const result = await generatePortfolioPDF({lang: 'en'});
    // A meaningful multi-page PDF should be well over 10KB
    expect(result.length).toBeGreaterThan(10_000);
  });
});
