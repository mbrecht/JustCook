import generateMeals from '../../../core/useCases/generateMeals';
import {meals, template} from './__mocks__.json';

export default async function get(req, res) {
  res.send(generateMeals({meals, template}));
}
