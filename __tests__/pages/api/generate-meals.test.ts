import handler from '../../../src/pages/api/generate-meals';
import type {NextApiRequest, NextApiResponse} from 'next';
import {RequestMethod, createMocks} from 'node-mocks-http';

function mockRequestResponse(method: RequestMethod = 'GET') {
  const {req, res}: {req: NextApiRequest; res: NextApiResponse} = createMocks({
    method,
  });

  req.headers = {
    'Content-Type': 'application/json',
  };

  return {req, res};
}

describe('/api/generate-meals default behavior', () => {
  it('should return a successful request', async () => {
    const {req, res} = mockRequestResponse();
    await handler(req, res);
    expect(res.statusCode).toBe(200);
  });
  it('should return 7 meals', async () => {
    const {req, res} = mockRequestResponse();
    await handler(req, res);
    expect(res._getData().length).toBe(7);
  });

  it('should throw a 405 if using a bad endpoint', async () => {
    const {req, res} = mockRequestResponse('POST');
    await handler(req, res);
    expect(res.statusCode).toBe(405);
    expect(res.statusMessage).toBe('Method not supported');
  });
});
