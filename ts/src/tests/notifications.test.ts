import {describe, it, expect} from 'vitest';
import {GET} from './testHelper.js';
import {
  notifications_ja,
  notifications_en,
} from './testData/expected-json/notifications.js';

describe('GET /api/notifications', () => {
  it('should respond with a 200 status code and the Japanese notifications data by default', async () => {
    const {status, body} = await GET('/api/notifications');
    expect(status).toBe(200);
    expect(body.message).toBe(
      'Notifications data fetched successfully'
    );
    expect(body.data).toEqual(notifications_ja);
  });

  it('should respond with a 200 status code and the English notifications data when lang=en', async () => {
    const {status, body} = await GET('/api/notifications?lang=en');
    expect(status).toBe(200);
    expect(body.message).toBe(
      'Notifications data fetched successfully'
    );
    expect(body.data).toEqual(notifications_en);
  });
});
