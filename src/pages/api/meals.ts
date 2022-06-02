import defaultHandler from '../../api/defaultHandler';
import GET from '../../api/meals/get';
import Cors from 'cors';
import {NextApiRequest, NextApiResponse} from 'next';

const cors = Cors({
  methods: ['GET', 'HEAD'],
});

function applyMiddleware(req, res, cb) {
  return new Promise((resolve, reject) => {
    cb(req, res, result => {
      if (result instanceof Error) return reject(result);
      return resolve(result);
    });
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const handlers = {
    GET,
    default: defaultHandler,
  };

  await applyMiddleware(req, res, cors);

  const callback = handlers[req.method] || handlers.default;

  return callback(req, res);
}
