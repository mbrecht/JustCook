import defaultHandler from '../../api/defaultHandler';
import GET from '../../api/meals/get';
import {NextApiRequest, NextApiResponse} from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const handlers = {
    GET,
    default: defaultHandler,
  };

  const callback = handlers[req.method] || handlers.default;

  return callback(req, res);
}
