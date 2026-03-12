import {describe, it, expect} from 'vitest';
import request from 'supertest';
import app from '../index.js';
import {
  notifications_ja,
  notifications_en,
} from './testData/expected-json/notifications.js';

describe('GET /api/notifications', () => {
  it('should respond with a 200 status code and the Japanese notifications data by default', async () => {
    const response = await request(app).get('/api/notifications');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe(
      'Notifications data fetched successfully'
    );
    expect(response.body.data).toEqual(notifications_ja);
  });

  it('should respond with a 200 status code and the English notifications data when lang=en', async () => {
    const response = await request(app).get('/api/notifications?lang=en');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe(
      'Notifications data fetched successfully'
    );
    expect(response.body.data).toEqual(notifications_en);
  });
});
