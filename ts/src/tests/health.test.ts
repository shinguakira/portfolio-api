import {describe, it, expect} from 'vitest';
import {GET} from './testHelper';

describe('GET /health', () => {
  it('should respond with a 200 status code and a status of OK', async () => {
    const {status, body} = await GET('/health');
    expect(status).toBe(200);
    expect(body.status).toBe('OK');
  });
});
