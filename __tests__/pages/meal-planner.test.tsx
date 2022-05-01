import MealPlanner from '../../src/pages/meal-planner';
import {shallow} from 'enzyme';
import React from 'react';

describe('MealPlanner', () => {
  it('should exist', () => {
    const wrapper = shallow(<MealPlanner />);
    expect(wrapper).toBeDefined();
  });
});
