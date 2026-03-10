import {describe, it, expect} from 'vitest';
import request from 'supertest';
import app from '../index.js';
import {faqs_ja, faqs_en} from './testData/expected-json/faqs.js';

describe('GET /api/faqs', () => {
  it('should respond with a 200 status code and the Japanese FAQs data by default', async () => {
    const response = await request(app).get('/api/faqs');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('FAQs data fetched successfully');
    expect(response.body.data).toEqual(faqs_ja);
  });

  it('should respond with a 200 status code and the English FAQs data when lang=en', async () => {
    const response = await request(app).get('/api/faqs?lang=en');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('FAQs data fetched successfully');
    expect(response.body.data).toEqual(faqs_en);
  });
});
