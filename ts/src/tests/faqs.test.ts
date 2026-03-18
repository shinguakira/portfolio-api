import {describe, it, expect} from 'vitest';
import {GET} from './testHelper';
import {faqs_ja, faqs_en} from './testData/expected-json/faqs';

describe('GET /api/faqs', () => {
  it('should respond with a 200 status code and the Japanese FAQs data by default', async () => {
    const {status, body} = await GET('/api/faqs');
    expect(status).toBe(200);
    expect(body.message).toBe('FAQs data fetched successfully');
    expect(body.data).toEqual(faqs_ja);
  });

  it('should respond with a 200 status code and the English FAQs data when lang=en', async () => {
    const {status, body} = await GET('/api/faqs?lang=en');
    expect(status).toBe(200);
    expect(body.message).toBe('FAQs data fetched successfully');
    expect(body.data).toEqual(faqs_en);
  });
});
