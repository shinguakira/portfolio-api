import {describe, it, expect} from 'vitest';
import request from 'supertest';
import app from '../index.js';
import {changelogs} from '../constants/changelog.js';

describe('GET /api/changelogs', () => {
  it('should respond with a 200 status code and the Japanese changelogs data by default', async () => {
    const response = await request(app).get('/api/changelogs');
    expect(response.status).toBe(200);
    const expectedChangelogs = changelogs.map((item) => ({
      version: item.version,
      date: item.date,
      changes: item.changes.map((change) => ({
        type: change.type,
        ja: change.ja,
        en: change.en,
      })),
    }));
    expect(response.body.message).toBe('Changelogs data fetched successfully');
    expect(response.body.data).toEqual(expectedChangelogs);
  });

  it('should respond with a 200 status code and the English changelogs data when lang=en', async () => {
    const response = await request(app).get('/api/changelogs?lang=en');
    expect(response.status).toBe(200);
    const expectedChangelogs = changelogs.map((item) => ({
      version: item.version,
      date: item.date,
      changes: item.changes.map((change) => ({
        type: change.type,
        ja: change.ja,
        en: change.en,
      })),
    }));
    expect(response.body.message).toBe('Changelogs data fetched successfully');
    expect(response.body.data).toEqual(expectedChangelogs);
  });
});
