import MealPlanner from '../../src/pages/meal-planner';
import {mount} from 'enzyme';
import React from 'react';

describe('MealPlanner', () => {
  const wrapper = mount(<MealPlanner />);
  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });
});
