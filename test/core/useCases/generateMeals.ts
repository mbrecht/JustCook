import Meal from '../../../src/core/entities/Meal';
import Template from '../../../src/core/entities/Template';
import generateMeals from '../../../src/core/useCases/generateMeals';

const spaghetti: Meal = {
  title: 'spaghetti',
  category: ['pasta'],
};

const burger: Meal = {
  title: 'burgers',
  category: ['grill'],
};

const meals: Array<Meal> = [spaghetti, burger];

// variables for template

const monday = ['pasta'];
const tuesday = ['grill'];

const template: Template = [monday, tuesday];

describe('generateMeals', () => {
  const generated = generateMeals({meals, template});

  it('should have spaghetti for the first day', () => {
    expect(generated[0]).toEqual(spaghetti);
  });
  it('should have burgers for the second day', () => {
    expect(generated[1]).toEqual(burger);
  });
});
