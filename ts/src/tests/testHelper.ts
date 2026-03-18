import app from '../index';

export async function GET(path: string) {
  const response = await app.handle(new Request(`http://localhost${path}`));
  const status = response.status;
  const body = await response.json();
  return {status, body};
}
