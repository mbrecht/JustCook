import Meal from '../../src/core/entities/Meal';
import useMealPlanner from '../../src/views/useMealPlanner';

const meals: Meal[] = [
  {
    title: 'test',
    thumbnail: 'http://test.img.com',
    url: 'http://test.site.com',
    category: [],
  },
];

global.fetch = jest.fn(() => ({
  json: () => Promise.resolve({body: meals}),
}));

describe('useMealPlanner', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('should return a meal variable', () => {
    const {meals} = useMealPlanner();
    expect(meals).toBeDefined();
  });

  it('should load fetched meals', () => {
    const {meals} = useMealPlanner();
    expect(meals.length).toBe(1);
  });
});
