import {NextApiRequest, NextApiResponse} from 'next';

export default function defaultHandler(
  _: NextApiRequest,
  res: NextApiResponse,
) {
  res.statusMessage = 'Method not supported';
  res.status(405).end();
}
