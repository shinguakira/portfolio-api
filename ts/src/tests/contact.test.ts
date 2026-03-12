import {describe, it, expect} from 'vitest';
import {GET} from './testHelper.js';
import {contact} from './testData/expected-json/contact.js';

describe('GET /api/contact', () => {
  it('should respond with a 200 status code and the contact data', async () => {
    const {status, body} = await GET('/api/contact');
    expect(status).toBe(200);
    expect(body.message).toBe('Contact data fetched successfully');
    expect(body.data).toEqual(contact);
  });
});
