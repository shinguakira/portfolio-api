import {describe, it, expect} from 'vitest';
import request from 'supertest';
import app from '../index.js';

describe('GET /api/articles', () => {
  it('should respond with a 200 status code and articles data with totalCount', async () => {
    const response = await request(app).get('/api/articles');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Articles data fetched successfully');
    expect(response.body.data).toHaveProperty('totalCount');
    expect(typeof response.body.data.totalCount).toBe('number');
    expect(response.body.data.totalCount).toBeGreaterThan(0);
    expect(Array.isArray(response.body.data.articles)).toBe(true);
    expect(response.body.data.articles.length).toBe(
      response.body.data.totalCount
    );
  });

  it('should contain the oldest 3 known articles with correct titles', async () => {
    const response = await request(app).get('/api/articles');
    const articles = response.body.data.articles;

    const oldestArticles = [
      {
        id: '1d78bb49c98f6f092e8f',
        title: '資格取得履歴と各資格評価',
      },
      {
        id: 'bf2118670191ba8a3cb3',
        title: 'REACT DEVELOPER CERTIFIED LEVEL 1 取得しました',
      },
      {
        id: 'ec241ac26f7c086a90bf',
        title: 'ReactとSeleniumの相性が悪い気がするという話',
      },
    ];

    for (const expected of oldestArticles) {
      const found = articles.find(
        (a: {id: string}) => a.id === expected.id
      );
      expect(found).toBeDefined();
      expect(found.title).toBe(expected.title);
    }
  });

  it('should have correct fields for each article', async () => {
    const response = await request(app).get('/api/articles');
    const article = response.body.data.articles[0];

    expect(article).toHaveProperty('id');
    expect(article).toHaveProperty('title');
    expect(article).toHaveProperty('url');
    expect(article).toHaveProperty('created_at');
    expect(article).toHaveProperty('updated_at');
    expect(article).toHaveProperty('likes_count');
    expect(article).toHaveProperty('comments_count');
    expect(article).toHaveProperty('stocks_count');
    expect(article).toHaveProperty('reactions_count');
    expect(article).toHaveProperty('tags');
    expect(Array.isArray(article.tags)).toBe(true);
  });
});
