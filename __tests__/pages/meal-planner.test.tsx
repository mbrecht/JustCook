import Meal from '../../src/core/entities/Meal';
import MealPlanner from '../../src/pages/meal-planner';
import {render, waitFor} from '@testing-library/react';
import React from 'react';

const meals: Meal[] = [
  {
    title: 'test',
    thumbnail: 'http://test.img.com',
    url: 'http://test.site.com',
    category: [],
  },
];

function setupFetchStub(data) {
  return function fetchStub(_url) {
    return new Promise(resolve => {
      resolve({
        json: () => Promise.resolve(data),
      });
    });
  };
}

(global as any).fetch = setupFetchStub(meals);

describe('MealPlanner', () => {
  let dom;

  beforeEach(() => {
    dom = render(<MealPlanner />);
  });
  it('should display 7 default meals before load', () => {
    const cards = dom.container.querySelectorAll('.meal-card');
    expect(cards.length).toBe(7);
  });

  it('should display fetched meals after load', async () => {
    waitFor(() => {
      const cards = dom.container.querySelectorAll('.meal-card');
      expect(cards.length).toBe(1);
    });
  });
});
