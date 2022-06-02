import defaultHandler from '../../api/defaultHandler';
import GET from '../../api/meals/get';
import Cors from 'cors';
import {NextApiRequest, NextApiResponse} from 'next';

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, result => {
      if (result instanceof Error) {
        return reject(result);
      }

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

  await runMiddleware(req, res, cors);

  const callback = handlers[req.method] || handlers.default;

  return callback(req, res);
}
