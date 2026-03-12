import {describe, it, expect} from 'vitest';
import {GET} from './testHelper.js';
import {links} from '../constants/links.js';

describe('GET /api/links', () => {
  it('should respond with a 200 status code and the links data', async () => {
    const {status, body} = await GET('/api/links');
    expect(status).toBe(200);
    expect(body.message).toBe('Links data fetched successfully');
    expect(body.data).toEqual(links);
  });
});
