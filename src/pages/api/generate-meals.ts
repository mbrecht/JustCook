import defaultHandler from '../../api/defaultHandler';
import GET from '../../api/generate-meals/get';
import {NextApiRequest, NextApiResponse} from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const handlers = {
    GET,
    default: defaultHandler,
  };

  const handler = handlers[req.method] || handlers.default;

  return handler(req, res);
}
