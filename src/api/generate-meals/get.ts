import generateMeals from '../../core/useCases/generateMeals';
import mocks from './__mocks__.json';
import {NextApiRequest, NextApiResponse} from 'next';

export default async function get(req: NextApiRequest, res: NextApiResponse) {
  const {meals, template} = mocks;
  res.send(generateMeals({meals, template}));
}
