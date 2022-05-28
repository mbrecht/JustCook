import {NextApiResponse} from 'next';

export default function defaultHandler(_, res: NextApiResponse) {
  res.statusMessage = 'Method not supported';
  res.status(405).end();
}
