import MealPlanner from '../../src/pages/meal-planner';
import {shallow} from 'enzyme';
import React from 'react';

describe('MealPlanner', () => {
  const wrapper = shallow(<MealPlanner />);
  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });
});
