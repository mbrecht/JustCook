import generateMeals from '../../core/useCases/generateMeals';
import mocks from './__mocks__.json';
import {NextApiResponse} from 'next';

export default async function get(_, res: NextApiResponse) {
  const {meals, template} = mocks;
  res.send(generateMeals({meals, template}));
}
