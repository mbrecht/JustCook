import MealPlanner from '../../src/pages/meal-planner';
import {render} from '@testing-library/react';
import React from 'react';

describe('MealPlanner', () => {
  it('should exist', () => {
    render(<MealPlanner />);
  });
});
