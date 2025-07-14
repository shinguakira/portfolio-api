import {describe, it, expect} from 'vitest';
import request from 'supertest';
import app from '../index.js';
import {faqs} from '../constants/faq.js';

describe('GET /api/faqs', () => {
  it('should respond with a 200 status code and the Japanese FAQs data by default', async () => {
    const response = await request(app).get('/api/faqs');
    expect(response.status).toBe(200);
    const expectedFaqs = faqs.map((item) => ({
      size: item.size,
      category: item.category,
      ...item.ja,
    }));
    expect(response.body).toEqual(expectedFaqs);
  });

  it('should respond with a 200 status code and the English FAQs data when lang=en', async () => {
    const response = await request(app).get('/api/faqs?lang=en');
    expect(response.status).toBe(200);
    const expectedFaqs = faqs.map((item) => ({
      size: item.size,
      category: item.category,
      ...item.en,
    }));
    expect(response.body).toEqual(expectedFaqs);
  });
});
