import data from '../generate-meals/__mocks__.json';
import {NextApiResponse} from 'next';

export default function handler(_, res: NextApiResponse) {
  res.send(
    data.meals.map(meal => {
      return {
        category: meal.category[0],
        name: meal.title,
        thumbnail: meal.thumbnail,
      };
    }),
  );
}
