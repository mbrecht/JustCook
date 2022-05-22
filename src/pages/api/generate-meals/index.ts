import get from './get';
import {NextApiRequest, NextApiResponse} from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  switch (req.method) {
    case 'GET':
      await get(req, res);
      break;
    default:
      res.statusMessage = 'Method not supported';
      res.status(405).end();
      break;
  }
}
