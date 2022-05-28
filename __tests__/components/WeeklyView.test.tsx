import WeeklyView from '../../src/components/WeeklyView';
import Meal from '../../src/core/entities/Meal';
import {render, screen} from '@testing-library/react';

const meals: [Meal] = new Array(7).fill({title: '', category: ['']});

describe('weekly view', () => {
  beforeAll(() => {
    render(<WeeklyView data={meals} />);
  });

  it('should display 7 days', () => {
    const days = screen.findAllByRole('section');
    expect(days).toHaveLength(7);
  });

  it('should display a title for each day', () => {
    const titles = screen.findAllByRole('h1');
    expect(titles).toHaveLength(7);
  });

  it('should display a recipe card for each day', () => {
    const cards = screen.findAllByRole('div', {name: 'recipe-card'});
    expect(cards).toHaveLength(7);
  });
});
