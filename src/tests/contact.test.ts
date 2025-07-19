import {describe, it, expect} from 'vitest';
import request from 'supertest';
import app from '../index.js';
import {contact} from '../constants/contact.js';

describe('GET /api/contact', () => {
  it('should respond with a 200 status code and the contact data', async () => {
    const response = await request(app).get('/api/contact');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Contact data fetched successfully');
    expect(response.body.data).toEqual(contact);
  });
});
