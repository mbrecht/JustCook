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

  it('should filter by category', () => {
    expect(generated[0]).toEqual(spaghetti);
    expect(generated[1]).toEqual(burger);
  });

  it('should return meals equal to template length', () => {
    expect(generated.length).toBe(template.length);
  });
});
